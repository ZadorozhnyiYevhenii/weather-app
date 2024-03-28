import { RouteObject } from "react-router-dom";
import { MainPage } from "./pages/MainPage/MainPage";

export const router: RouteObject[] = [
  {
    path: '/',
    element: <MainPage />,
  }
]