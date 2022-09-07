import styled from "styled-components/native";

const Container = styled.View`
  margin-top: 80px;
  margin-bottom: ${(props) => (props.marginBottom ? "50px" : "0")};
  margin-horizontal: 20px;
  position: relative;
`;

const ImagePositioner = styled.View`
  display: flex;
  align-items: center;
  position: absolute;
  width: 100%;
  top: -65px;
  z-index: 10000;
`;

const ImageContainer = styled.View`
  // position: absolute;
  height: 130px;
  width: 130px;
`;

const CardContainer = styled.View`
  background-color: ${(props) => props.theme.colors.cardBackground};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 15px;
  border-radius: 15px;
  min-height: ${(props) => (props.minHeight ? "322.7px" : "0")};
  z-index: 10;
`;

const LaunchNumberContainer = styled.View`
  width: 100%;
  margin-bottom: 40px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export { Container, ImageContainer, ImagePositioner, LaunchNumberContainer, CardContainer };
