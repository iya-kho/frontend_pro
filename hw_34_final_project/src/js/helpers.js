import { linkWeatherbyCoords, linkCoordsbyCity, linkCitybyCoords } from "./environmentConfigs.js";

export const Helpers = {

    async getData(link) {
        let data;

        try {
            let response = await fetch(link);
            data = await response.json();

            if (!response.ok) {
                throw new Error(`${data.error}: ${data.message}`);
            }

        } catch (error) {
            console.log(error);
        }

        return data;
    },

    async getWeatherbyCoords({ lat, lon }) {
        let data = await getData(linkWeatherbyCoords({ lat, lon }));
        
        return data;

    },

    async getCoordsbyCity(city) {
        let data = await getData(linkCoordsbyCity(city));
        let coords = {
            lat: data[0].lat,
            lon: data[0].lon
        }

        return coords;
    },

    async getCitybyCoords({ lat, lon }) {
        let data = await getData(linkCitybyCoords({ lat, lon }));
        let city = data[0].name;

        return city;
    },

    async showWeatherSelect(city, select) {
        Array.from(select.options).forEach((option) => {
            if (option.text === city) {
                option.setAttribute('selected', 'selected');
            } else {
                select.options[0].setAttribute('selected', 'selected');
            }
        })
    },

    getTimeDate() {
        const currentDate = new Date();
        const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        const month = monthNames[currentDate.getMonth()];
        const date = currentDate.getDate();
        const hours24 = currentDate.getHours();
        const format = hours24 >= 12 ? 'pm' : 'am';
        const hours = hours24 % 12 || 12;
        const mins = currentDate.getMinutes();

        const timeDate = `${hours}:${mins} ${format}, ${month} ${date}`;

        return timeDate;
    }

}

export const { getWeatherbyCoords, getCoordsbyCity, getCitybyCoords, showWeatherSelect, getTimeDate, getData } = Helpers;