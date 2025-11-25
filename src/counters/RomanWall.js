import RomanUnit from "./RomanUnit"

class RomanWall extends RomanUnit {
  constructor({ name, unitType, imageFront, imageBack }) {
    super({ name, unitType, imageFront, imageBack })
  }

  promote() {
    // error
  }

  demote() {
    // error
  }
}

export default RomanWall
