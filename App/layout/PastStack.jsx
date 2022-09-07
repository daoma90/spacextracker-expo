import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import PastScreen from "../screens/Past/PastScreen";
import BackButton from "../components/atoms/BackButton";

const PastStack = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator
      initialRouteName="Past"
      screenOptions={({ navigation, route }) => ({
        headerShown: false,
        // headerLeft: () => <BackButton navigation={navigation} />,
      })}
    >
      <Stack.Screen name="Past" component={PastScreen} />
      {/* <Stack.Screen name="Details" component={DetailScreen} /> */}
    </Stack.Navigator>
  );
};

export default PastStack;
