import { Injectable } from '@angular/core';

import { CookieService } from 'ngx-cookie-service';
import { HttpClient } from '@angular/common/http';

import { com } from '../protos/compiled.js'

const URL_ROOT = "LOGIN_TOKEN";

@Injectable()
export class UnblockService {

    constructor(private http: HttpClient, private cookieService: CookieService) { }

    login(usernameOrEmail: string, password: string) {
        const message = com.unblock.proto.LoginRequest.encode({
            usernameOrEmail,
            password
        });
        return this.http.post(this.path('login'), message, { observe: 'response' });
    }

    private path(end: string) {
        return `${URL_ROOT}/${end}`;
    }
}