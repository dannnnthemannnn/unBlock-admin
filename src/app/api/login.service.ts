import { Injectable } from '@angular/core';

import { CookieService } from 'ngx-cookie-service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import 'rxjs/Rx';

import { AuthConstants } from '../auth/auth.const';

import { URL_ROOT } from './api.const';

import { com } from '../protos/compiled.js'

@Injectable()
export class LoginService {

    constructor(
        private http: HttpClient,
        private cookieService: CookieService,
    ) { }

    login(request: com.unblock.proto.LoginRequest) {
        return this.http.post(
            this.path('login'),
            request.toJSON(),
            {
                headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
                observe: 'response',
            }
        ).toPromise();
    }

    private getHeaders() {
        console.log('Cookie:' + this.cookieService.get(AuthConstants.COOKIE_TOKEN));
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