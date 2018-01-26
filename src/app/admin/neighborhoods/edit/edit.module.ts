import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatSelectModule } from '@angular/material';
import { MatProgressSpinnerModule } from '@angular/material';
import { MatButtonModule } from '@angular/material';

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
