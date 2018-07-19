import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import 'rxjs/add/operator/do';

import { CookieService } from 'ngx-cookie-service';
import { LoginService } from '../api/login.service';
import { UserService } from '../api/user.service';

import { AuthConstants } from './auth.const';

import { com } from '../protos/compiled.js'

// TODO: Figure out how to handle enum values without redefining them here
const ADMIN = 'ADMIN';

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
                const user = com.unblock.proto.User.create(resp.body);
                console.log(user.level);
                console.log(user.level.toString());
                console.log(com.unblock.proto.Level.ADMIN.toString());
                console.log(com.unblock.proto.Level.ADMIN);
                if (user.level.toString() === ADMIN) {
                    this.cookieService.set(AuthConstants.COOKIE_TOKEN, resp.headers.get(AuthConstants.HEADER_TOKEN));
                } else {
                    throw Error('User is not an admin');
                }
            });
    }
}