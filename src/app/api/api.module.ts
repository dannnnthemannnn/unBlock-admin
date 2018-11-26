import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpService } from './http.service';
import { UserService } from './user.service';
import { CityService } from './city.service';
import { NeighborhoodService } from './neighborhood.service';
import { BlockService } from './block.service';
import { AttractionService } from './attraction.service';

@NgModule({
    providers: [
        HttpService,
        UserService,
        CityService,
        NeighborhoodService,
        BlockService,
        AttractionService,
    ],
})
export class ApiModule { }
