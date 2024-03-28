import { useAppSelector } from "../../store/hooks";
import { PlaceItem } from "../PlaceItem/PlaceItem";
import "./PlaceList.scss";

export const PlaceList = () => {
  const { places } = useAppSelector(state => state.places);

  return (
    <ul className="place-list">
      {places.map((place) => (
        <li className="place-list__item" key={place.location.name}>
          <PlaceItem weather={place} />
        </li>
      ))}
    </ul>
  );
};
