import { Injectable } from '@angular/core';

import { CookieService } from 'ngx-cookie-service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { AuthConstants } from '../auth/auth.const';

import { com } from '../protos/compiled.js'

const URL_ROOT = "http://localhost:8080";

@Injectable()
export class UnblockService {

    constructor(
        private http: HttpClient,
        private cookieService: CookieService,
    ) { }

    login(usernameOrEmail: string, password: string) {
        const message = new com.unblock.proto.LoginRequest({
            usernameOrEmail,
            password
        });

        return this.http.post(
            this.path('login'),
            message.toJSON(),
            {
                headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
                observe: 'response',
            }
        );
    }

    createNeighborhood(title) {
        const message = `{title: "${title}"}`;

        return this.http.post(
            this.path('neighborhood'),
            this.getHeaders()
        )
    }

    listNeighborhoods() {
        return this.http.get(
            this.path('neighborhoods'),
            this.getHeaders()
        );
    }

    private getHeaders() {
        return {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization': this.cookieService.get(AuthConstants.COOKIE_TOKEN),
            })
        };
    }

    private path(end: string) {
        return `${URL_ROOT}/${end}`;
    }
}