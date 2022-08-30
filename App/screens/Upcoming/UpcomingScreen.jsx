import React, { useEffect } from "react";
import { useLaunchContext } from "../../../context/LaunchContext";
import Background from "../../components/atoms/Background";
import LaunchList from "../../components/molecules/LaunchList";

const UpcomingScreen = () => {
  const { upcomingLaunches, fetchUpcomingLaunches } = useLaunchContext();
  useEffect(() => {
    fetchUpcomingLaunches();
  }, []);

  return (
    <Background>
      <LaunchList launches={upcomingLaunches} type="Upcoming launch" />
    </Background>
  );
};

export default UpcomingScreen;
