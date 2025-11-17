import GlobalGameState from "../GlobalGameState"
import GlobalUnitsModel from "../GlobalUnitsModel"
import BaseScenario from "./BaseScenario"

export default class Scenario27BC extends BaseScenario {
  constructor(controller) {
    super(controller, GlobalUnitsModel.SCENARIO.BC_27)
    GlobalGameState.caesar = GlobalUnitsModel.STATESMAN.AUGUSTUS
    GlobalGameState.consul = GlobalUnitsModel.STATESMAN.AGRIPPA
  }
}
