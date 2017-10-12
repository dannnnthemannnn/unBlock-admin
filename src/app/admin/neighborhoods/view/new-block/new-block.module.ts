import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MdSelectModule } from '@angular/material';
import { MdProgressSpinnerModule } from '@angular/material';
import { MdButtonModule } from '@angular/material';

import { NewBlockComponent } from './new-block.component';

@NgModule({
    declarations: [
        NewBlockComponent
    ],
    imports: [
        FormsModule,
        RouterModule,
        CommonModule
    ],
    exports: [
        NewBlockComponent
    ]
})
export class NewBlockModule { }
