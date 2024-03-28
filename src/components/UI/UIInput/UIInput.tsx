import { IconType } from "react-icons";
import "./UIInput.scss";

export const UIInput = ({
  value,
  onChange,
  onKeyDown,
  onIconClick,
  icon: Icon,
  placeholder,
  iconColor = 'blue'
}: {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void,
  onIconClick?: () => void,
  icon: IconType;
  placeholder?: string;
  iconColor?: string
}) => {
  return (
    <label className="ui-input">
      <input
        type="text"
        className="ui-input__input"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        onKeyDown={onKeyDown}
      />
      <button className="ui-input__icon" onClick={onIconClick}>
        <Icon color={iconColor} />
      </button>
    </label>
  );
};
