import { Injectable } from '@angular/core';

import { CookieService } from 'ngx-cookie-service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import 'rxjs/Rx';

import { AuthConstants } from '../auth/auth.const';

import { URL_ROOT } from './api.const';

import { com } from '../protos/compiled.js'

@Injectable()
export class UserService {

    constructor(
        private http: HttpClient,
        private cookieService: CookieService,
    ) { }

    create(request: com.unblock.proto.CreateUserRequest) {
        return this.http.post(
            this.path('user'),
            request.toJSON(),
            this.getHeaders()
        ).toPromise();
    }

    get(id: string) {
        return this.http.get(
            this.path(`user/${id}`),
            this.getHeaders()
        ).map(value => com.unblock.proto.User.create(value)).toPromise();
    }

    list() {
        console.log('listing');
        return this.http.get(
            this.path(`users`),
            this.getHeaders()
        ).map(value => com.unblock.proto.ListUsersResponse.create(value).users).toPromise();
    }

    updateInfo(request: com.unblock.proto.UpdateUserInfoRequest) {
        return this.http.patch(
            this.path('user:info'),
            request.toJSON(),
            this.getHeaders()
        ).map(value => com.unblock.proto.User.create(value)).toPromise();
    }

    updatePassword(request: com.unblock.proto.UpdateUserPasswordRequest) {
        return this.http.patch(
            this.path('user:password'),
            request.toJSON(),
            this.getHeaders()
        ).map(value => com.unblock.proto.User.create(value)).toPromise();
    }

    private getHeaders() {
        return {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization': this.cookieService.get(AuthConstants.COOKIE_TOKEN),
            })
        };
    }

    private path(suffix: string) {
        return `${URL_ROOT}/${suffix}`;
    }
}