import { ICurrentWeather } from "../../types/ICurrent";
import { CiClock2 } from "react-icons/ci";
import { FaTemperatureThreeQuarters } from "react-icons/fa6";
import { CiUmbrella } from "react-icons/ci";
import { LuWind } from "react-icons/lu";
import "./CurrentConditions.scss";

export const CurrenConditions = ({
  currentWeather,
}: {
  currentWeather: ICurrentWeather | undefined;
}) => {
  return (
    <section className="current-condition">
      <h1 className="current-condition__title">
        <CiClock2 />
        Current conditions
      </h1>

      <div className="current-condition__container">
        <div className="current-condition__wrapper">
          <img
            src={currentWeather?.current.condition.icon}
            alt={currentWeather?.current.condition.text}
          />
          <span className="current-condition__temp">
            {currentWeather?.current.temp_c}°
          </span>
        </div>
        <div className="current-condition__content">
          <div className="current-condition__wrap">
            <FaTemperatureThreeQuarters /> Feels like{" "}
            <span className="current-condition__feels-like">{currentWeather?.current.feelslike_c}°</span>
          </div>
          <div className="current-condition__wrap">
            <CiUmbrella />
            <span className="current-condition__precip">{currentWeather?.current.precip_mm} mm</span>
          </div>
          <div className="current-condition__wrap">
            <LuWind /> {currentWeather?.current.wind_kph} kph
          </div>
        </div>
      </div>
    </section>
  );
};
