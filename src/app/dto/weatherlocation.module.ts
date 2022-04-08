import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


export interface Weatherlocation {
  zipcode: number,
  name: string,
  weatherCondition: string,
  weatherConditionIcon: string,
  temperature: number;
  minTemperature: number;
  maxTemperature: number;
}
