import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatCardModule, MatInputModule, MatCheckboxModule, MatFormFieldModule, MatSnackBarModule, MatButtonModule, MatSelectModule, MatAutocompleteModule } from '@angular/material';
import { AgmCoreModule } from '@agm/core';

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
        MatSnackBarModule,
        MatInputModule,
        MatButtonModule,
        MatFormFieldModule,
        AgmCoreModule
    ]
})
export class NeighborhoodModule { }
