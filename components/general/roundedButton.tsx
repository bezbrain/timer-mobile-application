import React, { ReactNode } from "react";
import { Pressable, StyleSheet, useWindowDimensions } from "react-native";

interface RoundedButtonProps {
  children: ReactNode;
  handlePress?: () => void;
}

const RoundedButton = ({ children, handlePress }: RoundedButtonProps) => {
  const { width, height } = useWindowDimensions();

  let btnStyle = 60;

  if (width < 360) {
    btnStyle = 60;
  }
  if (height < 400) {
    btnStyle = 40;
  }

  const btnRoundedStyle = {
    width: btnStyle,
    height: btnStyle,
    borderRadius: btnStyle / 2,
  };

  return (
    <Pressable
      style={({ pressed }) =>
        pressed
          ? [styles.pressedBtn, styles.baseIconContainer, btnRoundedStyle]
          : [styles.baseIconContainer, btnRoundedStyle]
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
    alignItems: "center",
    justifyContent: "center",
  },
  pressedBtn: {
    opacity: 0.75,
  },
});
