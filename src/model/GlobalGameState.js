import GlobalUnitsModel from "./GlobalUnitsModel"

export default class GlobalGameState {
  static stateHandler = () => {}

  static  p = true
  static updateGlobalState = () => {
    this.stateHandler()
  }
  static caesar = ""
  static consul = ""
  static dateFormat = GlobalUnitsModel.DATE_FORMAT.TRADITIONAL

  static emperorsBox = []

  static scenario = GlobalUnitsModel.SCENARIO.BC_27
}
