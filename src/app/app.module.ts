import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import {HelloComponent} from './hello.component';
import {ZipFormComponent} from './components/zip-form/zip-form.component';
import {HomeComponent} from './components/home/home.component';
import {AppRoutingModule} from "./app-routing.module";
import {WeatherLocationComponent} from './components/weather-location/weather-location.component';
import {WeatherForecastComponent} from './components/weather-forecast/weather-forecast.component';
import {WeatherImageComponent} from './components/weather-image/weather-image.component';
import {APP_BASE_HREF} from "@angular/common";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule],
    declarations: [
        AppComponent,
        HelloComponent,
        ZipFormComponent,
        HomeComponent,
        WeatherLocationComponent,
        WeatherForecastComponent,
        WeatherImageComponent],
    providers: [
        {provide: APP_BASE_HREF, useValue : '/' }
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
