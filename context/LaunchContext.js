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
  // const [upcomingLaunches, setUpcomingLaunches] = useState([]);
  // const [pastLaunches, setPastLaunches] = useState([]);

  const fetchNextLaunch = async () => {
    const results = await axios.get(`${baseUrl}/next`);
    setNextLaunch(results.data);
  };

  const fetchPreviousLaunch = async () => {
    const results = await axios.get(`${baseUrl}/latest`);
    setPreviousLaunch(results.data);
  };

  // const fetchUpcomingLaunches = async () => {
  //   const results = await axios.get(`${baseUrl}/upcoming`);
  //   setUpcomingLaunches(results.data);
  // };

  // const fetchPastLaunches = async (offset) => {
  //   console.log("offset", offset);
  //   const results = await axios.post(`${baseUrl}/query`, {
  //     options: { limit: 10, offset: offset, sort: { date_unix: "desc" } },
  //     query: { upcoming: false },
  //   });
  //   console.log("results", results.data);
  //   // setPastLaunches(results.data.docs);
  //   return results.data;
  // };

  const fetchLaunchList = async (upcoming, offset) => {
    const results = await axios.post(`${baseUrl}/query`, {
      options: { limit: 10, offset: offset, sort: { date_unix: upcoming ? "asc" : "desc" } },
      query: { upcoming: upcoming },
    });
    return results.data;
  };

  const fetchFilteredLaunchList = async (searchString, upcoming, result, rocket) => {
    let query = {};
    upcoming = true;
    if (searchString) {
      query.$text = {
        $search: searchString,
      };
    }

    if (upcoming !== null) {
      query.upcoming = upcoming;
    }

    if (result !== null) {
      query.success = result;
    }

    if (rocket) {
      query.rocket = rocket;
    }

    const results = await axios.post(`${baseUrl}/query`, {
      options: {},
      query,
    });
    console.log("results", results.data);
    // return results.data;
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
    // upcomingLaunches,
    // fetchUpcomingLaunches,
    // pastLaunches,
    // fetchPastLaunches,
    fetchLaunchList,
    fetchFilteredLaunchList,
    fetchPayload,
    fetchLaunchpad,
  };

  return <LaunchContext.Provider value={values}>{children}</LaunchContext.Provider>;
};
