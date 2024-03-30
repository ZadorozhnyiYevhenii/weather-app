import { useState } from "react";
import { Link } from "react-router-dom";
import cn from "classnames";
import { FaWind } from "react-icons/fa";
import { FaTemperatureThreeQuarters } from "react-icons/fa6";
import { MdOutlinePlace } from "react-icons/md";
import { ICurrentWeather } from "../../types/ICurrent";
import { BsThreeDotsVertical } from "react-icons/bs";
import { useAppDispatch } from "../../store/hooks";
import { removePlace } from "../../store/slices/placesSlice";
import { CiTrash } from "react-icons/ci";
import { UIButton } from "../UI/UIButton/UIButton";
import { removePlacesName } from "../../store/slices/placesNameSlice";
import "./PlaceItem.scss";

export const PlaceItem = ({ weather }: { weather: ICurrentWeather }) => {
  const [isToggled, setIsToggled] = useState(false);
  const dispatch = useAppDispatch();

  const handleDeletePlace = (location: string) => {
    dispatch(removePlace(location));
    dispatch(removePlacesName(location));
  };

  const handleToggleIcon = () => {
    setIsToggled(!isToggled);
  };

  return (
    <section className="placeitem">
      <div
        className={cn("placeitem__content", {
          "placeitem__content--disabled": isToggled,
        })}
      >
        <Link to={`/forecast/daily-table/${weather.location.name}`} className="placeitem__link">
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
        </Link>
        <button
          type="button"
          className="placeitem__button"
          onClick={handleToggleIcon}
        >
          <BsThreeDotsVertical />
        </button>
      </div>

      <div
        className={cn("placeitem__buttons", {
          "placeitem__buttons--active": isToggled,
        })}
      >
        <UIButton
          onClick={() => handleDeletePlace(weather.location.name)}
          title="Remove from my locations"
          icon={CiTrash}
          buttonStyle="white"
        />
        <UIButton onClick={handleToggleIcon} title="Close" buttonStyle="blue" />
      </div>
    </section>
  );
};
