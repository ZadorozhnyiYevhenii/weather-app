import { useAppSelector } from "../../store/hooks";
import { PlaceItem } from "../PlaceItem/PlaceItem";
import { UISkeleton } from "../UI/UISkeleton/UISkeleton";
import "./PlaceList.scss";

export const PlaceList = ({
  isAdding
}: {
  isAdding: boolean
}) => {
  const { places } = useAppSelector((state) => state.places);
  return (
    <section className="place-list">
      {places.length > 0 ? (
        <>
          <h1 className="place-list__title">My locations</h1>
          <ul className="place-list__list">
            {places.map((place) => (
              <li className="place-list__item" key={place.location.name}>
                <PlaceItem weather={place} isAdding={isAdding} />
              </li>
            ))}
          </ul>
        </>
      ) : (
        <UISkeleton title="Add place to check the forecast" />
      )}
    </section>
  );
};
