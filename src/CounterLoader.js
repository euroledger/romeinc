import { loadStatesmen } from "./counters/StatesmanLoader"
import { loadLeaders } from "./counters/LeaderLoader"

export function loadCounters(controller) {
  let counters

  let statesmen = new Map()
  loadStatesmen(statesmen)

  let leaders = new Map()
  loadLeaders(leaders)

  counters = {
    statesmen: statesmen,
    leaders: leaders
  }
  controller.setCounters(counters)
  return counters
}
