import styled from "styled-components/native";

const Container = styled.View``;

const HeroImageContainer = styled.View`
  max-width: 100%;
  // height: ${(props) => props.theme.dimensions.vh * 0.45}px;
  height: 400px;
`;

const StyledImage = styled.Image`
  width: 100%;
  height: 100%;
  background-color: ${(props) => props.theme.colors.background};
`;

const CardContainer = styled.View`
  position: absolute;
  left: 0;
  right: 0;
  top: ${(props) => (props.hasCountdown ? "150px" : "200px")};
  z-index: 2;
`;

const SecondaryContainer = styled.View`
  background-color: ${(props) => props.theme.colors.background};
  padding-top: ${(props) => (props.hasCountdown ? "160px" : "130px")};
`;

const GradientArea = {
  height: 100,
  width: "100%",
  // backgroundColor: "red",
  position: "absolute",
  top: -100,
  zIndex: 5,
};

export {
  Container,
  HeroImageContainer,
  StyledImage,
  CardContainer,
  SecondaryContainer,
  GradientArea,
};
