import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatCardModule, MatInputModule, MatCheckboxModule, MatFormFieldModule, MatButtonModule, MatSelectModule, MatAutocompleteModule } from '@angular/material';
import { AgmCoreModule } from '@agm/core';

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
        MatFormFieldModule,
        AgmCoreModule.forRoot({
            apiKey: 'AIzaSyC58Vw5LAsU1APbTdkQb3J14mMadVhx7Sc'
        }),
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class BlockModule { }
