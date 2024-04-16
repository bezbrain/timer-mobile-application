import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Feather } from "@expo/vector-icons";
import { Colors } from "../utils/colors";
import { ContainerWrappers } from "../components/helpers";
import { RoundedButton } from "../components/general";

const SecondsCountDown = () => {
  return (
    <ContainerWrappers>
      <View style={styles.countDownContainer}>
        <View style={styles.countDownCircle}>
          <Text style={styles.countDownText}>5</Text>
        </View>
      </View>

      <RoundedButton>
        <Feather name="play" size={24} color={Colors.whitish} />
      </RoundedButton>
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
    justifyContent: "center",
    alignItems: "center",
  },
  countDownText: {
    fontFamily: "degular-bold",
    color: Colors.whitish,
    fontSize: 48,
  },
});
