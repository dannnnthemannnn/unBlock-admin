import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AuthGuard } from './auth-guard.service';
import { AuthService } from './auth.service';


@NgModule({
    providers: [
        AuthGuard,
        AuthService
    ],
})
export class AuthModule { }
