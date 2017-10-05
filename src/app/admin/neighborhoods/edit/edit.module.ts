import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MdSelectModule } from '@angular/material';
import { MdProgressSpinnerModule } from '@angular/material';
import { MdButtonModule } from '@angular/material';

import { EditComponent } from './edit.component';

@NgModule({
    declarations: [
        EditComponent
    ],
    imports: [
        FormsModule,
        CommonModule
    ],
    exports: [
        EditComponent
    ]
})
export class EditModule { }
