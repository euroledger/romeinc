import GlobalUnitsModel from "../../GlobalUnitsModel"
import Province from "../Province"

export function buildGallia(mapBoard) {
  const frisia = new Province({
    name: GlobalUnitsModel.PROVINCE.FRISIA,
    homeland: false,
    command: GlobalUnitsModel.COMMAND.GALLIA,
    gold: 1,
    icons: [GlobalUnitsModel.MAP_ICON.UNREST],
    connections: [
      {
        to: GlobalUnitsModel.PROVINCE.BRITANNIA_SUPERIOR,
        connectionType: GlobalUnitsModel.CONNECTION_TYPE.SEA,
        destinationType: GlobalUnitsModel.DESTINATION_TYPE.PROVINCE_HOMELAND,
      },
      {
        to: GlobalUnitsModel.HOMELAND_PROVINCE.GERMAN,
        connectionType: GlobalUnitsModel.CONNECTION_TYPE.ROAD,
        destinationType: GlobalUnitsModel.DESTINATION_TYPE.PROVINCE_HOMELAND,
      },
      {
        to: GlobalUnitsModel.PROVINCE.GERMANIA_INFERIOR,
        connectionType: GlobalUnitsModel.CONNECTION_TYPE.ROAD,
        destinationType: GlobalUnitsModel.DESTINATION_TYPE.PROVINCE,
      },
    ],
  })
  mapBoard.set(frisia.name, frisia)

  const germaniamagna = new Province({
    name: GlobalUnitsModel.PROVINCE.GERMANIA_MAGNA,
    homeland: false,
    command: GlobalUnitsModel.COMMAND.GALLIA,
    gold: 1,
    icons: [GlobalUnitsModel.MAP_ICON.UNREST],
    connections: [
      {
        to: GlobalUnitsModel.HOMELAND_PROVINCE.GERMAN,
        connectionType: GlobalUnitsModel.CONNECTION_TYPE.ROAD,
        destinationType: GlobalUnitsModel.DESTINATION_TYPE.PROVINCE_HOMELAND,
      },
      {
        to: GlobalUnitsModel.HOMELAND_PROVINCE.FRANKISH,
        connectionType: GlobalUnitsModel.CONNECTION_TYPE.RIVER_STRAIGHT,
        destinationType: GlobalUnitsModel.DESTINATION_TYPE.PROVINCE_HOMELAND,
      },
      {
        to: GlobalUnitsModel.PROVINCE.AGRI_DECUMATES,
        connectionType: GlobalUnitsModel.CONNECTION_TYPE.MOUNTAIN,
        destinationType: GlobalUnitsModel.DESTINATION_TYPE.PROVINCE,
      },
      {
        to: GlobalUnitsModel.PROVINCE.GERMANIA_SUPERIOR,
        connectionType: GlobalUnitsModel.CONNECTION_TYPE.RIVER_STRAIGHT,
        destinationType: GlobalUnitsModel.DESTINATION_TYPE.PROVINCE,
      },
      {
        to: GlobalUnitsModel.PROVINCE.GERMANIA_INFERIOR,
        connectionType: GlobalUnitsModel.CONNECTION_TYPE.RIVER_STRAIGHT,
        destinationType: GlobalUnitsModel.DESTINATION_TYPE.PROVINCE,
      },
    ],
  })
  mapBoard.set(germaniamagna.name, germaniamagna)

  const germaniainferior = new Province({
    name: GlobalUnitsModel.PROVINCE.GERMANIA_INFERIOR,
    homeland: false,
    command: GlobalUnitsModel.COMMAND.GALLIA,
    gold: 2,
    icons: [GlobalUnitsModel.MAP_ICON.FLEET, GlobalUnitsModel.MAP_ICON.UNREST],
    connections: [
      {
        to: GlobalUnitsModel.PROVINCE.BRITANNIA_SUPERIOR,
        connectionType: GlobalUnitsModel.CONNECTION_TYPE.RIVER_STRAIGHT,
        destinationType: GlobalUnitsModel.DESTINATION_TYPE.PROVINCE,
      },
      {
        to: GlobalUnitsModel.PROVINCE.GERMANIA_MAGNA,
        connectionType: GlobalUnitsModel.CONNECTION_TYPE.RIVER_STRAIGHT,
        destinationType: GlobalUnitsModel.DESTINATION_TYPE.PROVINCE,
      },
      {
        to: GlobalUnitsModel.PROVINCE.FRISIA,
        connectionType: GlobalUnitsModel.CONNECTION_TYPE.RIVER_STRAIGHT,
        destinationType: GlobalUnitsModel.DESTINATION_TYPE.PROVINCE,
      },
      {
        to: GlobalUnitsModel.PROVINCE.BELGICA,
        connectionType: GlobalUnitsModel.CONNECTION_TYPE.ROAD,
        destinationType: GlobalUnitsModel.DESTINATION_TYPE.PROVINCE,
      },
      {
        to: GlobalUnitsModel.PROVINCE.GERMANIA_SUPERIOR,
        connectionType: GlobalUnitsModel.CONNECTION_TYPE.ROAD,
        destinationType: GlobalUnitsModel.DESTINATION_TYPE.PROVINCE,
      },
    ],
  })
  mapBoard.set(germaniainferior.name, germaniainferior)

  const belgica = new Province({
    name: GlobalUnitsModel.PROVINCE.BELGICA,
    homeland: false,
    command: GlobalUnitsModel.COMMAND.GALLIA,
    gold: 3,
    icons: [],
    connections: [
      {
        to: GlobalUnitsModel.PROVINCE.BRITANNIA_SUPERIOR,
        connectionType: GlobalUnitsModel.CONNECTION_TYPE.RIVER_STRAIGHT,
        destinationType: GlobalUnitsModel.DESTINATION_TYPE.PROVINCE,
      },
      {
        to: GlobalUnitsModel.PROVINCE.GERMANIA_INFERIOR,
        connectionType: GlobalUnitsModel.CONNECTION_TYPE.ROAD,
        destinationType: GlobalUnitsModel.DESTINATION_TYPE.PROVINCE,
      },
      {
        to: GlobalUnitsModel.PROVINCE.GERMANIA_SUPERIOR,
        connectionType: GlobalUnitsModel.CONNECTION_TYPE.ROAD,
        destinationType: GlobalUnitsModel.DESTINATION_TYPE.PROVINCE,
      },
      {
        to: GlobalUnitsModel.PROVINCE.LUGDUNENSIS,
        connectionType: GlobalUnitsModel.CONNECTION_TYPE.ROAD,
        destinationType: GlobalUnitsModel.DESTINATION_TYPE.PROVINCE,
      },
    ],
  })
  mapBoard.set(belgica.name, belgica)

  const germaniasuperior = new Province({
    name: GlobalUnitsModel.PROVINCE.GERMANIA_SUPERIOR,
    homeland: false,
    command: GlobalUnitsModel.COMMAND.GALLIA,
    gold: 2,
    icons: [GlobalUnitsModel.MAP_ICON.UNREST],
    connections: [
      {
        to: GlobalUnitsModel.PROVINCE.BELGICA,
        connectionType: GlobalUnitsModel.CONNECTION_TYPE.ROAD,
        destinationType: GlobalUnitsModel.DESTINATION_TYPE.PROVINCE,
      },
      {
        to: GlobalUnitsModel.PROVINCE.GERMANIA_INFERIOR,
        connectionType: GlobalUnitsModel.CONNECTION_TYPE.ROAD,
        destinationType: GlobalUnitsModel.DESTINATION_TYPE.PROVINCE,
      },
      {
        to: GlobalUnitsModel.PROVINCE.LUGDUNENSIS,
        connectionType: GlobalUnitsModel.CONNECTION_TYPE.ROAD,
        destinationType: GlobalUnitsModel.DESTINATION_TYPE.PROVINCE,
      },
      {
        to: GlobalUnitsModel.PROVINCE.GERMANIA_MAGNA,
        connectionType: GlobalUnitsModel.CONNECTION_TYPE.RIVER_STRAIGHT,
        destinationType: GlobalUnitsModel.DESTINATION_TYPE.PROVINCE,
      },
      {
        to: GlobalUnitsModel.PROVINCE.AGRI_DECUMATES,
        connectionType: GlobalUnitsModel.CONNECTION_TYPE.RIVER_STRAIGHT,
        destinationType: GlobalUnitsModel.DESTINATION_TYPE.PROVINCE,
      },
      {
        to: GlobalUnitsModel.PROVINCE.RHAETIA,
        connectionType: GlobalUnitsModel.CONNECTION_TYPE.MOUNTAIN,
        destinationType: GlobalUnitsModel.DESTINATION_TYPE.PROVINCE,
      },
      {
        to: GlobalUnitsModel.PROVINCE.ALPES,
        connectionType: GlobalUnitsModel.CONNECTION_TYPE.MOUNTAIN,
        destinationType: GlobalUnitsModel.DESTINATION_TYPE.PROVINCE,
      },
    ],
  })
  mapBoard.set(germaniasuperior.name, germaniasuperior)

  const agridecumates = new Province({
    name: GlobalUnitsModel.PROVINCE.AGRI_DECUMATES,
    homeland: false,
    command: GlobalUnitsModel.COMMAND.GALLIA,
    gold: 1,
    icons: [GlobalUnitsModel.MAP_ICON.UNREST],
    connections: [
      {
        to: GlobalUnitsModel.PROVINCE.GERMANIA_MAGNA,
        connectionType: GlobalUnitsModel.CONNECTION_TYPE.MOUNTAIN,
        destinationType: GlobalUnitsModel.DESTINATION_TYPE.PROVINCE,
      },
      {
        to: GlobalUnitsModel.HOMELAND_PROVINCE.ALAMANNIC,
        connectionType: GlobalUnitsModel.CONNECTION_TYPE.MOUNTAIN,
        destinationType: GlobalUnitsModel.DESTINATION_TYPE.PROVINCE_HOMELAND,
      },
      {
        to: GlobalUnitsModel.PROVINCE.BOIOHAEMIA,
        connectionType: GlobalUnitsModel.CONNECTION_TYPE.MOUNTAIN,
        destinationType: GlobalUnitsModel.DESTINATION_TYPE.PROVINCE,
      },
      {
        to: GlobalUnitsModel.PROVINCE.GERMANIA_SUPERIOR,
        connectionType: GlobalUnitsModel.CONNECTION_TYPE.RIVER_STRAIGHT,
        destinationType: GlobalUnitsModel.DESTINATION_TYPE.PROVINCE,
      },
      {
        to: GlobalUnitsModel.PROVINCE.RHAETIA,
        connectionType: GlobalUnitsModel.CONNECTION_TYPE.RIVER_STRAIGHT,
        destinationType: GlobalUnitsModel.DESTINATION_TYPE.PROVINCE,
      },
    ],
  })
  mapBoard.set(agridecumates.name, agridecumates)

  const rhaetia = new Province({
    name: GlobalUnitsModel.PROVINCE.RHAETIA,
    homeland: false,
    command: GlobalUnitsModel.COMMAND.GALLIA,
    gold: 2,
    icons: [GlobalUnitsModel.MAP_ICON.UNREST],
    connections: [
      {
        to: GlobalUnitsModel.PROVINCE.BOIOHAEMIA,
        connectionType: GlobalUnitsModel.CONNECTION_TYPE.RIVER_STRAIGHT,
        destinationType: GlobalUnitsModel.DESTINATION_TYPE.PROVINCE,
      },
      {
        to: GlobalUnitsModel.PROVINCE.AGRI_DECUMATES,
        connectionType: GlobalUnitsModel.CONNECTION_TYPE.RIVER_STRAIGHT,
        destinationType: GlobalUnitsModel.DESTINATION_TYPE.PROVINCE,
      },
      {
        to: GlobalUnitsModel.PROVINCE.NORICUM,
        connectionType: GlobalUnitsModel.CONNECTION_TYPE.MOUNTAIN,
        destinationType: GlobalUnitsModel.DESTINATION_TYPE.PROVINCE,
      },
      {
        to: GlobalUnitsModel.PROVINCE.RAVENNA,
        connectionType: GlobalUnitsModel.CONNECTION_TYPE.MOUNTAIN,
        destinationType: GlobalUnitsModel.DESTINATION_TYPE.PROVINCE,
      },

      {
        to: GlobalUnitsModel.PROVINCE.MEDIOLANUM,
        connectionType: GlobalUnitsModel.CONNECTION_TYPE.MOUNTAIN,
        destinationType: GlobalUnitsModel.DESTINATION_TYPE.PROVINCE,
      },
      {
        to: GlobalUnitsModel.PROVINCE.GERMANIA_SUPERIOR,
        connectionType: GlobalUnitsModel.CONNECTION_TYPE.MOUNTAIN,
        destinationType: GlobalUnitsModel.DESTINATION_TYPE.PROVINCE,
      },
    ],
  })
  mapBoard.set(rhaetia.name, rhaetia)

  const lugdunensis = new Province({
    name: GlobalUnitsModel.PROVINCE.LUGDUNENSIS,
    homeland: false,
    command: GlobalUnitsModel.COMMAND.GALLIA,
    gold: 3,
    icons: [],
    connections: [
      {
        to: GlobalUnitsModel.PROVINCE.BRITANNIA_SUPERIOR,
        connectionType: GlobalUnitsModel.CONNECTION_TYPE.RIVER_STRAIGHT,
        destinationType: GlobalUnitsModel.DESTINATION_TYPE.PROVINCE,
      },
      {
        to: GlobalUnitsModel.PROVINCE.BELGICA,
        connectionType: GlobalUnitsModel.CONNECTION_TYPE.ROAD,
        destinationType: GlobalUnitsModel.DESTINATION_TYPE.PROVINCE,
      },
      {
        to: GlobalUnitsModel.PROVINCE.GERMANIA_SUPERIOR,
        connectionType: GlobalUnitsModel.CONNECTION_TYPE.ROAD,
        destinationType: GlobalUnitsModel.DESTINATION_TYPE.PROVINCE,
      },
      {
        to: GlobalUnitsModel.PROVINCE.NARBONENSIS,
        connectionType: GlobalUnitsModel.CONNECTION_TYPE.ROAD,
        destinationType: GlobalUnitsModel.DESTINATION_TYPE.PROVINCE,
      },
      {
        to: GlobalUnitsModel.PROVINCE.AQUITANIA,
        connectionType: GlobalUnitsModel.CONNECTION_TYPE.ROAD,
        destinationType: GlobalUnitsModel.DESTINATION_TYPE.PROVINCE,
      },
    ],
  })
  mapBoard.set(lugdunensis.name, lugdunensis)

  const aquitania = new Province({
    name: GlobalUnitsModel.PROVINCE.AQUITANIA,
    homeland: false,
    command: GlobalUnitsModel.COMMAND.GALLIA,
    gold: 3,
    icons: [],
    connections: [
      {
        to: GlobalUnitsModel.PROVINCE.LUGDUNENSIS,
        connectionType: GlobalUnitsModel.CONNECTION_TYPE.ROAD,
        destinationType: GlobalUnitsModel.DESTINATION_TYPE.PROVINCE,
      },
      {
        to: GlobalUnitsModel.PROVINCE.NARBONENSIS,
        connectionType: GlobalUnitsModel.CONNECTION_TYPE.ROAD,
        destinationType: GlobalUnitsModel.DESTINATION_TYPE.PROVINCE,
      },
      {
        to: GlobalUnitsModel.PROVINCE.GALLAECIA,
        connectionType: GlobalUnitsModel.CONNECTION_TYPE.MOUNTAIN,
        destinationType: GlobalUnitsModel.DESTINATION_TYPE.PROVINCE,
      },
    ],
  })
  mapBoard.set(aquitania.name, aquitania)

  const narbonensis = new Province({
    name: GlobalUnitsModel.PROVINCE.NARBONENSIS,
    homeland: false,
    command: GlobalUnitsModel.COMMAND.GALLIA,
    gold: 4,
    icons: [],
    connections: [
      {
        to: GlobalUnitsModel.PROVINCE.AQUITANIA,
        connectionType: GlobalUnitsModel.CONNECTION_TYPE.ROAD,
        destinationType: GlobalUnitsModel.DESTINATION_TYPE.PROVINCE,
      },
      {
        to: GlobalUnitsModel.PROVINCE.LUGDUNENSIS,
        connectionType: GlobalUnitsModel.CONNECTION_TYPE.ROAD,
        destinationType: GlobalUnitsModel.DESTINATION_TYPE.PROVINCE,
      },
      {
        to: GlobalUnitsModel.PROVINCE.ALPES,
        connectionType: GlobalUnitsModel.CONNECTION_TYPE.MOUNTAIN,
        destinationType: GlobalUnitsModel.DESTINATION_TYPE.PROVINCE,
      },
      {
        to: GlobalUnitsModel.PROVINCE.TARRACONENSIS,
        connectionType: GlobalUnitsModel.CONNECTION_TYPE.MOUNTAIN,
        destinationType: GlobalUnitsModel.DESTINATION_TYPE.PROVINCE,
      },
      {
        to: GlobalUnitsModel.PROVINCE.CORSICA_SARDINIA,
        connectionType: GlobalUnitsModel.CONNECTION_TYPE.SEA,
        destinationType: GlobalUnitsModel.DESTINATION_TYPE.PROVINCE,
      },
      {
        to: GlobalUnitsModel.PROVINCE.BALEARES,
        connectionType: GlobalUnitsModel.CONNECTION_TYPE.SEA,
        destinationType: GlobalUnitsModel.DESTINATION_TYPE.PROVINCE,
      },
    ],
  })
  mapBoard.set(narbonensis.name, narbonensis)
}
