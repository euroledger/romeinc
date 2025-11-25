import RomanUnit from "./RomanUnit"
import GlobalUnitsModel from "../model/GlobalUnitsModel"

class RomanAuxilia extends RomanUnit {
  constructor({ name, unitType, imageFront, imageBack }) {
    super({name, unitType, imageFront, imageBack})
  }

  promote() {
    if (this.unitType === GlobalUnitsModel.ROMAN_UNIT_TYPE.AUXILIA) {
      this.unitType = GlobalUnitsModel.ROMAN_UNIT_TYPE.VETERAN_AUXILIA
    } else {
      // error cannot promote a veteran
      return
    }
    this.image = this.imageBack
    return this
  }

  demote() {
    if (this.unitType === GlobalUnitsModel.ROMAN_UNIT_TYPE.VETERAN_AUXILIA) {
      this.unitType = GlobalUnitsModel.ROMAN_UNIT_TYPE.AUXILIA
    } else {
      // error cannot demote a normal unit
      return
    }
    this.image = this.imageFront
    return this
  }
}

export default RomanAuxilia
