import { useParams } from "react-router-dom";
import { PlaceLayout } from "../../components/PlaceLayout/PlaceLayout";
import { getCurrentWeather } from "../../api/getCurrentWeather";
import { ICurrentWeather } from "../../types/ICurrent";
import { useQuery } from "react-query";

export const GraphPage = () => {
  const { placeName = '' } = useParams();
  const { data } = useQuery<ICurrentWeather>(`${placeName}`, () =>
  getCurrentWeather(placeName)
);

  return (
    <PlaceLayout>
      {data?.current.condition.code}
    </PlaceLayout>
  );
};