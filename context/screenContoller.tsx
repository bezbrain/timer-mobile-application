import { createContext, useContext, useState } from "react";
import { ScreenControllerType, ScreenControls } from "./types.context";

const AppContext = createContext<any | undefined>(undefined);

const screenControls: ScreenControls = {
  activateAlarm: false,
  currentTime: false,
  secondsCountdown: false,
  stopWatch: false,
};

export const ScreenController = ({ children }: ScreenControllerType) => {
  const [isCurrentPage, setIsCurrentPage] =
    useState<ScreenControls>(screenControls);

  return (
    <AppContext.Provider value={{ isCurrentPage, setIsCurrentPage }}>
      {children}
    </AppContext.Provider>
  );
};

export const useScreenController = () => {
  return useContext(AppContext);
};
