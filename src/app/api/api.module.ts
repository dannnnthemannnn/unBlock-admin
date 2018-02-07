import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { UnblockService } from './unblock.service';
import { UserService } from './user.service';
import { CityService } from './city.service';


@NgModule({
    providers: [
        UnblockService,
        UserService,
        CityService
    ],
})
export class ApiModule { }
