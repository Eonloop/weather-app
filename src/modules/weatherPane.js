const weatherIcons = require.context("../icons/weather-icons-main", false, /\.svg$/);

export default function dailyWeather(weatherData, tempSwitchValue) {
    const dailyWeatherDiv = document.createElement('div');
    dailyWeatherDiv.classList.add('daily-weather');
    
    const dailyWeatherHeader = document.createElement('h2');
    dailyWeatherHeader.classList.add('daily-weather-header');
    dailyWeatherHeader.textContent = weatherData.location;
    dailyWeatherDiv.appendChild(dailyWeatherHeader);

    const dailyWeatherTemperature = document.createElement('p');
    const dailyWeatherFeelsLike = document.createElement('p');
    dailyWeatherFeelsLike.classList.add('daily-weather-feels-like');
    dailyWeatherTemperature.classList.add('daily-weather-temperature');

    if (tempSwitchValue === 'true') {
        dailyWeatherTemperature.textContent = `Temperature: ${weatherData.currentTemperature}°F`;
        dailyWeatherFeelsLike.textContent = `Feels Like: ${weatherData.feelsLikeTemperature}°F`;
    } else if (tempSwitchValue === 'false') {
        dailyWeatherTemperature.textContent = `Temperature: ${weatherData.currentTemperature}°C`;
        dailyWeatherFeelsLike.textContent = `Feels Like: ${weatherData.feelsLikeTemperature}°C`;
    }
  
    dailyWeatherDiv.appendChild(dailyWeatherTemperature);
    dailyWeatherDiv.appendChild(dailyWeatherFeelsLike);

    const dailyWeatherHumidity = document.createElement('p');
    dailyWeatherHumidity.classList.add('daily-weather-humidity');
    dailyWeatherHumidity.textContent = `Humidity: ${weatherData.currentHumidity}%`;
    dailyWeatherDiv.appendChild(dailyWeatherHumidity);

    const dailyWeatherIcon = document.createElement('img');
    dailyWeatherIcon.classList.add('daily-weather-icon');
    dailyWeatherIcon.src = weatherIcons(`./${weatherData.currentIcon}.svg`);
    dailyWeatherDiv.appendChild(dailyWeatherIcon);

    return dailyWeatherDiv;
}