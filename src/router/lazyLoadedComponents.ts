import { lazy } from "react";

export const ForecastPageLazy = lazy(() => import("../pages/ForecastPage/ForecastPage").then((module) => ({ default: module.ForecastPage })));
export const GraphPageLazy = lazy(() => import("../pages/GraphPage/GraphPage").then((module) => ({ default: module.GraphPage })));
export const MapPageLazy = lazy(() => import("../pages/MapPage/MapPage").then((module) => ({ default: module.MapPage })));