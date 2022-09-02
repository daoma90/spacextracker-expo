import React, { useEffect } from "react";
import { ScrollView, Text } from "react-native";
import { useLaunchContext } from "../../../context/LaunchContext";
import Background from "../../components/atoms/Background";
import CardLarge from "../../components/molecules/CardLarge";
import { MotiView } from "moti";

const FilterScreen = () => {
  const { fetchFilteredLaunchList } = useLaunchContext();

  useEffect(() => {
    fetchFilteredLaunchList();
  });

  return (
    <Background paddingTop="80px">
      <Text>Filter</Text>
    </Background>
  );
};

export default FilterScreen;
