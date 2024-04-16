import React from "react";
import {
  Keyboard,
  Modal,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { Colors } from "../../../utils/colors";
import { SetAlarm } from "./";

const SetAlarmModal = () => {
  return (
    <Modal animationType="slide" transparent={true} visible={true}>
      <SafeAreaView style={styles.modalContainer}>
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
          <View style={styles.modalTextContainer}>
            <Text style={styles.modalText}>Set Alarm</Text>

            <SetAlarm />
          </View>
        </TouchableWithoutFeedback>
      </SafeAreaView>
    </Modal>
  );
};

export default SetAlarmModal;

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalTextContainer: {
    backgroundColor: Colors.whitish700,
    width: 300,
    height: 150,
    justifyContent: "space-evenly",
    alignItems: "center",
    borderRadius: 8,
  },
  modalText: {
    color: Colors.accent400,
    fontFamily: "degular-bold",
    fontSize: 24,
  },
});
