import GlobalUnitsModel from "../model/GlobalUnitsModel"

class LoyalMarker {
  constructor({ name, ltype, imageFront, imageBack }) {
    this.name = name
    this.ltype = ltype
    this.image = imageFront,
    this.imageFront = imageFront
    this.imageBack = imageBack
  }

  setType(type) {
    this.ltype = type
    if (type === GlobalUnitsModel.LOYALTY_TYPE.LOYAL) {
      this.image = this.imageFront
    } else {
      this.image = this.imageBack
    }
  }
}

export default LoyalMarker