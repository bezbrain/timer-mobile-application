import React from "react";
import { ScrollView, StyleSheet, Text } from "react-native";
import { CurrentAlarmTime } from "../components/screenComps/activeteAlarmComp";
import { ContainerWrappers } from "../components/helpers";
import { RoundedButton } from "../components/general";
import { AntDesign } from "@expo/vector-icons";
import { Colors } from "../utils/colors";
import { useCurrentAlarm } from "../context/currentAlarm.context";
import { SetAlarmModal } from "../components/screenComps/modal";
import { AlarmFormat } from "../context/types.context";

const ActivatedAlarm = () => {
  const { showAlarmModal, setShowAlarmModal, allAlarmTimes } =
    useCurrentAlarm();

  const handleAlarmModal = () => {
    setShowAlarmModal(true);
  };

  return (
    <ContainerWrappers>
      {showAlarmModal && <SetAlarmModal />}
      {allAlarmTimes.length === 0 ? (
        <Text style={styles.noAlarm}>No Alarm set yet</Text>
      ) : (
        <ScrollView style={styles.alarmsContainer}>
          {allAlarmTimes.map((each: AlarmFormat) => {
            const { id, hour, minute, meridiem, isAlarmOn } = each;
            return (
              <CurrentAlarmTime
                key={id}
                id={id}
                hour={hour}
                minute={minute}
                meridiem={meridiem}
                isAlarmOn={isAlarmOn}
              />
            );
          })}
        </ScrollView>
      )}
      <RoundedButton handlePress={handleAlarmModal}>
        <AntDesign name="plus" size={24} color={Colors.whitish} />
      </RoundedButton>
    </ContainerWrappers>
  );
};

export default ActivatedAlarm;

const styles = StyleSheet.create({
  alarmsContainer: {
    marginBottom: 24,
    width: "100%",
  },
  noAlarm: {
    color: Colors.whitish,
    fontSize: 24,
    fontFamily: "degular-bold",
  },
});
