import { Button, Modal } from "antd";
import { useState } from "react";
import { IconType } from "react-icons";

export const UIModal = ({
  children,
  icon: Icon,
  buttonTitle,
  onCancel,
  onOk,
}: {
  children: React.ReactNode;
  icon?: IconType;
  buttonTitle?: string;
  onCancel?: () => void;
  onOk?: () => void;
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    if (onOk) {
      onOk();
    }
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    if (onCancel) {
      onCancel();
    }
    setIsModalOpen(false);
  };

  return (
    <>
      <Button
        type="primary"
        onClick={showModal}
        icon={Icon ? <Icon fontSize={20} /> : null}
      >
        {buttonTitle}
      </Button>
      <Modal open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        {children}
      </Modal>
    </>
  );
};
