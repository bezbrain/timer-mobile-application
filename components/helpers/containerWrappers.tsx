import React, { ReactNode } from "react";
import { StyleSheet, View, useWindowDimensions } from "react-native";

interface ContainerWrapProps {
  children: ReactNode;
}

const ContainerWrappers = ({ children }: ContainerWrapProps) => {
  const { height } = useWindowDimensions();

  const wrapperDistance = height < 400 ? 24 : 48;

  return (
    <View style={[styles.containerWrap, { marginTop: wrapperDistance }]}>
      {children}
    </View>
  );
};

export default ContainerWrappers;

const styles = StyleSheet.create({
  containerWrap: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    borderWidth: 2,
    minHeight: "85%",
    paddingBottom: 16,
  },
});
