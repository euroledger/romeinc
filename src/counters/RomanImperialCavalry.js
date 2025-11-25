import RomanUnit from "./RomanUnit"
import GlobalUnitsModel from "../model/GlobalUnitsModel"

class RomanImperialCavalry extends RomanUnit {
  constructor({ name, unitType, imageFront, imageBack }) {
    super({name, unitType, imageFront, imageBack})
  }

  promote() {
    if (this.unitType === GlobalUnitsModel.ROMAN_UNIT_TYPE.IMPERIAL_CAVALRY) {
      this.unitType = GlobalUnitsModel.ROMAN_UNIT_TYPE.VETERAN_IMPERIAL_CAVALRY
    } else {
      // error cannot promote a veteran
      return
    }
    this.image = this.imageBack
    return this
  }

  demote() {
    if (this.unitType === GlobalUnitsModel.ROMAN_UNIT_TYPE.VETERAN_IMPERIAL_CAVALRY) {
      this.unitType = GlobalUnitsModel.ROMAN_UNIT_TYPE.IMPERIAL_CAVALRY
    } else {
      // error cannot demote a normal unit
      return
    }
    this.image = this.imageFront
    return this
  }
}

export default RomanImperialCavalry
