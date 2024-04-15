import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { MaterialIcons, Octicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { StyleSheet, Text, View } from "react-native";
import { Colors } from "../utils/colors";

const { whitish } = Colors;

const SharedHeader = () => {
  return (
    <View style={styles.sharedRoot}>
      <MaterialIcons name="access-alarm" size={24} color={whitish} />
      <Ionicons name="time-outline" size={24} color={whitish} />
      <MaterialCommunityIcons
        name="timer-sand-complete"
        size={24}
        color={whitish}
      />
      <Octicons name="stopwatch" size={24} color={whitish} />
      <Entypo name="dots-three-vertical" size={24} color={whitish} />
    </View>
  );
};

export default SharedHeader;

const styles = StyleSheet.create({
  sharedRoot: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
});
