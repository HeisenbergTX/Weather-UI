import { createSlice } from "@reduxjs/toolkit";
import { IState } from "./types";
import { defaultState } from "./utils";

const weatherSlice = createSlice({
  name: "weather",
  initialState: defaultState,
  reducers: {
    getWeatherReq: (state) => state,
    setWeatherState: (state, action) => (state = action.payload),
  },
});

export const { getWeatherReq, setWeatherState } = weatherSlice.actions;

export default weatherSlice.reducer;
