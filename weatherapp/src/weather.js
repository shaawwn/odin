
console.log("Loading weather API functions")

function getWeatherData(location, unitOfMeasure) {
    // Return the promise form the open weather api call
    return fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&units=${unitOfMeasure}&APPID=722fa4f411061b4d1c67abdb35712816`)
}

function formatData(data) {
    const weatherData = {
        "description": data.weather[0].description,
        "main": data.main,
        "wind": data.wind,
        "clouds": data.clouds, // I think this is a measure of cloudcoverage
        "country": data.sys.country,
        "sunrise": data.sys.sunrise + data.timezone,
        "sunset": data.sys.sunset + data.timezone,
        "timezone": data.timezone, // UTC
        "name": data.name,
    }
    return weatherData
}
export { getWeatherData, formatData }


// {"coord":{"lon":-122.3321,"lat":47.6062},
// "weather":[{"id":804,"main":"Clouds",
// "description":"overcast clouds","icon":"04n"}],
// "base":"stations",
// "main":{"temp":281.76,"feels_like":281.76,"temp_min":279.55,"temp_max":283.35,"pressure":1027,"humidity":94},
// "visibility":10000,
// "wind":{"speed":0.45,"deg":110,"gust":1.34},
// "clouds":{"all":90},"dt":1636795852,
// "sys":{"type":2,"id":2004026,
// "country":"US",
// "sunrise":1636816330,
// "sunset":1636850122},
// "timezone":-28800, 'formatted as seconds from UTC, -28800 = -8 hours'
// "id":5809844,
// "name":"Seattle",
// "cod":200}