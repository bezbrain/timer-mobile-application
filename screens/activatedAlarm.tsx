import React from "react";
import { ScrollView, StyleSheet } from "react-native";
import { CurrentAlarmTime } from "../components/screenComps/activeteAlarmComp";
import { ContainerWrappers } from "../components/helpers";
import { RoundedButton } from "../components/general";
import { AntDesign } from "@expo/vector-icons";
import { Colors } from "../utils/colors";
import { useCurrentAlarm } from "../context/currentAlarm.context";
import { SetAlarmModal } from "../components/screenComps/modal";

const ActivatedAlarm = () => {
  const { showAlarmModal, setShowAlarmModal } = useCurrentAlarm();

  const handleAlarmModal = () => {
    setShowAlarmModal(true);
  };

  return (
    <ContainerWrappers>
      {showAlarmModal && <SetAlarmModal />}
      <ScrollView style={styles.alarmsContainer}>
        {Array(9)
          .fill(undefined)
          .map((_, i) => (
            <CurrentAlarmTime key={i} />
          ))}
      </ScrollView>
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
});
