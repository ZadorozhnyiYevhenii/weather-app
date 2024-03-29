import { useAppSelector } from "../../store/hooks";
import { PlaceItem } from "../PlaceItem/PlaceItem";
import "./PlaceList.scss";

export const PlaceList = () => {
  const { places } = useAppSelector((state) => state.places);

  return (
    <section className="place-list">
      <h1 className="place-list__title">My locations</h1>
      <ul className="place-list__list">
        {places ? (
          places.map((place) => (
            <li className="place-list__item" key={place.location.name}>
              <PlaceItem weather={place} />
            </li>
          ))
        ) : (
          <div></div>
        )}
      </ul>
    </section>
  );
};
