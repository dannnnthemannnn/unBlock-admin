import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import 'rxjs/add/operator/do';

import { CookieService } from 'ngx-cookie-service';
import { UnblockService } from '../api/unblock.service';

import { AuthConstants } from './auth.const';

import { com } from '../protos/compiled.js'

@Injectable()
export class AuthService {

    constructor(
        private cookieService: CookieService,
        private unblockService: UnblockService
    ) { }

    getToken() {
        return this.cookieService.get(AuthConstants.COOKIE_TOKEN);
    }

    isLoggedIn() {
        return this.cookieService.check(AuthConstants.COOKIE_TOKEN);
    }

    logout() {
        this.cookieService.delete(AuthConstants.COOKIE_TOKEN);
    }

    login(usernameOrEmail: string, password: string) {
        return this.unblockService.login(
            new com.unblock.proto.LoginRequest({ usernameOrEmail, password }))
            .do(resp => {
                console.log(resp.headers.get(AuthConstants.HEADER_TOKEN))
                this.cookieService.set(AuthConstants.COOKIE_TOKEN, resp.headers.get(AuthConstants.HEADER_TOKEN));
            });
    }
}