import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AdminComponent } from './admin.component';
import { AdminRoutingModule } from './admin-routing.module';

import { NeighborhoodsModule } from './neighborhoods/neighborhoods.module';

@NgModule({
    declarations: [
        AdminComponent
    ],
    imports: [
        AdminRoutingModule,
        NeighborhoodsModule
    ]
})
export class AdminModule { }
