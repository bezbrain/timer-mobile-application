import React from "react";
import { StyleSheet, View } from "react-native";
import { useScreenController } from "../context/screenContoller.context";
import ActivatedAlarm from "./activatedAlarm";
import CurrentTime from "./currentTime";
import SecondsCountDown from "./secondsCountDown";
import StopWatch from "./stopWatch";

const AllScreens = () => {
  const { isCurrentPage } = useScreenController();
  //   console.log(isCurrentPage);
  const { activateAlarm, currentTime, secondsCountdown, stopWatch } =
    isCurrentPage;

  return (
    <View style={styles.pagesContainer}>
      {activateAlarm && <ActivatedAlarm />}
      {currentTime && <CurrentTime />}
      {secondsCountdown && <SecondsCountDown />}
      {stopWatch && <StopWatch />}
    </View>
  );
};

export default AllScreens;

const styles = StyleSheet.create({
  pagesContainer: {
    flex: 1,
    paddingHorizontal: 16,
    paddingBottom: 48,
    // color: "#04c1f5",
  },
});
