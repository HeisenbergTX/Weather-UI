import React from "react";
import cn from "classnames";
import icon from "../../image/sun.svg";
import style from "./DayWeather.module.css";

export const DayWeather = () => {
  return (
    <section className={style.container}>
      <p>По дням</p>
      <div className={style.listCard}>
        {new Array(7).fill(1).map(() => (
          <div key="" className={cn(style.card, { [style.activeCard]: true })}>
            <p className={style.day}>Сегодня</p>
            <img className={style.iconWeather} src={icon} alt="" />
            <div className={style.blockTemp}>
              <p className={style.dayTimeTemp}>4°</p>
              <p className={style.nightTimeTemp}>3°</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
