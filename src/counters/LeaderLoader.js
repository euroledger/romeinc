import GlobalUnitsModel from "../model/GlobalUnitsModel"
import Leader from "./Leader"

export function loadLeaders(counters) {
  let chrocus = {
    name: GlobalUnitsModel.LEADER.CHROCUS,
    pillage: 4,
    strength: 3,
    homelandProvince: GlobalUnitsModel.HOMELAND_PROVINCE.ALAMANNIC,
    imageFront: "/images/counters/leaders/Ldr-Alamannic-Chrocus.png",
  }
  counters.set(chrocus.name, new Leader(chrocus))

  let boudicca = {
    name: GlobalUnitsModel.LEADER.BOUDICCA,
    pillage: 2,
    strength: 2,
    homelandProvince: GlobalUnitsModel.HOMELAND_PROVINCE.BRITISH,
    imageFront: "/images/counters/leaders/Ldr-British-Boudicca.png",
  }
  counters.set(boudicca.name, new Leader(boudicca))

  let caratacus = {
    name: GlobalUnitsModel.LEADER.CARATACUS,
    pillage: 1,
    strength: 3,
    homelandProvince: GlobalUnitsModel.HOMELAND_PROVINCE.BRITISH,
    imageFront: "/images/counters/leaders/Ldr-British-Caratacus.png",
  }
  counters.set(caratacus.name, new Leader(caratacus))

  let calgacus = {
    name: GlobalUnitsModel.LEADER.CALGACUS,
    pillage: 2,
    strength: 2,
    homelandProvince: GlobalUnitsModel.HOMELAND_PROVINCE.CALEDONIAN,
    imageFront: "/images/counters/leaders/Ldr-Caledonian-Calgacus.png",
  }
  counters.set(calgacus.name, new Leader(calgacus))

  let decebalus = {
    name: GlobalUnitsModel.LEADER.DECEBALUS,
    pillage: 2,
    strength: 5,
    homelandProvince: GlobalUnitsModel.HOMELAND_PROVINCE.DACIAN,
    imageFront: "/images/counters/leaders/Ldr-Dacian-Decebalus.png",
  }
  counters.set(decebalus.name, new Leader(decebalus))

  let arminius = {
    name: GlobalUnitsModel.LEADER.ARMINIUS,
    pillage: 2,
    strength: 5,
    homelandProvince: GlobalUnitsModel.HOMELAND_PROVINCE.GERMAN,
    imageFront: "/images/counters/leaders/Ldr-German-Arminius.png",
  }
  counters.set(arminius.name, new Leader(arminius))

  let civilus = {
    name: GlobalUnitsModel.LEADER.CIVILUS,
    pillage: 1,
    strength: 4,
    homelandProvince: GlobalUnitsModel.HOMELAND_PROVINCE.GERMAN,
    imageFront: "/images/counters/leaders/Ldr-German-Civilus.png",
  }
  counters.set(civilus.name, new Leader(civilus))

  let kniva = {
    name: GlobalUnitsModel.LEADER.KNIVA,
    pillage: 4,
    strength: 5,
    homelandProvince: GlobalUnitsModel.HOMELAND_PROVINCE.GOTHIC,
    imageFront: "/images/counters/leaders/Ldr-Gothic-Kniva.png",
  }
  counters.set(kniva.name, new Leader(kniva))

  let simeon = {
    name: GlobalUnitsModel.LEADER.SIMEON,
    pillage: 2,
    strength: 3,
    homelandProvince: GlobalUnitsModel.HOMELAND_PROVINCE.JUDEAN,
    imageFront: "/images/counters/leaders/Ldr-Judean-Simeon.png",
  }
  counters.set(simeon.name, new Leader(simeon))

  let ballomar = {
    name: GlobalUnitsModel.LEADER.BALLOMAR,
    pillage: 3,
    strength: 4,
    homelandProvince: GlobalUnitsModel.HOMELAND_PROVINCE.MARCOMANNIC,
    imageFront: "/images/counters/leaders/Ldr-Marcomannic-Ballamar.png",
  }
  counters.set(ballomar.name, new Leader(ballomar))

  let tacfarinus = {
    name: GlobalUnitsModel.LEADER.TACFARINUS,
    pillage: 2,
    strength: 3,
    homelandProvince: GlobalUnitsModel.HOMELAND_PROVINCE.MOORISH,
    imageFront: "/images/counters/leaders/Ldr-Moorish-Tacfarinus.png",
  }
  counters.set(tacfarinus.name, new Leader(tacfarinus))

  let zenobia = {
    name: GlobalUnitsModel.LEADER.ZENOBIA,
    pillage: 5,
    strength: 2,
    homelandProvince: GlobalUnitsModel.HOMELAND_PROVINCE.PALMYRENE,
    imageFront: "/images/counters/leaders/Ldr-Palmyrene-Zenobia.png",
  }
  counters.set(zenobia.name, new Leader(zenobia))

  let bato = {
    name: GlobalUnitsModel.LEADER.BATO,
    pillage: 3,
    strength: 3,
    homelandProvince: GlobalUnitsModel.HOMELAND_PROVINCE.ILLYRIAN,
    imageFront: "/images/counters/leaders/Ldr-Illyrian-Bato.png",
  }
  counters.set(bato.name, new Leader(bato))

  let vologases = {
    name: GlobalUnitsModel.LEADER.VOLOGASES,
    pillage: 2,
    strength: 4,
    homelandProvince: GlobalUnitsModel.HOMELAND_PROVINCE.PARTHIAN,
    imageFront: "/images/counters/leaders/Ldr-Parthian-Vologases.png",
  }
  counters.set(vologases.name, new Leader(vologases))

  let shapur = {
    name: GlobalUnitsModel.LEADER.SHAPUR,
    pillage: 2,
    strength: 5,
    homelandProvince: GlobalUnitsModel.HOMELAND_PROVINCE.PARTHIAN,
    imageFront: "/images/counters/leaders/Ldr-Persian-Shapur.png",
  }
  counters.set(shapur.name, new Leader(shapur))
}
