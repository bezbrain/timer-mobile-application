import React from "react";
import { Modal, SafeAreaView, StyleSheet, Text, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Colors } from "../../../utils/colors";
import { useCurrentAlarm } from "../../../context/currentAlarm.context";

const CountDownModal = () => {
  const { setCountDown, setStartCountDown } = useCurrentAlarm();

  const handleCloseModal = () => {
    setCountDown(5);
    setStartCountDown(false);
  };

  return (
    <Modal animationType="slide" transparent={true} visible={true}>
      <SafeAreaView style={styles.modalContainer}>
        <View style={styles.modalTextContainer}>
          <AntDesign
            name="close"
            size={36}
            color="#710f0f"
            style={styles.closeModal}
            onPress={handleCloseModal}
          />
          <Text style={styles.modalText}>START NOW</Text>
        </View>
      </SafeAreaView>
    </Modal>
  );
};

export default CountDownModal;

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
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    position: "relative",
  },
  modalText: {
    color: Colors.accent400,
    fontFamily: "degular-bold",
    fontSize: 24,
  },
  closeModal: {
    position: "absolute",
    top: 8,
    right: 8,
  },
});
