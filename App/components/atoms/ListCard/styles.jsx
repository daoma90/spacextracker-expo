import styled from "styled-components/native";
import { MotiView } from "moti";

const AnimateContainer = styled(MotiView)``;

const Container = styled.View`
  min-height: 100px;
  background-color: ${(props) => props.theme.colors.cardBackground};
  margin-right: 20px;
  margin-left: 50px;
  // padding: 15px;
  padding-left: 30px;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ImagePositioner = styled.View`
  display: flex;
  justify-content: center;
  position: absolute;
  left: -40px;
  min-height: 100px;
  height: 100%;
`;

const ImageContainer = styled.View`
  height: 80px;
  width: 80px;
`;

const InfoContainer = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  padding: 15px;
  padding-left: 20px;
`;

const Row = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
`;

const DateContainer = styled.View`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  // position: absolute;
  // right: 0;
  // bottom: -3px;
`;

export {
  Container,
  ImagePositioner,
  ImageContainer,
  InfoContainer,
  Row,
  DateContainer,
  AnimateContainer,
};
