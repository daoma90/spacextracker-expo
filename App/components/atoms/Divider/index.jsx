import React from "react";
import styled from "styled-components/native";

const StyledDivider = styled.View`
  height: 1px;
  width: 50%;
  background-color: ${(props) => props.theme.colors.white};
`;

const Divider = () => {
  return <StyledDivider />;
};

export default Divider;
