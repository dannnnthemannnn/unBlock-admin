import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { AdminComponent } from './admin.component';

import { AuthModule } from '../auth/auth.module';

import { UserModule } from './user/user.module';
import { CityModule } from './city/city.module';
import { NeighborhoodModule } from './neighborhood/neighborhood.module';

@NgModule({
    declarations: [
        AdminComponent,
    ],
    imports: [
        RouterModule,
        BrowserModule,
        UserModule,
        CityModule,
        NeighborhoodModule,
    ]
})
export class AdminModule { }
