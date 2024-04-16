import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Colors } from "../utils/colors";
import { ContainerWrappers } from "../components/helpers";
import { RoundedButton } from "../components/general";

const SecondsCountDown = () => {
  return (
    <ContainerWrappers>
      <View style={styles.countDownContainer}>
        <View style={styles.countDownCircle}></View>
      </View>
      <RoundedButton />
    </ContainerWrappers>
  );
};

export default SecondsCountDown;

const styles = StyleSheet.create({
  countDownContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  countDownCircle: {
    height: 250,
    width: 250,
    borderRadius: 125,
    borderWidth: 3,
    borderColor: Colors.whitish700,
  },
});
