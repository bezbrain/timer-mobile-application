import { createContext, useContext, useState } from "react";
import { ChildrenType } from "./types.context";

const AppContext = createContext<any | undefined>(undefined);

export const CurrentTimeProvider = ({ children }: ChildrenType) => {
  const [isAlarmSet, setIsAlarmSet] = useState<boolean>(false);
  return (
    <AppContext.Provider value={{ isAlarmSet, setIsAlarmSet }}>
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
