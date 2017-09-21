import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AdminComponent } from './admin.component';
import { AdminRoutingModule } from './admin-routing.module';

import { AuthModule } from '../auth/auth.module';

import { NeighborhoodsModule } from './neighborhoods/neighborhoods.module';

@NgModule({
    declarations: [
        AdminComponent
    ],
    imports: [
        AuthModule,
        AdminRoutingModule,
        NeighborhoodsModule
    ]
})
export class AdminModule { }
