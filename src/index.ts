import Robot from "./clases/Robot";
import { IRobot, RobotType } from "./types/types";

const createRobot = (type: RobotType): IRobot => {
  const newRobot = new Robot(type);
  return newRobot;
};

const robot = createRobot("Waiter");
console.log(robot.name);
robot.work();
robot.reset();
console.log(robot.name);
