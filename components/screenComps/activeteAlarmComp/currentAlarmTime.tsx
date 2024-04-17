import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Colors } from "../../../utils/colors";
import { useCurrentAlarm } from "../../../context/currentAlarm.context";

interface CurrentAlarmTimeProps {
  hour: string;
  minute: string;
  meridiem: string;
}

const CurrentAlarmTime = ({
  hour,
  minute,
  meridiem,
}: CurrentAlarmTimeProps) => {
  const { isAlarmSet, setIsAlarmSet } = useCurrentAlarm();

  return (
    <View style={styles.currentAlarmContainer}>
      <Text>
        <Text style={styles.timeText}>
          {hour}:{minute}
        </Text>
        <Text style={styles.timeType}>{meridiem}</Text>
      </Text>
      {!isAlarmSet && (
        <MaterialCommunityIcons
          name="toggle-switch-off-outline"
          size={48}
          color="#92b5bf"
          onPress={() => setIsAlarmSet(!isAlarmSet)}
        />
      )}
      {isAlarmSet && (
        <MaterialCommunityIcons
          name="toggle-switch-outline"
          size={48}
          color="#92b5bf"
          onPress={() => setIsAlarmSet(!isAlarmSet)}
        />
      )}
    </View>
  );
};

export default CurrentAlarmTime;

const styles = StyleSheet.create({
  currentAlarmContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomWidth: 0.5,
    borderBottomColor: "#999696",
    marginTop: 16,
  },
  timeText: {
    fontSize: 60,
    color: Colors.whitish,
    fontFamily: "degular-thin",
  },
  timeType: {
    color: Colors.whitish,
    fontFamily: "degular-bold",
    fontSize: 20,
  },
});
