import { FaWind } from "react-icons/fa";
import { FaTemperatureThreeQuarters } from "react-icons/fa6";
import { MdOutlinePlace } from "react-icons/md";
import { ICurrentWeather } from "../../types/ICurrent";
import { FaDeleteLeft } from "react-icons/fa6";
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
          {weather.current.temp_c} C
        </div>
      </div>
      <div className="placeitem__wrap">
        <div className="placeitem__wind placeitem__with-icon">
          <FaWind className="placeitem__icon" />
          {weather.current.wind_kph}
        </div>
        <div className="placeitem__condition">
          {weather.current.condition.text}
        </div>
      </div>
      <button
        type="button"
        className="placeitem__button"
        onClick={() => onDeletePlace(weather.location.name)}
      >
        <FaDeleteLeft />
      </button>
    </section>
  );
};
