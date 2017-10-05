import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './auth/auth-guard.service'

import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';

import { NeighborhoodsComponent } from './admin/neighborhoods/neighborhoods.component'

import { ViewComponent } from './admin/neighborhoods/view/view.component';
import { CreateComponent } from './admin/neighborhoods/create/create.component';
import { EditComponent } from './admin/neighborhoods/edit/edit.component';

const appRoutes: Routes = [
    {
        path: 'admin',
        component: AdminComponent,
        canActivate: [AuthGuard],
        canActivateChild: [AuthGuard],
        children: [
            {
                path: 'neighborhoods',
                component: NeighborhoodsComponent,
                children: [
                    {
                        path: 'create',
                        component: CreateComponent
                    },
                    {
                        path: 'edit/:id',
                        component: EditComponent
                    },
                    {
                        path: ':id',
                        component: ViewComponent
                    }
                ]
            },
            {
                path: '',
                redirectTo: 'neighborhoods',
                pathMatch: 'prefix'
            },
        ]
    },
    {
        path: '',
        redirectTo: 'admin',
        pathMatch: 'prefix'
    },
    {
        path: 'login',
        component: LoginComponent,
    }
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