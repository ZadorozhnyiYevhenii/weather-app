import { ICurrentWeather } from "../../types/ICurrent";
import { CiClock2 } from "react-icons/ci";
import { FaTemperatureThreeQuarters } from "react-icons/fa6";
import { CiUmbrella } from "react-icons/ci";
import { LuWind } from "react-icons/lu";
import { useAppSelector } from "../../store/hooks";
import "./CurrentConditions.scss";

export const CurrenConditions = ({
  currentWeather,
}: {
  currentWeather: ICurrentWeather | undefined;
}) => {
  const { speedType, tempType } = useAppSelector((state) => state.settings);

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
            loading="lazy"
          />
          <span className="current-condition__temp">
            {tempType === "c"
              ? `${currentWeather?.current.temp_c}°`
              : `${currentWeather?.current.temp_f}f`}
          </span>
        </div>
        <div className="current-condition__content">
          <div className="current-condition__wrap">
            <FaTemperatureThreeQuarters /> Feels like{" "}
            <span className="current-condition__feels-like">
              {tempType === "c"
                ? `${currentWeather?.current.feelslike_c}°`
                : `${currentWeather?.current.feelslike_f}f`}
            </span>
          </div>
          <div className="current-condition__wrap">
            <CiUmbrella />
            <span className="current-condition__precip">
              {currentWeather?.current.precip_mm} mm
            </span>
          </div>
          <div className="current-condition__wrap">
            <LuWind />{" "}
            {speedType === "km" ? (
              `${currentWeather?.current.wind_kph} kph`
            ) : (
              `${currentWeather?.current.wind_mph} mph`
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
