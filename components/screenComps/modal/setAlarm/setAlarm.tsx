import React, { useState } from "react";
import { StyleSheet, TextInput, View, Text, Pressable } from "react-native";
import AlarmButtons from "./setAlarmButtons/alarmButtons";
import SetAlarmInput from "./setAlarmInput/setAlarmInput";
import { useCurrentAlarm } from "../../../../context/currentAlarm.context";
import { Colors } from "../../../../utils/colors";
import Meridiem from "./meridiem/meridiem";
import { alertMessage } from "../../../../utils/alertMessage";

const SetAlarm = () => {
  const [isHourFocused, setIsHourFocused] = useState(false);
  const [isMinuteFocused, setIsMinuteFocused] = useState(false);

  const {
    alarmMinuteValue,
    setAlarmMinuteValue,
    setAlarmHourValue,
    alarmHourValue,
  } = useCurrentAlarm();

  // ADD FOCUS TO THE HOUR INPUT
  const handleHourFocus = () => {
    setIsMinuteFocused(false);
    setIsHourFocused(true);
  };

  // ADD FOCUS TO THE MINUTE INPUT
  const handleMinuteFocus = () => {
    setIsHourFocused(false);
    setIsMinuteFocused(true);
  };

  // REMOVE FOCUS TO THE HOUR INPUT
  const handleHourBlur = () => {
    setIsMinuteFocused(false);
    setIsHourFocused(false);
  };

  // REMOVE FOCUS TO THE MINUTE INPUT
  const handleMinuteBlur = () => {
    setIsMinuteFocused(false);
    setIsHourFocused(false);
  };

  // HANDLE HOUR INPUT CHANGE
  const hoursTextChange = (hours: string) => {
    // Regular expression to allow only numbers
    const regex = /^[0-9]*$/;
    if (!regex.test(hours)) {
      alertMessage("Input Error!", "Value should be a number", "Okay!");
      return;
    }
    setAlarmHourValue(hours);
  };

  // HANDLE MINUTE INPUT CHANGE
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
