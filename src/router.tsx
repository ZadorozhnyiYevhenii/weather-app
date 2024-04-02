import { RouteObject } from "react-router-dom";
import { MainPage } from "./pages/MainPage/MainPage";
import { ForecastPage } from "./pages/ForecastPage/ForecastPage";
import { GraphPage } from "./pages/GraphPage/GraphPage";
import { MapPage } from "./pages/MapPage/MapPage";

export const router: RouteObject[] = [
  {
    path: "/",
    element: <MainPage />,
  },
  {
    path: "/forecast/daily-table/:placeName",
    element: <ForecastPage />,
  },
  {
    path: "/forecast/graph/:placeName",
    element: <GraphPage />
  },
  {
    path: "/forecast/map/:placeName",
    element: <MapPage />
  },
];
