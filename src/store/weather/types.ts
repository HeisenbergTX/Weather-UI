export interface IState {
  lat: number;
  lon: number;
  timezone: string | null;
  timezone_offset: number;
  current: ICurrent;
  minutely: IMinutely[];
  hourly: (Omit<ICurrent, "sunrise" | "sunset"> & { pop: number })[];
  daily: IDaily[];
}

interface ICurrent {
  dt: number;
  sunrise: number;
  sunset: number;
  temp: number;
  feels_like: number;
  pressure: number;
  humidity: number;
  dew_point: number;
  uvi: number;
  clouds: number;
  visibility: number;
  wind_speed: number;
  wind_deg: number;
  wind_gust: number;
  weather: IWeather[];
}

interface IWeather {
  id: number | null;
  main: string | null;
  description: string;
  icon: string | null;
}

interface IMinutely {
  dt: number;
  precipitation: number;
}

export interface IDaily {
  dt: number;
  sunrise: number;
  sunset: number;
  moonrise: number;
  moonset: number;
  moon_phase: number;
  temp: ITemp;
  feels_like: IFeelsLike;
  pressure: number;
  humidity: number;
  dew_point: number;
  wind_speed: number;
  wind_deg: number;
  wind_gust: number;
  weather: IWeather[];
  clouds: number;
  pop: number;
  rain: number;
  uvi: number;
}

interface ITemp {
  day: number;
  min: number;
  max: number;
  night: number;
  eve: number;
  morn: number;
}

interface IFeelsLike {
  day: number;
  night: number;
  eve: number;
  morn: number;
}
