import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './auth/auth-guard.service'

import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';

import { UserComponent } from './admin/user/user.component';
import { CityComponent } from './admin/city/city.component';
import { NeighborhoodComponent } from './admin/neighborhood/neighborhood.component';
import { BlockComponent } from './admin/block/block.component';
import { AttractionComponent } from './admin/attraction/attraction.component';

import { USER_ID_PARAM, CITY_ID_PARAM, NEIGHBORHOOD_ID_PARAM, BLOCK_ID_PARAM, ATTRACTION_ID_PARAM } from './app-routing.const';

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
            {
                path: `blocks/:${BLOCK_ID_PARAM}`,
                component: BlockComponent
            },
            {
                path: 'blocks',
                component: BlockComponent
            },
            {
                path: `attractions/:${ATTRACTION_ID_PARAM}`,
                component: AttractionComponent
            },
            {
                path: 'attractions',
                component: AttractionComponent
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