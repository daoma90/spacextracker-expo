import { useFonts } from "expo-font";
import { useCallback, useEffect } from "react";
import TabNavigation from "./App/layout/TabNavigation";
import { LaunchProvider, useLaunchContext } from "./context/LaunchContext";
import { RocketProvider } from "./context/RocketContext";
import { Theme } from "./theme";
import * as SplashScreen from "expo-splash-screen";
import { LogBox } from "react-native";

LogBox.ignoreLogs(["EventEmitter.removeListener"]);

export default function App() {
  const { nextLaunch, previousLaunch } = useLaunchContext();
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
          <TabNavigation />
        </LaunchProvider>
      </RocketProvider>
    </Theme>
  );
}
