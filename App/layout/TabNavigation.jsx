import React, { useEffect } from "react";
import HomeScreen from "../screens/Home/HomeScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import UpcomingScreen from "../screens/Upcoming/UpcomingScreen";
import Ionicons from "@expo/vector-icons/Ionicons";
import PastScreen from "../screens/Past/PastScreen";
import { useRocketContext } from "../../context/RocketContext";
import { colors } from "../../theme";
import PastStack from "./PastStack";
import UpcomingStack from "./UpcomingStack";
import HomeStack from "./HomeStack";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import DetailScreen from "../screens/Detail/DetailScreen";
import CustomTouchable from "../components/atoms/CustomTouchable.jsx";
import BackButton from "../components/atoms/BackButton";
import Background from "../components/atoms/Background";
// import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
// const Tab = createMaterialBottomTabNavigator();
const Tab = createBottomTabNavigator();
const TabNavigation = () => {
  const { fetchRockets } = useRocketContext();

  useEffect(() => {
    fetchRockets();
  }, []);

  return (
    <NavigationContainer>
      <Background>
        <Tab.Navigator
          initialRouteName="HomeStack"
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
            tabBarActiveTintColor: colors.cardBackground,
          })}
        >
          <Tab.Screen
            name="HomeStack"
            component={HomeStack}
            options={{
              tabBarIcon: ({ color, size, focused }) => (
                <Ionicons name="home-outline" color={colors.white} size={focused ? 35 : 20} />
              ),
              tabBarLabel: "Home",
            }}
          />
          <Tab.Screen
            name="UpcomingStack"
            component={UpcomingStack}
            options={{
              tabBarIcon: ({ color, size, focused }) => (
                <Ionicons name="time-outline" color={colors.white} size={focused ? 35 : 25} />
              ),
              tabBarLabel: "Upcoming",
            }}
          />
          <Tab.Screen
            name="PastStack"
            component={PastStack}
            options={{
              tabBarIcon: ({ color, size, focused }) => (
                <Ionicons name="calendar-outline" color={colors.white} size={focused ? 35 : 20} />
              ),
              tabBarLabel: "Past",
            }}
          />
        </Tab.Navigator>
      </Background>
    </NavigationContainer>
  );
};

export default TabNavigation;
