import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './auth/auth-guard.service'

import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';

import { UserComponent } from './admin/user/user.component';
import { CityComponent } from './admin/city/city.component';
import { NeighborhoodComponent } from './admin/neighborhood/neighborhood.component';

const appRoutes: Routes = [
    {
        path: 'admin',
        canActivate: [AuthGuard],
        canActivateChild: [AuthGuard],
        children: [
            {
                path: '',
                pathMatch: 'full',
                redirectTo: 'users'
            },
            {
                path: 'users',
                component: UserComponent
            },
            {
                path: 'cities',
                component: CityComponent
            },
            {
                path: 'neighborhoods',
                component: NeighborhoodComponent
            },
        ]
    },
    {
        path: 'login',
        component: LoginComponent,
    },
    {
        path: '**',
        redirectTo: 'admin'
    },
];

@NgModule({
    imports: [
        RouterModule.forRoot(
            appRoutes,
            { enableTracing: true } // <-- debugging purposes only
        )
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }