import { useState } from "react";
import { Radio, RadioChangeEvent } from "antd";
import { UIModal } from "../UI/UIModal/UIModal";
import { CiSettings } from "react-icons/ci";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import {
  ISpeed,
  Temp,
  setSpeedType,
  setTempType,
} from "../../store/slices/settingsSlice";
import "./SettingsModal.scss";

export const SettingsModal = () => {
  const { speedType, tempType } = useAppSelector((state) => state.settings);
  const dispatch = useAppDispatch();
  const [prevSpeedType, setPrevSpeedType] = useState<ISpeed | null>(speedType);
  const [prevTempType, setPrevTempType] = useState<Temp | null>(tempType);

  const onSpeedTypeChange = (e: RadioChangeEvent) => {
    dispatch(setSpeedType(e.target.value));
  };

  const onTempTypeChange = (e: RadioChangeEvent) => {
    dispatch(setTempType(e.target.value));
  };

  const handleCancelBtn = () => {
    dispatch(setSpeedType(prevSpeedType));
    dispatch(setTempType(prevTempType));
  };

  const onOk = () => {
    setPrevSpeedType(speedType);
    setPrevTempType(tempType);
  };

  return (
    <UIModal icon={CiSettings} onCancel={handleCancelBtn} onOk={onOk}>
      <Radio.Group onChange={onSpeedTypeChange} value={speedType}>
        <Radio value={"km"}>Km</Radio>
        <Radio value={"ml"}>Ml</Radio>
      </Radio.Group>
      <Radio.Group onChange={onTempTypeChange} value={tempType}>
        <Radio value={"c"}>Celcium</Radio>
        <Radio value={"f"}>Farengeit</Radio>
      </Radio.Group>
    </UIModal>
  );
};
