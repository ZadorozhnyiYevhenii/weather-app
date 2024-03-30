import { IconType } from "react-icons";
import './UISkeleton.scss';

export const UISkeleton = ({
  title,
  icon: Icon,
}: {
  title: string,
  icon?: IconType
}) => {
  return (
    <div className="ui-skeleton" >
      {title} {Icon && <Icon />}
    </div>
  );
};