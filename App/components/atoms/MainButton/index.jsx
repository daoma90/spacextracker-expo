import React from "react";
import CustomTouchable from "../CustomTouchable.jsx";
import * as s from "./styles";
import * as t from "../Typography";

const MainButton = ({ buttonText, onPress }) => {
  return (
    <CustomTouchable onPress={onPress} pressable>
      <s.Container>
        <t.MainButtonText>{buttonText}</t.MainButtonText>
      </s.Container>
    </CustomTouchable>
  );
};

export default MainButton;
