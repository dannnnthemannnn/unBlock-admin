import { Injectable } from '@angular/core';

import { CookieService } from 'ngx-cookie-service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import 'rxjs/Rx';

import { AuthConstants } from '../auth/auth.const';

import { URL_ROOT } from './api.const';

import { com } from '../protos/compiled.js'

@Injectable()
export class CityService {

    constructor(
        private http: HttpClient,
        private cookieService: CookieService,
    ) { }

    create(request: com.unblock.proto.CreateCityRequest) {
        return this.http.post(
            this.path('city'),
            request.toJSON(),
            this.getHeaders()
        ).map(value => com.unblock.proto.City.create(value)).toPromise();
    }

    get(id: string) {
        return this.http.get(
            this.path(`city/${id}`),
            this.getHeaders()
        ).map(value => com.unblock.proto.City.create(value)).toPromise();
    }

    list() {
        return this.http.get(
            this.path(`cities`),
            this.getHeaders()
        ).map(value => com.unblock.proto.ListCitiesResponse.create(value).cities).toPromise();
    }

    updateInfo(request: com.unblock.proto.UpdateCityInfoRequest) {
        return this.http.patch(
            this.path('city:info'),
            request.toJSON(),
            this.getHeaders()
        ).map(value => com.unblock.proto.City.create(value)).toPromise();
    }

    updateStatus(request: com.unblock.proto.UpdateCityStatusRequest) {
        return this.http.patch(
            this.path('city:status'),
            request.toJSON(),
            this.getHeaders()
        ).map(value => com.unblock.proto.City.create(value)).toPromise();
    }

    updateCenter(request: com.unblock.proto.UpdateCityCenterRequest) {
        return this.http.patch(
            this.path('city:center'),
            request.toJSON(),
            this.getHeaders()
        ).map(value => com.unblock.proto.City.create(value)).toPromise();
    }

    updateBounds(request: com.unblock.proto.UpdateCityBoundsRequest) {
        return this.http.patch(
            this.path('city:bounds'),
            request.toJSON(),
            this.getHeaders()
        ).map(value => com.unblock.proto.City.create(value)).toPromise();
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