import axios from 'axios';

const API_KEY = 'f0e4a2ba610900ced5c749698cedd648';
const ROOT_URL =  `https://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
  const URL = `${ROOT_URL}&q=${city},in`;
  const request = axios.get(URL);

  return {
    type: FETCH_WEATHER,
    payload: request
  };
}