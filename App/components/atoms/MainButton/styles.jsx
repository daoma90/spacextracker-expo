import styled from "styled-components/native";

const Container = styled.View`
  width: 100%;
  height: 60px;
  background-color: ${(props) => props.theme.colors.primaryAccent};
  border-radius: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export { Container };
