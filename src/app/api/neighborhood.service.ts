import { Injectable } from '@angular/core';

import 'rxjs/Rx';

import { HttpService } from '../api/http.service';

import { com } from '../protos/compiled.js'

@Injectable()
export class NeighborhoodService {

    constructor(
        private httpService: HttpService,
    ) { }

    create(request: com.unblock.proto.CreateNeighborhoodRequest) {
        return this.httpService.post(
            'neighborhood',
            request.toJSON()
        ).then(value => com.unblock.proto.Neighborhood.create(value));
    }

    get(id: string) {
        return this.httpService.get(
            `neighborhood/${id}`,
        ).then(value => com.unblock.proto.Neighborhood.create(value));
    }

    list() {
        return this.httpService.get(
            'neighborhoods'
        ).then(value => com.unblock.proto.ListNeighborhoodsResponse.create(value).neighborhoods);
    }

    updateInfo(request: com.unblock.proto.UpdateNeighborhoodInfoRequest) {
        return this.httpService.patch(
            'neighborhood:info',
            request.toJSON()
        ).then(value => com.unblock.proto.Neighborhood.create(value));
    }

    updateStatus(request: com.unblock.proto.UpdateNeighborhoodStatusRequest) {
        return this.httpService.patch(
            'neighborhood:status',
            request.toJSON()
        ).then(value => com.unblock.proto.Neighborhood.create(value));
    }

    updateBounds(request: com.unblock.proto.UpdateNeighborhoodBoundsRequest) {
        return this.httpService.patch(
            'neighborhood:bounds',
            request.toJSON()
        ).then(value => com.unblock.proto.Neighborhood.create(value));
    }

    assignToCity(request: com.unblock.proto.AssignNeighborhoodToCityRequest) {
        return this.httpService.patch(
            'neighborhood:assign',
            request.toJSON()
        ).then(value => com.unblock.proto.Neighborhood.create(value));
    }
}