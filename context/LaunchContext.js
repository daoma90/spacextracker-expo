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

  const fetchNextLaunch = async () => {
    try {
      const results = await axios.post(`${baseUrl}/query`, {
        query: {
          upcoming: true,
        },
        options: {
          populate: ["payloads", "rocket", "launchpad"],
          limit: 1,
          sort: {
            flight_number: "asc",
          },
        },
      });
      // console.log("results", results.data.docs);
      setNextLaunch(results.data.docs[0]);
    } catch (e) {
      console.log("Fetch next launch error: ", e);
    }
  };

  // const fetchNextLaunch = async () => {
  //   try {
  //     const results = await axios.get(`${baseUrl}/next`);
  //     setNextLaunch(results.data);
  //   } catch (e) {
  //     console.log("Fetch next launch error: ", e);
  //   }
  // };

  const fetchPreviousLaunch = async () => {
    try {
      const results = await axios.post(`${baseUrl}/query`, {
        query: {
          upcoming: false,
        },
        options: {
          populate: ["payloads", "rocket", "launchpad"],
          limit: 1,
          sort: {
            flight_number: "desc",
          },
        },
      });
      setPreviousLaunch(results.data.docs[0]);
    } catch (e) {
      console.log("Fetch previous launch error: ", e);
    }
  };
  const fetchLaunchList = async (upcoming, offset) => {
    try {
      const results = await axios.post(`${baseUrl}/query`, {
        options: {
          limit: 10,
          offset: offset,
          sort: { date_unix: upcoming ? "asc" : "desc" },
          populate: ["payloads", "rocket", "launchpad"],
        },
        query: { upcoming: upcoming },
      });
      return results.data;
    } catch (e) {
      console.log("Fetch launch list error: ", e);
    }
  };

  const fetchFilteredLaunchList = async (searchString, upcoming, result, rocket) => {
    let query = {};
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
      options: { populate: ["payloads", "rocket", "launchpad"] },
      query,
    });

    // console.log("query", query);
    console.log("results", results.data);
    return results.data;
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
    fetchLaunchList,
    fetchFilteredLaunchList,
    fetchPayload,
    fetchLaunchpad,
  };

  return <LaunchContext.Provider value={values}>{children}</LaunchContext.Provider>;
};
