// src/model/GameStateModel.js

// Define the initial shape of your game state
// import GlobalGameState
import GlobalGameState from "../model/GlobalGameState"

export default function initialGameState() {
  console.log("BEZINGA! SCENARIO=", GlobalGameState.scenario)
  const values = {
    ...GlobalGameState.treasuryValues,
    show: true
  }
  return values;
}
