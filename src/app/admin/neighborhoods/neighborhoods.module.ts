import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MdSelectModule } from '@angular/material';
import { MdProgressSpinnerModule } from '@angular/material';
import { MdButtonModule } from '@angular/material';

import { NeighborhoodsComponent } from './neighborhoods.component';
import { NeighborhoodsRoutingModule } from './neighborhoods-routing.module';

import { CreateModule } from './create/create.module';

@NgModule({
    declarations: [
        NeighborhoodsComponent
    ],
    imports: [
        CommonModule,
        CreateModule,
        MdSelectModule,
        MdProgressSpinnerModule,
        MdButtonModule,
        NeighborhoodsRoutingModule,
    ],
    exports: [
        NeighborhoodsComponent
    ]
})
export class NeighborhoodsModule { }
