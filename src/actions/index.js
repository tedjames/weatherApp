// library used to make api calls
import axios from 'axios';

// construct the base url for making api calls
const API_KEY = '55449ebf4829b9905a483d2084a9e631';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

// action type
export const FETCH_WEATHER = 'FETCH_WEATHER'

export function fetchWeather(city) {
  // api request url
  const url = `${ROOT_URL}&q=${city},us`;
  // axios api request promise
  const request = axios.get(url);

  // returns a type and payload with the request promise in it
  return {
    type: FETCH_WEATHER,
    payload: request
  };
}
