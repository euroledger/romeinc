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



export function loadAlliedProvinceMarkers(counters) {
  for (let i = 0; i < 34; i++) {
    const allied = new ProvinceMarker({
      name: "ALLIED " + i,
      unitType: GlobalUnitsModel.PROVINCE_TYPE.ALLIED,
      image: "/images/counters/provincemarkers/Rome-Allied.png",
    })
    counters.set(allied.name, allied)
  }
}

export function loadVeteranAlliedProvinceMarkers(counters) {
  for (let i = 0; i < 20; i++) {
    const vallied = new ProvinceMarker({
      name: "VETERAN ALLIED " + i,
      unitType: GlobalUnitsModel.PROVINCE_TYPE.VETERAN_ALLIED,
      image: "/images/counters/provincemarkers/Rome-Allied-F.png",
    })
    counters.set(vallied.name, vallied)
  }
}

export function loadInsurgentProvinceMarkers(counters) {
  for (let i = 0; i < 14; i++) {
    const insurgent = new ProvinceMarker({
      name: "INSURGENT " + i,
      unitType: GlobalUnitsModel.PROVINCE_TYPE.INSURGENT,
      image: "/images/counters/provincemarkers/Mkr-Insurgent.png",
    })
    counters.set(insurgent.name, insurgent)
  }
}


