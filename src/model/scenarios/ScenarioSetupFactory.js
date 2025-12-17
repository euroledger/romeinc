import GlobalUnitsModel from "../GlobalUnitsModel"
import Scenario27BC from "./Scenario27bc"
import Scenario70AD from "./Scenario70AD"
import Scenario138AD from "./Scenario138AD"
import Scenario222AD from "./Scenario222AD"
import GlobalInit from "../GlobalInit"

export default class ScenarioSetupFactory {
  static setupScenario(selectedScenario) {
    let scenario

    console.log("BEZINGA! scenario=", scenario)

    switch (selectedScenario) {
      case GlobalUnitsModel.SCENARIO.BC_27: {
        scenario = new Scenario27BC(GlobalInit.controller)
        break
      }
      case GlobalUnitsModel.SCENARIO.AD_70: {
        scenario = new Scenario70AD(GlobalInit.controller)
        break
      }
      case GlobalUnitsModel.SCENARIO.AD_138: {
        scenario = new Scenario138AD(GlobalInit.controller)
        break
      }
      case GlobalUnitsModel.SCENARIO.AD_222: {
        scenario = new Scenario222AD(GlobalInit.controller)
        break
      }
      default:
        console.error("Unknown scenario:", selectedScenario)
        return
    }
    scenario.setTreasuryTrackValues()
    scenario.setUpWars()
    scenario.setUpProvinces()
  }
}
