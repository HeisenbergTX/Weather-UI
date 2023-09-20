import React from "react";
import frame from "../../image/Frame.svg";
import style from "./DetailsWeather.module.css";
import { SunriseSunset } from "../SunriseSunset/SunriseSunset";

export const DetailsWeather = () => {
  return (
    <section className={style.section}>
      <p className={style.title}>Подробности</p>
      <div className={style.container}>
        <div className={style.blockInformatios}>
          <div className={style.significanceInfoBlock}>
            <p className={style.significanceName}>По ощущениям</p>
            <p className={style.significance}>2°</p>
          </div>
          <div className={style.significanceInfoBlock}>
            <p className={style.significanceName}>Влажность</p>
            <p className={style.significance}>73%</p>
          </div>
          <div className={style.significanceInfoBlock}>
            <p className={style.significanceName}>Видимость</p>
            <p className={style.significance}>10 км</p>
          </div>
          <div className={style.significanceInfoBlock}>
            <p className={style.significanceName}>Давление</p>
            <p className={style.significance}>760,00 мм</p>
          </div>
          <div className={style.significanceInfoBlock}>
            <p className={style.significanceName}>Ветер</p>
            <p className={style.significance}>
              <img className={style.icon} src={frame} alt="" />4 м/с
            </p>
          </div>
        </div>
        <div className={style.sunriseSunset}>
          <SunriseSunset />
        </div>
      </div>
    </section>
  );
};
