import React from "react";
import * as s from "./styles";
import Ionicons from "@expo/vector-icons/Ionicons";
import { colors } from "../../../../theme";

const Searchbar = ({ onBlur, onChange, value }) => {
  return (
    <s.Container>
      <s.StyledSearchbar onBlur={onBlur} onChangeText={onChange} value={value} />
      <s.IconContainer>
        <Ionicons name="search-outline" size={30} color={colors.white} />
      </s.IconContainer>
    </s.Container>
  );
};

export default Searchbar;
