import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HttpClientModule} from '@angular/common/http';

import {AgmCoreModule} from '@agm/core';
import {environment} from '../environments/environment';
import {UsMapModule} from 'angular-us-map';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AgmCoreModule.forRoot({
      apiKey: environment.google_maps_key
    }),
    UsMapModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
