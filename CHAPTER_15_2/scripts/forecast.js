
class Forecast {
    constructor() {
        this.key = 'tppqFbkuiHC2sEbpkLALNtoA3W77p6su'
        this.weatherURI = 'http://dataservice.accuweather.com/currentconditions/v1/';
        this.cityURI = 'http://dataservice.accuweather.com/locations/v1/cities/search';
    };

    async updateCity(city) {

        const cityDets = await this.getCity(city);
        const weather = await this.getWeather(cityDets.key);

        return { cityDets, weather };
    };
    async getCity(city) {
        const query = `?apikey=${this.key}&q=${city}`
        const response = await fetch(this.cityURI + query);
        const data = await response.json();

        return data[0];
    }
    async getWeather(cityCode) {
        const query = `${cityCode}?apikey=${this.key}`

        const response = await fetch(this.weatherURI + query);
        const data = await response.json();
        return data[0];
    }
}