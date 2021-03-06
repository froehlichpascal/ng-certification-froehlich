import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {WeatherService} from "../../service/weather.service";
import {WeatherLocation} from "../../dto/weatherlocation";

@Component({
    selector: 'app-weather-location',
    templateUrl: './weather-location.component.html',
    styleUrls: ['./weather-location.component.css']
})
export class WeatherLocationComponent implements OnInit {

    @Input() public zip: number;
    @Input() public index: number;
    @Output() public removeZipAtIndex = new EventEmitter<number>();

    weatherLocation?: WeatherLocation;

    constructor(private weatherService: WeatherService) {
    }

    ngOnInit(): void {
        console.log(this.weatherLocation);
        this.weatherService.getWeatherCurrent(this.zip).subscribe(weatherLocation => {
            this.weatherLocation = weatherLocation;
        });
    }

    public removeZip() {
        this.removeZipAtIndex.emit(this.index);
    }

}
