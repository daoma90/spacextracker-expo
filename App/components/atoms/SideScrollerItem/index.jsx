import React from "react";
import { Image } from "react-native";
import CustomTouchable from "../CustomTouchable.jsx";
import * as s from "./styles";
const SideScrollerItem = ({ item, index, onPress }) => {
  return (
    <CustomTouchable onPress={() => onPress(index)} pressable>
      <s.Container>
        <Image
          source={{ uri: item }}
          resizeMethod="resize"
          resizeMode="cover"
          style={{ height: 130, width: 200 }}
        />
      </s.Container>
    </CustomTouchable>
  );
};

export default SideScrollerItem;
