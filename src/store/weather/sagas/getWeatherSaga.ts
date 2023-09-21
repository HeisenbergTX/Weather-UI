import { call, put, takeLatest } from "redux-saga/effects";
import { getFromApi } from "../../../api";
import { getWeatherReq, setWeatherState } from "../slice";

export interface ResGenerator {
  data?: any;
  headers?: string;
  request?: any;
  status?: number;
  statusText?: string;
}

function* getWeatherSagaWorker() {
  const API_KEY = process.env.REACT_APP_API_KEY;
  try {
    const url = `onecall?lat=55.755864&lon=37.617698&appid=${API_KEY}&lang=ru&dt=${new Date().getMilliseconds()}&units=metric`;
    const res: ResGenerator = yield call(getFromApi, url);

    yield put(setWeatherState(res.data));
  } catch (error) {
    error;
  }
}

export function* getWeatherSagaWathcer() {
  yield takeLatest(getWeatherReq, getWeatherSagaWorker);
}
