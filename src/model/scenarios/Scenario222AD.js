import GlobalGameState from "../GlobalGameState"
import GlobalUnitsModel from "../GlobalUnitsModel"
import BaseScenario from "./BaseScenario"

export default class Scenario222AD extends BaseScenario {
  constructor(controller) {
    super(controller, GlobalUnitsModel.SCENARIO.AD_70)
  }
}
