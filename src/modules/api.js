const apiKey = 'FC5QK7LP5DJS36JDRRNLUTG9U';
const apiUrl = 'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/';

export default async function getWeather(location) {
    const response = await fetch(`${apiUrl}${location}?key=${apiKey}`);
    const data = await response.json();
    return data;
}