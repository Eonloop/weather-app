const apiKey = 'Q3GQSXFKE8RPKCRZMPMVNSCP9';
const apiUrl = 'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/';

export default async function getWeather(location) {
    const response = await fetch(`${apiUrl}${location}?key=${apiKey}`);
    const data = await response.json();
    return data;
}

export function getWeatherIcon(icon) {
    return `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/icons/${icon}.svg`;
}