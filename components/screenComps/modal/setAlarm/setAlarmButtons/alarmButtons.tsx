import React from "react";
import { Pressable, View, Text, StyleSheet } from "react-native";
import { Colors } from "../../../../../utils/colors";
import { useCurrentAlarm } from "../../../../../context/currentAlarm.context";

const AlarmButtons = () => {
  const { showAlarmModal, setShowAlarmModal } = useCurrentAlarm();

  const handleCloseModal = () => {
    setShowAlarmModal(false);
  };

  return (
    <View style={styles.modalButtonsContainer}>
      <Pressable onPress={handleCloseModal}>
        <Text style={styles.buttonText}>Cancel</Text>
      </Pressable>
      <Pressable onPress={handleCloseModal}>
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
