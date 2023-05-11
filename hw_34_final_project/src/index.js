import "./style/main.css";

import { getCitybyCoords, getCoordsbyCity, getTimeDate, getWeatherbyCoords, showWeatherSelect } from "./js/helpers.js";

// Find DOM elements

const dropdown = document.querySelector('#dropdown');
const weatherBox = document.querySelector('#weather-container');
const timeBox = weatherBox.querySelector('.time-date');
const locationBox = weatherBox.querySelector('.location');
const tempBoxes = Array.from(document.querySelectorAll('.temp'));
const iconBoxes = Array.from(document.querySelectorAll('.icon'));
const weatherDescrBox = weatherBox.querySelector('.weather-description');
const weatherDescrCenterBox = document.querySelector('.weather-description.center')
const windBox = weatherBox.querySelector('.wind-text');
const presBox = weatherBox.querySelector('.pressure-text');
const humBox = weatherBox.querySelector('.humidity-text');
const visBox = weatherBox.querySelector('.visibility-text');

// Get the weather data and show it in DOM

let city;

async function showWeather(_e, coords) {
    if (!coords) {
        city = dropdown.options[dropdown.selectedIndex].text;
        coords = await getCoordsbyCity(city);
    }

    localStorage.coords = JSON.stringify(coords);

    let weatherData = await getWeatherbyCoords(coords);

    let country = weatherData.sys.country;
    let temp = Math.round(weatherData.main.temp);
    let feelsLike = Math.round(weatherData.main.feels_like);
    let descrMain = weatherData.weather[0].main;
    let descr = weatherData.weather[0].description;
    let icon = weatherData.weather[0].icon;
    let humidity = weatherData.main.humidity;
    let pressure = weatherData.main.pressure;
    let visibility = weatherData.visibility;
    let windSpeed = weatherData.wind.speed;

    locationBox.textContent = `${city}, ${country}`;
    tempBoxes.map((tempBox => tempBox.textContent = `${temp}\xb0 C`));
    weatherDescrBox.textContent = `Feels like ${feelsLike}\xb0 C. ${descrMain}, ${descr}.`;
    weatherDescrCenterBox.textContent = descr.replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase());
    iconBoxes.map((iconBox) => iconBox.src = `https://openweathermap.org/img/wn/${icon}@2x.png`);
    windBox.textContent = `${windSpeed.toFixed(1)} m/s`;
    humBox.textContent = `${humidity} %`;
    presBox.textContent = `${pressure} hPa`;
    visBox.textContent = `${visibility / 1000} km`;
    timeBox.textContent = getTimeDate();

}

// Show data for user's current location or the last chosen location

navigator.geolocation.getCurrentPosition(
    async (data) => {
        let coords = { lat: data.coords.latitude, lon: data.coords.longitude }
        city = await getCitybyCoords(coords);
        showWeatherSelect(city, dropdown);
        showWeather(null, coords);
    },

    async (error) => {
        console.error(error);

        if (localStorage.coords) {
            let coords = JSON.parse(localStorage.coords);
            city = await getCitybyCoords(coords);
            if (city.length >= 20) {
                locationBox.classList.add('reduce-font');
            }
            showWeatherSelect(city, dropdown);
            showWeather(null, coords);
        } else {
            showWeather(null);
        }
        
    }
)

// Show data for chosen locations

dropdown.addEventListener('change', showWeather);