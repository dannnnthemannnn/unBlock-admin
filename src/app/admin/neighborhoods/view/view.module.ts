import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatSelectModule } from '@angular/material';
import { MatProgressSpinnerModule } from '@angular/material';
import { MatButtonModule } from '@angular/material';

import { NewBlockModule } from './new-block/new-block.module';
import { ViewComponent } from './view.component';

@NgModule({
    declarations: [
        ViewComponent
    ],
    imports: [
        FormsModule,
        RouterModule,
        CommonModule,
        NewBlockModule
    ],
    exports: [
        ViewComponent
    ]
})
export class ViewModule { }
