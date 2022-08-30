import React from "react";
import { Image } from "react-native";
import styled from "styled-components/native";

const Container = styled.View`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const DefaultIcon = () => {
  return (
    <Container>
      <Image
        source={require("../../../../assets/icon.png")}
        style={{ height: "90%", width: "90%" }}
      />
    </Container>
  );
};

export default DefaultIcon;
