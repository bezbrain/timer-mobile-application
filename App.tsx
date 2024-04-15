import {
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import AppLoading from "expo-app-loading";
import { fontsType } from "./utils/fonts";
import { SharedHeader } from "./screens";

const App = () => {
  // FONT IMPORT SETUP
  const fontsLoaded = fontsType();

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <View style={styles.rootScreen}>
      {/* <StatusBar style="auto" /> */}
      <ImageBackground
        source={require("./assets/images/timer-bg-img.jpg")}
        resizeMode="cover"
        style={styles.rootScreen}
        imageStyle={styles.bgImage}
      >
        <SafeAreaView style={styles.rootScreen}>
          <SharedHeader />
        </SafeAreaView>
      </ImageBackground>
    </View>
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
