import { ReactNode } from "react";

export interface ScreenControllerType {
  children: ReactNode;
}

export interface ScreenControls {
  activateAlarm: boolean;
  currentTime: boolean;
  secondsCountdown: boolean;
  stopWatch: boolean;
}
