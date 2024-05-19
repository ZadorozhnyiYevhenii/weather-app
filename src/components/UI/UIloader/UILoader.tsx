import { LoadingOutlined } from "@ant-design/icons";

export const UILoader = ({
  size
}: {
  size: number
}) => {
  return <LoadingOutlined style={{ fontSize: `${size}rem`, color: 'blue' }} />;
};
