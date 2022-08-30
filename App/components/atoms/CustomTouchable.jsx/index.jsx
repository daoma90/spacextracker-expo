import React from "react";
import { Platform, TouchableNativeFeedback, TouchableOpacity } from "react-native";

const CustomTouchable = ({ children, onPress, pressable }) => {
  if (Platform.OS === "ios") {
    return (
      <TouchableOpacity disabled={!pressable} onPress={onPress}>
        {children}
      </TouchableOpacity>
    );
  } else if (Platform.OS === "android") {
    return (
      <TouchableNativeFeedback disabled={!pressable} onPress={onPress}>
        {children}
      </TouchableNativeFeedback>
    );
  }
};

export default CustomTouchable;
