import ProvinceMarker from "../counters/ProvinceMarker"
import GlobalGameState from "../model/GlobalGameState"
import GlobalUnitsModel from "../model/GlobalUnitsModel"
import { buildMap } from "../model/map/MapBuilder"
import {
  getNextBarbarianMarker,
  getNextAlliedMarker,
  getNextVeteranAlliedMarker,
  getNextInsurgentMarker,
  getCounterType,
  getNextImperialCavalryMarker,
  getNextPraetorianGuardMarker,
  getNextRomanWallMarker,
} from "../utils"

export default class Controller {
  constructor() {
    this.emperorsMap = new Map()
    this.locationMap = new Map() // map location name -> list of counters
    // subscriber set
    this.listeners = new Set()
  }

  // --- subscription API ---
  subscribe(listener) {
    this.listeners.add(listener)
    // return an unsubscribe function
    return () => this.listeners.delete(listener)
  }

  notify() {
    for (const l of this.listeners) {
      l(this) // pass the controller itself (or a snapshot)
    }
  }

  getRomanUnit(name) {
    return this.counters.romanunits.get(name)
  }

  setCounters(counters) {
    this.counters = counters
  }

  getCounters() {
    return this.counters
  }

  // date is an integer eg -27 is 27BC or 27BCE
  getDateString(date) {
    let dateStr = ""
    if (GlobalGameState.dateFormat === GlobalUnitsModel.DATE_FORMAT.TRADITIONAL) {
      if (date < 0) {
        dateStr = date + " BC"
        dateStr = dateStr.substring(1) // remove "-" character
      } else {
        dateStr = date + " AD"
      }
    } else {
      if (date < 0) {
        dateStr = date + " BCE"
        dateStr = dateStr.substring(1) // remove "-" character
      } else {
        dateStr = date + " CE"
      }
    }
    return dateStr
  }

  isInEmperorsBox(dynasty) {
    return GlobalGameState.emperorsBox.includes(dynasty)
  }

  getStatesmenByDynasty(dynasty) {
    const statesmen = this.emperorsMap.get(dynasty)
    return statesmen
  }

  getStatesmenByScenario(scenario) {
    const statesmen = [...this.counters.statesmen].filter(([_, value]) => {
      return value.scenario === scenario
    })
    return statesmen
  }

  getScenario() {
    return GlobalUnitsModel.SCENARIOS.find((s) => s.value === GlobalGameState.scenario)
  }

  getSelectedLabel = (selectedScenario, useLong) => {
    // Find the object in GlobalUnitsModel.SCENARIOS that matches the selected value
    const currentScenarioObj = GlobalUnitsModel.SCENARIOS.find((s) => s.value === selectedScenario)

    if (currentScenarioObj) {
      // Return the appropriate label based on the format toggle (amd long/short format)
      GlobalGameState.scenario = selectedScenario
      if (useLong) {
        return GlobalGameState.dateFormat === GlobalUnitsModel.DATE_FORMAT.MODERN
          ? currentScenarioObj.longlabelBCECE
          : currentScenarioObj.longlabelBCAD
      }
      return GlobalGameState.dateFormat === GlobalUnitsModel.DATE_FORMAT.MODERN
        ? currentScenarioObj.labelBCECE
        : currentScenarioObj.labelBCAD
    }
    return selectedScenario // Fallback to the raw value if not found
  }
  setUpEmperorsMap() {
    this.emperorsMap.set(GlobalUnitsModel.DYNASTY.JULIAN, [
      GlobalUnitsModel.STATESMAN.AUGUSTUS,
      GlobalUnitsModel.STATESMAN.TIBERIUS,
      GlobalUnitsModel.STATESMAN.GERMANICUS,
      GlobalUnitsModel.STATESMAN.CALIGULA,
    ])
  }

  promoteRomanUnit(name) {
    let unit = this.counters.romanunits.get(name)
    unit = unit.promote()
    this.counters.romanunits.set(name, unit)
    this.notify() // tell subscribers something changed
  }

  demoteRomanUnit(name) {
    let unit = this.counters.romanunits.get(name)
    unit = unit.demote()
    this.counters.romanunits.set(name, unit)
  }

  setMapboard(mapBoard) {
    this.mapBoard = mapBoard
  }

  getAllProvincesInMapboard() {
    const provinceArray = Array.from(this.mapBoard.keys())
    return provinceArray
  }

  getGoldForCommand(command) {
    const valuesArray = Array.from(this.mapBoard.values())
    const provinces = valuesArray.filter((province) => province.command === command)
    const gold = provinces.reduce((accumulator, province) => accumulator + province.gold, 0)
    return gold
  }

