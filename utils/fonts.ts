import { useFonts } from "expo-font";

export const fontsType = () => {
  const [fontsLoaded] = useFonts({
    "degular-bold": require("../assets/fonts/Degular-Bold.otf"),
    "degular-light": require("../assets/fonts/Degular-Light.otf"),
    "degular-regular": require("../assets/fonts/Degular-Regular.otf"),
    "degular-semibold": require("../assets/fonts/Degular-Semibold.otf"),
    "degular-thin": require("../assets/fonts/Degular-Thin.otf"),
  });
  return fontsLoaded;
};
