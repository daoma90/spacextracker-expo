import React from "react";
import styled from "styled-components/native";

const Container = styled.View`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 120px;
  background-color: ${(props) => props.theme.colors.white};
  margin: 0 auto;
  background-color: ${(props) => props.theme.colors.cardBackground};
  border-radius: 15px;
  padding: 25px;
`;

export { Container };
