import { VillageState, runRobot } from "./state.js";

function compareRobots(robot1, memory1, robot2, memory2) {
  let times = 100;
  let turns1 = 0;
  let turns2 = 0;
  for (let i=0; i<times; i++) {
    let state = VillageState.random();
    turns1 += runRobot(state, robot1, memory1);
    turns2 += runRobot(state, robot2, memory2);
  }
  console.log(`average steps for robot1: ${turns1 / times},
              average steps for robot2: ${turns2 / times}`);
}

export {compareRobots};