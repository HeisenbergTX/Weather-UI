import { RootState } from "../rootReducer";

export const getWeatherInfo = (state: RootState) => state.weather;
