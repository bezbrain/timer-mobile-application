import React, { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Feather } from "@expo/vector-icons";
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
  } = useCurrentAlarm();

  // TRIGGER THE STOPWATCH START OR STOP
  const handleStopWatch = () => {
    if (startStopWatchCount) {
      setStartStopWatchCount(false);
    } else {
      setStartStopWatchCount(true);
    }
  };

  useEffect(() => {
    // Initiate Stop watch
    if (startStopWatchCount) {
      setTimeout(() => {
        setStopWatchCount(stopWatchCount + 1);
      }, 1000);
    }
  }, [stopWatchCount, startStopWatchCount]);

  return (
    <ContainerWrappers>
      <View style={styles.stopWatchContainer}>
        <View style={styles.stopWatchCircle}>
          <Text style={styles.stopWatchCount}>{stopWatchCount}</Text>
        </View>
      </View>

      <RoundedButton handlePress={handleStopWatch}>
        {!startStopWatchCount && (
          <Feather name="play" size={24} color={Colors.whitish} />
        )}
        {startStopWatchCount && (
          <Feather name="pause" size={24} color={Colors.whitish} />
        )}
      </RoundedButton>
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
});
