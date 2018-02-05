import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

import { Observable } from 'rxjs';
import { startWith } from 'rxjs/operators/startWith';
import { flatMap } from 'rxjs/operators';
import { map } from 'rxjs/operators/map';

import { UserService } from '../../api/user.service';

import { com } from '../../protos/compiled.js'

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
    confirmPasswordControl = new FormControl('');

    user: com.unblock.proto.IUser | null = null;
    createMode = false;

    constructor(private readonly userService: UserService) {
        this.fullUserList = this.userService.list();
        this.users = this.usernameSearchControl.valueChanges.flatMap(
            value => this.getUsernames(value)
        );
    }

    getUsernames(value: string): Promise<com.unblock.proto.IUser[]> {
        if (typeof value !== 'string') {
            return Promise.resolve([]);
        }
        return this.fullUserList.then(users => users.filter(user => user.username.toLowerCase().startsWith(value.toLowerCase())));
    }

    userSelected(user: com.unblock.proto.IUser) {
        this.createMode = false;
        this.user = user;
        this.usernameControl.setValue(user.username);
        this.emailControl.setValue(user.email);
    }

    displayUser(user: com.unblock.proto.IUser) {
        return user.username;
    }

    onCreateMode() {
        this.createMode = true;
    }

    onCreateNew() {
        if (this.passwordControl.value && this.passwordControl.value !== this.confirmPasswordControl.value) return;

        const userRequest = new com.unblock.proto.CreateUserRequest({
            info: {
                username: this.usernameControl.value,
                password: this.passwordControl.value,
                email: this.emailControl.value
            }
        });
        this.userService.create(userRequest);
    }

    onSave() {
        const updateRequest = new com.unblock.proto.UpdateUserInfoRequest({
            id: this.user.id,
            info: {
                username: this.usernameControl.value,
                email: this.emailControl.value,
            }
        });
        this.userService.updateInfo(updateRequest);
    }

    onChangePassword() {
        if (this.passwordControl.value && this.passwordControl.value !== this.confirmPasswordControl.value) return;

        const passwordRequest = new com.unblock.proto.UpdateUserPasswordRequest({
            id: this.user.id,
            info: {
                password: this.passwordControl.value
            }
        });

        this.userService.updatePassword(passwordRequest);
    }
}
