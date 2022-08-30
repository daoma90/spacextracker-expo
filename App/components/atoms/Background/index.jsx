import React from "react";
import { ScrollView } from "react-native";
import styled from "styled-components/native";

const Background = ({ children }) => {
  const StyledBackground = styled.View`
    min-height: 100%;
    height: auto;
    background-color: ${(props) => props.theme.colors.background};
  `;
  return <StyledBackground>{children}</StyledBackground>;
};

export default Background;
