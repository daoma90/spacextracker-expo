import { useFonts } from "expo-font";
import { useEffect } from "react";
import RootStack from "./App/layout/RootStack";
import { LaunchProvider, useLaunchContext } from "./context/LaunchContext";
import { RocketProvider } from "./context/RocketContext";
import { Theme } from "./theme";
import * as SplashScreen from "expo-splash-screen";
import { LogBox } from "react-native";
import { NavigationContainer, DarkTheme } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";

LogBox.ignoreLogs(["EventEmitter.removeListener"]);

export default function App() {
  const [fontsLoaded] = useFonts({
    "Inter-Light": require("./assets/fonts/Inter-Light.otf"),
    "Inter-Regular": require("./assets/fonts/Inter-Regular.otf"),
    "Inter-Medium": require("./assets/fonts/Inter-Medium.otf"),
    "Inter-Bold": require("./assets/fonts/Inter-Bold.otf"),
    "Inter-Black": require("./assets/fonts/Inter-Black.otf"),
  });

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }
  return (
    <Theme>
      <RocketProvider>
        <LaunchProvider>
          <NavigationContainer theme={DarkTheme}>
            {/* <TabNavigation /> */}
            <RootStack />
          </NavigationContainer>
        </LaunchProvider>
      </RocketProvider>
      <StatusBar style="light" />
    </Theme>
  );
}
