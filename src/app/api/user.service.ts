import { Injectable } from '@angular/core';

import 'rxjs/Rx';

import { HttpService } from '../api/http.service';

import { com } from '../protos/compiled.js'

@Injectable()
export class UserService {

    constructor(
        private httpService: HttpService,
    ) { }

    create(request: com.unblock.proto.CreateUserRequest) {
        return this.httpService.post(
            'user',
            request.toJSON()
        ).then(value => com.unblock.proto.User.create(value));
    }

    get(id: string) {
        return this.httpService.get(
            `user/${id}`,
        ).then(value => com.unblock.proto.User.create(value));
    }

    getSelf(token: string) {
        return this.httpService.get(
            'user'
        ).then(value => com.unblock.proto.User.create(value));
    }

    list() {
        return this.httpService.get(
            'users'
        ).then(value => com.unblock.proto.ListUsersResponse.create(value).users);
    }

    updateInfo(request: com.unblock.proto.UpdateUserInfoRequest) {
        return this.httpService.patch(
            'user:info',
            request.toJSON()
        ).then(value => com.unblock.proto.User.create(value));
    }

    updatePassword(request: com.unblock.proto.UpdateUserPasswordRequest) {
        return this.httpService.patch(
            'user:password',
            request.toJSON()
        ).then(value => com.unblock.proto.User.create(value));
    }
}