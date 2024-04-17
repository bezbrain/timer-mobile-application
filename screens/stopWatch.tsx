import React, { useEffect } from "react";
import { StyleSheet, Text, View, useWindowDimensions } from "react-native";
import { Feather, Ionicons } from "@expo/vector-icons";
import { ContainerWrappers } from "../components/helpers";
import { RoundedButton } from "../components/general";
import { Colors } from "../utils/colors";
import { useCurrentAlarm } from "../context/currentAlarm.context";

const StopWatch = () => {
  const {
    stopWatchCount,
    setStopWatchCount,
    startStopWatchCount,
    setStartStopWatchCount,
    trackStopWatchCount,
    setTrackStopWatchCount,
  } = useCurrentAlarm();

  const { width, height } = useWindowDimensions();

  // TRIGGER THE STOPWATCH START OR STOP
  const handleStopWatch = () => {
    if (startStopWatchCount) {
      setStartStopWatchCount(false);
    } else {
      setStartStopWatchCount(true);
    }
  };

  // TRIGGER THE RELOAD BUTTON
  const handleReloadClick = () => {
    setStopWatchCount(0);
    setStartStopWatchCount(false);
    setTrackStopWatchCount(true);
  };

  useEffect(() => {
    // Initiate Stop watch
    if (startStopWatchCount) {
      setTimeout(() => {
        setStopWatchCount(stopWatchCount + 1);
        setTrackStopWatchCount(false);
      }, 1000);
    }
    if (trackStopWatchCount) {
      setStopWatchCount(0);
    }
  }, [stopWatchCount, startStopWatchCount]);

  let stopWatchWidth = 250;

  if (width < 360) {
    stopWatchWidth = 120;
  }
  if (height < 400) {
    stopWatchWidth = 100;
  }

  const stopWatchStyle = {
    width: stopWatchWidth,
    height: stopWatchWidth,
    borderRadius: stopWatchWidth / 2,
  };

  return (
    <ContainerWrappers>
      <View style={styles.stopWatchContainer}>
        <View style={[styles.stopWatchCircle, stopWatchStyle]}>
          <Text style={styles.stopWatchCount}>{stopWatchCount}</Text>
        </View>
      </View>

      <View style={styles.reloadIcon}>
        <Ionicons
          name="reload"
          size={36}
          color={Colors.whitish}
          onPress={handleReloadClick}
        />

        <RoundedButton handlePress={handleStopWatch}>
          {!startStopWatchCount && (
            <Feather name="play" size={24} color={Colors.whitish} />
          )}
          {startStopWatchCount && (
            <Feather name="pause" size={24} color={Colors.whitish} />
          )}
        </RoundedButton>
      </View>
    </ContainerWrappers>
  );
};

export default StopWatch;

const styles = StyleSheet.create({
  stopWatchContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  stopWatchCircle: {
    height: 250,
    width: 250,
    borderRadius: 125,
    borderWidth: 3,
    borderColor: Colors.whitish700,
    justifyContent: "center",
    alignItems: "center",
  },
  stopWatchCount: {
    fontFamily: "degular-bold",
    color: Colors.whitish,
    fontSize: 48,
  },
  reloadIcon: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 30,
  },
});
