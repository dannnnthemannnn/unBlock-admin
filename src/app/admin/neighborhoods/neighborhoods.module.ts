import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MdSelectModule } from '@angular/material';
import { MdProgressSpinnerModule } from '@angular/material';
import { MdButtonModule } from '@angular/material';
import { FormsModule } from '@angular/forms';

import { NeighborhoodsComponent } from './neighborhoods.component';
import { NeighborhoodsRoutingModule } from './neighborhoods-routing.module';

import { CreateModule } from './create/create.module';
import { ViewModule } from './view/view.module';

@NgModule({
    declarations: [
        NeighborhoodsComponent
    ],
    imports: [
        FormsModule,
        CommonModule,
        ViewModule,
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
