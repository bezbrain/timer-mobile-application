import React from "react";
import { Pressable, View, Text, StyleSheet } from "react-native";
import { Colors } from "../../../../../utils/colors";
import { useCurrentAlarm } from "../../../../../context/currentAlarm.context";

const Meridiem = () => {
  const { pickMeridiem, setPickMeridiem } = useCurrentAlarm();

  const handleAmClick = () => {
    setPickMeridiem(true);
  };

  const handlePmClick = () => {
    setPickMeridiem(false);
  };

  return (
    <View>
      <Pressable onPress={handleAmClick}>
        <Text
          style={[styles.meridiemText, pickMeridiem && styles.controlMeridiem]}
        >
          AM
        </Text>
      </Pressable>
      <Pressable onPress={handlePmClick}>
        <Text
          style={[styles.meridiemText, !pickMeridiem && styles.controlMeridiem]}
        >
          PM
        </Text>
      </Pressable>
    </View>
  );
};

export default Meridiem;

const styles = StyleSheet.create({
  meridiemText: {
    color: Colors.accent400,
    fontFamily: "degular-bold",
    fontSize: 24,
  },
  controlMeridiem: {
    opacity: 0.5,
  },
});
