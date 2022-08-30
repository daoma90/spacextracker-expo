import React from "react";
import { Image, View } from "react-native";
import styled from "styled-components/native";

const CustomImage = ({ image, objectFit }) => {
  const StyledImage = styled.Image`
    height: 100%;
    width: 100%;
  `;
  return <StyledImage source={{ uri: image }} resizeMode={objectFit} />;
};

export default CustomImage;
