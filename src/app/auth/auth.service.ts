import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import 'rxjs/add/operator/do';

import { CookieService } from 'ngx-cookie-service';
import { LoginService } from '../api/login.service';
import { UserService } from '../api/user.service';

import { AuthConstants } from './auth.const';

import { com } from '../protos/compiled.js'

@Injectable()
export class AuthService {
    constructor(
        private cookieService: CookieService,
        private loginService: LoginService,
        private userService: UserService
    ) { }

    getToken() {
        return this.cookieService.get(AuthConstants.COOKIE_TOKEN);
    }

    isLoggedIn() {
        return this.cookieService.check(AuthConstants.COOKIE_TOKEN);
    }

    logout() {
        console.log(this.cookieService.get(AuthConstants.COOKIE_TOKEN))
        this.cookieService.delete(AuthConstants.COOKIE_TOKEN);
    }

    login(usernameOrEmail: string, password: string) {
        return this.loginService.login(
            new com.unblock.proto.LoginRequest({ usernameOrEmail, password }))
            .then(resp => {
                this.userService.getSelf(resp.headers.get(AuthConstants.HEADER_TOKEN)).then(
                    user => {
                        if (user.level === com.unblock.proto.Level.ADMIN) {
                            this.cookieService.set(AuthConstants.COOKIE_TOKEN, resp.headers.get(AuthConstants.HEADER_TOKEN));
                        } else {
                            throw Error('User is not an admin');
                        }
                    }
                )
            });
    }
}