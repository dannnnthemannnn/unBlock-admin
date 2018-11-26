import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatCardModule, MatInputModule, MatCheckboxModule, MatFormFieldModule, MatButtonModule, MatSnackBarModule, MatSelectModule, MatAutocompleteModule } from '@angular/material';
import { AgmCoreModule } from '@agm/core';

import { AttractionComponent } from './attraction.component';

@NgModule({
    declarations: [
        AttractionComponent
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
        MatFormFieldModule,
        AgmCoreModule
    ]
})
export class AttractionModule { }
