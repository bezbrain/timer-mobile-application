import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { MaterialIcons, Octicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { StyleSheet, View } from "react-native";
import { Colors } from "../utils/colors";
import { useScreenController } from "../context/screenContoller";

const { whitish } = Colors;

const SharedHeader = () => {
  const { isCurrentPage } = useScreenController();
  console.log(isCurrentPage);

  const handleActivatedAlarm = () => {
    console.log("Activated Alarm");
  };

  const handleCurrentTime = () => {
    console.log("Current Time");
  };

  const handleSecondsCountDown = () => {
    console.log("Seconds Countdown");
  };

  const handleStopWatch = () => {
    console.log("Stop Watch");
  };

  const handleThreeDots = () => {
    console.log("Three dots");
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
  },
});
