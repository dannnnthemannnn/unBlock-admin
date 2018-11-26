import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';

import 'rxjs/Rx';

import { AuthService } from '../auth/auth.service';

import { URL_ROOT } from './api.const';

import { com } from '../protos/compiled.js'

@Injectable()
export class HttpService {

    constructor(
        private http: HttpClient,
        private authService: AuthService,
    ) { }

    patch(pathSuffix: string, payload: any) {
        return this.authService.getAccessToken()
            .then(token => this.http.patch(
                this.path(pathSuffix),
                payload,
                this.getHeaders(token)
            ).toPromise());
    }

    post(pathSuffix: string, payload: any) {
        return this.authService.getAccessToken()
            .then(token => this.http.post(
                this.path(pathSuffix),
                payload,
                this.getHeaders(token)
            ).toPromise());
    }

    get(pathSuffix: string) {
        return this.authService.getAccessToken()
            .then(token => this.http.get(
                this.path(pathSuffix),
                this.getHeaders(token)
            ).toPromise());
    }

    private getHeaders(token: string) {
        return {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization': token,
            })
        };
    }

    private path(suffix: string) {
        return `${URL_ROOT}/${suffix}`;
    }
}