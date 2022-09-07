import React from "react";
import * as s from "./styles";
import * as t from "../Typography";
import Ionicons from "@expo/vector-icons/Ionicons";
import { colors } from "../../../../theme";
import { MotiView, motify } from "moti";
import CustomTouchable from "../CustomTouchable.jsx";

const TabIcon = ({ icon, label, focused, onPress }) => {
  const MotiIcon = motify(Ionicons)();
  const MotiText = motify(t.TabLabel)();
  return (
    <s.Container>
      <CustomTouchable onPress={onPress} pressable>
        <s.InnerContainer>
          <s.IconContainer>
            <MotiView
              from={{ rotate: "0deg", scale: 1 }}
              animate={focused && { rotate: "360deg", scale: 1.3 }}
              transition={{ type: "timing", duration: 500, ease: "out" }}
            >
              <MotiIcon
                from={{ color: colors.gray }}
                animate={focused && { color: colors.white }}
                transition={{ type: "timing", duration: 500, ease: "out" }}
                name={icon}
                color={colors.white}
                size={25}
              />
            </MotiView>
          </s.IconContainer>

          <MotiText
            from={{ color: colors.gray }}
            animate={focused && { color: colors.white }}
            transition={{ type: "timing", duration: 500, ease: "out" }}
          >
            {label}
          </MotiText>
        </s.InnerContainer>
      </CustomTouchable>
    </s.Container>
  );
};

export default TabIcon;
