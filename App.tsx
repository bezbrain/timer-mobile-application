import { ImageBackground, SafeAreaView, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import AppLoading from "expo-app-loading";
import { fontsType } from "./utils/fonts";
import { AllScreens, SharedHeader } from "./screens";
import { Colors } from "./utils/colors";
import { ScreenControllerProvider } from "./context/screenContoller";
import { CurrentTimeProvider } from "./context/currentAlarm";

const { primary600, accent400 } = Colors;

const App = () => {
  // FONT IMPORT SETUP
  const fontsLoaded = fontsType();

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <ScreenControllerProvider>
      <CurrentTimeProvider>
        <LinearGradient
          colors={[accent400, primary600]}
          style={styles.rootScreen}
        >
          {/* <StatusBar style="auto" /> */}
          <ImageBackground
            source={require("./assets/images/timer-bg-img.jpg")}
            resizeMode="cover"
            style={styles.rootScreen}
            imageStyle={styles.bgImage}
          >
            <SafeAreaView style={styles.rootScreen}>
              <SharedHeader />
              {/* ALL SCREENS */}
              <AllScreens />
            </SafeAreaView>
          </ImageBackground>
        </LinearGradient>
      </CurrentTimeProvider>
    </ScreenControllerProvider>
  );
};

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  bgImage: {
    opacity: 0.15,
  },
});

export default App;
