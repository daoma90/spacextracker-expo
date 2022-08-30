import React from "react";
import styled from "styled-components/native";

const StyledSpacer = styled.View`
    width: ${(props) => (props.direction === "horizontal" ? props.space + "px" : "0")}
    height: ${(props) => (props.direction === "vertical" ? props.space + "px" : "0")}
`;

const Spacer = ({ direction, space }) => {
  return <StyledSpacer direction={direction} space={space} />;
};

export default Spacer;
