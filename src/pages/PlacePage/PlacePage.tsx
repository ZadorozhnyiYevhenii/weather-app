import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { getCurrentWeather } from "../../api/getCurrentWeather";
import { ICurrentWeather } from "../../types/ICurrent";
import { CurrenConditions } from "../../components/CurrentConditions/CurrentConditions";
import { PlaceLayout } from "../../components/PlaceLayout/PlaceLayout";

export const PlacePage = () => {
  const { placeName = "" } = useParams();
  const { data } = useQuery<ICurrentWeather>(`${placeName}`, () =>
    getCurrentWeather(placeName)
  );

  return (
    <PlaceLayout>
      <CurrenConditions currentWeather={data} />
    </PlaceLayout>
  )
};
