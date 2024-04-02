import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { UITabs } from "../UI/UITabs/UITabs";
import { placeItems } from "../UI/UITabs/common";

export const PlaceLayout = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  const [activeKey, setActiveKay] = useState("");

  useEffect(() => {
    const currentPage = location.pathname.split("/").at(2);

    const activeTab = placeItems?.find((item) => item.key === currentPage);

    setActiveKay(activeTab ? activeTab.key : "");
  }, [location.pathname]);

  return (
    <>
      <UITabs items={placeItems} activeKey={activeKey} />
      {children}
    </>
  );
};
