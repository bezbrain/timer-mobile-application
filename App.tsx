import { StyleSheet, Text, View } from "react-native";
import AppLoading from "expo-app-loading";
import { fontsType } from "./utils/fonts";

const App = () => {
  // FONT IMPORT SETUP
  const fontsLoaded = fontsType();

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <View style={styles.rootContainer}>
      {/* <StatusBar style="auto" /> */}
      <Text>The root of the app</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default App;
