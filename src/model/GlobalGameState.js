import GlobalUnitsModel from "./GlobalUnitsModel"

export default class GlobalGameState {
  static stateHandler = () => {}

  static p = true
  static updateGlobalState = () => {
    this.stateHandler()
  }
  static caesar = ""
  static consul = ""
  static warsBox = []
  static emperorsBox = []

  static dateFormat = GlobalUnitsModel.DATE_FORMAT.TRADITIONAL

  static scenario = GlobalUnitsModel.SCENARIO.BC_27

  static barbarianMarker = 0
  static alliedMarker = 0
  static veteranAlliedMarker = 0
  static insurgentMarker = 0

  static praetorianGuard = 0
  static imperialCavalry = 0
  static romanwall = 0
}
