import React, { ReactNode } from "react";
import { Pressable, StyleSheet } from "react-native";

interface RoundedButtonProps {
  children: ReactNode;
}

const RoundedButton = ({ children }: RoundedButtonProps) => {
  return <Pressable style={styles.baseIconContainer}>{children}</Pressable>;
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
