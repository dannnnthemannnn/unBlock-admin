import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatSelectModule } from '@angular/material';
import { MatProgressSpinnerModule } from '@angular/material';
import { MatButtonModule } from '@angular/material';

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
