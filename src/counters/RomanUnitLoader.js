import GlobalUnitsModel from "../model/GlobalUnitsModel"
import RomanUnit from "./RomanUnit"

export function loadRomanUnits(counters) {
  let adiutrix = {
    name: GlobalUnitsModel.ROMAN_UNIT.ADIUTRIX_1,
    unitType: GlobalUnitsModel.ROMAN_UNIT_TYPE.LEGION,
    imageFront: "/images/counters/romanunits/Rome-Leg-I-Adiutrix.png",
    imageBack: "/images/counters/romanunits/Rome-Leg-I-Adiutrix-2.png",
  }
  counters.set(adiutrix.name, new RomanUnit(adiutrix))
}
