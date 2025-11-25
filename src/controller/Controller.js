import GlobalGameState from "../model/GlobalGameState"
import GlobalUnitsModel from "../model/GlobalUnitsModel"

export default class Controller {
  constructor() {
    this.emperorsMap = new Map()
  }

  setCounters(counters) {
    this.counters = counters
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
    console.log("")
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
    console.log("RETURN ", selectedScenario)
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
  }

  demoteRomanUnit(name) {
    let unit = this.counters.romanunits.get(name)
    unit = unit.demote()    
    this.counters.romanunits.set(name, unit)
  }
}
