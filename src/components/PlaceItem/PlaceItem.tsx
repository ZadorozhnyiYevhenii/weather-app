import { FaWind } from "react-icons/fa";
import { FaTemperatureThreeQuarters } from "react-icons/fa6";
import { MdOutlinePlace } from "react-icons/md";
import "./PlaceItem.scss";

export const PlaceItem = () => {
  return (
    <div className="placeitem">
      <div className="placeitem__container">
        <div className="placeitem__region placeitem__with-icon">
          <MdOutlinePlace className="placeitem__icon" />
          Kyiv, Ukraine
        </div>
        <div className="placeitem__temp placeitem__with-icon">
          <FaTemperatureThreeQuarters className="placeitem__icon" />
          6° C</div>
      </div>
      <div className="placeitem__container">
        <div className="placeitem__wind placeitem__with-icon"><FaWind className="placeitem__icon" />17 km/h</div>
        <div className="placeitem__condition">Sunny</div>
      </div>
    </div>
  );
};
