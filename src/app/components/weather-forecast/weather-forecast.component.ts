import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {WeatherForecast} from "../../dto/weatherforecast";
import {WeatherService} from "../../service/weather.service";

@Component({
  selector: 'app-weather-forecast',
  templateUrl: './weather-forecast.component.html',
  styleUrls: ['./weather-forecast.component.css']
})
export class WeatherForecastComponent implements OnInit {

  zip: number;
  forecast: WeatherForecast;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private weatherService: WeatherService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.zip = params['zip'];
    });

    this.weatherService.getWeatherForecast(this.zip).subscribe(data => {
      this.forecast = data;
    })
  }

  public goHome() {
    this.router.navigate([""]);
  }


}
