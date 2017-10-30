import axios from "axios";

const API_KEY = 'e3a5921d60f4bdbd98fc9d96a1b932d4';
export const FETCH_WEATHER = 'FETCH_WEATHER';
const ROOT_URL = "http://api.openweathermap.org/data/2.5/forecast?appid=" + API_KEY;

export function fetchWeather(city) {
    const url = ROOT_URL +"&q=" + city + ",IL";
    const request = axios.get(url);

    // console.log("REQUEST:" ,request)

    return {
        type: FETCH_WEATHER,
        payload: request
    };
}