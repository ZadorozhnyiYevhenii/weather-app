import { IconType } from "react-icons";
import "./UIInput.scss";

export const UIInput = ({
  value,
  onChange,
  icon: Icon,
  placeholder
}: {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  icon: IconType;
  placeholder?: string;
}) => {
  return (
    <label className="ui-input">
      <input
        type="text"
        className="ui-input__input"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
      <button className="ui-input__icon">
        <Icon />
      </button>
    </label>
  );
};
