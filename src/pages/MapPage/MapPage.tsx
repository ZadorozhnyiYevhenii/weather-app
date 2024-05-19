import { useQuery } from "react-query";
import { getCurrentWeather } from "../../api/getCurrentWeather";
import { PlaceLayout } from "../../components/PlaceLayout/PlaceLayout";
import { ICurrentWeather } from "../../types/ICurrent";
import { useParams } from "react-router-dom";

export const MapPage = () => {
  const { placeName = "" } = useParams();
  const { data } = useQuery<ICurrentWeather>(`${placeName}`, () =>
    getCurrentWeather(placeName)
  );


  return (
    <PlaceLayout>
      {data?.current.condition.text}
    </PlaceLayout>
  );
};