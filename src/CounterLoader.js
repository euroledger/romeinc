import { loadStatesmen } from "./counters/StatesmanLoader"
import { loadLeaders } from "./counters/LeaderLoader"
import { loadWars } from "./counters/WarLoader"
import {
  loadRomanLegions,
  loadRomanAuxiliaries,
  loadRomanImperialCavalry,
  loadRomanPraetorianGuard,
  loadRomanFleets,
  loadRomanWalls,
} from "./counters/RomanUnitLoader"
import { loadBarbarianProvinceMarkers } from "./counters/ProvinceMarkerLoader"

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

  let provincemarkers = new Map()
  loadBarbarianProvinceMarkers(provincemarkers)

  counters = {
    statesmen: statesmen,
    leaders: leaders,
    wars: wars,
    romanunits: romanunits,
    provincemarkers: provincemarkers
  }

  controller.setCounters(counters)
  return counters
}
