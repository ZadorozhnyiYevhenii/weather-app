import { RouteObject } from "react-router-dom";
import { MainPage } from "../pages/MainPage/MainPage";
import {
  ForecastPageLazy,
  GraphPageLazy,
  MapPageLazy,
} from "./lazyLoadedComponents";
import { Suspense } from "react";
import { UILoader } from "../components/UI/UIloader/UILoader";

export const router: RouteObject[] = [
  {
    path: "/",
    element: <MainPage />,
  },
  {
    path: "/forecast/daily-table/:placeName",
    element: (
      <Suspense fallback={<UILoader />}>
        <ForecastPageLazy />
      </Suspense>
    ),
  },
  {
    path: "/forecast/graph/:placeName",
    element: (
      <Suspense fallback={<UILoader />}>
        <GraphPageLazy />
      </Suspense>
    ),
  },
  {
    path: "/forecast/map/:placeName",
    element: (
      <Suspense fallback={<UILoader />}>
        <MapPageLazy />
      </Suspense>
    ),
  },
];
