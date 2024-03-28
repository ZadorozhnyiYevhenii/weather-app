import cn from "classnames";
import { IconType } from "react-icons";
import "./UIButtom.scss";

export const UIButton = ({
  onClick,
  icon: Icon,
  title,
  type = "button",
  buttonStyle,
}: {
  onClick: () => void;
  icon?: IconType;
  title: string;
  type?: "button" | "reset" | "submit";
  buttonStyle: "white" | "blue";
}) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        "ui-button",
        { "ui-button--white": buttonStyle === "white" },
        { "ui-button--blue": buttonStyle === "blue" }
      )}
      type={type}
    >
      {title} {Icon && <Icon className="ui-button__icon" />}
    </button>
  );
};
