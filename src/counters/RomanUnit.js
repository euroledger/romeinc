class RomanUnit {
  constructor({ name, unitType, imageFront, imageBack }) {
    this.name = name
    this.unitType = unitType
    this.imageFront = imageFront
    this.imageBack = imageBack,
    this.image = this.imageFront
  }
}

export default RomanUnit