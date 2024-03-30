import { RouteObject } from "react-router-dom";
import { MainPage } from "./pages/MainPage/MainPage";
import { PlacePage } from "./pages/PlacePage/PlacePage";

export const router: RouteObject[] = [
  {
    path: "/",
    element: <MainPage />,
  },
  {
    path: "/forecast/daily-table/:placeName",
    element: <PlacePage />,
  },
  {
    path: "/forecast/graph/:placeName",
  },
  {
    path: "/forecast/map/:placeName",
  },
];
