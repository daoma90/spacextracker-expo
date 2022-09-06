import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import PastScreen from "../screens/Past/PastScreen";
import UpcomingScreen from "../screens/Upcoming/UpcomingScreen";
import DetailScreen from "../screens/Detail/DetailScreen";
import { colors } from "../../theme";
import BackButton from "../components/atoms/BackButton";

const UpcomingStack = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator
      initialRouteName="Upcoming"
      screenOptions={({ navigation, route }) => ({
        headerShown: false,
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
        tabBarActiveTintColor: colors.cardBackground,
        headerLeft: () => <BackButton navigation={navigation} />,
      })}
    >
      <Stack.Screen name="Upcoming" component={UpcomingScreen} />
      {/* <Stack.Screen name="Details" component={DetailScreen} /> */}
    </Stack.Navigator>
  );
};

export default UpcomingStack;
