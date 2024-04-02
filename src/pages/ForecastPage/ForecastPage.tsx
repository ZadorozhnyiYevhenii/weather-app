import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { CurrenConditions } from "../../components/CurrentConditions/CurrentConditions";
import { PlaceLayout } from "../../components/PlaceLayout/PlaceLayout";
import { getForecast } from "../../api/getForecast";
import { IForeCast } from "../../types/IForecast";
import { ForecastForDay } from "../../components/ForecastForDay/ForecastForDay";
import { defaultValue, periodOptions } from "./common";
import { UISelect } from "../../components/UI/UISelect/UISelect";
import { useState } from "react";

export const ForecastPage = () => {
  const { placeName = "" } = useParams();
  const [periodValue, setPeriodValue] = useState("1");

  const handlePeriodChange = (value: string) => {
    console.log(value)
    setPeriodValue(value);
  };

  const { data } = useQuery<IForeCast>(`${placeName}${periodValue}`, () =>
    getForecast(placeName, periodValue)
  );

  return (
    <PlaceLayout>
      <CurrenConditions currentWeather={data} />
      <section>
        <h2>Forecast for {defaultValue} day</h2>
        <UISelect
          options={periodOptions}
          handleChange={handlePeriodChange}
          defaultValue={defaultValue}
        />
      </section>

      <div>
        {data?.forecast.forecastday.map((forecastData) => (
          <ForecastForDay
            forecast={forecastData.hour}
            key={forecastData.date}
          />
        ))}
      </div>
    </PlaceLayout>
  );
};
