import { Injectable } from '@angular/core';

import 'rxjs/Rx';

import { HttpService } from '../api/http.service';

import { com } from '../protos/compiled.js'

@Injectable()
export class CityService {

    constructor(
        private httpService: HttpService,
    ) { }

    create(request: com.unblock.proto.CreateCityRequest) {
        return this.httpService.post(
            'city',
            request.toJSON()
        ).then(value => com.unblock.proto.City.create(value));
    }

    get(id: string) {
        return this.httpService.get(
            `city/${id}`
        ).then(value => com.unblock.proto.City.create(value));
    }

    list() {
        return this.httpService.get(
            'cities'
        ).then(value => com.unblock.proto.ListCitiesResponse.create(value).cities);
    }

    updateInfo(request: com.unblock.proto.UpdateCityInfoRequest) {
        return this.httpService.patch(
            'city:info',
            request.toJSON()
        ).then(value => com.unblock.proto.City.create(value));
    }

    updateStatus(request: com.unblock.proto.UpdateCityStatusRequest) {
        return this.httpService.patch(
            'city:status',
            request.toJSON()
        ).then(value => com.unblock.proto.City.create(value));
    }

    updateCenter(request: com.unblock.proto.UpdateCityCenterRequest) {
        return this.httpService.patch(
            'city:center',
            request.toJSON()
        ).then(value => com.unblock.proto.City.create(value));
    }

    updateBounds(request: com.unblock.proto.UpdateCityBoundsRequest) {
        return this.httpService.patch(
            'city:bounds',
            request.toJSON()
        ).then(value => com.unblock.proto.City.create(value));
    }
}