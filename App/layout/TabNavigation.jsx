import React, { useEffect } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useRocketContext } from "../../context/RocketContext";
import { colors } from "../../theme";
import PastStack from "./PastStack";
import UpcomingStack from "./UpcomingStack";
import HomeStack from "./HomeStack";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import FilterStack from "./FilterStack";
import TabIcon from "../components/atoms/TabIcon";
// const Tab = createMaterialBottomTabNavigator();
const Tab = createBottomTabNavigator();
const TabNavigation = () => {
  // const { fetchRockets } = useRocketContext();

  // useEffect(() => {
  //   fetchRockets();
  // }, []);

  return (
    <Tab.Navigator
      initialRouteName="HomeStack"
      sceneContainerStyle={{ backgroundColor: colors.background }}
      screenOptions={({ route }) => ({
        headerShown: false,
        // tabBarLabelStyle: {
        //   color: colors.white,
        //   marginTop: -10,
        // },
        tabBarStyle: {
          paddingTop: 10,
          height: 80,
          backgroundColor: colors.primaryAccent,
          paddingBottom: 20,
        },
      })}
    >
      <Tab.Screen
        name="HomeStack"
        component={HomeStack}
        options={{
          tabBarButton: (props) => (
            <TabIcon
              icon="home-outline"
              label="Home"
              focused={props.accessibilityState.selected}
              onPress={props.onPress}
            />
          ),

          // tabBarLabel: "Home",
        }}
      />
      <Tab.Screen
        name="UpcomingStack"
        component={UpcomingStack}
        options={{
          tabBarButton: (props) => (
            <TabIcon
              icon="time-outline"
              label="Upcoming"
              focused={props.accessibilityState.selected}
              onPress={props.onPress}
            />
          ),
          // tabBarIcon: ({ focused }) => (
          //   // <Ionicons name="time-outline" color={colors.white} size={25} />
          //   <TabIcon icon="time-outline" focused={focused} />
          // ),
          // tabBarLabel: "Upcoming",
        }}
      />
      <Tab.Screen
        name="PastStack"
        component={PastStack}
        options={{
          tabBarButton: (props) => (
            <TabIcon
              icon="calendar-outline"
              label="Past"
              focused={props.accessibilityState.selected}
              onPress={props.onPress}
            />
          ),
          // tabBarLabel: "Past",
        }}
      />
      <Tab.Screen
        name="FilterStack"
        component={FilterStack}
        options={{
          tabBarButton: (props) => (
            <TabIcon
              icon="search-outline"
              label="Filter"
              focused={props.accessibilityState.selected}
              onPress={props.onPress}
            />
          ),
          // tabBarLabel: "Filter",
        }}
      />
    </Tab.Navigator>
    // <Tab.Navigator
    //   shifting={false}
    //   initialRouteName="HomeStack"
    //   barStyle={{ backgroundColor: colors.primaryAccent, height: 80 }}
    //   sceneContainerStyle={{ backgroundColor: colors.background }}
    //   screenOptions={({ route }) => ({
    //     headerShown: false,
    //     tabBarLabelStyle: {
    //       color: colors.white,
    //     },
    //   })}
    //   barStyle={{
    //     paddingTop: 10,
    //     height: 80,
    //     backgroundColor: colors.primaryAccent,
    //     paddingBottom: 10,
    //   }}
    // >
    //   <Tab.Screen
    //     name="HomeStack"
    //     component={HomeStack}
    //     options={{
    //       tabBarIcon: ({ color, size, focused }) => (
    //         <Ionicons name="home-outline" color={colors.white} size={25} />
    //       ),

    //       tabBarLabel: "Home",
    //     }}
    //   />
    //   <Tab.Screen
    //     name="UpcomingStack"
    //     component={UpcomingStack}
    //     options={{
    //       tabBarIcon: ({ color, size, focused }) => (
    //         <Ionicons name="time-outline" color={colors.white} size={25} />
    //       ),
    //       tabBarLabel: "Upcoming",
    //     }}
    //   />
    //   <Tab.Screen
    //     name="PastStack"
    //     component={PastStack}
    //     options={{
    //       tabBarIcon: ({ color, size, focused }) => (
    //         <Ionicons name="calendar-outline" color={colors.white} size={25} />
    //       ),
    //       tabBarLabel: "Past",
    //     }}
    //   />
    //   <Tab.Screen
    //     name="FilterStack"
    //     component={FilterStack}
    //     options={{
    //       tabBarIcon: ({ color, size, focused }) => (
    //         <Ionicons name="search-outline" color={colors.white} size={25} />
    //       ),
    //       tabBarLabel: "Filter",
    //     }}
    //   />
    // </Tab.Navigator>
  );
};

export default TabNavigation;
