import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';

import { Observable } from 'rxjs';
import { startWith } from 'rxjs/operators/startWith';
import { flatMap } from 'rxjs/operators';
import { map } from 'rxjs/operators/map';

import { UserService } from '../../api/user.service';
import { USER_ID_PARAM } from '../../app-routing.const';

import { com } from '../../protos/compiled.js'

// TODO: Figure out how to handle enum values without redefining them here
const ADMIN = 'ADMIN';

@Component({
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.css']
})
export class UserComponent {
    fullUserList: Promise<com.unblock.proto.IUser[]>;
    users: Observable<com.unblock.proto.IUser[]>;

    usernameSearchControl = new FormControl('');
    usernameControl = new FormControl('');
    emailControl = new FormControl('');
    passwordControl = new FormControl('');
    passwordConfirmControl = new FormControl('');
    adminControl = new FormControl('');

    user: com.unblock.proto.IUser | null = null;

    constructor(
        private readonly userService: UserService,
        private readonly router: Router,
        private readonly route: ActivatedRoute,
    ) {
        this.route.paramMap.subscribe(params => {
            if (params.has(USER_ID_PARAM)) {
                this.loadUser(params.get(USER_ID_PARAM));
            }
        })

        this.fullUserList = this.userService.list();
        this.users = this.usernameSearchControl.valueChanges.startWith('').flatMap(
            value => this.getUsernames(value)
        );
    }

    loadUser(userId: string) {
        this.userService.get(userId).then(user => {
            this.updateUserDetails(user);
        })
    }

    getUsernames(value: string): Promise<com.unblock.proto.IUser[]> {
        if (typeof value !== 'string') {
            return Promise.resolve([]);
        }
        return this.fullUserList.then(users => users.filter(user => user.username.toLowerCase().startsWith(value.toLowerCase())));
    }

    updateUserDetails(user: com.unblock.proto.IUser) {
        this.user = user;
        this.usernameControl.setValue(user.username);
        this.emailControl.setValue(user.email);
        this.adminControl.setValue(user.level.toString() === ADMIN)
    }

    navigate(paths: string[]) {
        this.router.navigate(['admin', 'users'].concat(paths));
    }

    displayUser(user: com.unblock.proto.IUser) {
        return user.username;
    }

    userSelected(user: com.unblock.proto.IUser) {
        this.navigate([user.id]);
    }

    onCreateMode() {
        this.navigate([]);
    }

    onCreateNew() {
        if (!this.passwordControl.value && this.passwordControl.value !== this.passwordConfirmControl.value) return;

        const level = this.adminControl.value ? com.unblock.proto.Level.ADMIN : com.unblock.proto.Level.DEFAULT;

        const userRequest = new com.unblock.proto.CreateUserRequest({
            info: {
                username: this.usernameControl.value,
                password: this.passwordControl.value,
                email: this.emailControl.value,
                level
            }
        });
        this.userService.create(userRequest).then(user => {
            this.userSelected(user);
        });
    }

    onSave() {
        const level = this.adminControl.value ? com.unblock.proto.Level.ADMIN : com.unblock.proto.Level.DEFAULT;
        const updateRequest = new com.unblock.proto.UpdateUserInfoRequest({
            id: this.user.id,
            info: {
                username: this.usernameControl.value,
                email: this.emailControl.value,
                level
            }
        });
        this.userService.updateInfo(updateRequest);
    }

    onChangePassword() {
        if (!this.passwordControl.value || this.passwordControl.value !== this.passwordConfirmControl.value) return;

        const passwordRequest = new com.unblock.proto.UpdateUserPasswordRequest({
            id: this.user.id,
            info: {
                password: this.passwordControl.value
            }
        });

        this.userService.updatePassword(passwordRequest);
    }
}
