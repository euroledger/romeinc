import { loadStatesmen } from "./counters/StatesmanLoader"
import { loadLeaders } from "./counters/LeaderLoader"
import { loadWars } from "./counters/WarLoader"
import {
  loadRomanLegions,
  loadRomanAuxiliaries,
  loadRomanImperialCavalry,
  loadRomanPraetorianGuard,
  loadRomanFleets,
  loadRomanWalls
} from "./counters/RomanUnitLoader"

export function loadCounters(controller) {
  let counters

  let statesmen = new Map()
  loadStatesmen(statesmen)

  let leaders = new Map()
  loadLeaders(leaders)

  let wars = new Map()
  loadWars(wars)

  let romanunits = new Map()
  loadRomanLegions(romanunits)
  loadRomanAuxiliaries(romanunits)
  loadRomanImperialCavalry(romanunits)
  loadRomanPraetorianGuard(romanunits)
  loadRomanFleets(romanunits)
  loadRomanWalls(romanunits)

  counters = {
    statesmen: statesmen,
    leaders: leaders,
    wars: wars,
    romanunits: romanunits,
  }
  controller.setCounters(counters)
  return counters
}
