import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MdSelectModule } from '@angular/material';
import { MdProgressSpinnerModule } from '@angular/material';
import { MdButtonModule } from '@angular/material';

import { ViewComponent } from './view.component';

@NgModule({
    declarations: [
        ViewComponent
    ],
    imports: [
        FormsModule,
        RouterModule,
        CommonModule
    ],
    exports: [
        ViewComponent
    ]
})
export class ViewModule { }
