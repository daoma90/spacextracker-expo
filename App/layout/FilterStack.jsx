import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BackButton from "../components/atoms/BackButton";
import FilterScreen from "../screens/Filter/FilterScreen";

const FilterStack = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator
      initialRouteName="FilterStack"
      screenOptions={({ navigation, route }) => ({
        headerShown: false,
        // headerLeft: () => <BackButton navigation={navigation} />,
      })}
    >
      <Stack.Screen name="Filter" component={FilterScreen} />
      {/* <Stack.Screen name="Details" component={DetailScreen} /> */}
    </Stack.Navigator>
  );
};

export default FilterStack;
