import { Injectable } from '@angular/core';

import 'rxjs/Rx';

import { HttpService } from '../api/http.service';

import { com } from '../protos/compiled.js'

@Injectable()
export class AttractionService {

    constructor(
        private httpService: HttpService,
    ) { }

    create(request: com.unblock.proto.CreateAttractionRequest) {
        return this.httpService.post(
            'attraction',
            request.toJSON()
        ).then(value => com.unblock.proto.Attraction.create(value));
    }

    createAdmin(request: com.unblock.proto.CreateAdminAttractionRequest) {
        return this.httpService.post(
            'adminattraction',
            request.toJSON()
        ).then(value => com.unblock.proto.Attraction.create(value));
    }

    get(id: string) {
        return this.httpService.get(
            `adminattraction/${id}`
        ).then(value => com.unblock.proto.AdminAttraction.create(value));
    }

    list() {
        return this.httpService.get(
            'adminattractions'
        ).then(value => com.unblock.proto.ListAdminAttractionsResponse.create(value).adminAttractions);
    }

    updateInfo(request: com.unblock.proto.UpdateAttractionInfoRequest) {
        return this.httpService.patch(
            'attraction:info',
            request.toJSON()
        ).then(value => com.unblock.proto.Attraction.create(value));
    }

    updateStatus(request: com.unblock.proto.UpdateAttractionStatusRequest) {
        return this.httpService.patch(
            'attraction:status',
            request.toJSON()
        ).then(value => com.unblock.proto.Attraction.create(value));
    }

    updateBounds(request: com.unblock.proto.UpdateAttractionLocationRequest) {
        return this.httpService.patch(
            'attraction:location',
            request.toJSON()
        ).then(value => com.unblock.proto.Attraction.create(value));
    }

    assignToBlock(request: com.unblock.proto.AssignAttractionToBlockRequest) {
        return this.httpService.patch(
            'attraction:assign',
            request.toJSON()
        ).then(value => com.unblock.proto.Attraction.create(value));
    }
}