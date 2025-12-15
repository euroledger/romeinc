import GlobalGameState from "../GlobalGameState"
import GlobalUnitsModel from "../GlobalUnitsModel"
import BaseScenario from "./BaseScenario"

export default class Scenario70AD extends BaseScenario {
  constructor(controller) {
    super(controller, GlobalUnitsModel.SCENARIO.AD_70)
    GlobalGameState.emperorsBox = [GlobalUnitsModel.DYNASTY.JULIAN, GlobalUnitsModel.DYNASTY.CLAUDIAN]
  }

    setUpWars() {
      console.log("SCENARION 70AD...setUpWars")
      
      GlobalGameState.warsBox.push({ type: GlobalUnitsModel.WAR_BOX_TYPE.LEADER, name: GlobalUnitsModel.LEADER.ARMINIUS })
      GlobalGameState.warsBox.push({ type: GlobalUnitsModel.WAR_BOX_TYPE.LEADER, name: GlobalUnitsModel.LEADER.BATO })
  
      // ...etc TODO
    }
  
    setUpProvinces() {
    }
}
