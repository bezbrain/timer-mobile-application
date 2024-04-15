import { ReactNode } from "react";

export interface ChildrenType {
  children: ReactNode;
}

export interface ScreenControls {
  activateAlarm: boolean;
  currentTime: boolean;
  secondsCountdown: boolean;
  stopWatch: boolean;
}
