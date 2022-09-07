import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import DetailScreen from "../screens/Detail/DetailScreen";
import { colors } from "../../theme";
import BackButton from "../components/atoms/BackButton";
import TabNavigation from "./TabNavigation";

const Stack = createNativeStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Root"
      screenOptions={({ navigation, route }) => ({
        headerShown: true,
        tabBarLabelStyle: {
          color: colors.white,
        },
        headerStyle: {
          backgroundColor: colors.primaryAccent,
        },
        headerTitleStyle: {
          color: colors.white,
        },
        tabBarStyle: {
          height: 90,
          backgroundColor: colors.primaryAccent,
        },
        headerLeft: () => <BackButton navigation={navigation} />,
      })}
    >
      <Stack.Screen name="Rocket go BRRR" component={TabNavigation} />
      <Stack.Screen
        name="Details"
        component={DetailScreen}
        // options={{
        //   headerStyle: {
        //     backgroundColor: "transparent",
        //   },
        // }}
      />
    </Stack.Navigator>
  );
};

export default HomeStack;
