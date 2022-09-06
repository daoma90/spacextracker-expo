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
    try {
      const results = await axios.get(`${baseUrl}/next`);
      setNextLaunch(results.data);
    } catch (e) {
      console.log("Fetch next launch error: ", e);
    }
  };

  const fetchPreviousLaunch = async () => {
    try {
      const results = await axios.get(`${baseUrl}/latest`);
      setPreviousLaunch(results.data);
    } catch (e) {
      console.log("Fetch previous launch error: ", e);
    }
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
    try {
      const results = await axios.post(`${baseUrl}/query`, {
        options: { limit: 10, offset: offset, sort: { date_unix: upcoming ? "asc" : "desc" } },
        query: { upcoming: upcoming },
      });
      return results.data;
    } catch (e) {
      console.log("Fetch launch list error: ", e);
    }
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

    try {
      const results = await axios.post(`${baseUrl}/query`, {
        options: {},
        query,
      });
      // console.log("results", results.data);
      // return results.data;
    } catch (e) {
      console.log("Filter fetch error: ", e);
    }
  };

  const fetchPayload = async (payloadId) => {
    try {
      const results = await axios.get(`https://api.spacexdata.com/v4/payloads/${payloadId}`);
      return results.data;
    } catch (e) {
      console.log("Fetch payload error: ", e);
    }
  };

  const fetchLaunchpad = async (launchpadId) => {
    try {
      const results = await axios.get(`https://api.spacexdata.com/v4/launchpads/${launchpadId}`);
      return results.data;
    } catch (e) {
      console.log("Fetch launchpad error: ", e);
    }
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
