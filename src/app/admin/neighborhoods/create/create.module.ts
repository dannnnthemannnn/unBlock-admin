import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MdSelectModule } from '@angular/material';
import { MdProgressSpinnerModule } from '@angular/material';
import { MdButtonModule } from '@angular/material';

import { CreateComponent } from './create.component';

@NgModule({
    declarations: [
        CreateComponent
    ],
    imports: [
        FormsModule,
        CommonModule
    ],
    exports: [
        CreateComponent
    ]
})
export class CreateModule { }
