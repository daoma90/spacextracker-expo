import React from "react";
import CustomTouchable from "../CustomTouchable.jsx";
import Ionicons from "@expo/vector-icons/Ionicons";
import { colors } from "../../../../theme";

const BackButton = ({ navigation }) => {
  if (navigation.getState().index !== 0) {
    return (
      <CustomTouchable onPress={() => navigation.goBack()} pressable={true}>
        <Ionicons
          name="arrow-back"
          color={colors.white}
          size={25}
          style={{ paddingVertical: 10, paddingRight: 20 }}
        />
      </CustomTouchable>
    );
  }
  return null;
};

export default BackButton;
