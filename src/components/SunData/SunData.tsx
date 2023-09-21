import React from "react";
import sunUp from "../../image/SunUp.svg";
import sunDown from "../../image/SunDown.svg";
import style from "./SunData.module.css";
import { getWeatherInfo } from "../../store/weather/selector";
import { useSelector } from "react-redux";
import { getTime } from "../../utils";

export const SunData = () => {
  const { current } = useSelector(getWeatherInfo);

  const sunriseTime = getTime(current.sunrise);

  const sunsetTime = getTime(current.sunset);

  const array = [
    {
      id: 1,
      name: "Восход",
      image: sunUp,
      time: sunriseTime,
    },
    {
      id: 2,
      name: "Закат",
      image: sunDown,
      time: sunsetTime,
    },
  ];
  return (
    <section className={style.container}>
      {array.map((elem) => {
        return (
          <article key={elem.id} className={style.infoBlock}>
            <p className={style.name}>{elem.name}</p>
            <p className={style.details}>
              <img className={style.icon} src={elem.image} alt="" /> {elem.time}
            </p>
          </article>
        );
      })}
    </section>
  );
};
