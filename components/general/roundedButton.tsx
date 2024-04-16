import React from "react";
import { Pressable, StyleSheet } from "react-native";
import { Foundation } from "@expo/vector-icons";

const RoundedButton = () => {
  return (
    <Pressable style={styles.baseIconContainer}>
      <Foundation name="web" size={28} color="white" />
    </Pressable>
  );
};

export default RoundedButton;

const styles = StyleSheet.create({
  baseIconContainer: {
    backgroundColor: "#04c1f5",
    height: 60,
    width: 60,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 30,
  },
});
