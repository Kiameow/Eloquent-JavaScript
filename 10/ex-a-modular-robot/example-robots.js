import { randomPick } from "./random-pick.js";
import { roadGraph } from "./roads.js";
import { findRoute } from "./find-the-shortest-route.js";

function randomRobot(state) {
  return {direction: randomPick(roadGraph[state.place])};
}

var mailRoute = [
  "Alice's House", "Cabin", "Alice's House", "Bob's House",
  "Town Hall", "Daria's House", "Ernie's House",
  "Grete's House", "Shop", "Grete's House", "Farm",
  "Marketplace", "Post Office"
];

function routeRobot(state, memory) {
  if (memory.length == 0) {
    memory = mailRoute;
  }
  return {direction: memory[0], memory: memory.slice(1)};
}

function goalOrientedRobot({place, parcels}, route) {
  if (route.length == 0) {
    let parcel = parcels[0];
    if (parcel.place != place) {
      route = findRoute(roadGraph, place, parcel.place);
    } else {
      route = findRoute(roadGraph, place, parcel.address);
    }
  }
  return {direction: route[0], memory: route.slice(1)};
}

function yourRobot({place, parcels}, route) {
  let shortest_length = Infinity;
  let shortest_route = route;
  if (route.length == 0) {
    for (let parcel of parcels) {
      if (parcel.place != place) {
        route = findRoute(roadGraph, place, parcel.place);
        if (route.length <= shortest_length) {
          shortest_length = route.length; 
          shortest_route = route;
        }
      } else {
        route = findRoute(roadGraph, place, parcel.address);
        if (route.length < shortest_length) {
          shortest_length = route.length; 
          shortest_route = route;
        }
      }
    }
  }
  return {direction: shortest_route[0], memory: shortest_route.slice(1)};
}

export {randomRobot, routeRobot, goalOrientedRobot, yourRobot};