import { loadStatesmen } from "./counters/StatesmanLoader"
import { loadLeaders } from "./counters/LeaderLoader"
import { loadWars } from "./counters/WarLoader"

export function loadCounters(controller) {
  let counters

  let statesmen = new Map()
  loadStatesmen(statesmen)

  let leaders = new Map()
  loadLeaders(leaders)

  let wars = new Map()
  loadWars(wars)

  counters = {
    statesmen: statesmen,
    leaders: leaders,
    wars: wars
  }
  controller.setCounters(counters)
  return counters
}
