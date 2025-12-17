import { BOTTOM_LEFT, BOTTOM_RIGHT, PROVINCES, TOP_LEFT, TOP_RIGHT } from "./components/screenobjects/data/Provinces"
import GlobalGameState from "./model/GlobalGameState"
import GlobalUnitsModel from "./model/GlobalUnitsModel"
import GlobalInit from "./model/GlobalInit"

export function windowsInit() {
  document.body.style.zoom = "100%"

  // disable browser zoom (ctrl+ ctrl-)
  window.addEventListener(
    "keydown",
    function (e) {
      if (
        (e.ctrlKey || e.metaKey) &&
        (e.which === 61 || e.which === 107 || e.which === 173 || e.which === 109 || e.which === 187 || e.which === 189)
      ) {
        e.preventDefault()
      }
    },
    false
  )
}

export function getAllProvinceMarkersOfType(counters, markerType) {
  const valuesArray = Array.from(counters.provincemarkers.values())
  return valuesArray.filter((marker) => marker.unitType === markerType)
}

export function getNextBarbarianMarker(counters) {
  const marker = GlobalUnitsModel.PROVINCE_TYPE.BARBARIAN + " " + GlobalGameState.barbarianMarker++
  const counter = counters.provincemarkers.get(marker)
  return counter
}
export function getNextAlliedMarker(counters) {
  const marker = GlobalUnitsModel.PROVINCE_TYPE.ALLIED + " " + GlobalGameState.alliedMarker++
  const counter = counters.provincemarkers.get(marker)
  return counter
}

export function getNextVeteranAlliedMarker(counters) {
  const marker = GlobalUnitsModel.PROVINCE_TYPE.VETERAN_ALLIED + " " + GlobalGameState.veteranAlliedMarker++
  const counter = counters.provincemarkers.get(marker)
  return counter
}

export function getNextInsurgentMarker(counters) {
  const marker = GlobalUnitsModel.PROVINCE_TYPE.INSURGENT + " " + GlobalGameState.insurgentMarker++
  const counter = counters.provincemarkers.get(marker)
  return counter
}

export function getNextImperialCavalryMarker(counters) {
  const marker = GlobalUnitsModel.ROMAN_UNIT_TYPE.IMPERIAL_CAVALRY + " " + GlobalGameState.imperialCavalry++
  const counter = counters.romanunits.get(marker)
  return counter
}

export function getNextPraetorianGuardMarker(counters) {
  const marker = GlobalUnitsModel.ROMAN_UNIT_TYPE.PRAETORIAN_GUARD + " " + GlobalGameState.praetorianGuard++

  const counter = counters.romanunits.get(marker)
  return counter
}

export function getNextRomanWallMarker(counters) {
  const marker = GlobalUnitsModel.ROMAN_UNIT_TYPE.WALL + " " + GlobalGameState.romanwall++
  const counter = counters.romanunits.get(marker)
  return counter
}

export function getCounterType(counter) {
  // if the counter is a name in the WARS list return WAR_BOX_TYPE.WAR
  const wars = Object.values(GlobalUnitsModel.WAR)
  if (wars.includes(counter)) {
    return GlobalUnitsModel.WAR_BOX_TYPE.WAR
  }

  const leaders = Object.values(GlobalUnitsModel.LEADER)
  if (leaders.includes(counter)) {
    return GlobalUnitsModel.WAR_BOX_TYPE.LEADER
  }

  const romanUnits = Object.values(GlobalUnitsModel.ROMAN_UNIT)
  if (romanUnits.includes(counter)) {
    if (counter.includes("FLEET")) {
      return GlobalUnitsModel.ROMAN_UNIT_TYPE.FLEET
    } else {
      return GlobalUnitsModel.ROMAN_UNIT_TYPE.LEGION
    }
  }
  return counter
}

export function getProvinceByName(name) {
  const province = PROVINCES.find((province) => (province.name = name))
  return province
}

