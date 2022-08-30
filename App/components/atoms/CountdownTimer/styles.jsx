import styled from "styled-components/native";

const Container = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 10px;
  margin-bottom: 10px;
`;

const CountdownItem = styled.View`
  width: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Separator = styled.Text`
  font-family: "Inter-Medium";
  font-size: 24px;
  color: ${(props) => props.theme.colors.white};
  text-align: center;
  width: 20px;
  margin-bottom: 18px;
`;

const CountdownLabel = styled.View``;

export { Container, CountdownItem, Separator, CountdownLabel };
