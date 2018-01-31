import { Component } from '@angular/core';

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

    constructor() {}

    onCreateNew() {

    }

    onSave() {

    }

    onChangePassword() {

    }
}
