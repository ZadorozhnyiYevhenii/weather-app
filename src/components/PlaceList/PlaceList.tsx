import { ICurrentWeather } from "../../types/ICurrent";
import { PlaceItem } from "../PlaceItem/PlaceItem";
import "./PlaceList.scss";

export const PlaceList = ({
  places,
  onDeletePlace,
}: {
  places: ICurrentWeather[];
  onDeletePlace: (location: string) => void;
}) => {
  return (
    <ul className="place-list">
      {places.map((place) => (
        <li className="place-list__item" key={place.location.name}>
          <PlaceItem weather={place} onDeletePlace={onDeletePlace} />
        </li>
      ))}
    </ul>
  );
};
