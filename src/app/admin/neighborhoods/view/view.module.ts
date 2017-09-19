import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MdSelectModule } from '@angular/material';
import { MdProgressSpinnerModule } from '@angular/material';
import { MdButtonModule } from '@angular/material';

import { ViewComponent } from './create.component';

@NgModule({
    declarations: [
        ViewComponent
    ],
    imports: [
        FormsModule,
        CommonModule
    ],
    exports: [
        ViewComponent
    ]
})
export class CreateModule { }
