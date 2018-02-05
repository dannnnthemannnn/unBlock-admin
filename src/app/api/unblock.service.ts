import { Injectable } from '@angular/core';

import { CookieService } from 'ngx-cookie-service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import 'rxjs/Rx';

import { AuthConstants } from '../auth/auth.const';

import { com } from '../protos/compiled.js'

const URL_ROOT = 'http://localhost:8080/v1';
const RESOURCE_PREFIX = 'static';
const IMAGE_PREFIX = 'images';

@Injectable()
export class UnblockService {

    constructor(
        private http: HttpClient,
        private cookieService: CookieService,
    ) { }

    get imageResourcePrefix() {
        return `${this.resourcePrefix}/${IMAGE_PREFIX}`
    }

    get resourcePrefix() {
        return `${URL_ROOT}/${RESOURCE_PREFIX}`;
    }

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

    getNeighborhood(id: string) {
        return this.http.get<com.unblock.proto.Neighborhood>(
            this.path(`neighborhood/${id}`),
            this.getHeaders()
        ).map(value => com.unblock.proto.Neighborhood.create(value)).toPromise();
    }

    createNeighborhood(request: com.unblock.proto.CreateNeighborhoodRequest) {
        return this.http.post(
            this.path('neighborhood'),
            request.toJSON(),
            this.getHeaders()
        ).map(value => com.unblock.proto.Neighborhood.create(value)).toPromise();
    }

    listNeighborhoods() {
        return this.http.get(
            this.path('neighborhoods'),
            this.getHeaders()
        ).map(value => com.unblock.proto.ListNeighborhoodsResponse.create(value)).toPromise();
    }

    createBlock(request: com.unblock.proto.CreateBlockRequest) {
        return this.http.post(
            this.path('block'),
            request.toJSON(),
            this.getHeaders()
        ).map(value => com.unblock.proto.Block.create(value)).toPromise();
    }

    updateBlockBounds(request: com.unblock.proto.UpdateBlockBoundsRequest) {
        return this.http.post(
            this.path('block/bounds'),
            request.toJSON(),
            this.getHeaders()
        ).map(value => com.unblock.proto.Block.create(value)).toPromise();
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