import { TabsProps } from "antd";
import { Link } from "react-router-dom";

const placeName = window.location.pathname.split('/').at(-1)

export const placeItems: TabsProps["items"] = [
  {
    key: "daily-table",
    label: <Link to={`/forecast/daily-table/${placeName}`}>Forecast</Link>,
    children: ''
  },
  {
    key: "graph",
    label: <Link to={`/forecast/graph/${placeName}`}>Graph</Link>,
    children: "Content of Tab Pane 2",
  },
  {
    key: "map",
    label: <Link to={`/forecast/map/${placeName}`}>Map</Link>,
    children: "Content of Tab Pane 3",
  },
];
