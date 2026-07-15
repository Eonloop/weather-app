const apiKey = 'FC5QK7LP5DJS36JDRRNLUTG9U';
const apiUrl = 'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/';

export default async function getWeather(location, useFahrenheit = 'true') {
    const unitGroup = useFahrenheit === 'true' ? 'us' : 'metric';
    const response = await fetch(
        `${apiUrl}${location}?unitGroup=${unitGroup}&key=${apiKey}`
    );
    const data = await response.json();
    return data;
}