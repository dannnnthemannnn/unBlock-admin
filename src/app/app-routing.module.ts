import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './auth/auth-guard.service'

import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';

import { NeighborhoodsComponent } from './admin/neighborhoods/neighborhoods.component'

import { ViewComponent } from './admin/neighborhoods/view/view.component';
import { CreateComponent } from './admin/neighborhoods/create/create.component';
import { EditComponent } from './admin/neighborhoods/edit/edit.component';
import { UserComponent } from './admin/user/user.component';

const appRoutes: Routes = [
    {
        path: 'admin',
        canActivate: [AuthGuard],
        canActivateChild: [AuthGuard],
        children: [
            {
                path: '',
                pathMatch: 'full',
                redirectTo: 'user'
            },
            {
                path: 'user',
                component: UserComponent
            },
            {
                path: 'cities',
                component: NeighborhoodsComponent
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