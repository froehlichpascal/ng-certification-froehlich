import {Component, Input, OnInit} from '@angular/core';

@Component({
    selector: 'app-weather-image',
    templateUrl: './weather-image.component.html',
    styleUrls: ['./weather-image.component.css']
})
export class WeatherImageComponent implements OnInit {

    iconName: string;

    @Input()
    iconKey: string | undefined = "";

    @Input()
    size: number;

    @Input()
    customClass: string = "";

    constructor() {
    }

    ngOnInit(): void {
        console.log(this.iconKey);
        this.iconName = this.getIconName(this.iconKey);
    }

    getIconName(iconKey: string): string {
        switch (iconKey) {
            case '01d':
            case '01n':
                return 'sun';
            case '02d':
            case '02n':
            case '03d':
            case '03n':
            case '04d':
            case '04n':
            case '50d':
            case '50n':
                return 'clouds';
            case '09d':
            case '09n':
            case '10d':
            case '10n':
            case '11d':
            case '12n':
                return 'rain'
            case '13d':
            case '13n':
                return 'snow';
            default:
                console.error('No corresponding icon found for ' + iconKey);
                return '';
        }
    }

}
