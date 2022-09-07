import styled from "styled-components/native";

const Container = styled.View`
  height: 50px;
  display: flex;
  align-items: center;
  width: 25%;
`;

const InnerContainer = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const IconContainer = styled.View`
  margin-bottom: 5px;
`;

export { Container, IconContainer, InnerContainer };