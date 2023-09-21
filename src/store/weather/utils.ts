import { IState } from "./types";

export const defaultState: IState = {
  lat: 0,
  lon: 0,
  timezone: null,
  timezone_offset: 0,
  current: {
    dt: 0,
    sunrise: 0,
    sunset: 0,
    temp: 0,
    feels_like: 0,
    pressure: 0,
    humidity: 0,
    dew_point: 0,
    uvi: 0,
    clouds: 0,
    visibility: 0,
    wind_speed: 0,
    wind_deg: 0,
    wind_gust: 0,
    weather: [],
  },
  minutely: [],
  hourly: [],
  daily: [],
};
