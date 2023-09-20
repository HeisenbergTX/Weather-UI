import React from "react";
import sunUp from "../../image/SunUp.svg";
import sunDown from "../../image/SunDown.svg";
import style from "./SunriseSunset.module.css";

export const SunriseSunset = () => {
  const array = [
    { id: 1, name: "Восход", image: sunUp, time: "7:23" },
    { id: 2, name: "Закат", image: sunDown, time: "18:23" },
  ];
  return (
    <section className={style.container}>
      {array.map((item) => {
        return (
          <div key={item.id} className={style.significanceInfoBlock}>
            <div className={style.significanceName}>{item.name}</div>
            <p className={style.significance}>
              <img className={style.icon} src={item.image} alt="" /> {item.time}
            </p>
          </div>
        );
      })}
    </section>
  );
};
