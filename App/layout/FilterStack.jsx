import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import PastScreen from "../screens/Past/PastScreen";
import DetailScreen from "../screens/Detail/DetailScreen";
import { colors } from "../../theme";
import BackButton from "../components/atoms/BackButton";
import FilterScreen from "../screens/Filter/FilterScreen";

const FilterStack = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator
      initialRouteName="FilterStack"
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
        tabBarActiveTintColor: colors.cardBackground,
        headerLeft: () => <BackButton navigation={navigation} />,
      })}
    >
      <Stack.Screen name="Past" component={FilterScreen} />
      {/* <Stack.Screen name="Details" component={DetailScreen} /> */}
    </Stack.Navigator>
  );
};

export default FilterStack;
