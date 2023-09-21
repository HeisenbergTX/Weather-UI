import axios from "axios";

export const API = axios.create({
  baseURL: "https://api.openweathermap.org/data/2.5/",
});

export const getFromApi = (url: string) => API.get(url);
