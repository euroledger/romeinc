import GlobalGameState from "../model/GlobalGameState"
import GlobalUnitsModel from "../model/GlobalUnitsModel"

export default class Controller {
  constructor() {
    this.emperorsMap = new Map()
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

  getStatesmenInDynasty(dynasty) {
    const statesmen = this.emperorsMap.get(dynasty)
    console.log("STATESMEN IN DYNASTY", dynasty, ":", statesmen)
    return statesmen
  }

  setUpEmperorsMap() {
    this.emperorsMap.set(GlobalUnitsModel.DYNASTY.JULIAN, [
      GlobalUnitsModel.STATESMAN.AUGUSTUS,
      GlobalUnitsModel.STATESMAN.TIBERIUS,
      GlobalUnitsModel.STATESMAN.GERMANICUS,
      GlobalUnitsModel.STATESMAN.CALIGULA,
    ])
  }
}
