import ProvinceMarker from "./ProvinceMarker"
import GlobalUnitsModel from "../model/GlobalUnitsModel"

export function loadBarbarianProvinceMarkers(counters) {
  for (let i = 0; i < 60; i++) {
    const barbarian = new ProvinceMarker({
      name: "BARBARIAN " + i,
      unitType: GlobalUnitsModel.PROVINCE_TYPE.BARBARIAN,
      image: "/images/counters/leaders/Ldr-War-Back.png",
    })
    counters.set(barbarian.name, barbarian)
  }
}
