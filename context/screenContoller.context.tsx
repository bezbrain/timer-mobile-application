import { createContext, useContext, useState } from "react";
import { ChildrenType, ScreenControls } from "./types.context";

const AppContext = createContext<any | undefined>(undefined);

const screenControls: ScreenControls = {
  activateAlarm: true,
  currentTime: false,
  secondsCountdown: false,
  stopWatch: false,
};

export const ScreenControllerProvider = ({ children }: ChildrenType) => {
  const [isCurrentPage, setIsCurrentPage] =
    useState<ScreenControls>(screenControls);
  const [isSettings, setIsSettings] = useState<boolean>(false);

  return (
    <AppContext.Provider
      value={{ isCurrentPage, setIsCurrentPage, isSettings, setIsSettings }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useScreenController = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error(
      "useScreenController must be used within a ScreenControllerProvider"
    );
  }
  return context;
};