export function getImageForCounter(boxType, value) {
  let imageSource1, imageSource2
  switch (boxType) {
    case GlobalUnitsModel.TREASURY_TRACK_TYPE.TURN:
      // Return the source string directly for simplicity with the turn logic
      imageSource1 = GlobalInit.counters.trackmarkers.get(GlobalUnitsModel.TREASURY_TRACK_MARKER.TURN).image
      break

    case GlobalUnitsModel.TREASURY_TRACK_TYPE.PRESTIGE:
      if (value < 0) {
        imageSource1 = GlobalInit.counters.trackmarkers.get(
          GlobalUnitsModel.TREASURY_TRACK_MARKER.PRESTIGE_MINUS_1
        ).image
        imageSource2 = GlobalInit.counters.trackmarkers.get(
          GlobalUnitsModel.TREASURY_TRACK_MARKER.PRESTIGE_MINUS_10
        ).image
      } else {
        // Return the source strings for the 1s and 10s markers
        imageSource1 = GlobalInit.counters.trackmarkers.get(GlobalUnitsModel.TREASURY_TRACK_MARKER.PRESTIGE_1).image
        imageSource2 = GlobalInit.counters.trackmarkers.get(GlobalUnitsModel.TREASURY_TRACK_MARKER.PRESTIGE_10).image // Using PRESTIGE_10 which is likely correct
      }
      break

    case GlobalUnitsModel.TREASURY_TRACK_TYPE.GOLD:
      // Return the source strings for the 1s and 10s markers
      if (value < 0) {
        imageSource1 = GlobalInit.counters.trackmarkers.get(GlobalUnitsModel.TREASURY_TRACK_MARKER.GOLD_MINUS_1).image
      } else {
        imageSource1 = GlobalInit.counters.trackmarkers.get(GlobalUnitsModel.TREASURY_TRACK_MARKER.GOLD_1).image
        if (value <= 250) {
          imageSource2 = GlobalInit.counters.trackmarkers.get(GlobalUnitsModel.TREASURY_TRACK_MARKER.GOLD_10).image // Using PRESTIGE_10 which is likely correct
        } else {
          imageSource2 = GlobalInit.counters.trackmarkers.get(
            GlobalUnitsModel.TREASURY_TRACK_MARKER.GOLD_PLUS_250
          ).image
        }
      }
      break

    case GlobalUnitsModel.TREASURY_TRACK_TYPE.UNREST:
      // Return the source strings for the 1s and GT25s markers
      imageSource1 = GlobalInit.counters.trackmarkers.get(GlobalUnitsModel.TREASURY_TRACK_MARKER.UNREST_1).image
      imageSource2 = GlobalInit.counters.trackmarkers.get(GlobalUnitsModel.TREASURY_TRACK_MARKER.UNREST_GT_25).image
      break

    case GlobalUnitsModel.TREASURY_TRACK_TYPE.PAY:
      // Return the source strings for the 1s and 10s markers
      imageSource1 = GlobalInit.counters.trackmarkers.get(GlobalUnitsModel.TREASURY_TRACK_MARKER.PAY_1).image
      imageSource2 = GlobalInit.counters.trackmarkers.get(GlobalUnitsModel.TREASURY_TRACK_MARKER.PAY_10).image
      break
    default:
      console.error("Unknown Box Type:", boxType)
  }
  // Return consistent object structure
  return { imageSource1, imageSource2 }
}

export function getPositionForCounter(counter) {
  switch (counter.constructor.name) {
    case "ProvinceMarker": {
      return TOP_LEFT
    }
    case "RomanLegion":
    case "RomanAuxilia":
    case "RomanImperialCavalry":
    case "RomanPraetorianGuard":
    case "RomanWall":
      return TOP_RIGHT
    case "RomanFleet":
      return BOTTOM_LEFT
    case "War":
    case "Leader":
      return BOTTOM_RIGHT
  }
}
