import React from "react";
import { StyleSheet, TextInput, View, Text } from "react-native";
import AlarmButtons from "./setAlarmButtons/alarmButtons";

const SetAlarm = () => {
  return (
    <View>
      <View style={styles.inputsContainer}>
        <TextInput
          placeholder="00"
          style={styles.inputsStyles}
          keyboardType="number-pad"
          maxLength={2}
          autoCapitalize="none"
          autoCorrect={false}
          caretHidden={true}
          autoFocus={true}
        />
        <Text style={styles.timeSeparator}>:</Text>
        <TextInput
          placeholder="00"
          style={styles.inputsStyles}
          keyboardType="number-pad"
          maxLength={2}
          autoCapitalize="none"
          autoCorrect={false}
          caretHidden={true}
          autoFocus={true}
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
  timeSeparator: {
    fontSize: 24,
  },
});
