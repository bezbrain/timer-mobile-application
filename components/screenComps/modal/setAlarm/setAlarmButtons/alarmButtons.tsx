import React from "react";
import { Pressable, View, Text, StyleSheet } from "react-native";
import { Colors } from "../../../../../utils/colors";
import { useCurrentAlarm } from "../../../../../context/currentAlarm.context";

const AlarmButtons = () => {
  const { setShowAlarmModal, allAlarmTimes, setAllAlarmTimes } =
    useCurrentAlarm();

  const handleCloseModal = () => {
    setShowAlarmModal(false);
  };

  const handleSetAlarm = () => {
    setShowAlarmModal(false);
    // setAllAlarmTimes()
  };

  return (
    <View style={styles.modalButtonsContainer}>
      <Pressable onPress={handleCloseModal}>
        <Text style={styles.buttonText}>Cancel</Text>
      </Pressable>
      <Pressable onPress={handleSetAlarm}>
        <Text style={styles.buttonText}>OK</Text>
      </Pressable>
    </View>
  );
};

export default AlarmButtons;

const styles = StyleSheet.create({
  modalButtonsContainer: {
    flexDirection: "row",
    gap: 32,
  },
  buttonText: {
    color: Colors.accent400,
    fontSize: 24,
    fontFamily: "degular-bold",
  },
});
