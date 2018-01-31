import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatCardModule, MatInputModule, MatFormFieldModule, MatButtonModule } from '@angular/material';

import { LoginComponent } from './login.component';

@NgModule({
    declarations: [
        LoginComponent
    ],
    imports: [
        FormsModule,
        CommonModule,
        MatCardModule,
        MatInputModule,
        MatButtonModule,
        MatFormFieldModule
    ]
})
export class LoginModule { }
