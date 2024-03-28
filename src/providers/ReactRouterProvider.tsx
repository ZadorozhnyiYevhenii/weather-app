import { BrowserRouter } from "react-router-dom";

export const ReactRouterProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return <BrowserRouter>{children}</BrowserRouter>;
};
