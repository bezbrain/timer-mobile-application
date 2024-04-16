import React, { useState } from "react";
import { StyleSheet, TextInput, View, Text } from "react-native";
import AlarmButtons from "./setAlarmButtons/alarmButtons";
import SetAlarmInput from "./setAlarmInput/setAlarmInput";

const SetAlarm = () => {
  const [isHourFocused, setIsHourFocused] = useState(false);
  const [isMinuteFocused, setIsMinuteFocused] = useState(false);

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

  return (
    <View>
      <View style={styles.inputsContainer}>
        <SetAlarmInput
          handleBlur={handleHourBlur}
          handleFocus={handleHourFocus}
          isFocused={isHourFocused}
        />
        <Text style={styles.timeSeparator}>:</Text>
        <SetAlarmInput
          handleBlur={handleMinuteBlur}
          handleFocus={handleMinuteFocus}
          isFocused={isMinuteFocused}
        />
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
