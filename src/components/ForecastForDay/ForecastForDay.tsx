import { LuWind } from "react-icons/lu";
import { useEffect, useState } from "react";
import { IHour } from "../../types/IForecast";
import { getHour } from "../../helpers/getHour";
import { FaTemperatureThreeQuarters } from "react-icons/fa6";
import "./ForecastForDay.scss";
import { findIconsByTime } from "../../helpers/findIconsByTime";

export const ForecastForDay = ({ forecast }: { forecast: IHour[] }) => {
  const [futureHourForecast, setFutureHourForecast] = useState<IHour[]>([]);


  useEffect(() => {
    const currentTime = +new Date().getHours();

    const futureHoursForecast = forecast.filter((hour) => {
      const forecastTime = getHour(hour.time);

      const r = currentTime - forecastTime;

      return r <= 0;
    });

    setFutureHourForecast(futureHoursForecast);
  }, [forecast]);

  return (
    <ul className="forecast-list">
      {futureHourForecast.map((day) => (
        <li key={day.time} className="forecast-list__item">
          <div>
            <h3>
              Today <span>{getHour(day?.time)} o`clock</span>
            </h3>
            <div>
              <FaTemperatureThreeQuarters /> {day?.temp_c}
            </div>
            <div>
              <LuWind /> {day.wind_kph}
            </div>
              <img src={day.condition.icon} alt="weather icon" loading="lazy" />
          </div>
        </li>
      ))}
    </ul>
  );
};
