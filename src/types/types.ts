type RobotType = "Cleaner" | "Waiter" | "Developer";

interface IRobot {
  name: string;
  battery: number;
  type: RobotType;
  work: () => void;
  reset: () => void;
}

class Robot implements IRobot {
  battery;
  name;

  constructor(public type: RobotType) {
    this.battery = 100;
    this.name = this.generateName();
  }

  reset() {
    this.name = this.generateName();
    this.battery = 100;
  }
  work() {
    let message: string;

    switch (this.type) {
      case "Cleaner":
        message = "Lararara I clean";
        break;

      case "Developer":
        message = "Do you feel like a mini of fuet?";
        break;

      case "Waiter":
        message = "JavaScript is cool - I develop with JavaScript -> I'm cool";

      default:
        message = "";
    }
    console.log(message);
  }
  generateName(): string {
    let name: string = "";

    const chars: string = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ";

    for (let i = 0; i <= 3; i++) {
      if (i < 3) {
        name += chars.charAt(Math.floor(Math.random() * chars.length));
      } else {
        name += Math.floor(Math.random() * (99 - 10) + 10);
      }
    }

    return name;
  }
}

export default Robot;
