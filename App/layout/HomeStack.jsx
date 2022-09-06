import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/Home/HomeScreen";
import DetailScreen from "../screens/Detail/DetailScreen";
import { colors } from "../../theme";
import Ionicons from "@expo/vector-icons/Ionicons";
import CustomTouchable from "../components/atoms/CustomTouchable.jsx";
import BackButton from "../components/atoms/BackButton";

const Stack = createNativeStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
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
        headerLeft: () => <BackButton navigation={navigation} />,
      })}
    >
      <Stack.Screen name="Home" component={HomeScreen} />
      {/* <Stack.Screen name="Details" component={DetailScreen} /> */}
    </Stack.Navigator>
  );
};

export default HomeStack;
