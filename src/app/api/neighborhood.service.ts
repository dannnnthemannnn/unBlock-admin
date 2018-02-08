import { Injectable } from '@angular/core';

import { CookieService } from 'ngx-cookie-service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import 'rxjs/Rx';

import { AuthConstants } from '../auth/auth.const';

import { URL_ROOT } from './api.const';

import { com } from '../protos/compiled.js'

@Injectable()
export class NeighborhoodService {

    constructor(
        private http: HttpClient,
        private cookieService: CookieService,
    ) { }

    create(request: com.unblock.proto.CreateNeighborhoodRequest) {
        return this.http.post(
            this.path('neighborhood'),
            request.toJSON(),
            this.getHeaders()
        ).map(value => com.unblock.proto.Neighborhood.create(value)).toPromise();
    }

    get(id: string) {
        return this.http.get(
            this.path(`neighborhood/${id}`),
            this.getHeaders()
        ).map(value => com.unblock.proto.Neighborhood.create(value)).toPromise();
    }

    list() {
        return this.http.get(
            this.path(`neighborhoods`),
            this.getHeaders()
        ).map(value => com.unblock.proto.ListNeighborhoodsResponse.create(value).neighborhoods).toPromise();
    }

    updateInfo(request: com.unblock.proto.UpdateNeighborhoodInfoRequest) {
        return this.http.patch(
            this.path('neighborhood:info'),
            request.toJSON(),
            this.getHeaders()
        ).map(value => com.unblock.proto.Neighborhood.create(value)).toPromise();
    }

    updateStatus(request: com.unblock.proto.UpdateNeighborhoodStatusRequest) {
        return this.http.patch(
            this.path('neighborhood:status'),
            request.toJSON(),
            this.getHeaders()
        ).map(value => com.unblock.proto.Neighborhood.create(value)).toPromise();
    }

    assignToCity(request: com.unblock.proto.AssignNeighborhoodToCityRequest) {
        return this.http.patch(
            this.path('neighborhood:assign'),
            request.toJSON(),
            this.getHeaders()
        ).map(value => com.unblock.proto.Neighborhood.create(value)).toPromise();
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