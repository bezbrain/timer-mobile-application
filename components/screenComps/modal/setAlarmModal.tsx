import React from "react";
import {
  Keyboard,
  Modal,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { Colors } from "../../../utils/colors";
import { SetAlarm } from "./";

const SetAlarmModal = () => {
  return (
    <ScrollView>
      <Modal
        animationType="slide"
        transparent={true}
        visible={true}
        supportedOrientations={["portrait", "landscape"]}
      >
        <SafeAreaView style={styles.modalContainer}>
          <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <View style={styles.modalTextContainer}>
              <Text style={styles.modalText}>Set Alarm</Text>

              <SetAlarm />
            </View>
          </TouchableWithoutFeedback>
        </SafeAreaView>
      </Modal>
    </ScrollView>
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
    height: 200,
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
