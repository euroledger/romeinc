import GlobalGameState from "../GlobalGameState"
import GlobalUnitsModel from "../GlobalUnitsModel"
import BaseScenario from "./BaseScenario"

export default class Scenario27BC extends BaseScenario {
  constructor(controller) {
    super(controller, GlobalUnitsModel.SCENARIO.BC_27)
    GlobalGameState.caesar = GlobalUnitsModel.STATESMAN.AUGUSTUS
    GlobalGameState.consul = GlobalUnitsModel.STATESMAN.AGRIPPA
  }

  setUpWars() {
    console.log("SCENARION 27BC...setUpWars")
    GlobalGameState.warsBox.push({ type: GlobalUnitsModel.WAR_BOX_TYPE.LEADER, name: GlobalUnitsModel.LEADER.ARMINIUS })
    GlobalGameState.warsBox.push({ type: GlobalUnitsModel.WAR_BOX_TYPE.LEADER, name: GlobalUnitsModel.LEADER.BATO })

    // ...etc TODO
  }

  setUpProvinces() {
    console.log("SCENARION 27BC...setUpProvinces")

    this.controller.addCountersToProvinces([
      {
        province: GlobalUnitsModel.PROVINCE.BRITANNIA_INFERIOR,
        counters: [
          { name: GlobalUnitsModel.PROVINCE_TYPE.BARBARIAN },
          { name: GlobalUnitsModel.WAR.BRITISH_6 },
          { name: GlobalUnitsModel.ROMAN_UNIT.II_AUGUSTA },
          {
            name: GlobalUnitsModel.ROMAN_UNIT.XIV_GEMINA,
            veteran: true,
          },
          {
            name: GlobalUnitsModel.ROMAN_UNIT_TYPE.PRAETORIAN_GUARD,
            veteran: true,
          },
          {
            name: GlobalUnitsModel.ROMAN_UNIT.BRITISH_FLEET,
            veteran: true,
          },
          { name: GlobalUnitsModel.LEADER.BOUDICCA },
        ],
      },
    ])
  }
}
