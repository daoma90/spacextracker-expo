import React, { useEffect } from "react";
import { ScrollView } from "react-native";
import { useLaunchContext } from "../../../context/LaunchContext";
import Background from "../../components/atoms/Background";
import CardLarge from "../../components/molecules/CardLarge";

const HomeScreen = () => {
  const { nextLaunch, fetchNextLaunch, previousLaunch, fetchPreviousLaunch } = useLaunchContext();
  useEffect(() => {
    fetchNextLaunch();
    fetchPreviousLaunch();
  }, []);

  return (
    <Background paddingTop="80px">
      <ScrollView>
        <CardLarge type="Next launch" launch={nextLaunch} />
        <CardLarge type="Previous launch" launch={previousLaunch} marginBottom />
      </ScrollView>
    </Background>
  );
};

export default HomeScreen;
