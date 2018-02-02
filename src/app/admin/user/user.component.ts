import { Component } from '@angular/core';

import { UserService } from '../../api/user.service';

@Component({
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.css']
})
export class UserComponent {
    options = ['danfranklin', 'lnrabe'];

    username: string;
    email: string;
    password: string;
    confirmPassword: string;

    constructor(private readonly userService: UserService) {}

    onCreateNew() {
        
    }

    onSave() {

    }

    onChangePassword() {

    }
}
