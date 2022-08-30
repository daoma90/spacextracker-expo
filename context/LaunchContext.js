import { createContext, useContext, useState } from "react";
import axios from "axios";

export const LaunchContext = createContext({});

export const useLaunchContext = () => {
  return useContext(LaunchContext);
};

export const LaunchProvider = ({ children }) => {
  const baseUrl = "https://api.spacexdata.com/v4/launches";
  const [nextLaunch, setNextLaunch] = useState(null);
  const [previousLaunch, setPreviousLaunch] = useState(null);
  const [upcomingLaunches, setUpcomingLaunches] = useState([]);
  const [pastLaunches, setPastLaunches] = useState([]);

  const fetchNextLaunch = async () => {
    const results = await axios.get(`${baseUrl}/next`);
    setNextLaunch(results.data);
  };

  const fetchPreviousLaunch = async () => {
    const results = await axios.get(`${baseUrl}/latest`);
    setPreviousLaunch(results.data);
  };

  const fetchUpcomingLaunches = async () => {
    const results = await axios.get(`${baseUrl}/upcoming`);
    setUpcomingLaunches(results.data);
  };

  const fetchPastLaunches = async () => {
    const results = await axios.post(`${baseUrl}/query`, {
      options: { limit: 10, offset: 0 },
    });
    console.log("results", results.data);
    setPastLaunches(results.data.docs);
  };

  const fetchPayload = async (payloadId) => {
    const results = await axios.get(`https://api.spacexdata.com/v4/payloads/${payloadId}`);
    return results.data;
  };

  const fetchLaunchpad = async (launchpadId) => {
    const results = await axios.get(`https://api.spacexdata.com/v4/launchpads/${launchpadId}`);
    return results.data;
  };

  const values = {
    nextLaunch,
    fetchNextLaunch,
    previousLaunch,
    fetchPreviousLaunch,
    upcomingLaunches,
    fetchUpcomingLaunches,
    pastLaunches,
    fetchPastLaunches,
    fetchPayload,
    fetchLaunchpad,
  };

  return <LaunchContext.Provider value={values}>{children}</LaunchContext.Provider>;
};
