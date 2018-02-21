import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatCardModule, MatInputModule, MatCheckboxModule, MatFormFieldModule, MatButtonModule, MatSelectModule, MatAutocompleteModule } from '@angular/material';

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
        MatSelectModule,
        MatInputModule,
        MatButtonModule,
        MatFormFieldModule
    ]
})
export class AttractionModule { }
