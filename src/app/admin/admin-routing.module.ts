import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';

import { AuthGuard } from '../auth/auth-guard.service'

import { NeighborhoodsComponent } from './neighborhoods/neighborhoods.component';

const adminRoutes: Routes = [
    {
        path: '',
        component: AdminComponent,
        children: [
            {
                path: '',
                redirectTo: 'neighborhoods',
                pathMatch: 'prefix'
            },
            {
                path: 'neighborhoods',
                component: NeighborhoodsComponent,
                canActivate: [AuthGuard],
            }
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(adminRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class AdminRoutingModule { }