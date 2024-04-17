import React, { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { MaterialCommunityIcons, AntDesign } from "@expo/vector-icons";
import { Colors } from "../../../utils/colors";
import { useCurrentAlarm } from "../../../context/currentAlarm.context";
import { AlarmFormat } from "../../../context/types.context";

interface CurrentAlarmTimeProps {
  id: number;
  hour: string;
  minute: string;
  meridiem: string;
  isAlarmOn: boolean;
}

const CurrentAlarmTime = ({
  id,
  hour,
  minute,
  meridiem,
  isAlarmOn,
}: CurrentAlarmTimeProps) => {
  const {
    isAlarmSetOn,
    setIsAlarmSetOn,
    isAlarmSetOff,
    setIsAlarmSetOff,
    allAlarmTimes,
    setAllAlarmTimes,
  } = useCurrentAlarm();

  // DELETE ALARM INITIALLY SET
  const handleDeleteAlarm = (index: number) => {
    const newAllAlarms = allAlarmTimes.filter(
      (each: AlarmFormat) => each.id !== index
    );

    setAllAlarmTimes(newAllAlarms);
  };

  const deactivateAlarmClick = (index: number) => {
    const updatedAlarm = allAlarmTimes.map((each: AlarmFormat) => {
      if (each.id === index) {
        return {
          ...each,
          isAlarmOn: true,
        };
      }
      return each;
    });
    // console.log(updatedAlarm);
    setAllAlarmTimes(updatedAlarm);
  };

  const activeAlarmClick = (index: number) => {
    const updatedAlarm = allAlarmTimes.map((each: AlarmFormat) => {
      if (each.id === index) {
        return {
          ...each,
          isAlarmOn: false,
        };
      }
      return each;
    });
    // console.log(updatedAlarm);
    setAllAlarmTimes(updatedAlarm);
  };

  return (
    <View style={styles.currentAlarmContainer}>
      <Text>
        <Text style={styles.timeText}>
          {hour}:{minute}
        </Text>
        <Text style={styles.timeType}>{meridiem}</Text>
      </Text>

      <View style={styles.iconsContainer}>
        <AntDesign
          name="delete"
          size={24}
          color="#dd1a13"
          onPress={() => handleDeleteAlarm(id)}
        />

        {!isAlarmOn && (
          <MaterialCommunityIcons
            name="toggle-switch-off-outline"
            size={48}
            color="#dd1a13"
            onPress={() => deactivateAlarmClick(id)}
          />
        )}
        {isAlarmOn && (
          <MaterialCommunityIcons
            name="toggle-switch-outline"
            size={48}
            color="#92b5bf"
            onPress={() => activeAlarmClick(id)}
          />
        )}
      </View>
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
  iconsContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
  },
});
