import React, { useState } from "react";
import { StyleSheet, TextInput, View, Text } from "react-native";
import AlarmButtons from "./setAlarmButtons/alarmButtons";
import { Colors } from "../../../../utils/colors";

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
        <TextInput
          placeholder="00"
          style={[styles.inputsStyles, isHourFocused && styles.focusedInput]}
          keyboardType="number-pad"
          maxLength={2}
          autoCapitalize="none"
          autoCorrect={false}
          caretHidden={true}
          onFocus={handleHourFocus}
          onBlur={handleHourBlur}
        />
        <Text style={styles.timeSeparator}>:</Text>
        <TextInput
          placeholder="00"
          style={[styles.inputsStyles, isMinuteFocused && styles.focusedInput]}
          keyboardType="number-pad"
          maxLength={2}
          autoCapitalize="none"
          autoCorrect={false}
          caretHidden={true}
          onFocus={handleMinuteFocus}
          onBlur={handleMinuteBlur}
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
  inputsStyles: {
    fontSize: 36,
    fontFamily: "degular-regular",
  },
  focusedInput: {
    borderWidth: 1,
    borderColor: Colors.accent400,
    borderRadius: 6,
    paddingHorizontal: 4,
  },
  timeSeparator: {
    fontSize: 24,
  },
});
