import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Feather } from "@expo/vector-icons";
import { Colors } from "../utils/colors";
import { ContainerWrappers } from "../components/helpers";
import { RoundedButton } from "../components/general";

const SecondsCountDown = () => {
  const [countDown, setCountDown] = useState<number>(5);
  const [startCountDown, setStartCountDown] = useState<boolean>(false);

  const handleStartCountDown = () => {
    setStartCountDown(true);
  };

  useEffect(() => {
    if (countDown !== 0 && startCountDown) {
      setTimeout(() => {
        setCountDown(countDown - 1);
      }, 1000);
    }
  }, [countDown]);

  return (
    <ContainerWrappers>
      <View style={styles.countDownContainer}>
        <View style={styles.countDownCircle}>
          <Text style={styles.countDownText}>{countDown}</Text>
        </View>
      </View>

      <RoundedButton handlePress={handleStartCountDown}>
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
