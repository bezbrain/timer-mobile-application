import React from "react";
import { Pressable, View, Text, StyleSheet } from "react-native";
import { Colors } from "../../../../../utils/colors";
import { useCurrentAlarm } from "../../../../../context/currentAlarm.context";
import { AlarmFormat } from "../../../../../context/types.context";
import { alertMessage } from "../../../../../utils/alertMessage";

const AlarmButtons = () => {
  const {
    setShowAlarmModal,
    setAllAlarmTimes,
    alarmMinuteValue,
    alarmHourValue,
    pickMeridiem,
    setAlarmMinuteValue,
    setAlarmHourValue,
  } = useCurrentAlarm();

  const handleCloseModal = () => {
    setShowAlarmModal(false);
  };

  const handleSetAlarm = () => {
    if (!alarmHourValue || !alarmMinuteValue) {
      return alertMessage(
        "Empty Field alart",
        "Hour or minute field should not be empty",
        "Okay"
      );
    }
    if (alarmHourValue >= 24) {
      return alertMessage(
        "Incorrect Hour",
        "Hour should be from 00 to 23",
        "Okay"
      );
    }
    if (alarmMinuteValue > 60) {
      return alertMessage(
        "Incorrect Minutes",
        "Minute should be from 00 to 59",
        "Okay"
      );
    }
    setShowAlarmModal(false);
    setAllAlarmTimes((prevAlarm: AlarmFormat[]) => [
      ...prevAlarm,
      {
        id: Date.now(),
        hour: alarmHourValue,
        minute: alarmMinuteValue,
        meridiem: pickMeridiem ? "PM" : "AM",
        isAlarmOn: true,
      },
    ]);
    setAlarmMinuteValue("");
    setAlarmHourValue("");
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
    justifyContent: "space-around",
    gap: 32,
    marginTop: 12,
  },
  buttonText: {
    color: Colors.accent400,
    fontSize: 24,
    fontFamily: "degular-bold",
  },
});
