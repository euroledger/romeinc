import { loadStatesmen } from "./counters/StatesmanLoader"
import { loadLeaders } from "./counters/LeaderLoader"
import { loadWars } from "./counters/WarLoader"
import { loadTreasuryTrackMarkers } from "./counters/TreasuryMarkerLoader"
import {
  loadRomanLegions,
  loadRomanAuxiliaries,
  loadRomanImperialCavalry,
  loadRomanPraetorianGuard,
  loadRomanFleets,
  loadRomanWalls,
} from "./counters/RomanUnitLoader"
import {
  loadAlliedProvinceMarkers,
  loadBarbarianProvinceMarkers,
  loadInsurgentProvinceMarkers,
  loadVeteranAlliedProvinceMarkers,
} from "./counters/ProvinceMarkerLoader"

import { loadEventMarkers, loadLoyalMarkers } from "./counters/OtherMarkerLoader"

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
  loadAlliedProvinceMarkers(provincemarkers)
  loadVeteranAlliedProvinceMarkers(provincemarkers)
  loadInsurgentProvinceMarkers(provincemarkers)

  let trackmarkers = new Map()
  loadTreasuryTrackMarkers(trackmarkers)

  let othermarkers = new Map()
  loadEventMarkers(othermarkers)
  loadLoyalMarkers(othermarkers)


  counters = {
    statesmen: statesmen,
    leaders: leaders,
    wars: wars,
    romanunits: romanunits,
    provincemarkers: provincemarkers,
    trackmarkers: trackmarkers,
    othermarkers: othermarkers
  }

  controller.setCounters(counters)
  return counters
}
