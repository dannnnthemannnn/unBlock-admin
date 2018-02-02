import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { UnblockService } from './unblock.service';
import { UserService } from './user.service';


@NgModule({
    providers: [
        UnblockService
    ],
})
export class ApiModule { }
