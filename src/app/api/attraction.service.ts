import { Injectable } from '@angular/core';

import { CookieService } from 'ngx-cookie-service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import 'rxjs/Rx';

import { AuthConstants } from '../auth/auth.const';

import { URL_ROOT } from './api.const';

import { com } from '../protos/compiled.js'

@Injectable()
export class AttractionService {

    constructor(
        private http: HttpClient,
        private cookieService: CookieService,
    ) { }

    create(request: com.unblock.proto.CreateAttractionRequest) {
        return this.http.post(
            this.path('attraction'),
            request.toJSON(),
            this.getHeaders()
        ).map(value => com.unblock.proto.Attraction.create(value)).toPromise();
    }

    createAdmin(request: com.unblock.proto.CreateAdminAttractionRequest) {
        return this.http.post(
            this.path('adminattraction'),
            request.toJSON(),
            this.getHeaders()
        ).map(value => com.unblock.proto.AdminAttraction.create(value)).toPromise();
    }

    get(id: string) {
        return this.http.get(
            this.path(`adminattraction/${id}`),
            this.getHeaders()
        ).map(value => com.unblock.proto.AdminAttraction.create(value)).toPromise();
    }

    list() {
        return this.http.get(
            this.path(`adminattractions`),
            this.getHeaders()
        ).map(value => com.unblock.proto.ListAdminAttractionsResponse.create(value).adminAttractions).toPromise();
    }

    updateInfo(request: com.unblock.proto.UpdateAttractionInfoRequest) {
        return this.http.patch(
            this.path('attraction:info'),
            request.toJSON(),
            this.getHeaders()
        ).map(value => com.unblock.proto.Attraction.create(value)).toPromise();
    }

    updateStatus(request: com.unblock.proto.UpdateAttractionStatusRequest) {
        return this.http.patch(
            this.path('attraction:status'),
            request.toJSON(),
            this.getHeaders()
        ).map(value => com.unblock.proto.Attraction.create(value)).toPromise();
    }

    updateBounds(request: com.unblock.proto.UpdateAttractionLocationRequest) {
        return this.http.patch(
            this.path('attraction:location'),
            request.toJSON(),
            this.getHeaders()
        ).map(value => com.unblock.proto.Attraction.create(value)).toPromise();
    }

    assignToBlock(request: com.unblock.proto.AssignAttractionToBlockRequest) {
        return this.http.patch(
            this.path('attraction:assign'),
            request.toJSON(),
            this.getHeaders()
        ).map(value => com.unblock.proto.Attraction.create(value)).toPromise();
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