import { IconType } from "react-icons";
import "./UIInput.scss";
import { UILoader } from "../UIloader/UILoader";

export const UIInput = ({
  value,
  onChange,
  onKeyDown,
  onFocus,
  onIconClick,
  icon: Icon,
  placeholder,
  iconColor = 'blue',
  loading
}: {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onFocus?: () => void,
  onKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void,
  onIconClick?: () => void,
  icon: IconType;
  placeholder?: string;
  iconColor?: string,
  loading: boolean
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
        onFocus={onFocus}
      />
      <button className="ui-input__icon" onClick={onIconClick}>
        {loading ? (
          <UILoader size={1.5} />
        ) : (
          <Icon color={iconColor} />
        )}
      </button>
    </label>
  );
};
