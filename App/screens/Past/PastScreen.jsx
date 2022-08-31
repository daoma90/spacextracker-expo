import React, { useEffect } from "react";
import { useLaunchContext } from "../../../context/LaunchContext";
import Background from "../../components/atoms/Background";
import LaunchList from "../../components/molecules/LaunchList";

const PastScreen = () => {
  // const { pastLaunches, fetchPastLaunches } = useLaunchContext();
  // useEffect(() => {
  //   fetchPastLaunches();
  // }, []);

  return (
    <Background>
      <LaunchList type="Past launch" />
    </Background>
  );
};

export default PastScreen;
