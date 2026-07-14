export default class Weather {
    constructor(data) {
        this.data = data;
    }

    get currentConditions() {
        return this.currentConditions;
    }

    get currentIcon() {
        return this.data.currentConditions.icon;
    }

    get currentTemperature() {
        return this.data.currentConditions.temp;
    }

    get currentHumidity() {
        return this.data.currentConditions.humidity;
    }
    
    get feelsLikeTemperature() {
        return this.data.currentConditions.feelslike;
    }

    get location() {
        return this.data.resolvedAddress;
    }
}