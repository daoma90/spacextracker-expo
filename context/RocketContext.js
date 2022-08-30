import { createContext, useContext, useState } from "react";
import axios from "axios";

export const RocketContext = createContext({});

export const useRocketContext = () => {
  return useContext(RocketContext);
};

export const RocketProvider = ({ children }) => {
  const baseUrl = "https://api.spacexdata.com/v4/rockets";
  const [rockets, setRockets] = useState([]);

  const fetchRockets = async () => {
    const results = await axios.get(`${baseUrl}`);
    setRockets(results.data);
  };

  const values = {
    rockets,
    fetchRockets,
  };

  return <RocketContext.Provider value={values}>{children}</RocketContext.Provider>;
};
