import React from "react";
import logo from "../../image/sun.svg";
import style from "./ActiveDayWeather.module.css";

export const ActiveDayWeather = () => {
  return (
    <section className={style.mainCard}>
      <p className={style.nameCountry}>Москва</p>
      <div className={style.precipitationImage}>
        <img className={style.iconWeather} src={logo} alt="" />
        <p className={style.temperature}>4°</p>
      </div>
      <p className={style.precipitationName}>Солнечно</p>
    </section>
  );
};
