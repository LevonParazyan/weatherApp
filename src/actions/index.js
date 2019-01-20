import axios from 'axios';

const API_KEY = '2fb3357a54edaaf72f6fd916c1f78e75';
export const FETCH_WEATHER = 'FETCH_WEATHER';
const ROOT_URL = `https://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export function fetchWeather(city) {
    const url = `${ROOT_URL}&q=${city},us`;
    const request = axios.get(url);
    console.log(request)
    return{
        type: FETCH_WEATHER,
        payload: request
    }
}