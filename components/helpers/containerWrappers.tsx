import React, { ReactNode } from "react";
import { StyleSheet, View } from "react-native";

interface ContainerWrapProps {
  children: ReactNode;
}

const ContainerWrappers = ({ children }: ContainerWrapProps) => {
  return <View style={styles.containerWrap}>{children}</View>;
};

export default ContainerWrappers;

const styles = StyleSheet.create({
  containerWrap: {
    flex: 1,
    marginTop: 48,
    justifyContent: "space-between",
    alignItems: "center",
  },
});
