import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, useWindowDimensions } from "react-native";
import { Feather } from "@expo/vector-icons";
import { Colors } from "../utils/colors";
import { ContainerWrappers } from "../components/helpers";
import { RoundedButton } from "../components/general";
import { CountDownModal } from "../components/screenComps/modal";
import { useCurrentAlarm } from "../context/currentAlarm.context";

const SecondsCountDown = () => {
  const { countDown, setCountDown, startCountDown, setStartCountDown } =
    useCurrentAlarm();

  const { width, height } = useWindowDimensions();

  // TRIGGER THE COUNTDOWN
  const handleStartCountDown = () => {
    setStartCountDown(true);
  };

  useEffect(() => {
    // Initiate Countdown
    if (countDown !== 0 && startCountDown) {
      setTimeout(() => {
        setCountDown(countDown - 1);
      }, 1000);
    }
  }, [countDown, startCountDown]);

  let countDownWidth = 250;

  if (width < 360) {
    countDownWidth = 120;
  }
  if (height < 400) {
    countDownWidth = 100;
  }

  const countDownStyle = {
    width: countDownWidth,
    height: countDownWidth,
    borderRadius: countDownWidth / 2,
  };

  return (
    <ContainerWrappers>
      {!countDown && <CountDownModal />}
      <View style={styles.countDownContainer}>
        <View style={[styles.countDownCircle, countDownStyle]}>
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
    // height: 250,
    // width: 250,
    // borderRadius: 125,
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
