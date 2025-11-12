import GlobalGameState from "../GlobalGameState"
import GlobalUnitsModel from "../GlobalUnitsModel"
import BaseScenario from "./BaseScenario"

export default class Scenario70AD extends BaseScenario {
  constructor(controller) {
    super(controller, 70)
    GlobalGameState.emperorsBox = [GlobalUnitsModel.DYNASTY.JULIAN, GlobalUnitsModel.DYNASTY.CLAUDIAN]
  }
}
