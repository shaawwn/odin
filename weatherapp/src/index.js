import './style.css';
import { getWeatherData, formatData } from './weather.js';
import { convertUTC } from './functions.js';

// convertUTC(1636787530 * 1000)
// convertUTC(1234342334122)
console.log("Running index scripts...install style loaders...installing assets")
const weatherContainer = document.createElement('div');
weatherContainer.classList.add('weather-container');

function addWeatherDiv() {
    // Add the main weather container and populate it with
    // weather data
    const weatherContainer = document.createElement('div');
    weatherContainer.classList.add('container-main');
    return weatherContainer;
}


function addTestForm() {
    const testForm = document.createElement('div');

    const locationInput = document.createElement('input');
    const submitBtn = document.createElement('button');
    locationInput.placeholder = 'Enter location';
    testForm.classList.add('search-form');
    submitBtn.innerText = 'Search';
    testForm.appendChild(locationInput);
    testForm.appendChild(submitBtn);

    submitBtn.addEventListener('click', () => {
        const weatherData = getWeatherData(locationInput.value, 'imperial') // Seattle is jsut a testing placeholder
        weatherData.then(response => response.json())
        .then(data => 
            document.body.appendChild(addWeatherDataToPage(formatData(data))));
    })
    // console.log("in index.js", getWeatherData('seattle', 'imperial')); // Testing purposes
    document.body.appendChild(testForm);
}

function addWeatherDataToPage(data) {
    // Use the formatted weather data from the api, create and populate
    // elements
    if(weatherContainer.innerHTML != '') {
        weatherContainer.innerHTML = '';
    }
    const highLow = document.createElement('div');
    const cityState = document.createElement('p');
    const currentTemp = document.createElement('p');
    const feelsLike = document.createElement('p');
    const currentWeather = document.createElement('img') // The 'current weather' iamge, like cloudy, etc
    const sunriseSunset = document.createElement('div');
    const wind = document.createElement('p');

    currentTemp.classList.add('current-temp');

    highLow.innerText = `High: ${data.main.temp_max.toFixed(0)}° Low: ${data.main.temp_min.toFixed(0)}°`;
    cityState.innerText = `${data.name}, ${data.country}`;
    currentTemp.innerText = `${data.main.temp.toFixed(0)}°`;
    feelsLike.innerText = `Feels like: ${data.main.feels_like.toFixed(0)}°`
    // currentWeather
    sunriseSunset.innerText = `Sunrise: ${convertUTC(data.sunrise * 1000)} Sunset: ${convertUTC(data.sunset * 1000)}`;
    wind.innerText = `Current Wind Speed: ${data.wind['speed']} Direction: NNW Gusts: ${data.wind['gust']}`;
    console.log("Adding data", data)

    weatherContainer.appendChild(highLow)
    weatherContainer.appendChild(cityState)
    weatherContainer.appendChild(currentTemp)
    weatherContainer.appendChild(feelsLike)
    weatherContainer.appendChild(sunriseSunset)
    weatherContainer.appendChild(wind)

    return weatherContainer;
}

// Testing
function testComponent() {
    let testbanner = document.createElement('div');
    testbanner.classList.add('test');

    document.body.appendChild(testbanner);
}

addTestForm();
// testComponent()