import { Injectable } from '@angular/core';

import 'rxjs/Rx';

import { HttpService } from '../api/http.service';

import { com } from '../protos/compiled.js'

@Injectable()
export class BlockService {

    constructor(
        private httpService: HttpService,
    ) { }

    create(request: com.unblock.proto.CreateBlockRequest) {
        return this.httpService.post(
            'block',
            request.toJSON()
        ).then(value => com.unblock.proto.Block.create(value));
    }

    get(id: string) {
        return this.httpService.get(
            `block/${id}`
        ).then(value => com.unblock.proto.Block.create(value));
    }

    list() {
        return this.httpService.get(
            'blocks'
        ).then(value => com.unblock.proto.ListBlocksResponse.create(value).blocks);
    }

    updateInfo(request: com.unblock.proto.UpdateBlockInfoRequest) {
        return this.httpService.patch(
            'block:info',
            request.toJSON()
        ).then(value => com.unblock.proto.Block.create(value));
    }

    updateStatus(request: com.unblock.proto.UpdateBlockStatusRequest) {
        return this.httpService.patch(
            'block:status',
            request.toJSON()
        ).then(value => com.unblock.proto.Block.create(value));
    }

    updateBounds(request: com.unblock.proto.UpdateBlockBoundsRequest) {
        return this.httpService.patch(
            'block:bounds',
            request.toJSON()
        ).then(value => com.unblock.proto.Block.create(value));
    }

    assignToNeighborhood(request: com.unblock.proto.AssignBlockToNeighborhoodRequest) {
        return this.httpService.patch(
            'block:assign',
            request.toJSON()
        ).then(value => com.unblock.proto.Block.create(value));
    }
}