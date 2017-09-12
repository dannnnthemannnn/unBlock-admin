import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { UnblockService } from './unblock.service';


@NgModule({
    providers: [
        UnblockService
    ],
})
export class ApiModule { }
