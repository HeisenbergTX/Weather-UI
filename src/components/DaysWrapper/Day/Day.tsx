import React from "react";
import style from "./Day.module.css";
import cn from "classnames";
import { IDayProps } from "./Day.types";
import { convertUnixToDate, round } from "../../../utils";

export const Day = ({ dt, temp, weather }: IDayProps) => {
  const date = convertUnixToDate(dt);

  const currentDay = new Intl.DateTimeFormat("ru", {
    weekday: "short",
  }).format(date);

  const formattedCurrentDay =
    currentDay.charAt(0).toUpperCase() + currentDay.charAt(1);

  const dayTemp = round(temp.max);
  const nightTemp = round(temp.min);

  const now = new Date();

  const dayOfWeek = () => {
    if (now.getDate() == date.getDate()) return "Сегодня";

    if (now.getDate() + 1 == date.getDate()) return "Завтра";
    return date.getDate();
  };

  return (
    <article
      className={cn(
        style.card,
        now.getDate() == date.getDate() && [style.activeCard],
      )}
    >
      <p className={style.date}>{`${
        typeof dayOfWeek() !== "string" ? formattedCurrentDay : ""
      } ${dayOfWeek()}`}</p>
      <img
        className={style.iconWeather}
        src={`https://openweathermap.org/img/wn/${weather?.[0]?.icon}@2x.png`}
        alt=""
      />
      <div className={style.blockTemp}>
        <p className={style.dayTemp}>{dayTemp}°</p>
        <p className={style.nightTemp}>{nightTemp}°</p>
      </div>
    </article>
  );
};
