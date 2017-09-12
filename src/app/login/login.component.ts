import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { Observable } from 'rxjs';

//import { AuthService } from '../auth/auth.service';

@Component({
    templateUrl: './login.component.html'
})
export class LoginComponent {
    username = '';
    password = '';
    error = '';

    constructor(//private authService: AuthService, 
        private router: Router) {
        console.log('loaded');
    }

    login() {
        const test = {
            'alphabet': 'superman'
        }
        console.log(test['alphabet']);
        console.log('test');
        /*this.authService.login(this.username, this.password)
            .subscribe(data => {
                this.error = '';
                this.router.navigate(['']);
            }, error => {
                this.error = error;
            });*/
    }
}
