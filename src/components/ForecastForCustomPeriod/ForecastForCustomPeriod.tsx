import { findIconsByTime } from "../../helpers/findIconsByTime";
import { getDay } from "../../helpers/getDay";
import { getDayOfWeek } from "../../helpers/getDayOfWeek";
import { getMonthName } from "../../helpers/getMonthName";
import { useAppSelector } from "../../store/hooks";
import { IForeCastPeriod } from "../../types/IForecast";
import "./ForecastForCustomPeriod.scss";

export const ForecastForCustomPeriod = ({
  forecasts,
}: {
  forecasts: IForeCastPeriod | undefined;
}) => {
  const { speedType, tempType } = useAppSelector((state) => state.settings);
  return (
    <section className="forecast-custom">
      {forecasts?.forecastday.map((forecast) => {
        const icons = findIconsByTime(forecast.hour);
        return (
          <ul className="forecast-custom__list" key={forecast.date}>
            <li className="forecast-custom__item">
              <div>
                {getDay(forecast.date) === String(new Date().getDate())
                  ? "Today"
                  : getDayOfWeek(forecast.date)}{" "}
                {getDay(forecast.date)} {getMonthName(forecast.date)}
              </div>
              <div className="forecast-custom__temp">
                {tempType === "c"
                  ? `${forecast.day.maxtemp_c}°`
                  : `${forecast.day.maxtemp_f}f`}
                <span className="forecast-custom__temp-break"> / </span>
                {tempType === "c"
                  ? `${forecast.day.mintemp_c}°`
                  : `${forecast.day.mintemp_f}f`}
              </div>
              <div>
                {speedType === "km"
                  ? `${forecast.day.maxwind_kph} km/h`
                  : `${forecast.day.maxwind_mph} mp/h`}
              </div>
            </li>
            {icons.map((icon, index) => (
              <li key={index} className="forecast-custom__conditions">
                <img
                  src={icon.icon}
                  alt={`${icon.text} icon`}
                  className="forecast-custom__img"
                />
                <span className="forecast-custom__text">{icon.text}</span>
              </li>
            ))}
          </ul>
        );
      })}
    </section>
  );
};
