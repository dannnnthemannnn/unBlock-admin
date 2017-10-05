import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MdSelectModule } from '@angular/material';
import { MdProgressSpinnerModule } from '@angular/material';
import { MdButtonModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { NeighborhoodsComponent } from './neighborhoods.component';

import { CreateModule } from './create/create.module';
import { ViewModule } from './view/view.module';
import { EditModule } from './edit/edit.module';

@NgModule({
    declarations: [
        NeighborhoodsComponent
    ],
    imports: [
        FormsModule,
        RouterModule,
        CommonModule,
        ViewModule,
        CreateModule,
        EditModule,
        MdSelectModule,
        MdProgressSpinnerModule,
        MdButtonModule,
    ],
    exports: [
        NeighborhoodsComponent
    ]
})
export class NeighborhoodsModule { }
