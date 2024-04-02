import { findIconsByTime } from "../../helpers/findIconsByTime";
import { IForeCastPeriod } from "../../types/IForecast";

export const ForecastForCustomPeriod = ({
  forecasts,
}: {
  forecasts: IForeCastPeriod | undefined;
}) => {
  return (
    <ul>
      {forecasts?.forecastday.map((forecast) => {
        const icons = findIconsByTime(forecast.hour);

        return <li>{forecast.date}</li>;
      })}
    </ul>
  );
};