  getProvince(name) {
    if (!this.mapBoard) {
      buildMap(this)
    }
    return this.mapBoard.get(name)
  }

  getProvincesAdjacentTo(name) {
    const province = this.mapBoard.get(name)
    const connectedProvinces = province.connections.map((connection) => connection.to)
    return connectedProvinces
  }

  getCountersInProvince(province) {
    const units = this.locationMap.get(province)
    if (!units) {
      return []
    }
    return units
  }

  addToProvince = (counter, province) => {
    let counters = this.locationMap.get(province)
    if (!counters) {
      counters = new Array()
    }

    counters.push(counter)
    this.locationMap.set(province, counters)
  }

  // alternative way to add a lot of counters to provinces using an array
  addCountersToProvinces(listOfCountersAndProvinces) {
    for (const item of listOfCountersAndProvinces) {
      const province = item.province
      for (const counter of item.counters) {
        if (counter.veteran) {
          this.addVeteranCounterToProvince(counter.name, province)
        } else {
          this.addCounterToProvince(counter.name, province)
        }
      }
    }
  }

  addCounterToProvince(counter, province) {
    const counterType = getCounterType(counter)
    switch (counterType) {
      case GlobalUnitsModel.PROVINCE_TYPE.BARBARIAN: {
        const marker = getNextBarbarianMarker(this.counters)
        this.addToProvince(marker, province)
        break
      }
      case GlobalUnitsModel.PROVINCE_TYPE.ALLIED: {
        const marker = getNextAlliedMarker(this.counters)
        this.addToProvince(marker, province)
        break
      }
      case GlobalUnitsModel.PROVINCE_TYPE.VETERAN_ALLIED: {
        const marker = getNextVeteranAlliedMarker(this.counters)
        this.addToProvince(marker, province)
        break
      }
      case GlobalUnitsModel.PROVINCE_TYPE.INSURGENT: {
        const marker = getNextInsurgentMarker(this.counters)
        this.addToProvince(marker, province)
        break
      }
      case GlobalUnitsModel.ROMAN_UNIT_TYPE.LEGION:
      case GlobalUnitsModel.ROMAN_UNIT_TYPE.FLEET: {
        const unit = this.counters.romanunits.get(counter)
        this.addToProvince(unit, province)
        break
      }
      case GlobalUnitsModel.ROMAN_UNIT_TYPE.IMPERIAL_CAVALRY: {
        const marker = getNextImperialCavalryMarker(this.counters)
        this.addToProvince(marker, province)
        break
      }

      case GlobalUnitsModel.ROMAN_UNIT_TYPE.PRAETORIAN_GUARD: {
        const marker = getNextPraetorianGuardMarker(this.counters)
        this.addToProvince(marker, province)
        break
      }
      case GlobalUnitsModel.ROMAN_UNIT_TYPE.WALL: {
        const marker = getNextRomanWallMarker(this.counters)
        this.addToProvince(marker, province)
        break
      }

      case GlobalUnitsModel.WAR_BOX_TYPE.WAR: {
        const war = this.counters.wars.get(counter)
        this.addToProvince(war, province)
        break
      }
      case GlobalUnitsModel.WAR_BOX_TYPE.LEADER: {
        const leader = this.counters.leaders.get(counter)
        this.addToProvince(leader, province)
        break
      }
    }
    // 11. Add the counter to the model
    // i) set location of counter to be the province
    // ii) add counter to list of counters present in that province

    // This will be done in the <Stacks> component
    // 2. Add the counter to the stack for the right box in that province
    // => i) province type is top left
    // => ii) roman units top right
    // +> iii) roman fleets bottom left
    // => iv) war/leader markers bottom right
  }

  addVeteranCounterToProvince(counter, province) {
    const counterType = getCounterType(counter)
    switch (counterType) {
      case GlobalUnitsModel.ROMAN_UNIT_TYPE.LEGION:
      case GlobalUnitsModel.ROMAN_UNIT_TYPE.FLEET: {
        const unit = this.counters.romanunits.get(counter)
        this.promoteRomanUnit(unit.name)
        this.addToProvince(unit, province)
        break
      }
      case GlobalUnitsModel.ROMAN_UNIT_TYPE.IMPERIAL_CAVALRY: {
        const unit = getNextImperialCavalryMarker(this.counters)
        this.promoteRomanUnit(unit.name)
        this.addToProvince(unit, province)
        break
      }
      case GlobalUnitsModel.ROMAN_UNIT_TYPE.PRAETORIAN_GUARD: {
        const unit = getNextPraetorianGuardMarker(this.counters)
        this.promoteRomanUnit(unit.name)
        this.addToProvince(unit, province)
        break
      }
    }
  }
}
