import { Alert } from "react-native";

export const alertMessage = (
  title: string,
  message: string,
  msgText: string,
  afterAlertFunc?: () => void
) => {
  Alert.alert(title, message, [
    { text: msgText, style: "destructive", onPress: afterAlertFunc },
  ]);
};
