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

export interface AlarmFormat {
  id: number;
  hour: string;
  minute: string;
  meridiem: string;
}
