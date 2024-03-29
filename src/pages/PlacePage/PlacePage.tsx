import { useQuery } from "react-query";
import { useParams } from "react-router-dom"
import { getCurrentWeather } from "../../api/getCurrentWeather";
import { ICurrentWeather } from "../../types/ICurrent";

export const PlacePage = () => {
  const { placeName = '' } = useParams();
  const { data } = useQuery<ICurrentWeather>(`${placeName}`, () => getCurrentWeather(placeName))

  return (
    <div>
      <div>
        {data?.current.condition.code}
      </div>
    </div>
  )
}