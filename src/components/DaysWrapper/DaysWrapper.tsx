import React from "react";
import style from "./DaysWrapper.module.css";
import { useSelector } from "react-redux";
import { getWeatherInfo } from "../../store/weather/selector";
import { Day } from "./Day/Day";

export const DaysWrapper = () => {
  const { daily } = useSelector(getWeatherInfo);

  return (
    <section className={style.container}>
      <p>По дням</p>
      <div className={style.listCard}>
        {!!daily.length && daily.map((day) => <Day key={day.dt} {...day} />)}
      </div>
    </section>
  );
};
