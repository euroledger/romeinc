import GlobalUnitsModel from "../model/GlobalUnitsModel"
import War from "./War"

export function loadWars(counters) {
  let alamannic12 = {
    name: GlobalUnitsModel.WAR.ALAMANNIC_12,
    navalStrength: 1,
    strength: 12,
    region: GlobalUnitsModel.HOMELAND_PROVINCE.ALAMANNIC,
    imageFront: "/images/counters/wars/War-Alamannic-12.png",
  }
  counters.set(alamannic12.name, new War(alamannic12))

  let alamannic10 = {
    name: GlobalUnitsModel.WAR.ALAMANNIC_10,
    navalStrength: 1,
    strength: 10,
    region: GlobalUnitsModel.HOMELAND_PROVINCE.ALAMANNIC,
    imageFront: "/images/counters/wars/War-Alamannic-10.png",
  }
  counters.set(alamannic10.name, new War(alamannic10))

  let alan9 = {
    name: GlobalUnitsModel.WAR.ALAN_9,
    navalStrength: 1,
    strength: 9,
    region: GlobalUnitsModel.HOMELAND_PROVINCE.ALAN,
    imageFront: "/images/counters/wars/War-Alan-9.png",
  }
  counters.set(alan9.name, new War(alan9))

  let british7 = {
    name: GlobalUnitsModel.WAR.BRITISH_7,
    navalStrength: 1,
    strength: 7,
    region: GlobalUnitsModel.HOMELAND_PROVINCE.BRITISH,
    imageFront: "/images/counters/wars/War-British-7.png",
  }
  counters.set(british7.name, new War(british7))

  let british6 = {
    name: GlobalUnitsModel.WAR.BRITISH_6,
    navalStrength: 1,
    strength: 6,
    region: GlobalUnitsModel.HOMELAND_PROVINCE.BRITISH,
    imageFront: "/images/counters/wars/War-British-6.png",
  }
  counters.set(british6.name, new War(british6))

  let burgundian11 = {
    name: GlobalUnitsModel.WAR.BURGUNDIAN_11,
    navalStrength: 1,
    strength: 11,
    region: GlobalUnitsModel.HOMELAND_PROVINCE.BURGUNDIAN,
    imageFront: "/images/counters/wars/War-Burgundian-11.png",
  }
  counters.set(burgundian11.name, new War(burgundian11))

  let caledonian5 = {
    name: GlobalUnitsModel.WAR.CALEDONIAN_5,
    navalStrength: 1,
    strength: 5,
    region: GlobalUnitsModel.HOMELAND_PROVINCE.CALEDONIAN,
    imageFront: "/images/counters/wars/War-Caledonian-5.png",
  }
  counters.set(caledonian5.name, new War(caledonian5))

  let caledonian4 = {
    name: GlobalUnitsModel.WAR.CALEDONIAN_4,
    navalStrength: 1,
    strength: 4,
    region: GlobalUnitsModel.HOMELAND_PROVINCE.CALEDONIAN,
    imageFront: "/images/counters/wars/War-Caledonian-4.png",
  }
  counters.set(caledonian4.name, new War(caledonian4))

  let cantabrian8 = {
    name: GlobalUnitsModel.WAR.CANTABRIAN_8,
    navalStrength: 1,
    strength: 8,
    region: GlobalUnitsModel.HOMELAND_PROVINCE.CANTABRIAN,
    imageFront: "/images/counters/wars/War-Cantabrian-8.png",
  }
  counters.set(cantabrian8.name, new War(cantabrian8))

  let dacian12 = {
    name: GlobalUnitsModel.WAR.DACIAN_12,
    navalStrength: 1,
    strength: 12,
    region: GlobalUnitsModel.HOMELAND_PROVINCE.DACIAN,
    imageFront: "/images/counters/wars/War-Dacian-12.png",
  }
  counters.set(dacian12.name, new War(dacian12))

  let dacian11 = {
    name: GlobalUnitsModel.WAR.DACIAN_11,
    navalStrength: 1,
    strength: 11,
    region: GlobalUnitsModel.HOMELAND_PROVINCE.DACIAN,
    imageFront: "/images/counters/wars/War-Dacian-11.png",
  }
  counters.set(dacian11.name, new War(dacian11))

  let dacian10 = {
    name: GlobalUnitsModel.WAR.DACIAN_10,
    navalStrength: 1,
    strength: 10,
    region: GlobalUnitsModel.HOMELAND_PROVINCE.DACIAN,
    imageFront: "/images/counters/wars/War-Dacian-10.png",
  }
  counters.set(dacian10.name, new War(dacian10))

  // 10
  let frankish11 = {
    name: GlobalUnitsModel.WAR.FRANKISH_11,
    navalStrength: 2,
    strength: 11,
    region: GlobalUnitsModel.HOMELAND_PROVINCE.FRANKISH,
    imageFront: "/images/counters/wars/War-Frankish-11.png",
  }
  counters.set(frankish11.name, new War(frankish11))

  let frankish9 = {
    name: GlobalUnitsModel.WAR.FRANKISH_9,
    navalStrength: 2,
    strength: 9,
    region: GlobalUnitsModel.HOMELAND_PROVINCE.FRANKISH,
    imageFront: "/images/counters/wars/War-Frankish-9.png",
  }
  counters.set(frankish9.name, new War(frankish9))

  let german14 = {
    name: GlobalUnitsModel.WAR.GERMAN_14,
    navalStrength: 2,
    strength: 14,
    region: GlobalUnitsModel.HOMELAND_PROVINCE.GERMAN,
    imageFront: "/images/counters/wars/War-German-14.png",
  }
  counters.set(german14.name, new War(german14))

  let german12 = {
    name: GlobalUnitsModel.WAR.GERMAN_12,
    navalStrength: 2,
    strength: 12,
    region: GlobalUnitsModel.HOMELAND_PROVINCE.GERMAN,
    imageFront: "/images/counters/wars/War-German-12.png",
  }
  counters.set(german12.name, new War(german12))

  let german10 = {
    name: GlobalUnitsModel.WAR.GERMAN_10,
    navalStrength: 2,
    strength: 10,
    region: GlobalUnitsModel.HOMELAND_PROVINCE.GERMAN,
    imageFront: "/images/counters/wars/War-German-10.png",
  }
  counters.set(german10.name, new War(german10))

  let german8 = {
    name: GlobalUnitsModel.WAR.GERMAN_8,
    navalStrength: 2,
    strength: 8,
    region: GlobalUnitsModel.HOMELAND_PROVINCE.GERMAN,
    imageFront: "/images/counters/wars/War-German-8.png",
  }
  counters.set(german8.name, new War(german8))

  let gothic15 = {
    name: GlobalUnitsModel.WAR.GOTHIC_15,
    navalStrength: 3,
    strength: 15,
    region: GlobalUnitsModel.HOMELAND_PROVINCE.GOTHIC,
    imageFront: "/images/counters/wars/War-Gothic-15.png",
  }
  counters.set(gothic15.name, new War(gothic15))

  let gothic13 = {
    name: GlobalUnitsModel.WAR.GOTHIC_13,
    navalStrength: 3,
    strength: 13,
    region: GlobalUnitsModel.HOMELAND_PROVINCE.GOTHIC,
    imageFront: "/images/counters/wars/War-Gothic-13.png",
  }
  counters.set(gothic13.name, new War(gothic13))

  let judean8 = {
    name: GlobalUnitsModel.WAR.JUDEAN_8,
    navalStrength: 2,
    strength: 8,
    region: GlobalUnitsModel.HOMELAND_PROVINCE.JUDEAN,
    imageFront: "/images/counters/wars/War-Judean-8.png",
  }
  counters.set(judean8.name, new War(judean8))

  let judean7 = {
    name: GlobalUnitsModel.WAR.JUDEAN_7,
    navalStrength: 2,
    strength: 7,
    region: GlobalUnitsModel.HOMELAND_PROVINCE.JUDEAN,
    imageFront: "/images/counters/wars/War-Judean-7.png",
  }
  counters.set(judean7.name, new War(judean7))

  let judean6 = {
    name: GlobalUnitsModel.WAR.JUDEAN_6,
    navalStrength: 2,
    strength: 6,
    region: GlobalUnitsModel.HOMELAND_PROVINCE.JUDEAN,
    imageFront: "/images/counters/wars/War-Judean-6.png",
  }
  counters.set(judean6.name, new War(judean6))

  let marcomannic13 = {
    name: GlobalUnitsModel.WAR.MARCOMANNIC_13,
    navalStrength: 1,
    strength: 13,
    region: GlobalUnitsModel.HOMELAND_PROVINCE.MARCOMANNIC,
    imageFront: "/images/counters/wars/War-Marcomannic-13.png",
  }
  counters.set(marcomannic13.name, new War(judean6))

  let marcomannic11 = {
    name: GlobalUnitsModel.WAR.MARCOMANNIC_11,
    navalStrength: 1,
    strength: 11,
    region: GlobalUnitsModel.HOMELAND_PROVINCE.MARCOMANNIC,
    imageFront: "/images/counters/wars/War-Marcomannic-11.png",
  }
  counters.set(marcomannic11.name, new War(marcomannic11))

  let marcomannic9 = {
    name: GlobalUnitsModel.WAR.MARCOMANNIC_9,
    navalStrength: 1,
    strength: 9,
    region: GlobalUnitsModel.HOMELAND_PROVINCE.MARCOMANNIC,
    imageFront: "/images/counters/wars/War-Marcomannic-9.png",
  }
  counters.set(marcomannic9.name, new War(marcomannic9))

  let moorish7 = {
    name: GlobalUnitsModel.WAR.MOORISH_7,
    navalStrength: 1,
    strength: 7,
    region: GlobalUnitsModel.HOMELAND_PROVINCE.MOORISH,
    imageFront: "/images/counters/wars/War-Moorish-7.png",
  }
  counters.set(moorish7.name, new War(moorish7))

  let moorish5 = {
    name: GlobalUnitsModel.WAR.MOORISH_5,
    navalStrength: 1,
    strength: 5,
    region: GlobalUnitsModel.HOMELAND_PROVINCE.MOORISH,
    imageFront: "/images/counters/wars/War-Moorish-5.png",
  }
  counters.set(moorish5.name, new War(moorish5))

  let nubian6 = {
    name: GlobalUnitsModel.WAR.NUBIAN_6,
    navalStrength: 1,
    strength: 6,
    region: GlobalUnitsModel.HOMELAND_PROVINCE.NUBIAN,
    imageFront: "/images/counters/wars/War-Nubian-6.png",
  }
  counters.set(nubian6.name, new War(nubian6))

  let nubian4 = {
    name: GlobalUnitsModel.WAR.NUBIAN_4,
    navalStrength: 1,
    strength: 4,
    region: GlobalUnitsModel.HOMELAND_PROVINCE.NUBIAN,
    imageFront: "/images/counters/wars/War-Nubian-4.png",
  }
  counters.set(nubian4.name, new War(nubian4))

  let palmyrene14 = {
    name: GlobalUnitsModel.WAR.PALMYRENE_14,
    navalStrength: 1,
    strength: 14,
    region: GlobalUnitsModel.HOMELAND_PROVINCE.PALMYRENE,
    imageFront: "/images/counters/wars/War-Palmyrene-14.png",
  }
  counters.set(palmyrene14.name, new War(palmyrene14))

  let illyrian12 = {
    name: GlobalUnitsModel.WAR.ILLYRIAN_12,
    navalStrength: 2,
    strength: 12,
    region: GlobalUnitsModel.HOMELAND_PROVINCE.ILLYRIAN,
    imageFront: "/images/counters/wars/War-Illyrian-12.png",
  }
  counters.set(illyrian12.name, new War(illyrian12))

  let illyrian10 = {
    name: GlobalUnitsModel.WAR.ILLYRIAN_10,
    navalStrength: 2,
    strength: 10,
    region: GlobalUnitsModel.HOMELAND_PROVINCE.ILLYRIAN,
    imageFront: "/images/counters/wars/War-Illyrian-10.png",
  }
  counters.set(illyrian10.name, new War(illyrian10))

  let parthian14 = {
    name: GlobalUnitsModel.WAR.PARTHIAN_14,
    navalStrength: 1,
    strength: 14,
    region: GlobalUnitsModel.HOMELAND_PROVINCE.PARTHIAN,
    imageFront: "/images/counters/wars/War-Parthian-14.png",
  }
  counters.set(parthian14.name, new War(parthian14))

  let parthian12 = {
    name: GlobalUnitsModel.WAR.PARTHIAN_12,
    navalStrength: 1,
    strength: 12,
    region: GlobalUnitsModel.HOMELAND_PROVINCE.PARTHIAN,
    imageFront: "/images/counters/wars/War-Parthian-12.png",
  }
  counters.set(parthian12.name, new War(parthian12))

  let parthian10 = {
    name: GlobalUnitsModel.WAR.PARTHIAN_10,
    navalStrength: 1,
    strength: 10,
    region: GlobalUnitsModel.HOMELAND_PROVINCE.PARTHIAN,
    imageFront: "/images/counters/wars/War-Parthian-10.png",
  }
  counters.set(parthian10.name, new War(parthian10))

  let parthian8 = {
    name: GlobalUnitsModel.WAR.PARTHIAN_8,
    navalStrength: 1,
    strength: 8,
    region: GlobalUnitsModel.HOMELAND_PROVINCE.PARTHIAN,
    imageFront: "/images/counters/wars/War-Parthian-8.png",
  }
  counters.set(parthian8.name, new War(parthian8))

  let persian15 = {
    name: GlobalUnitsModel.WAR.PERSIAN_15,
    navalStrength: 1,
    strength: 15,
    region: GlobalUnitsModel.HOMELAND_PROVINCE.PERSIAN,
    imageFront: "/images/counters/wars/War-Persian-15.png",
  }
  counters.set(persian15.name, new War(persian15))

  let persian13 = {
    name: GlobalUnitsModel.WAR.PERSIAN_13,
    navalStrength: 1,
    strength: 13,
    region: GlobalUnitsModel.HOMELAND_PROVINCE.PERSIAN,
    imageFront: "/images/counters/wars/War-Persian-13.png",
  }
  counters.set(persian13.name, new War(persian13))

  let persian11 = {
    name: GlobalUnitsModel.WAR.PERSIAN_11,
    navalStrength: 1,
    strength: 11,
    region: GlobalUnitsModel.HOMELAND_PROVINCE.PERSIAN,
    imageFront: "/images/counters/wars/War-Persian-11.png",
  }
  counters.set(persian11.name, new War(persian11))

  let persian9 = {
    name: GlobalUnitsModel.WAR.PERSIAN_9,
    navalStrength: 1,
    strength: 9,
    region: GlobalUnitsModel.HOMELAND_PROVINCE.PERSIAN,
    imageFront: "/images/counters/wars/War-Persian-9.png",
  }
  counters.set(persian9.name, new War(persian9))

  let sarmatian10 = {
    name: GlobalUnitsModel.WAR.SARMATIAN_10,
    navalStrength: 1,
    strength: 10,
    region: GlobalUnitsModel.HOMELAND_PROVINCE.SARMATIAN,
    imageFront: "/images/counters/wars/War-Sarmatian-10.png",
  }
  counters.set(sarmatian10.name, new War(sarmatian10))

  let sarmatian8 = {
    name: GlobalUnitsModel.WAR.SARMATIAN_8,
    navalStrength: 1,
    strength: 8,
    region: GlobalUnitsModel.HOMELAND_PROVINCE.SARMATIAN,
    imageFront: "/images/counters/wars/War-Sarmatian-8.png",
  }
  counters.set(sarmatian8.name, new War(sarmatian8))

  let SAXON_6 = {
    name: GlobalUnitsModel.WAR.SAXON_6,
    navalStrength: 3,
    strength: 6,
    region: GlobalUnitsModel.HOMELAND_PROVINCE.SAXON,
    imageFront: "/images/counters/wars/War-Saxon-6.png",
  }
  counters.set(SAXON_6.name, new War(sarmatian10))

  let vandal9 = {
    name: GlobalUnitsModel.WAR.VANDAL_9,
    navalStrength: 1,
    strength: 9,
    region: GlobalUnitsModel.HOMELAND_PROVINCE.VANDAL,
    imageFront: "/images/counters/wars/War-Vandal-9.png",
  }
  counters.set(vandal9.name, new War(vandal9))
}
