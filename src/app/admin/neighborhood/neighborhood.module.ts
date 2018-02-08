import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatCardModule, MatInputModule, MatCheckboxModule, MatFormFieldModule, MatButtonModule, MatSelectModule, MatAutocompleteModule } from '@angular/material';

import { NeighborhoodComponent } from './neighborhood.component';

@NgModule({
    declarations: [
        NeighborhoodComponent
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
export class NeighborhoodModule { }
