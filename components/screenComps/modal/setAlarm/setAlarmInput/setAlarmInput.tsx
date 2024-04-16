import React, { useState } from "react";
import { StyleSheet, TextInput, View } from "react-native";
import { Colors } from "../../../../../utils/colors";

interface SetAlarmInputProps {
  isFocused: boolean;
  handleFocus: () => void;
  handleBlur: () => void;
}

const SetAlarmInput = ({
  isFocused,
  handleFocus,
  handleBlur,
}: SetAlarmInputProps) => {
  return (
    <TextInput
      placeholder="00"
      style={[styles.inputsStyles, isFocused && styles.focusedInput]}
      keyboardType="number-pad"
      maxLength={2}
      autoCapitalize="none"
      autoCorrect={false}
      caretHidden={true}
      onFocus={handleFocus}
      onBlur={handleBlur}
    />
  );
};

export default SetAlarmInput;

const styles = StyleSheet.create({
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
});
