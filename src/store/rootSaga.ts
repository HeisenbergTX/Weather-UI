import { fork } from "redux-saga/effects";
import { getWeatherSagaWathcer } from "./weather";

export function* rootSaga() {
  yield fork(getWeatherSagaWathcer);
}
