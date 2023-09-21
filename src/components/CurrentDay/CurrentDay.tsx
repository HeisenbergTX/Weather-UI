import React from "react";
import { useSelector } from "react-redux";
import style from "./CurrentDay.module.css";
import { getWeatherInfo } from "../../store/weather/selector";
import { round } from "../../utils";

export const CurrentDay = () => {
  const data = useSelector(getWeatherInfo);

  const currentDay = round(data.current.temp);

  return (
    <section className={style.mainCard}>
      <p className={style.nameCountry}>Москва</p>
      <div className={style.blockWeather}>
        <img
          className={style.iconWeather}
          src={`https://openweathermap.org/img/wn/${data?.current?.weather?.[0]?.icon}@2x.png`}
          alt=""
        />
        <p className={style.temperature}>{currentDay}°</p>
      </div>
      <p className={style.description}>
        {data.current.weather?.[0]?.description}
      </p>
    </section>
  );
};
