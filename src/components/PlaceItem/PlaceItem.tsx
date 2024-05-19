import { useState } from "react";
import { Link } from "react-router-dom";
import cn from "classnames";
import { FaWind } from "react-icons/fa";
import { FaTemperatureThreeQuarters } from "react-icons/fa6";
import { MdOutlinePlace } from "react-icons/md";
import { ICurrentWeather } from "../../types/ICurrent";
import { BsThreeDotsVertical } from "react-icons/bs";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { removePlace } from "../../store/slices/placesSlice";
import { CiTrash } from "react-icons/ci";
import { UIButton } from "../UI/UIButton/UIButton";
import { removePlacesName } from "../../store/slices/placesNameSlice";
import "./PlaceItem.scss";

export const PlaceItem = ({ weather, isAdding }: { weather: ICurrentWeather, isAdding: boolean }) => {
  const { tempType, speedType } = useAppSelector(state => state.settings)
  const [isToggled, setIsToggled] = useState(false);
  const dispatch = useAppDispatch();
  const [isRemoving, setIsRemoving] = useState(false);

  const handleDeletePlace = (location: string) => {
    setIsRemoving(true);
    setTimeout(() => {
      dispatch(removePlace(location));
      dispatch(removePlacesName(location));
    }, 500);
  };

  const handleToggleIcon = () => {
    setIsToggled(!isToggled);
  };

  return (
    <section className={cn("placeitem", { "placeitem--removing": isRemoving, "placeitem--adding": isAdding })}>
      <div
        className={cn("placeitem__content", {
          "placeitem__content--disabled": isToggled,
        })}
      >
        <Link
          to={`/forecast/daily-table/${weather.location.name.toLowerCase()}`}
          className="placeitem__link"
        >
          <div className="placeitem__container placeitem__container--last">
            <div className="placeitem__region placeitem__with-icon">
              <MdOutlinePlace className="placeitem__icon" />
              {weather.location.name}
            </div>
            <div className="placeitem__temp placeitem__with-icon">
              <FaTemperatureThreeQuarters className="placeitem__icon" />
              { tempType === 'c' ? `${weather.current.temp_c} ℃` : `${weather.current.temp_f} F`}
            </div>
          </div>
          <div className="placeitem__wrap">
            <div className="placeitem__wind placeitem__with-icon">
              <FaWind className="placeitem__icon" />
              {speedType === 'km' ? `${weather.current.wind_kph} km/h` : `${weather.current.wind_mph} mp/h`}
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
