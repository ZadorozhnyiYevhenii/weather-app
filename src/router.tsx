import { RouteObject } from "react-router-dom";
import { MainPage } from "./pages/MainPage/MainPage";
import { PlacePage } from "./pages/PlacePage/PlacePage";

export const router: RouteObject[] = [
  {
    path: '/',
    element: <MainPage />,
  },
  {
    path: '/:placeName',
    element: <PlacePage />
  }
]