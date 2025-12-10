import GlobalUnitsModel from "../../GlobalUnitsModel"
import Province from "../Province"

export function buildHomelands(mapBoard) {
  const caledonian = new Province({
    name: GlobalUnitsModel.HOMELAND_PROVINCE.CALEDONIAN,
    homeland: true,
    gold: 0,
    icons: [],
    connections: [
      {
        to: GlobalUnitsModel.PROVINCE.CALEDONIA,
        connectionType: GlobalUnitsModel.CONNECTION_TYPE.MOUNTAIN,
        destinationType: GlobalUnitsModel.DESTINATION_TYPE.PROVINCE,
      },
      {
        to: GlobalUnitsModel.PROVINCE.HIBERNIA,
        connectionType: GlobalUnitsModel.CONNECTION_TYPE.SEA,
        destinationType: GlobalUnitsModel.DESTINATION_TYPE.PROVINCE,
      },
    ],
  })
  mapBoard.set(caledonian.name, caledonian)

  const british = new Province({
    name: GlobalUnitsModel.HOMELAND_PROVINCE.BRITISH,
    homeland: true,
    gold: 0,
    icons: [],
    connections: [
      {
        to: GlobalUnitsModel.PROVINCE.HIBERNIA,
        connectionType: GlobalUnitsModel.CONNECTION_TYPE.RIVER_STRAIGHT,
        destinationType: GlobalUnitsModel.DESTINATION_TYPE.PROVINCE,
      },
      {
        to: GlobalUnitsModel.PROVINCE.BRITANNIA_SUPERIOR,
        connectionType: GlobalUnitsModel.CONNECTION_TYPE.RIVER_STRAIGHT,
        destinationType: GlobalUnitsModel.DESTINATION_TYPE.PROVINCE,
      },
      {
        to: GlobalUnitsModel.PROVINCE.BRITANNIA_INFERIOR,
        connectionType: GlobalUnitsModel.CONNECTION_TYPE.MOUNTAIN,
        destinationType: GlobalUnitsModel.DESTINATION_TYPE.PROVINCE,
      },
    ],
  })
  mapBoard.set(british.name, british)

  const cantabrian = new Province({
    name: GlobalUnitsModel.HOMELAND_PROVINCE.CANTABRIAN,
    homeland: true,
    gold: 0,
    icons: [],
    connections: [
      {
        to: GlobalUnitsModel.PROVINCE.GALLAECIA,
        connectionType: GlobalUnitsModel.CONNECTION_TYPE.MOUNTAIN,
        destinationType: GlobalUnitsModel.DESTINATION_TYPE.PROVINCE,
      },
    ],
  })
  mapBoard.set(cantabrian.name, cantabrian)
  const german = new Province({
    name: GlobalUnitsModel.HOMELAND_PROVINCE.GERMAN,
    homeland: true,
    gold: 0,
    icons: [],
    connections: [
      {
        to: GlobalUnitsModel.HOMELAND_PROVINCE.SAXON,
        connectionType: GlobalUnitsModel.CONNECTION_TYPE.RIVER_STRAIGHT,
        destinationType: GlobalUnitsModel.DESTINATION_TYPE.PROVINCE_HOMELAND,
      },
      {
        to: GlobalUnitsModel.HOMELAND_PROVINCE.FRANKISH,
        connectionType: GlobalUnitsModel.CONNECTION_TYPE.RIVER_STRAIGHT,
        destinationType: GlobalUnitsModel.DESTINATION_TYPE.PROVINCE_HOMELAND,
      },
      {
        to: GlobalUnitsModel.PROVINCE.FRISIA,
        connectionType: GlobalUnitsModel.CONNECTION_TYPE.RIVER_STRAIGHT,
        destinationType: GlobalUnitsModel.DESTINATION_TYPE.PROVINCE,
      },
      {
        to: GlobalUnitsModel.PROVINCE.GERMANIA_MAGNA,
        connectionType: GlobalUnitsModel.CONNECTION_TYPE.ROAD,
        destinationType: GlobalUnitsModel.DESTINATION_TYPE.PROVINCE,
      },
    ],
  })
  mapBoard.set(german.name, german)

  const saxon = new Province({
    name: GlobalUnitsModel.HOMELAND_PROVINCE.SAXON,
    homeland: true,
    gold: 0,
    icons: [],
    connections: [
      {
        to: GlobalUnitsModel.HOMELAND_PROVINCE.GERMAN,
        connectionType: GlobalUnitsModel.CONNECTION_TYPE.RIVER_STRAIGHT,
        destinationType: GlobalUnitsModel.DESTINATION_TYPE.PROVINCE_HOMELAND,
      },
    ],
  })
  mapBoard.set(saxon.name, saxon)

  const frankish = new Province({
    name: GlobalUnitsModel.HOMELAND_PROVINCE.FRANKISH,
    homeland: true,
    gold: 0,
    icons: [],
    connections: [
      {
        to: GlobalUnitsModel.HOMELAND_PROVINCE.GERMAN,
        connectionType: GlobalUnitsModel.CONNECTION_TYPE.RIVER_STRAIGHT,
        destinationType: GlobalUnitsModel.DESTINATION_TYPE.PROVINCE_HOMELAND,
      },
      {
        to: GlobalUnitsModel.HOMELAND_PROVINCE.BURGUNDIAN,
        connectionType: GlobalUnitsModel.CONNECTION_TYPE.RIVER_STRAIGHT,
        destinationType: GlobalUnitsModel.DESTINATION_TYPE.PROVINCE_HOMELAND,
      },
      {
        to: GlobalUnitsModel.PROVINCE.GERMANIA_MAGNA,
        connectionType: GlobalUnitsModel.CONNECTION_TYPE.RIVER_STRAIGHT,
        destinationType: GlobalUnitsModel.DESTINATION_TYPE.PROVINCE,
      },
    ],
  })
  mapBoard.set(frankish.name, frankish)

  const burgundian = new Province({
    name: GlobalUnitsModel.HOMELAND_PROVINCE.BURGUNDIAN,
    homeland: true,
    gold: 0,
    icons: [],
    connections: [
      {
        to: GlobalUnitsModel.HOMELAND_PROVINCE.FRANKISH,
        connectionType: GlobalUnitsModel.CONNECTION_TYPE.RIVER_STRAIGHT,
        destinationType: GlobalUnitsModel.DESTINATION_TYPE.PROVINCE_HOMELAND,
      },
      {
        to: GlobalUnitsModel.HOMELAND_PROVINCE.ALAMANNIC,
        connectionType: GlobalUnitsModel.CONNECTION_TYPE.RIVER_STRAIGHT,
        destinationType: GlobalUnitsModel.DESTINATION_TYPE.PROVINCE_HOMELAND,
      },
    ],
  })
  mapBoard.set(burgundian.name, burgundian)

  const alamannic = new Province({
    name: GlobalUnitsModel.HOMELAND_PROVINCE.ALAMANNIC,
    homeland: true,
    gold: 0,
    icons: [],
    connections: [
      {
        to: GlobalUnitsModel.HOMELAND_PROVINCE.BURGUNDIAN,
        connectionType: GlobalUnitsModel.CONNECTION_TYPE.RIVER_STRAIGHT,
        destinationType: GlobalUnitsModel.DESTINATION_TYPE.PROVINCE_HOMELAND,
      },
      {
        to: GlobalUnitsModel.PROVINCE.AGRI_DECUMATES,
        connectionType: GlobalUnitsModel.CONNECTION_TYPE.MOUNTAIN,
        destinationType: GlobalUnitsModel.DESTINATION_TYPE.PROVINCE,
      },
      {
        to: GlobalUnitsModel.PROVINCE.BOIOHAEMIA,
        connectionType: GlobalUnitsModel.CONNECTION_TYPE.MOUNTAIN,
        destinationType: GlobalUnitsModel.DESTINATION_TYPE.PROVINCE,
      },
    ],
  })
  mapBoard.set(alamannic.name, alamannic)

  const marcomannic = new Province({
    name: GlobalUnitsModel.HOMELAND_PROVINCE.MARCOMANNIC,
    homeland: true,
    gold: 0,
    icons: [],
    connections: [
      {
        to: GlobalUnitsModel.PROVINCE.QUADIA,
        connectionType: GlobalUnitsModel.CONNECTION_TYPE.MOUNTAIN,
        destinationType: GlobalUnitsModel.DESTINATION_TYPE.PROVINCE,
      },
      {
        to: GlobalUnitsModel.PROVINCE.BOIOHAEMIA,
        connectionType: GlobalUnitsModel.CONNECTION_TYPE.MOUNTAIN,
        destinationType: GlobalUnitsModel.DESTINATION_TYPE.PROVINCE,
      },
    ],
  })
  mapBoard.set(marcomannic.name, marcomannic)

  const illyrian = new Province({
    name: GlobalUnitsModel.HOMELAND_PROVINCE.ILLYRIAN,
    homeland: true,
    gold: 0,
    icons: [],
    connections: [
      {
        to: GlobalUnitsModel.PROVINCE.QUADIA,
        connectionType: GlobalUnitsModel.CONNECTION_TYPE.MOUNTAIN,
        destinationType: GlobalUnitsModel.DESTINATION_TYPE.PROVINCE,
      },
      {
        to: GlobalUnitsModel.PROVINCE.SARMATIA,
        connectionType: GlobalUnitsModel.CONNECTION_TYPE.MOUNTAIN,
        destinationType: GlobalUnitsModel.DESTINATION_TYPE.PROVINCE,
      },
    ],
  })
  mapBoard.set(illyrian.name, illyrian)

  const vandal = new Province({
    name: GlobalUnitsModel.HOMELAND_PROVINCE.VANDAL,
    homeland: true,
    gold: 0,
    icons: [],
    connections: [
      {
        to: GlobalUnitsModel.HOMELAND_PROVINCE.SARMATIAN,
        connectionType: GlobalUnitsModel.CONNECTION_TYPE.MOUNTAIN,
        destinationType: GlobalUnitsModel.DESTINATION_TYPE.PROVINCE_HOMELAND,
      },
    ],
  })
  mapBoard.set(vandal.name, vandal)

  const sarmatian = new Province({
    name: GlobalUnitsModel.HOMELAND_PROVINCE.SARMATIAN,
    homeland: true,
    gold: 0,
    icons: [],
    connections: [
      {
        to: GlobalUnitsModel.PROVINCE.DACIA_SUPERIOR,
        connectionType: GlobalUnitsModel.CONNECTION_TYPE.MOUNTAIN,
        destinationType: GlobalUnitsModel.DESTINATION_TYPE.PROVINCE,
      },
      {
        to: GlobalUnitsModel.PROVINCE.SARMATIA,
        connectionType: GlobalUnitsModel.CONNECTION_TYPE.MOUNTAIN,
        destinationType: GlobalUnitsModel.DESTINATION_TYPE.PROVINCE,
      },
      {
        to: GlobalUnitsModel.HOMELAND_PROVINCE.VANDAL,
        connectionType: GlobalUnitsModel.CONNECTION_TYPE.MOUNTAIN,
        destinationType: GlobalUnitsModel.DESTINATION_TYPE.PROVINCE_HOMELAND,
      },
    ],
  })
  mapBoard.set(sarmatian.name, sarmatian)

  const dacian = new Province({
    name: GlobalUnitsModel.HOMELAND_PROVINCE.DACIAN,
    homeland: true,
    gold: 0,
    icons: [],
    connections: [
      {
        to: GlobalUnitsModel.PROVINCE.DACIA_SUPERIOR,
        connectionType: GlobalUnitsModel.CONNECTION_TYPE.MOUNTAIN,
        destinationType: GlobalUnitsModel.DESTINATION_TYPE.PROVINCE,
      },
      {
        to: GlobalUnitsModel.PROVINCE.SCYTHIA,
        connectionType: GlobalUnitsModel.CONNECTION_TYPE.MOUNTAIN,
        destinationType: GlobalUnitsModel.DESTINATION_TYPE.PROVINCE,
      },
    ],
  })
  mapBoard.set(dacian.name, dacian)

  const gothic = new Province({
    name: GlobalUnitsModel.HOMELAND_PROVINCE.GOTHIC,
    homeland: true,
    gold: 0,
    icons: [],
    connections: [
      {
        to: GlobalUnitsModel.PROVINCE.SCYTHIA,
        connectionType: GlobalUnitsModel.CONNECTION_TYPE.RIVER_STRAIGHT,
        destinationType: GlobalUnitsModel.DESTINATION_TYPE.PROVINCE,
      },
      {
        to: GlobalUnitsModel.PROVINCE.BOSPORUS,
        connectionType: GlobalUnitsModel.CONNECTION_TYPE.RIVER_STRAIGHT,
        destinationType: GlobalUnitsModel.DESTINATION_TYPE.PROVINCE,
      },
    ],
  })
  mapBoard.set(gothic.name, gothic)

  const alan = new Province({
    name: GlobalUnitsModel.HOMELAND_PROVINCE.ALAN,
    homeland: true,
    gold: 0,
    icons: [],
    connections: [
      {
        to: GlobalUnitsModel.PROVINCE.CAUCASIA,
        connectionType: GlobalUnitsModel.CONNECTION_TYPE.MOUNTAIN,
        destinationType: GlobalUnitsModel.DESTINATION_TYPE.PROVINCE,
      },
      {
        to: GlobalUnitsModel.PROVINCE.COLCHIS,
        connectionType: GlobalUnitsModel.CONNECTION_TYPE.MOUNTAIN,
        destinationType: GlobalUnitsModel.DESTINATION_TYPE.PROVINCE,
      },
      {
        to: GlobalUnitsModel.PROVINCE.IBERIA,
        connectionType: GlobalUnitsModel.CONNECTION_TYPE.MOUNTAIN,
        destinationType: GlobalUnitsModel.DESTINATION_TYPE.PROVINCE,
      },
      {
        to: GlobalUnitsModel.PROVINCE.ALBANIA,
        connectionType: GlobalUnitsModel.CONNECTION_TYPE.MOUNTAIN,
        destinationType: GlobalUnitsModel.DESTINATION_TYPE.PROVINCE,
      },
    ],
  })
  mapBoard.set(alan.name, alan)

  const parthian = new Province({
    name: GlobalUnitsModel.HOMELAND_PROVINCE.ALAN,
    homeland: true,
    gold: 0,
    icons: [],
    connections: [
      {
        to: GlobalUnitsModel.PROVINCE.ARMENIA_MAJOR,
        connectionType: GlobalUnitsModel.CONNECTION_TYPE.MOUNTAIN,
        destinationType: GlobalUnitsModel.DESTINATION_TYPE.PROVINCE,
      },
      {
        to: GlobalUnitsModel.PROVINCE.ASSYTRIA,
        connectionType: GlobalUnitsModel.CONNECTION_TYPE.ROAD,
        destinationType: GlobalUnitsModel.DESTINATION_TYPE.PROVINCE,
      },
      {
        to: GlobalUnitsModel.PROVINCE.BABYLONIA,
        connectionType: GlobalUnitsModel.CONNECTION_TYPE.RIVER,
        destinationType: GlobalUnitsModel.DESTINATION_TYPE.PROVINCE,
      },
    ],
  })
  mapBoard.set(parthian.name, parthian)

  const persian = new Province({
    name: GlobalUnitsModel.HOMELAND_PROVINCE.PERSIAN,
    homeland: true,
    gold: 0,
    icons: [],
    connections: [
      {
        to: GlobalUnitsModel.PROVINCE.BABYLONIA,
        connectionType: GlobalUnitsModel.CONNECTION_TYPE.RIVER,
        destinationType: GlobalUnitsModel.DESTINATION_TYPE.PROVINCE,
      },
    ],
  })
  mapBoard.set(persian.name, persian)

  const palmryene = new Province({
    name: GlobalUnitsModel.HOMELAND_PROVINCE.PALMYRENE,
    homeland: true,
    gold: 0,
    icons: [],
    connections: [
      {
        to: GlobalUnitsModel.PROVINCE.PALMYRA,
        connectionType: GlobalUnitsModel.CONNECTION_TYPE.DESERT,
        destinationType: GlobalUnitsModel.DESTINATION_TYPE.PROVINCE,
      },
    ],
  })
  mapBoard.set(palmryene.name, palmryene)

  const judean = new Province({
    name: GlobalUnitsModel.HOMELAND_PROVINCE.JUDEAN,
    homeland: true,
    gold: 0,
    icons: [],
    connections: [
      {
        to: GlobalUnitsModel.PROVINCE.JUDEA,
        connectionType: GlobalUnitsModel.CONNECTION_TYPE.DESERT,
        destinationType: GlobalUnitsModel.DESTINATION_TYPE.PROVINCE,
      },
    ],
  })
  mapBoard.set(judean.name, judean)

  const nubian = new Province({
    name: GlobalUnitsModel.HOMELAND_PROVINCE.NUBIAN,
    homeland: true,
    gold: 0,
    icons: [],
    connections: [
      {
        to: GlobalUnitsModel.PROVINCE.AETHIOPIA,
        connectionType: GlobalUnitsModel.CONNECTION_TYPE.RIVER_STRAIGHT,
        destinationType: GlobalUnitsModel.DESTINATION_TYPE.PROVINCE,
      },
    ],
  })
  mapBoard.set(nubian.name, nubian)

  const moorish = new Province({
    name: GlobalUnitsModel.HOMELAND_PROVINCE.NUBIAN,
    homeland: true,
    gold: 0,
    icons: [],
    connections: [
      {
        to: GlobalUnitsModel.PROVINCE.NUMIDIA,
        connectionType: GlobalUnitsModel.CONNECTION_TYPE.ROAD,
        destinationType: GlobalUnitsModel.DESTINATION_TYPE.PROVINCE,
      },
    ],
  })
  mapBoard.set(moorish.name, moorish)
}
