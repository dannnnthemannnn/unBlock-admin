import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatCardModule, MatInputModule, MatCheckboxModule, MatFormFieldModule, MatButtonModule, MatAutocompleteModule } from '@angular/material';

import { UserComponent } from './user.component';

@NgModule({
    declarations: [
        UserComponent
    ],
    imports: [
        FormsModule,
        CommonModule,
        MatCardModule,
        MatAutocompleteModule,
        MatCheckboxModule,
        MatInputModule,
        MatButtonModule,
        MatFormFieldModule
    ]
})
export class UserModule { }
