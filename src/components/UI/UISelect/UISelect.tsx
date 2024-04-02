import { Select, Space } from "antd";
import { IOptions } from "../../../types/IOptions";

export const UISelect = ({
  options,
  handleChange,
  defaultValue,
}: {
  options: IOptions[];
  handleChange: (value: string) => void;
  defaultValue: string;
}) => {
  return (
    <Space wrap>
      <Select
        defaultValue={defaultValue}
        style={{ width: 120 }}
        onChange={handleChange}
        options={options}
      />
    </Space>
  );
};
