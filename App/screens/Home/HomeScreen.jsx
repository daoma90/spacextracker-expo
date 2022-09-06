import React, { useEffect } from "react";
import { ScrollView } from "react-native";
import { useLaunchContext } from "../../../context/LaunchContext";
import Background from "../../components/atoms/Background";
import CardLarge from "../../components/molecules/CardLarge";
import { MotiView } from "moti";
import { useCountdown } from "../../../hooks/useCountdown";
import LargeCardList from "../../components/organisms/LargeCardList";

const HomeScreen = () => {
  return (
    <Background paddingTop="80px">
      {/* <ScrollView>
        <MotiView
          from={{ translateY: 100, opacity: 0 }}
          animate={{ translateY: 0, opacity: 1 }}
          delay={500}
          transition={{ type: "timing", duration: 500 }}
        >
          <CardLarge type="Next launch" />
        </MotiView>
        <MotiView
          from={{ translateY: 100, opacity: 0 }}
          animate={{ translateY: 0, opacity: 1 }}
          delay={800}
          transition={{ type: "timing", duration: 500 }}
        >
          <CardLarge type="Previous launch" marginBottom />
        </MotiView>
      </ScrollView> */}
      <LargeCardList />
    </Background>
  );
};

export default HomeScreen;
