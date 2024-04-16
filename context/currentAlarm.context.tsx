import { createContext, useContext, useState } from "react";
import { AlarmFormat, ChildrenType } from "./types.context";

const AppContext = createContext<any | undefined>(undefined);

const alarmFormat: AlarmFormat = {
  id: Date.now(),
  hour: "",
  minute: "",
  meridiem: "",
};

export const CurrentTimeProvider = ({ children }: ChildrenType) => {
  const [isAlarmSet, setIsAlarmSet] = useState<boolean>(false);

  const [countDown, setCountDown] = useState<number>(5);
  const [startCountDown, setStartCountDown] = useState<boolean>(false);

  const [stopWatchCount, setStopWatchCount] = useState<number>(0);
  const [startStopWatchCount, setStartStopWatchCount] =
    useState<boolean>(false);
  const [trackStopWatchCount, setTrackStopWatchCount] =
    useState<boolean>(false);

  const [allAlarmTimes, setAllAlarmTimes] = useState<AlarmFormat>(alarmFormat);
  const [showAlarmModal, setShowAlarmModal] = useState<boolean>(false);
  const [alarmMinuteValue, setAlarmMinuteValue] = useState<string>("");
  const [alarmHourValue, setAlarmHourValue] = useState<string>("");
  const [pickMeridiem, setPickMeridiem] = useState<boolean>(false);

  return (
    <AppContext.Provider
      value={{
        isAlarmSet,
        setIsAlarmSet,
        countDown,
        setCountDown,
        startCountDown,
        setStartCountDown,
        stopWatchCount,
        setStopWatchCount,
        startStopWatchCount,
        setStartStopWatchCount,
        trackStopWatchCount,
        setTrackStopWatchCount,
        allAlarmTimes,
        setAllAlarmTimes,
        showAlarmModal,
        setShowAlarmModal,
        alarmMinuteValue,
        setAlarmMinuteValue,
        alarmHourValue,
        setAlarmHourValue,
        pickMeridiem,
        setPickMeridiem,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useCurrentAlarm = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error(
      "useCurrentAlarm context must be within the CurrentTimeProvider"
    );
  }
  return context;
};
