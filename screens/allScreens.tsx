import React from "react";
import SharedHeader from "./sharedHeader";
import { View } from "react-native";
import { ActivatedAlarm, CurrentTime, SecondsCountDown, StopWatch } from ".";

const AllScreens = () => {
  return (
    <View>
      <ActivatedAlarm />
      <CurrentTime />
      <SecondsCountDown />
      <StopWatch />
    </View>
  );
};

export default AllScreens;
