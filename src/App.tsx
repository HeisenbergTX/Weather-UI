import React from "react";
import style from "./App.module.css";
import { ActiveDayWeather } from "./components/ActiveCard/ActiveDayWeather";
import { DayWeather } from "./components/DayWeather/DayWeather";
import { DetailsWeather } from "./components/DetailsWeather/DetailsWeather";

function App() {
  return (
    <section className={style.app}>
      <header className={style.mainWeather}>
        <ActiveDayWeather />
      </header>
      <nav className={style.nav}>
        <DayWeather />
      </nav>
      <article className={style.detailsWeather}>
        <DetailsWeather />
      </article>
    </section>
  );
}

export default App;
