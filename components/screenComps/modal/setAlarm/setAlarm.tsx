import React, { useState } from "react";
import { StyleSheet, TextInput, View, Text, Pressable } from "react-native";
import AlarmButtons from "./setAlarmButtons/alarmButtons";
import SetAlarmInput from "./setAlarmInput/setAlarmInput";
import { useCurrentAlarm } from "../../../../context/currentAlarm.context";
import { Colors } from "../../../../utils/colors";
import Meridiem from "./meridiem/meridiem";

const SetAlarm = () => {
  const [isHourFocused, setIsHourFocused] = useState(false);
  const [isMinuteFocused, setIsMinuteFocused] = useState(false);

  const {
    alarmMinuteValue,
    setAlarmMinuteValue,
    alarmHourValue,
    setAlarmHourValue,
  } = useCurrentAlarm();

  const handleHourFocus = () => {
    setIsMinuteFocused(false);
    setIsHourFocused(true);
  };

  const handleMinuteFocus = () => {
    setIsHourFocused(false);
    setIsMinuteFocused(true);
  };

  const handleHourBlur = () => {
    setIsMinuteFocused(false);
    setIsHourFocused(false);
  };

  const handleMinuteBlur = () => {
    setIsMinuteFocused(false);
    setIsHourFocused(false);
  };

  const hoursTextChange = (hours: string) => {
    setAlarmHourValue(hours);
    // console.log(alarmHourValue);
  };

  const minutesTextChange = (minutes: string) => {
    setAlarmMinuteValue(minutes);
    // console.log(alarmMinuteValue);
  };

  return (
    <View>
      <View style={styles.inputsContainer}>
        <SetAlarmInput
          handleBlur={handleHourBlur}
          handleFocus={handleHourFocus}
          isFocused={isHourFocused}
          isValue={alarmHourValue}
          handleTextChange={hoursTextChange}
        />
        <Text style={styles.timeSeparator}>:</Text>
        <SetAlarmInput
          handleBlur={handleMinuteBlur}
          handleFocus={handleMinuteFocus}
          isFocused={isMinuteFocused}
          isValue={alarmMinuteValue}
          handleTextChange={minutesTextChange}
        />

        <Meridiem />
      </View>

      <AlarmButtons />
    </View>
  );
};

export default SetAlarm;

const styles = StyleSheet.create({
  inputsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 4,
  },
  timeSeparator: {
    fontSize: 24,
  },
});
