import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


export interface Weatherlocation {
  name: string,
  main: {
    temp: number;
    temp_min: number;
    temp_max: number;
  }
  weather: Array<{
    main: string,
    icon: string
  }>
}
