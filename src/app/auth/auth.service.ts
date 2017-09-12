import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { CookieService } from 'ngx-cookie-service';
import { UnblockService } from '../api/unblock.service';

const COOKIE_TOKEN = "LOGIN_TOKEN";
const HEADER_TOKEN = "Authorization";

@Injectable()
export class AuthService {

    constructor(private cookieService: CookieService, private unblockService: UnblockService) { }

    isLoggedIn() {
        return this.cookieService.check(COOKIE_TOKEN);
    }

    login(usernameOrEmail: string, password: string) {
        return this.unblockService.login(usernameOrEmail, password).do(resp => {
            this.cookieService.set(COOKIE_TOKEN, resp.headers.get(HEADER_TOKEN));
        });
    }
}