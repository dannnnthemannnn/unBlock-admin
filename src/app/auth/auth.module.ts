import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AuthGuard } from './auth-guard.service';
import { AuthService } from './auth.service';

import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';

@NgModule({
    providers: [
        AuthGuard,
        AuthService,
    ],
    imports: [
        AngularFireModule,
        AngularFireAuthModule,
    ]
})
export class AuthModule { }
