const weatherIcons = require.context("../icons/weather-icons-main", false, /\.svg$/);

export default function dailyWeather(weatherData) {
    const dailyWeatherDiv = document.createElement('div');
    dailyWeatherDiv.classList.add('daily-weather');
    
    const dailyWeatherHeader = document.createElement('h2');
    dailyWeatherHeader.classList.add('daily-weather-header');
    dailyWeatherHeader.textContent = 'The weather in ' + weatherData.location + " is:";
    dailyWeatherDiv.appendChild(dailyWeatherHeader);

    const dailyWeatherTemperature = document.createElement('p');
    dailyWeatherTemperature.classList.add('daily-weather-temperature');
    dailyWeatherTemperature.textContent = `Temperature: ${weatherData.currentTemperature}°F`;
    dailyWeatherDiv.appendChild(dailyWeatherTemperature);

    const dailyWeatherHumidity = document.createElement('p');
    dailyWeatherHumidity.classList.add('daily-weather-humidity');
    dailyWeatherHumidity.textContent = `Humidity: ${weatherData.currentHumidity}%`;
    dailyWeatherDiv.appendChild(dailyWeatherHumidity);

    const dailyWeatherFeelsLike = document.createElement('p');
    dailyWeatherFeelsLike.classList.add('daily-weather-feels-like');
    dailyWeatherFeelsLike.textContent = `Feels Like: ${weatherData.feelsLikeTemperature}°F`;
    dailyWeatherDiv.appendChild(dailyWeatherFeelsLike);

    const dailyWeatherIcon = document.createElement('img');
    dailyWeatherIcon.classList.add('daily-weather-icon');
    dailyWeatherIcon.src = weatherIcons(`./${weatherData.currentIcon}.svg`);
    dailyWeatherDiv.appendChild(dailyWeatherIcon);

    return dailyWeatherDiv;
}