import React from "react";
import { round, convertToKilometers } from "../../utils";
import frame from "../../image/Frame.svg";
import style from "./DetailsWeather.module.css";
import { SunData } from "../SunData/SunData";
import { useSelector } from "react-redux";
import { getWeatherInfo } from "../../store/weather/selector";

export const DetailsWeather = () => {
  const { current } = useSelector(getWeatherInfo);

  const feelsLike = round(current.feels_like);

  const visibility = convertToKilometers(current.visibility);

  return (
    <section className={style.section}>
      <p className={style.title}>Подробности</p>
      <div className={style.container}>
        <div className={style.blockInfo}>
          <div className={style.detailsInfoBlock}>
            <p className={style.detailsName}>По ощущениям</p>
            <p className={style.details}>{feelsLike}°</p>
          </div>
          <div className={style.detailsInfoBlock}>
            <p className={style.detailsName}>Влажность</p>
            <p className={style.details}>{current.humidity}%</p>
          </div>
          <div className={style.detailsInfoBlock}>
            <p className={style.detailsName}>Видимость</p>
            <p className={style.details}>{visibility} км</p>
          </div>
          <div className={style.detailsInfoBlock}>
            <p className={style.detailsName}>Давление</p>
            <p className={style.details}>
              {current.pressure}
              hPa
            </p>
          </div>
          <div className={style.detailsInfoBlock}>
            <p className={style.detailsName}>Ветер</p>
            <p className={style.details}>
              <img className={style.icon} src={frame} alt="" />
              {current.wind_speed} м/с
            </p>
          </div>
        </div>
        <div className={style["sun-data"]}>
          <SunData />
        </div>
      </div>
    </section>
  );
};
