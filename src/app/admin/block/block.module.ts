import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatCardModule, MatInputModule, MatCheckboxModule, MatFormFieldModule, MatButtonModule, MatSelectModule, MatAutocompleteModule } from '@angular/material';

import { BlockComponent } from './block.component';

@NgModule({
    declarations: [
        BlockComponent
    ],
    imports: [
        FormsModule,
        ReactiveFormsModule,
        CommonModule,
        MatCardModule,
        MatAutocompleteModule,
        MatCheckboxModule,
        MatSelectModule,
        MatInputModule,
        MatButtonModule,
        MatFormFieldModule
    ]
})
export class BlockModule { }
