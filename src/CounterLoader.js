import { loadStatesmen } from "./counters/StatesmanLoader"

export function loadCounters(controller) {
  let counters = new Map()

  loadStatesmen(counters)

  return counters
}

