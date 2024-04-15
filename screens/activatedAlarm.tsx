import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { CurrentAlarmTime } from "../components/screenComps/activeteAlarmComp";

const ActivatedAlarm = () => {
  return (
    <ScrollView style={styles.alarmsContainer}>
      {Array(4)
        .fill(undefined)
        .map((_, i) => (
          <CurrentAlarmTime key={i} />
        ))}
    </ScrollView>
  );
};

export default ActivatedAlarm;

const styles = StyleSheet.create({
  alarmsContainer: {
    // marginBottom: 24,
  },
});
