import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { Observable } from 'rxjs';

import { AuthService } from '../auth/auth.service';

@Component({
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent {

    constructor(private authService: AuthService, private router: Router) { }

    signInWithFacebook() {
        this.authService.signInWithFacebook()
            .then((res) => {
                this.router.navigate(['admin', '']);
            })
            .catch((err) => console.log(err));
    }
}
