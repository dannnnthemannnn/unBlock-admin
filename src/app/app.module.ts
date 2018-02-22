import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatToolbarModule, MatMenuModule, MatTabsModule } from '@angular/material';

import { CookieService } from 'ngx-cookie-service';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { AuthModule } from './auth/auth.module';
import { LoginModule } from './login/login.module';
import { AdminModule } from './admin/admin.module';
import { ApiModule } from './api/api.module';

import { AgmCoreModule } from '@agm/core';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatToolbarModule,
    MatMenuModule,
    MatTabsModule,
    AuthModule,
    AdminModule,
    LoginModule,
    AppRoutingModule,
    HttpClientModule,
    ApiModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyC58Vw5LAsU1APbTdkQb3J14mMadVhx7Sc'
    }),
  ],
  providers: [CookieService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule { }
