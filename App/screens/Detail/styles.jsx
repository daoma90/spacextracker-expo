import styled from "styled-components/native";

const Container = styled.View`
  margin-bottom: 20px;
`;

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
  position: relative;
  left: 0;
  right: 0;
  // top: ${(props) => (props.hasCountdown ? "150px" : "200px")};
  top: ${(props) => (props.hasCountdown ? "-280px" : "-240px")};
  // top: 0;
  z-index: 5;
`;

const SecondaryContainer = styled.View`
  background-color: ${(props) => props.theme.colors.background};
  position: relative;
  z-index: 5;
  margin-bottom: ${(props) => (props.hasCountdown ? "-250px" : "-210px")};
`;

const DetailsContainer = styled.View`
  top: ${(props) => (props.hasCountdown ? "-250px" : "-210px")};
`;

const GradientArea = {
  height: 100,
  width: "100%",
  // backgroundColor: "red",
  position: "absolute",
  top: 330,
  zIndex: 1,
  // backgroundColor: "red",
};

export {
  Container,
  HeroImageContainer,
  StyledImage,
  CardContainer,
  SecondaryContainer,
  GradientArea,
  DetailsContainer,
};
