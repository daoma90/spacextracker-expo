import React, { useEffect } from "react";
import { DarkTheme, NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useRocketContext } from "../../context/RocketContext";
import { colors } from "../../theme";
import PastStack from "./PastStack";
import UpcomingStack from "./UpcomingStack";
import HomeStack from "./HomeStack";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import FilterStack from "./FilterStack";
const Tab = createMaterialBottomTabNavigator();
// const Tab = createBottomTabNavigator();
const TabNavigation = () => {
  const { fetchRockets } = useRocketContext();

  useEffect(() => {
    fetchRockets();
  }, []);

  return (
    <NavigationContainer theme={DarkTheme}>
      <Tab.Navigator
        shifting={true}
        initialRouteName="HomeStack"
        barStyle={{ backgroundColor: "#411414", height: 80 }}
        sceneContainerStyle={{ backgroundColor: colors.background }}
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarLabelStyle: {
            color: colors.white,
          },
          tabBarStyle: {
            paddingTop: 10,
            height: 80,
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
              <Ionicons name="home-outline" color={colors.white} size={/* focused ? 35 : */ 25} />
            ),
            tabBarLabel: "Home",
          }}
        />
        <Tab.Screen
          name="UpcomingStack"
          component={UpcomingStack}
          options={{
            tabBarIcon: ({ color, size, focused }) => (
              <Ionicons name="time-outline" color={colors.white} size={/* focused ? 35 :  */ 25} />
            ),
            tabBarLabel: "Upcoming",
          }}
        />
        <Tab.Screen
          name="PastStack"
          component={PastStack}
          options={{
            tabBarIcon: ({ color, size, focused }) => (
              <Ionicons
                name="calendar-outline"
                color={colors.white}
                size={/* focused ? 35 : */ 25}
              />
            ),
            tabBarLabel: "Past",
          }}
        />
        <Tab.Screen
          name="FilterStack"
          component={FilterStack}
          options={{
            tabBarIcon: ({ color, size, focused }) => (
              <Ionicons name="search-outline" color={colors.white} size={/* focused ? 35 : */ 25} />
            ),
            tabBarLabel: "Filter",
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default TabNavigation;
