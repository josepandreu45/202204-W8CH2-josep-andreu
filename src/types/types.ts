export type RobotType = "Cleaner" | "Waiter" | "Developer";

export interface IRobot {
  name: string;
  battery: number;
  type: RobotType;
  work: () => void;
  reset: () => void;
}
