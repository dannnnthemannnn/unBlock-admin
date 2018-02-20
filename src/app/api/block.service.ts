import { Injectable } from '@angular/core';

import { CookieService } from 'ngx-cookie-service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import 'rxjs/Rx';

import { AuthConstants } from '../auth/auth.const';

import { URL_ROOT } from './api.const';

import { com } from '../protos/compiled.js'

@Injectable()
export class BlockService {

    constructor(
        private http: HttpClient,
        private cookieService: CookieService,
    ) { }

    create(request: com.unblock.proto.CreateBlockRequest) {
        return this.http.post(
            this.path('block'),
            request.toJSON(),
            this.getHeaders()
        ).map(value => com.unblock.proto.Block.create(value)).toPromise();
    }

    get(id: string) {
        return this.http.get(
            this.path(`block/${id}`),
            this.getHeaders()
        ).map(value => com.unblock.proto.Block.create(value)).toPromise();
    }

    list() {
        return this.http.get(
            this.path(`blocks`),
            this.getHeaders()
        ).map(value => com.unblock.proto.ListBlocksResponse.create(value).blocks).toPromise();
    }

    updateInfo(request: com.unblock.proto.UpdateBlockInfoRequest) {
        return this.http.patch(
            this.path('block:info'),
            request.toJSON(),
            this.getHeaders()
        ).map(value => com.unblock.proto.Block.create(value)).toPromise();
    }

    updateStatus(request: com.unblock.proto.UpdateBlockStatusRequest) {
        return this.http.patch(
            this.path('block:status'),
            request.toJSON(),
            this.getHeaders()
        ).map(value => com.unblock.proto.Block.create(value)).toPromise();
    }

    updateBounds(request: com.unblock.proto.UpdateBlockBoundsRequest) {
        return this.http.patch(
            this.path('block:bounds'),
            request.toJSON(),
            this.getHeaders()
        ).map(value => com.unblock.proto.Block.create(value)).toPromise();
    }

    assignToNeighborhood(request: com.unblock.proto.AssignBlockToNeighborhoodRequest) {
        return this.http.patch(
            this.path('block:assign'),
            request.toJSON(),
            this.getHeaders()
        ).map(value => com.unblock.proto.Block.create(value)).toPromise();
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