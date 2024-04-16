import React from "react";
import { Pressable, View, Text, StyleSheet } from "react-native";
import { Colors } from "../../../../../utils/colors";

const AlarmButtons = () => {
  return (
    <View style={styles.modalButtonsContainer}>
      <Pressable>
        <Text style={styles.buttonText}>Cancel</Text>
      </Pressable>
      <Pressable>
        <Text style={styles.buttonText}>OK</Text>
      </Pressable>
    </View>
  );
};

export default AlarmButtons;

const styles = StyleSheet.create({
  modalButtonsContainer: {
    flexDirection: "row",
    gap: 16,
  },
  buttonText: {
    color: Colors.accent400,
    fontSize: 24,
    fontFamily: "degular-bold",
  },
});
