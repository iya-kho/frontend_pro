export const environmentConfigs = {
  linkWeatherbyCoords({ lat, lon }) {
    return `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=817ee402db4510ccfef28a1daa72266d&units=metric`;
  },

  linkCoordsbyCity(city) {
    return `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=817ee402db4510ccfef28a1daa72266d`;
  },

  linkCitybyCoords({ lat, lon }) {
    return `http://api.openweathermap.org/geo/1.0/reverse?lat=${lat}&lon=${lon}&appid=817ee402db4510ccfef28a1daa72266d`;
  },
};

export const { linkWeatherbyCoords, linkCoordsbyCity, linkCitybyCoords } = environmentConfigs;
