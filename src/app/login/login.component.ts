import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { Observable } from 'rxjs';

import { AuthService } from '../auth/auth.service';

@Component({
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent {
    username = '';
    password = '';
    error = '';

    constructor(private authService: AuthService, private router: Router) { }

    login() {
        this.authService.login(this.username, this.password)
            .then(data => {
                this.error = '';
                this.router.navigate(['admin', '']);
            }, error => {
                console.log('error');
                console.log(error);
                this.error = error.error.message;
            });
    }
}
