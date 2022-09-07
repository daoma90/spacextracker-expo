import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import UpcomingScreen from "../screens/Upcoming/UpcomingScreen";
import BackButton from "../components/atoms/BackButton";

const UpcomingStack = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator
      initialRouteName="Upcoming"
      screenOptions={({ navigation, route }) => ({
        headerShown: false,
        // headerLeft: () => <BackButton navigation={navigation} />,
      })}
    >
      <Stack.Screen name="Upcoming" component={UpcomingScreen} />
      {/* <Stack.Screen name="Details" component={DetailScreen} /> */}
    </Stack.Navigator>
  );
};

export default UpcomingStack;
