import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { MatSnackBar } from '@angular/material';

import { Observable } from 'rxjs';
import { startWith ,  flatMap ,  map } from 'rxjs/operators';

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
        private readonly snackBar: MatSnackBar
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

    showNotification(message: string) {
        this.snackBar.open(message, '', {
            duration: 3000,
        });
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

        const level = this.adminControl.value ? com.unblock.proto.UserLevel.ADMIN : com.unblock.proto.UserLevel.DEFAULT;

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
            this.showNotification('User created.');
        });
    }

    onSave() {
        const level = this.adminControl.value ? com.unblock.proto.UserLevel.ADMIN : com.unblock.proto.UserLevel.DEFAULT;
        const updateRequest = new com.unblock.proto.UpdateUserInfoRequest({
            id: this.user.id,
            info: {
                username: this.usernameControl.value,
                email: this.emailControl.value,
                level
            }
        });
        this.userService.updateInfo(updateRequest).then(() => {
            this.showNotification('Info updated.');
        });
    }

    onChangePassword() {
        if (!this.passwordControl.value || this.passwordControl.value !== this.passwordConfirmControl.value) return;

        const passwordRequest = new com.unblock.proto.UpdateUserPasswordRequest({
            id: this.user.id,
            info: {
                password: this.passwordControl.value
            }
        });

        this.userService.updatePassword(passwordRequest).then(() => {
            this.showNotification('Password updated.');
        });
    }
}
