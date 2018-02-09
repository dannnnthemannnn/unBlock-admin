import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './auth/auth-guard.service'

import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';

import { UserComponent } from './admin/user/user.component';
import { CityComponent } from './admin/city/city.component';
import { NeighborhoodComponent } from './admin/neighborhood/neighborhood.component';

import { USER_ID_PARAM, CITY_ID_PARAM, NEIGHBORHOOD_ID_PARAM } from './app-routing.const';

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
                path: `users/:${USER_ID_PARAM}`,
                component: UserComponent
            },
            {
                path: 'users',
                component: UserComponent
            },
            {
                path: `cities/:${CITY_ID_PARAM}`,
                component: CityComponent
            },
            {
                path: 'cities',
                component: CityComponent
            },
            {
                path: `neighborhoods/:${NEIGHBORHOOD_ID_PARAM}`,
                component: NeighborhoodComponent
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
            { enableTracing: false } // <-- debugging purposes only
        )
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }