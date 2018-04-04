import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatCardModule, MatInputModule, MatCheckboxModule, MatFormFieldModule, MatButtonModule, MatSelectModule, MatSnackBarModule, MatAutocompleteModule } from '@angular/material';

import { CityComponent } from './city.component';

@NgModule({
    declarations: [
        CityComponent
    ],
    imports: [
        FormsModule,
        ReactiveFormsModule,
        CommonModule,
        MatCardModule,
        MatAutocompleteModule,
        MatCheckboxModule,
        MatSnackBarModule,
        MatSelectModule,
        MatInputModule,
        MatButtonModule,
        MatFormFieldModule
    ]
})
export class CityModule { }
