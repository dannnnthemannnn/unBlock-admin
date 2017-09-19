import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NeighborhoodsComponent } from './neighborhoods.component';

import { CreateComponent } from './create/create.component';

const neighborhoodRoutes: Routes = [
    {
        path: '',
        component: NeighborhoodsComponent
    },
    {
        path: 'create',
        component: CreateComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(neighborhoodRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class NeighborhoodsRoutingModule { }