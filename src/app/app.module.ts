import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ZipFormComponent } from './components/zip-form/zip-form.component';
import { HomeComponent } from './components/home/home.component';
import {AppRoutingModule} from "./app-routing.module";
import { WeatherLocationComponent } from './components/weather-location/weather-location.component';
import { WeatherForecastComponent } from './components/weather-forecast/weather-forecast.component';
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  imports: [BrowserModule, FormsModule, AppRoutingModule, ReactiveFormsModule, HttpClientModule],
  declarations: [ AppComponent, HelloComponent, ZipFormComponent, HomeComponent, WeatherLocationComponent, WeatherForecastComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
