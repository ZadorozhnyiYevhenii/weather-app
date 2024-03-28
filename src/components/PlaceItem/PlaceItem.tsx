import { FaWind } from "react-icons/fa";
import { FaTemperatureThreeQuarters } from "react-icons/fa6";
import { MdOutlinePlace } from "react-icons/md";
import { ICurrentWeather } from "../../types/ICurrent";
import { BsThreeDotsVertical } from "react-icons/bs";
import "./PlaceItem.scss";

export const PlaceItem = ({
  weather,
  onDeletePlace,
}: {
  weather: ICurrentWeather;
  onDeletePlace: (location: string) => void;
}) => {
  return (
    <section className="placeitem">
      <div className="placeitem__container placeitem__container--last">
        <div className="placeitem__region placeitem__with-icon">
          <MdOutlinePlace className="placeitem__icon" />
          {weather.location.name}
        </div>
        <div className="placeitem__temp placeitem__with-icon">
          <FaTemperatureThreeQuarters className="placeitem__icon" />
          {weather.current.temp_c} ℃
        </div>
      </div>
      <div className="placeitem__wrap">
        <div className="placeitem__wind placeitem__with-icon">
          <FaWind className="placeitem__icon" />
          {weather.current.wind_kph}
        </div>
        <div className="placeitem__condition">
          <img
            src={weather.current.condition.icon}
            loading="lazy"
            alt="current condition icon"
            className="placeitem__img"
          />
          {weather.current.condition.text}
        </div>
      </div>
      <button
        type="button"
        className="placeitem__button"
        onClick={() => onDeletePlace(weather.location.name)}
      >
        <BsThreeDotsVertical />
      </button>
    </section>
  );
};
