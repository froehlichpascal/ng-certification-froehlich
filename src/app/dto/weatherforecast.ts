
export interface WeatherForecast {
    city: {
        name: string
        timezone: number,
    },
    list: Array<{
        dt: number,
        temp: {
            min: number,
            max: number,
        },
        weather: Array<{
            main: string,
            icon: string,
        }>
    }>
}