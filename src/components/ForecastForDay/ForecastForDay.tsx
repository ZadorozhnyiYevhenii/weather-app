import { useEffect, useState } from "react";
import { IHour } from "../../types/IForecast";
import { getHour } from "../../helpers/getHour";

export const ForecastForDay = ({ forecast }: { forecast: IHour[] }) => {
  const [futureHourForecast, setFutureHourForecast] = useState<IHour[]>([]);

  useEffect(() => {
    const currentTime = +(new Date().getHours());
    
    const futureHoursForecast = forecast.filter((hour) => {
      const forecastTime = getHour(hour.time);

      const r = currentTime - forecastTime

      return r <= 0;
    });

    setFutureHourForecast(futureHoursForecast);
  }, [forecast]);

  return (
    <div>
      {futureHourForecast.map((day) => (
        <div key={day.time}>
          <div>{day?.temp_c}</div>
          <div>{getHour(day?.time)}</div>
        </div>
      ))}
    </div>
  );
};
