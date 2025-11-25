import RomanUnit from "./RomanUnit"
import GlobalUnitsModel from "../model/GlobalUnitsModel"

class RomanFleet extends RomanUnit {
  constructor({ name, unitType, imageFront, imageBack }) {
    super({name, unitType, imageFront, imageBack})
  }

  promote() {
    if (this.unitType === GlobalUnitsModel.ROMAN_UNIT_TYPE.FLEET) {
      this.unitType = GlobalUnitsModel.ROMAN_UNIT_TYPE.VETERAN_FLEET
    } else {
      // error cannot promote a veteran
      return
    }
    this.image = this.imageBack
    return this
  }

  demote() {
    if (this.unitType === GlobalUnitsModel.ROMAN_UNIT_TYPE.VETERAN_FLEET) {
      this.unitType = GlobalUnitsModel.ROMAN_UNIT_TYPE.FLEET
    } else {
      // error cannot demote a normal unit
      return
    }
    this.image = this.imageFront
    return this
  }
}

export default RomanFleet
