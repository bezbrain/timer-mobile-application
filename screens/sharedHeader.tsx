import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { MaterialIcons, Octicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import {
  StyleSheet,
  View,
  Text,
  Pressable,
  useWindowDimensions,
} from "react-native";
import { Colors } from "../utils/colors";
import { useScreenController } from "../context/screenContoller.context";
import { ScreenControls } from "../context/types.context";

const { whitish, whitish700 } = Colors;

const SharedHeader = () => {
  const { isCurrentPage, setIsCurrentPage, isSettings, setIsSettings } =
    useScreenController();

  const { width, height } = useWindowDimensions();

  // SET ALL OBJECT KEY VALUES TO FALSE
  const setAllToFalse = () => {
    setIsCurrentPage((prevState: ScreenControls) => ({
      ...prevState,
      activateAlarm: false,
      currentTime: false,
      secondsCountdown: false,
      stopWatch: false,
    }));
  };

  // SET ONLY ACTIVATEALARM KEY VALUE TO TRUE SO THAT ONLY THE PAGE IS NAVIGATED TO
  const handleActivatedAlarm = () => {
    setAllToFalse();
    setIsCurrentPage((prevState: ScreenControls) => ({
      ...prevState,
      activateAlarm: true,
    }));
  };

  // SET ONLY CURRENTTIME KEY VALUE TO TRUE SO THAT ONLY THE PAGE IS NAVIGATED TO
  const handleCurrentTime = () => {
    setAllToFalse();
    setIsCurrentPage((prevState: ScreenControls) => ({
      ...prevState,
      currentTime: true,
    }));
  };

  // SET ONLY SECONDSCOUNTDOWN KEY VALUE TO TRUE SO THAT ONLY THE PAGE IS NAVIGATED TO
  const handleSecondsCountDown = () => {
    setAllToFalse();
    setIsCurrentPage((prevState: ScreenControls) => ({
      ...prevState,
      secondsCountdown: true,
    }));
  };

  // SET ONLY STOPWATCH KEY VALUE TO TRUE SO THAT ONLY THE PAGE IS NAVIGATED TO
  const handleStopWatch = () => {
    setAllToFalse();
    setIsCurrentPage((prevState: ScreenControls) => ({
      ...prevState,
      stopWatch: true,
    }));
  };
  const handleThreeDots = () => {
    setIsSettings(!isSettings);
  };

  const headerStyle = {
    padding: height < 400 ? 8 : 16,
    marginTop: height < 400 ? 12 : 24,
  };

  return (
    <View style={[styles.sharedRoot, headerStyle]}>
      {isSettings && (
        <Pressable
          style={styles.settingsContainer}
          onPress={() => setIsSettings(false)}
        >
          <Text style={styles.settingsText}>Settings</Text>
        </Pressable>
      )}
      <MaterialIcons
        name="access-alarm"
        size={24}
        color={isCurrentPage.activateAlarm ? whitish : whitish700}
        onPress={handleActivatedAlarm}
      />
      <Ionicons
        name="time-outline"
        size={24}
        color={isCurrentPage.currentTime ? whitish : whitish700}
        onPress={handleCurrentTime}
      />
      <MaterialCommunityIcons
        name="timer-sand-complete"
        size={24}
        color={isCurrentPage.secondsCountdown ? whitish : whitish700}
        onPress={handleSecondsCountDown}
      />
      <Octicons
        name="stopwatch"
        size={24}
        color={isCurrentPage.stopWatch ? whitish : whitish700}
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
    // padding: 16,
    // marginTop: 24,
    borderBottomWidth: 1,
    borderBottomColor: "#999696",
    position: "relative",
  },
  settingsContainer: {
    position: "absolute",
    right: 16,
    top: 48,
    backgroundColor: "#000",
    padding: 12,
    borderRadius: 8,
  },
  settingsText: {
    color: Colors.whitish,
  },
});
