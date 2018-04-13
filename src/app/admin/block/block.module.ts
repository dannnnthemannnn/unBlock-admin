import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatCardModule, MatInputModule, MatCheckboxModule, MatFormFieldModule, MatButtonModule, MatSnackBarModule, MatSelectModule, MatAutocompleteModule } from '@angular/material';
import { AgmCoreModule } from '@agm/_dev/packages/core';

import { BlockComponent } from './block.component';

import { MapsModule } from '../../maps/maps.module';

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
        MatSnackBarModule,
        MatFormFieldModule,
        AgmCoreModule
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class BlockModule { }
