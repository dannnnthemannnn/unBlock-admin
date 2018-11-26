import { Injectable } from '@angular/core';
import { Router } from "@angular/router";

import { Observable } from 'rxjs';


import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';

// TODO: Figure out how to handle enum values without redefining them here
const ADMIN = 'ADMIN';

@Injectable()
export class AuthService {
    private user: Observable<firebase.User>;
    private userDetails: firebase.User = null;

    constructor(
        private firebaseAuth: AngularFireAuth,
        private router: Router,
    ) {
        this.user = firebaseAuth.authState;
        this.user.subscribe(
            (user) => {
                if (user) {
                    this.userDetails = user;
                    console.log(this.userDetails);
                }
                else {
                    this.userDetails = null;
                }
            }
        );
    }

    getAccessToken() {
        return this.userDetails.getIdToken();
    }

    isLoggedIn() {
        if (this.userDetails == null) {
            return false;
        } else {
            return true;
        }
    }

    logout() {
        this.firebaseAuth.auth.signOut()
            .then((res) => this.router.navigate(['/']));
    }

    signInWithFacebook() {
        return this.firebaseAuth.auth.signInWithPopup(
            new firebase.auth.FacebookAuthProvider()
        );
    }

}