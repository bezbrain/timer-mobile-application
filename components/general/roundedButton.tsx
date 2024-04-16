import React, { ReactNode } from "react";
import { Pressable, StyleSheet } from "react-native";

interface RoundedButtonProps {
  children: ReactNode;
  handlePress?: () => void;
}

const RoundedButton = ({ children, handlePress }: RoundedButtonProps) => {
  return (
    <Pressable
      style={({ pressed }) =>
        pressed
          ? [styles.pressedBtn, styles.baseIconContainer]
          : styles.baseIconContainer
      }
      onPress={handlePress}
      android_ripple={{ color: "#074a5d" }}
    >
      {children}
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
  pressedBtn: {
    opacity: 0.75,
  },
});
