import React, { useEffect, useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { Foundation } from "@expo/vector-icons";
import { Colors } from "../utils/colors";
import { formatDate } from "../utils/convertDateFormats";

const CurrentTime = () => {
  const [isCurrentTime, setIsCurrentTime] = useState<Date>(new Date());

  // console.log(isCurrentTime.getTimezoneOffset());
  const timeZone = new Date().toLocaleTimeString("en-US", {
    timeZoneName: "long",
  });
  // console.log(timeZone.split(" "));
  const getArrOfTimeZone = timeZone.split(" ");

  // console.log(formatDate());
  const dateAndTime = formatDate();

  useEffect(() => {
    const timeoutID = setTimeout(() => {
      setIsCurrentTime(new Date());
    }, 1000); // Update every second

    return () => {
      clearTimeout(timeoutID); // Cleanup the timeout on component unmount
    };
  }, [isCurrentTime]);

  const formattedHour = isCurrentTime.getHours();
  const formattedMinute = isCurrentTime.getMinutes();
  const formattedAmPm = formattedHour < 12 ? "AM" : "PM";

  return (
    <View style={styles.currentTimeContainer}>
      <View>
        <Text>
          <Text style={styles.timeText}>
            {formattedHour}:{formattedMinute.toString().padStart(2, "0")}
          </Text>
          <Text style={styles.timeType}>{formattedAmPm}</Text>
        </Text>

        <Text style={styles.continent}>{dateAndTime}</Text>
        <Text style={styles.continent}>
          {getArrOfTimeZone[1]} {getArrOfTimeZone[2]} {getArrOfTimeZone[3]}{" "}
          {getArrOfTimeZone[4]}
        </Text>
      </View>

      <Pressable style={styles.baseIconContainer}>
        <Foundation name="web" size={28} color="white" />
      </Pressable>
    </View>
  );
};

export default CurrentTime;

const styles = StyleSheet.create({
  currentTimeContainer: {
    flex: 1,
    marginTop: 48,
    justifyContent: "space-between",
    alignItems: "center",
  },
  timeText: {
    fontSize: 84,
    color: Colors.whitish,
    fontFamily: "degular-thin",
  },
  timeType: {
    color: Colors.whitish,
    fontFamily: "degular-bold",
    fontSize: 32,
  },

  continent: {
    textAlign: "center",
    fontFamily: "degular-regular",
    fontSize: 20,
    color: Colors.whitish,
  },
  baseIconContainer: {
    backgroundColor: "#04c1f5",
    height: 60,
    width: 60,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 30,
  },
});
