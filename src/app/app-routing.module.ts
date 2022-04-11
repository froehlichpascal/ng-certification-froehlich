import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {WeatherForecastComponent} from "./components/weather-forecast/weather-forecast.component";

const routes: Routes = [
    {path: 'forecast/:zip', component: WeatherForecastComponent},
    {path: '', component: HomeComponent}
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}