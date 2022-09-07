import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/Home/HomeScreen";
import BackButton from "../components/atoms/BackButton";

const Stack = createNativeStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={({ navigation, route }) => ({
        headerShown: false,
        // headerLeft: () => <BackButton navigation={navigation} />,
      })}
    >
      <Stack.Screen name="Home" component={HomeScreen} />
      {/* <Stack.Screen name="Details" component={DetailScreen} /> */}
    </Stack.Navigator>
  );
};

export default HomeStack;
