import React, { useEffect } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useRocketContext } from "../../context/RocketContext";
import { colors } from "../../theme";
import PastStack from "./PastStack";
import UpcomingStack from "./UpcomingStack";
import HomeStack from "./HomeStack";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import FilterStack from "./FilterStack";
const Tab = createMaterialBottomTabNavigator();
const TabNavigation = () => {
  const { fetchRockets } = useRocketContext();

  useEffect(() => {
    fetchRockets();
  }, []);

  return (
    <Tab.Navigator
      shifting={true}
      initialRouteName="HomeStack"
      barStyle={{ backgroundColor: colors.primaryAccent, height: 80 }}
      sceneContainerStyle={{ backgroundColor: colors.background }}
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarLabelStyle: {
          color: colors.white,
        },
        tabBarIcon: {
          marginBottom: 10,
        },
        tabBarStyle: {
          paddingTop: 10,
          height: 90,
          backgroundColor: colors.primaryAccent,
          paddingBottom: 10,
        },
      })}
    >
      <Tab.Screen
        name="HomeStack"
        component={HomeStack}
        options={{
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons name="home-outline" color={colors.white} size={25} />
          ),

          tabBarLabel: "Home",
        }}
      />
      <Tab.Screen
        name="UpcomingStack"
        component={UpcomingStack}
        options={{
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons name="time-outline" color={colors.white} size={25} />
          ),
          tabBarLabel: "Upcoming",
        }}
      />
      <Tab.Screen
        name="PastStack"
        component={PastStack}
        options={{
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons name="calendar-outline" color={colors.white} size={25} />
          ),
          tabBarLabel: "Past",
        }}
      />
      <Tab.Screen
        name="FilterStack"
        component={FilterStack}
        options={{
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons name="search-outline" color={colors.white} size={25} />
          ),
          tabBarLabel: "Filter",
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigation;
