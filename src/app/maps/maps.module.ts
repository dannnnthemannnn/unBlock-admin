import { NgModule } from '@angular/core';

import { AgmCoreModule } from '@agm/core';

@NgModule({
    imports: [
        AgmCoreModule.forRoot({
            apiKey: 'AIzaSyC58Vw5LAsU1APbTdkQb3J14mMadVhx7Sc'
        }),
    ]
})
export class MapsModule { }