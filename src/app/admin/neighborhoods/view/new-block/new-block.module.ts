import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatSelectModule } from '@angular/material';
import { MatProgressSpinnerModule } from '@angular/material';
import { MatButtonModule } from '@angular/material';

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
