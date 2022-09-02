import React, { useEffect } from "react";
import { ScrollView } from "react-native";
import { useLaunchContext } from "../../../context/LaunchContext";
import Background from "../../components/atoms/Background";
import CardLarge from "../../components/molecules/CardLarge";
import { MotiView } from "moti";

const HomeScreen = () => {
  const { nextLaunch, fetchNextLaunch, previousLaunch, fetchPreviousLaunch } = useLaunchContext();
  useEffect(() => {
    fetchNextLaunch();
    fetchPreviousLaunch();
  }, []);

  return (
    <Background paddingTop="80px">
      <ScrollView>
        <MotiView
          from={{ translateY: 100, opacity: 0 }}
          animate={{ translateY: 0, opacity: 1 }}
          delay={500}
          transition={{ type: "timing", duration: 500 }}
        >
          <CardLarge type="Next launch" launch={nextLaunch} />
        </MotiView>
        <MotiView
          from={{ translateY: 100, opacity: 0 }}
          animate={{ translateY: 0, opacity: 1 }}
          delay={800}
          transition={{ type: "timing", duration: 500 }}
        >
          <CardLarge type="Previous launch" launch={previousLaunch} marginBottom />
        </MotiView>
      </ScrollView>
    </Background>
  );
};

export default HomeScreen;
