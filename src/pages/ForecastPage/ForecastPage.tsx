import { useQuery } from "react-query";
import { useParams, useSearchParams } from "react-router-dom";
import { CurrenConditions } from "../../components/CurrentConditions/CurrentConditions";
import { PlaceLayout } from "../../components/PlaceLayout/PlaceLayout";
import { getForecast } from "../../api/getForecast";
import { IForeCast } from "../../types/IForecast";
import { ForecastForDay } from "../../components/ForecastForDay/ForecastForDay";
import { defaultValue, periodOptions } from "./common";
import { UISelect } from "../../components/UI/UISelect/UISelect";
import { useEffect, useState } from "react";
import { ForecastForCustomPeriod } from "../../components/ForecastForCustomPeriod/ForecastForCustomPeriod";
import { UILoader } from "../../components/UI/UIloader/UILoader";
import "./ForecastPage.scss";

export const ForecastPage = () => {
  const { placeName = "" } = useParams();
  const [periodValue, setPeriodValue] = useState("1");
  const [searchParams, setSearchParams] = useSearchParams();

  const { data, isLoading } = useQuery<IForeCast>(
    `${placeName}${periodValue}`,
    () =>
      getForecast(
        placeName,
        periodValue,
        periodValue !== "1" || periodValue === null ? "&days=15" : ""
      )
  );
  console.log(periodValue)

  const handlePeriodChange = (value: string) => {
    setPeriodValue(value);
    setSearchParams({ period: value });
  };

  useEffect(() => {
    const params = searchParams.get("period");
    setPeriodValue(params as string);
  }, [periodValue, setSearchParams, searchParams]);

  return (
    <PlaceLayout>
      <main className="forecast">
        {isLoading ? (
          <div className="forecast__loader">
            <UILoader />
          </div>
        ) : (
          <>
            <CurrenConditions currentWeather={data} />
            <section className="forecast__select">
              <h2 className="forecast__period-title">Forecast for</h2>
              <UISelect
                options={periodOptions}
                handleChange={handlePeriodChange}
                defaultValue={searchParams.get("period") || defaultValue}
              />
            </section>

            {periodValue === "1" || periodValue === null ? (
              <ul>
                <li>
                  {data?.forecast.forecastday.map((forecastData) => (
                    <ForecastForDay
                      forecast={forecastData.hour}
                      key={forecastData.date}
                    />
                  ))}
                </li>
              </ul>
            ) : (
              <div>
                <ForecastForCustomPeriod forecasts={data?.forecast} />
              </div>
            )}
          </>
        )}
      </main>
    </PlaceLayout>
  );
};
