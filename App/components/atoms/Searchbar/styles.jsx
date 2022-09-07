import styled from "styled-components/native";

const Container = styled.View`
  margin-horizontal: 20px;
  margin-top: 20px;
  //   position: relative;
`;

const StyledSearchbar = styled.TextInput`
  width: 100%;
  height: 50px;
  border: 2px solid white;
  border-radius: 50px;
  padding-left: 20px;
  font-family: "Inter-Medium";
  font-size: 15px;
  font-weight: 500;
  color: ${(props) => props.theme.colors.white};
`;

const IconContainer = styled.View`
  position: absolute;
  right: 15px;
  top: 8px;
`;

export { Container, StyledSearchbar, IconContainer };
