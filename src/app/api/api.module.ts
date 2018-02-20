import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { UnblockService } from './unblock.service';
import { UserService } from './user.service';
import { CityService } from './city.service';
import { NeighborhoodService } from './neighborhood.service';
import { BlockService } from './block.service';

@NgModule({
    providers: [
        UnblockService,
        UserService,
        CityService,
        NeighborhoodService,
        BlockService,
    ],
})
export class ApiModule { }
