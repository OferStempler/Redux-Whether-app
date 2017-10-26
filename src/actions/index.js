import axios from "axios";

const API_KEY = '894f4dc53e86c054512ed4b962dcf07c';
export const FETCH_WEATHER = 'FETCH_WEATHER';
const ROOT_URL = "http://samples.openweathermap.org/data/2.5/forecast?appid=" + API_KEY;

export function fetchWeather(city) {
    const url = ROOT_URL +"&q=" + city + ",il";
    const request = axios.get(url);

    return {
        type: FETCH_WEATHER,
        payload: request
    };
}