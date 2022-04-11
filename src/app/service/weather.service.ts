import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Weatherlocation} from "../dto/weatherlocation";
import {Observable} from "rxjs";
import {WeatherForecast} from "../dto/weatherforecast";

@Injectable({
    providedIn: 'root'
})
export class WeatherService {

    static BASE_URL = "https://api.openweathermap.org/data/2.5/"
    static APP_ID = "5a4b2d457ecbef9eb2a71e480b947604";
    static readonly UNITS = "metric";
    static readonly FORECAST_COUNT = 5;

    constructor(private http: HttpClient) {
    }

    public getWeatherCurrent(zip: number): Observable<Weatherlocation> {
        return this.http.get<Weatherlocation>(
            WeatherService.BASE_URL + "weather?"
            + "zip=" + zip
            + "&units=" + WeatherService.UNITS
            + "&appid=" + WeatherService.APP_ID
        );
    }

    getWeatherForecast(zip: number): Observable<WeatherForecast> {
        return this.http.get<WeatherForecast>(
            WeatherService.BASE_URL + "forecast/daily?"
            + "zip=" + zip
            + "&cnt=" + WeatherService.FORECAST_COUNT
            + "&units=" + WeatherService.UNITS
            + "&appid=" + WeatherService.APP_ID
        );
    }
}
