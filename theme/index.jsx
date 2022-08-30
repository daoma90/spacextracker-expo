import { ThemeProvider } from "styled-components";
import { Dimensions } from "react-native";

export const dimensions = {
  vh: Dimensions.get("window").height,
  vw: Dimensions.get("window").width,
};

export const colors = {
  background: "#201F48",
  primaryAccent: "#411414",
  cardBackground: "#424567",
  white: "#FFFFFF",
  gray: "rgba(255, 255, 255, 0.5)",
  success: "#28D725",
  danger: "#F27070",
};

const shadow = {
  //   shadow1:
  //     "-webkit-box-shadow: 0px 0px 8px 5px rgba(0,0,0,0.1); box-shadow: 0px 0px 8px 5px rgba(0,0,0,0.1);",
};

const theme = {
  colors,
  shadow,
  dimensions,
};

const Theme = ({ children }) => <ThemeProvider theme={theme}>{children}</ThemeProvider>;

export { Theme };
