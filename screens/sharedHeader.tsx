import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { MaterialIcons, Octicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { StyleSheet, View } from "react-native";
import { Colors } from "../utils/colors";
import { useScreenController } from "../context/screenContoller";
import { ScreenControls } from "../context/types.context";

const { whitish } = Colors;

const SharedHeader = () => {
  const { isCurrentPage, setIsCurrentPage } = useScreenController();

  const setAllToFalse = () => {
    setIsCurrentPage((prevState: ScreenControls) => ({
      ...prevState,
      activateAlarm: false,
      currentTime: false,
      secondsCountdown: false,
      stopWatch: false,
    }));
  };

  const handleActivatedAlarm = () => {
    setAllToFalse();
    setIsCurrentPage((prevState: ScreenControls) => ({
      ...prevState,
      activateAlarm: true,
    }));
  };

  const handleCurrentTime = () => {
    setAllToFalse();
    setIsCurrentPage((prevState: ScreenControls) => ({
      ...prevState,
      currentTime: true,
    }));
  };

  const handleSecondsCountDown = () => {
    setAllToFalse();
    setIsCurrentPage((prevState: ScreenControls) => ({
      ...prevState,
      secondsCountdown: true,
    }));
  };

  const handleStopWatch = () => {
    setAllToFalse();
    setIsCurrentPage((prevState: ScreenControls) => ({
      ...prevState,
      stopWatch: true,
    }));
  };

  const handleThreeDots = () => {
    //
  };

  return (
    <View style={styles.sharedRoot}>
      <MaterialIcons
        name="access-alarm"
        size={24}
        color={whitish}
        onPress={handleActivatedAlarm}
      />
      <Ionicons
        name="time-outline"
        size={24}
        color={whitish}
        onPress={handleCurrentTime}
      />
      <MaterialCommunityIcons
        name="timer-sand-complete"
        size={24}
        color={whitish}
        onPress={handleSecondsCountDown}
      />
      <Octicons
        name="stopwatch"
        size={24}
        color={whitish}
        onPress={handleStopWatch}
      />
      <Entypo
        name="dots-three-vertical"
        size={24}
        color={whitish}
        onPress={handleThreeDots}
      />
    </View>
  );
};

export default SharedHeader;

const styles = StyleSheet.create({
  sharedRoot: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 16,
    marginTop: 24,
    borderBottomWidth: 1,
    borderBottomColor: "#999696",
  },
});
