import { TabsProps } from "antd";
import { Link } from "react-router-dom";

export const placeItems: TabsProps["items"] = [
  {
    key: "daily-table",
    label: <Link to={`/forecast/daily-table/`}>Forecast</Link>,
    children: ''
  },
  {
    key: "graph",
    label: <Link to={`forecast/graph/`}>Graph</Link>,
    children: "Content of Tab Pane 2",
  },
  {
    key: "map",
    label: <Link to={`forecast/map/`}>Map</Link>,
    children: "Content of Tab Pane 3",
  },
];
