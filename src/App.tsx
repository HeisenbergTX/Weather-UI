import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { CurrentDay } from "./components/CurrentDay/CurrentDay";
import { DaysWrapper } from "./components/DaysWrapper/DaysWrapper";
import { DetailsWeather } from "./components/DetailsWeather/DetailsWeather";
import { getWeatherReq } from "./store/weather";
import style from "./App.module.css";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getWeatherReq());
  }, []);

  return (
    <section className={style.app}>
      <header>
        <CurrentDay />
      </header>
      <nav className={style.nav}>
        <DaysWrapper />
      </nav>
      <article className={style.detailsWeather}>
        <DetailsWeather />
      </article>
    </section>
  );
}

export default App;
