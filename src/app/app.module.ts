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
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {WeatherImageComponent} from './components/weather-image/weather-image.component';
import {WeatherService} from "./service/weather.service";
import {APP_BASE_HREF} from "@angular/common";

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
