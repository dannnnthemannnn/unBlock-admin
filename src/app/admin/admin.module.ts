import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { AdminComponent } from './admin.component';

import { AuthModule } from '../auth/auth.module';

import { NeighborhoodsModule } from './neighborhoods/neighborhoods.module';
import { UserModule } from './user/user.module';
import { CityModule } from './city/city.module';

@NgModule({
    declarations: [
        AdminComponent,
    ],
    imports: [
        RouterModule,
        BrowserModule,
        NeighborhoodsModule,
        UserModule,
        CityModule,
    ]
})
export class AdminModule { }
