import GlobalUnitsModel from "../../GlobalUnitsModel"
import Province from "../Province"

export function buildSyria(mapBoard) {
  const commagene = new Province({
    name: GlobalUnitsModel.PROVINCE.COMMAGENE,
    homeland: false,
    command: GlobalUnitsModel.COMMAND.SYRIA,
    gold: 2,
    icons: [GlobalUnitsModel.MAP_ICON.UNREST, GlobalUnitsModel.MAP_ICON.SUN],
    connections: [
      {
        to: GlobalUnitsModel.PROVINCE.CAPPADOCIA,
        connectionType: GlobalUnitsModel.CONNECTION_TYPE.MOUNTAIN,
        destinationType: GlobalUnitsModel.DESTINATION_TYPE.PROVINCE,
      },
      {
        to: GlobalUnitsModel.PROVINCE.OSRHOENE,
        connectionType: GlobalUnitsModel.CONNECTION_TYPE.RIVER_STRAIGHT,
        destinationType: GlobalUnitsModel.DESTINATION_TYPE.PROVINCE,
      },
      {
        to: GlobalUnitsModel.PROVINCE.SYRIA,
        connectionType: GlobalUnitsModel.CONNECTION_TYPE.ROAD,
        destinationType: GlobalUnitsModel.DESTINATION_TYPE.PROVINCE,
      },
    ],
  })
  mapBoard.set(commagene.name, commagene)

  const osrhoene = new Province({
    name: GlobalUnitsModel.PROVINCE.OSRHOENE,
    homeland: false,
    command: GlobalUnitsModel.COMMAND.SYRIA,
    gold: 3,
    icons: [GlobalUnitsModel.MAP_ICON.UNREST, GlobalUnitsModel.MAP_ICON.SUN],
    connections: [
      {
        to: GlobalUnitsModel.PROVINCE.COMMAGENE,
        connectionType: GlobalUnitsModel.CONNECTION_TYPE.RIVER_STRAIGHT,
        destinationType: GlobalUnitsModel.DESTINATION_TYPE.PROVINCE,
      },
      {
        to: GlobalUnitsModel.PROVINCE.ASSYTRIA,
        connectionType: GlobalUnitsModel.CONNECTION_TYPE.RIVER_STRAIGHT,
        destinationType: GlobalUnitsModel.DESTINATION_TYPE.PROVINCE,
      },
      {
        to: GlobalUnitsModel.PROVINCE.ARMENIA_MAJOR,
        connectionType: GlobalUnitsModel.CONNECTION_TYPE.RIVER_STRAIGHT,
        destinationType: GlobalUnitsModel.DESTINATION_TYPE.PROVINCE,
      },
      {
        to: GlobalUnitsModel.PROVINCE.SYRIA,
        connectionType: GlobalUnitsModel.CONNECTION_TYPE.DESERT,
        destinationType: GlobalUnitsModel.DESTINATION_TYPE.PROVINCE,
      },
      {
        to: GlobalUnitsModel.PROVINCE.MESOPOTAMIA,
        connectionType: GlobalUnitsModel.CONNECTION_TYPE.ROAD,
        destinationType: GlobalUnitsModel.DESTINATION_TYPE.PROVINCE,
      },
    ],
  })
  mapBoard.set(osrhoene.name, osrhoene)

  const assyria = new Province({
    name: GlobalUnitsModel.PROVINCE.ASSYTRIA,
    homeland: false,
    command: GlobalUnitsModel.COMMAND.SYRIA,
    gold: 4,
    icons: [GlobalUnitsModel.MAP_ICON.UNREST, GlobalUnitsModel.MAP_ICON.SUN],
    connections: [
      {
        to: GlobalUnitsModel.HOMELAND_PROVINCE.PARTHIAN,
        connectionType: GlobalUnitsModel.CONNECTION_TYPE.ROAD,
        destinationType: GlobalUnitsModel.DESTINATION_TYPE.PROVINCE_HOMELAND,
      },
      {
        to: GlobalUnitsModel.PROVINCE.ARMENIA_MAJOR,
        connectionType: GlobalUnitsModel.CONNECTION_TYPE.MOUNTAIN,
        destinationType: GlobalUnitsModel.DESTINATION_TYPE.PROVINCE,
      },
      {
        to: GlobalUnitsModel.PROVINCE.OSRHOENE,
        connectionType: GlobalUnitsModel.CONNECTION_TYPE.RIVER_STRAIGHT,
        destinationType: GlobalUnitsModel.DESTINATION_TYPE.PROVINCE,
      },
      {
        to: GlobalUnitsModel.PROVINCE.MESOPOTAMIA,
        connectionType: GlobalUnitsModel.CONNECTION_TYPE.RIVER_STRAIGHT,
        destinationType: GlobalUnitsModel.DESTINATION_TYPE.PROVINCE,
      },
      {
        to: GlobalUnitsModel.PROVINCE.BABYLONIA,
        connectionType: GlobalUnitsModel.CONNECTION_TYPE.RIVER_STRAIGHT,
        destinationType: GlobalUnitsModel.DESTINATION_TYPE.PROVINCE,
      },
    ],
  })
  mapBoard.set(assyria.name, assyria)

  const cilicia = new Province({
    name: GlobalUnitsModel.PROVINCE.CILICIA,
    homeland: false,
    command: GlobalUnitsModel.COMMAND.SYRIA,
    gold: 3,
    icons: [],
    connections: [
      {
        to: GlobalUnitsModel.PROVINCE.CAPPADOCIA,
        connectionType: GlobalUnitsModel.CONNECTION_TYPE.MOUNTAIN,
        destinationType: GlobalUnitsModel.DESTINATION_TYPE.PROVINCE,
      },
      {
        to: GlobalUnitsModel.PROVINCE.LYCIA_PAMPHILIA,
        connectionType: GlobalUnitsModel.CONNECTION_TYPE.MOUNTAIN,
        destinationType: GlobalUnitsModel.DESTINATION_TYPE.PROVINCE,
      },
      {
        to: GlobalUnitsModel.PROVINCE.SYRIA,
        connectionType: GlobalUnitsModel.CONNECTION_TYPE.MOUNTAIN,
        destinationType: GlobalUnitsModel.DESTINATION_TYPE.PROVINCE,
      },
      {
        to: GlobalUnitsModel.PROVINCE.CYPRUS,
        connectionType: GlobalUnitsModel.CONNECTION_TYPE.SEA,
        destinationType: GlobalUnitsModel.DESTINATION_TYPE.PROVINCE,
      },
    ],
  })
  mapBoard.set(cilicia.name, cilicia)

  const syria = new Province({
    name: GlobalUnitsModel.PROVINCE.SYRIA,
    homeland: false,
    command: GlobalUnitsModel.COMMAND.SYRIA,
    gold: 4,
    icons: [GlobalUnitsModel.MAP_ICON.UNREST, GlobalUnitsModel.MAP_ICON.FLEET],
    connections: [
      {
        to: GlobalUnitsModel.PROVINCE.CILICIA,
        connectionType: GlobalUnitsModel.CONNECTION_TYPE.MOUNTAIN,
        destinationType: GlobalUnitsModel.DESTINATION_TYPE.PROVINCE,
      },
      {
        to: GlobalUnitsModel.PROVINCE.COMMAGENE,
        connectionType: GlobalUnitsModel.CONNECTION_TYPE.ROAD,
        destinationType: GlobalUnitsModel.DESTINATION_TYPE.PROVINCE,
      },
      {
        to: GlobalUnitsModel.PROVINCE.OSRHOENE,
        connectionType: GlobalUnitsModel.CONNECTION_TYPE.DESERT,
        destinationType: GlobalUnitsModel.DESTINATION_TYPE.PROVINCE,
      },
      {
        to: GlobalUnitsModel.PROVINCE.MESOPOTAMIA,
        connectionType: GlobalUnitsModel.CONNECTION_TYPE.DESERT,
        destinationType: GlobalUnitsModel.DESTINATION_TYPE.PROVINCE,
      },
      {
        to: GlobalUnitsModel.PROVINCE.PALMYRA,
        connectionType: GlobalUnitsModel.CONNECTION_TYPE.DESERT,
        destinationType: GlobalUnitsModel.DESTINATION_TYPE.PROVINCE,
      },
      {
        to: GlobalUnitsModel.PROVINCE.PHOENECIA,
        connectionType: GlobalUnitsModel.CONNECTION_TYPE.ROAD,
        destinationType: GlobalUnitsModel.DESTINATION_TYPE.PROVINCE,
      },
      {
        to: GlobalUnitsModel.PROVINCE.CYPRUS,
        connectionType: GlobalUnitsModel.CONNECTION_TYPE.SEA,
        destinationType: GlobalUnitsModel.DESTINATION_TYPE.PROVINCE,
      },
    ],
  })
  mapBoard.set(syria.name, syria)

  const mesopotamia = new Province({
    name: GlobalUnitsModel.PROVINCE.MESOPOTAMIA,
    homeland: false,
    command: GlobalUnitsModel.COMMAND.SYRIA,
    gold: 3,
    icons: [GlobalUnitsModel.MAP_ICON.UNREST, GlobalUnitsModel.MAP_ICON.SUN],
    connections: [
      {
        to: GlobalUnitsModel.PROVINCE.OSRHOENE,
        connectionType: GlobalUnitsModel.CONNECTION_TYPE.ROAD,
        destinationType: GlobalUnitsModel.DESTINATION_TYPE.PROVINCE,
      },
      {
        to: GlobalUnitsModel.PROVINCE.ASSYTRIA,
        connectionType: GlobalUnitsModel.CONNECTION_TYPE.RIVER_STRAIGHT,
        destinationType: GlobalUnitsModel.DESTINATION_TYPE.PROVINCE,
      },
      {
        to: GlobalUnitsModel.PROVINCE.BABYLONIA,
        connectionType: GlobalUnitsModel.CONNECTION_TYPE.ROAD,
        destinationType: GlobalUnitsModel.DESTINATION_TYPE.PROVINCE,
      },
      {
        to: GlobalUnitsModel.PROVINCE.SYRIA,
        connectionType: GlobalUnitsModel.CONNECTION_TYPE.DESERT,
        destinationType: GlobalUnitsModel.DESTINATION_TYPE.PROVINCE,
      },
      {
        to: GlobalUnitsModel.PROVINCE.PALMYRA,
        connectionType: GlobalUnitsModel.CONNECTION_TYPE.DESERT,
        destinationType: GlobalUnitsModel.DESTINATION_TYPE.PROVINCE,
      },
    ],
  })
  mapBoard.set(mesopotamia.name, mesopotamia)

  const babylonia = new Province({
    name: GlobalUnitsModel.PROVINCE.BABYLONIA,
    homeland: false,
    command: GlobalUnitsModel.COMMAND.SYRIA,
    gold: 4,
    icons: [GlobalUnitsModel.MAP_ICON.UNREST, GlobalUnitsModel.MAP_ICON.SUN, GlobalUnitsModel.MAP_ICON.FLEET],
    connections: [
      {
        to: GlobalUnitsModel.HOMELAND_PROVINCE.PARTHIAN,
        connectionType: GlobalUnitsModel.CONNECTION_TYPE.RIVER_STRAIGHT,
        destinationType: GlobalUnitsModel.DESTINATION_TYPE.PROVINCE_HOMELAND,
      },
      {
        to: GlobalUnitsModel.HOMELAND_PROVINCE.PERSIAN,
        connectionType: GlobalUnitsModel.CONNECTION_TYPE.RIVER_STRAIGHT,
        destinationType: GlobalUnitsModel.DESTINATION_TYPE.PROVINCE_HOMELAND,
      },
      {
        to: GlobalUnitsModel.PROVINCE.ASSYTRIA,
        connectionType: GlobalUnitsModel.CONNECTION_TYPE.RIVER_STRAIGHT,
        destinationType: GlobalUnitsModel.DESTINATION_TYPE.PROVINCE,
      },
      {
        to: GlobalUnitsModel.PROVINCE.MESOPOTAMIA,
        connectionType: GlobalUnitsModel.CONNECTION_TYPE.ROAD,
        destinationType: GlobalUnitsModel.DESTINATION_TYPE.PROVINCE,
      },
    ],
  })
  mapBoard.set(babylonia.name, babylonia)

  const cyprus = new Province({
    name: GlobalUnitsModel.PROVINCE.CYPRUS,
    homeland: false,
    command: GlobalUnitsModel.COMMAND.SYRIA,
    gold: 3,
    icons: [],
    connections: [
      {
        to: GlobalUnitsModel.PROVINCE.LYCIA_PAMPHILIA,
        connectionType: GlobalUnitsModel.CONNECTION_TYPE.SEA,
        destinationType: GlobalUnitsModel.DESTINATION_TYPE.PROVINCE,
      },
      {
        to: GlobalUnitsModel.PROVINCE.CILICIA,
        connectionType: GlobalUnitsModel.CONNECTION_TYPE.SEA,
        destinationType: GlobalUnitsModel.DESTINATION_TYPE.PROVINCE,
      },
      {
        to: GlobalUnitsModel.PROVINCE.SYRIA,
        connectionType: GlobalUnitsModel.CONNECTION_TYPE.SEA,
        destinationType: GlobalUnitsModel.DESTINATION_TYPE.PROVINCE,
      },
      {
        to: GlobalUnitsModel.PROVINCE.PHOENECIA,
        connectionType: GlobalUnitsModel.CONNECTION_TYPE.SEA,
        destinationType: GlobalUnitsModel.DESTINATION_TYPE.PROVINCE,
      },
      {
        to: GlobalUnitsModel.PROVINCE.JUDEA,
        connectionType: GlobalUnitsModel.CONNECTION_TYPE.SEA,
        destinationType: GlobalUnitsModel.DESTINATION_TYPE.PROVINCE,
      },
      {
        to: GlobalUnitsModel.PROVINCE.ALEXANDRIA,
        connectionType: GlobalUnitsModel.CONNECTION_TYPE.SEA,
        destinationType: GlobalUnitsModel.DESTINATION_TYPE.PROVINCE,
      },
    ],
  })
  mapBoard.set(cyprus.name, cyprus)

  const phoenicia = new Province({
    name: GlobalUnitsModel.PROVINCE.PHOENECIA,
    homeland: false,
    command: GlobalUnitsModel.COMMAND.SYRIA,
    gold: 3,
    icons: [GlobalUnitsModel.MAP_ICON.UNREST],
    connections: [
      {
        to: GlobalUnitsModel.PROVINCE.CYPRUS,
        connectionType: GlobalUnitsModel.CONNECTION_TYPE.SEA,
        destinationType: GlobalUnitsModel.DESTINATION_TYPE.PROVINCE,
      },
      {
        to: GlobalUnitsModel.PROVINCE.SYRIA,
        connectionType: GlobalUnitsModel.CONNECTION_TYPE.SEA,
        destinationType: GlobalUnitsModel.DESTINATION_TYPE.PROVINCE,
      },
      {
        to: GlobalUnitsModel.PROVINCE.PALMYRA,
        connectionType: GlobalUnitsModel.CONNECTION_TYPE.DESERT,
        destinationType: GlobalUnitsModel.DESTINATION_TYPE.PROVINCE,
      },
      {
        to: GlobalUnitsModel.PROVINCE.JUDEA,
        connectionType: GlobalUnitsModel.CONNECTION_TYPE.DESERT,
        destinationType: GlobalUnitsModel.DESTINATION_TYPE.PROVINCE,
      },
    ],
  })
  mapBoard.set(phoenicia.name, phoenicia)

  const palmyra = new Province({
    name: GlobalUnitsModel.PROVINCE.PALMYRA,
    homeland: false,
    command: GlobalUnitsModel.COMMAND.SYRIA,
    gold: 3,
    icons: [GlobalUnitsModel.MAP_ICON.UNREST, GlobalUnitsModel.MAP_ICON.SUN],
    connections: [
      {
        to: GlobalUnitsModel.HOMELAND_PROVINCE.PALMYRENE,
        connectionType: GlobalUnitsModel.CONNECTION_TYPE.DESERT,
        destinationType: GlobalUnitsModel.DESTINATION_TYPE.PROVINCE_HOMELAND,
      },
      {
        to: GlobalUnitsModel.PROVINCE.MESOPOTAMIA,
        connectionType: GlobalUnitsModel.CONNECTION_TYPE.DESERT,
        destinationType: GlobalUnitsModel.DESTINATION_TYPE.PROVINCE,
      },
      {
        to: GlobalUnitsModel.PROVINCE.SYRIA,
        connectionType: GlobalUnitsModel.CONNECTION_TYPE.DESERT,
        destinationType: GlobalUnitsModel.DESTINATION_TYPE.PROVINCE,
      },
      {
        to: GlobalUnitsModel.PROVINCE.PHOENECIA,
        connectionType: GlobalUnitsModel.CONNECTION_TYPE.DESERT,
        destinationType: GlobalUnitsModel.DESTINATION_TYPE.PROVINCE,
      },
    ],
  })
  mapBoard.set(palmyra.name, palmyra)

  const judea = new Province({
    name: GlobalUnitsModel.PROVINCE.JUDEA,
    homeland: false,
    command: GlobalUnitsModel.COMMAND.SYRIA,
    gold: 3,
    icons: [GlobalUnitsModel.MAP_ICON.UNREST],
    connections: [
      {
        to: GlobalUnitsModel.HOMELAND_PROVINCE.JUDEAN,
        connectionType: GlobalUnitsModel.CONNECTION_TYPE.DESERT,
        destinationType: GlobalUnitsModel.DESTINATION_TYPE.PROVINCE_HOMELAND,
      },
      {
        to: GlobalUnitsModel.PROVINCE.CYPRUS,
        connectionType: GlobalUnitsModel.CONNECTION_TYPE.SEA,
        destinationType: GlobalUnitsModel.DESTINATION_TYPE.PROVINCE,
      },
      {
        to: GlobalUnitsModel.PROVINCE.PHOENECIA,
        connectionType: GlobalUnitsModel.CONNECTION_TYPE.DESERT,
        destinationType: GlobalUnitsModel.DESTINATION_TYPE.PROVINCE,
      },
      {
        to: GlobalUnitsModel.PROVINCE.ALEXANDRIA,
        connectionType: GlobalUnitsModel.CONNECTION_TYPE.DESERT,
        destinationType: GlobalUnitsModel.DESTINATION_TYPE.PROVINCE,
      },
      {
        to: GlobalUnitsModel.PROVINCE.ARABIA,
        connectionType: GlobalUnitsModel.CONNECTION_TYPE.DESERT,
        destinationType: GlobalUnitsModel.DESTINATION_TYPE.PROVINCE,
      },
    ],
  })
  mapBoard.set(judea.name, judea)

  const arabia = new Province({
    name: GlobalUnitsModel.PROVINCE.ARABIA,
    homeland: false,
    command: GlobalUnitsModel.COMMAND.SYRIA,
    gold: 3,
    icons: [GlobalUnitsModel.MAP_ICON.UNREST],
    connections: [
      {
        to: GlobalUnitsModel.HOMELAND_PROVINCE.JUDEAN,
        connectionType: GlobalUnitsModel.CONNECTION_TYPE.DESERT,
        destinationType: GlobalUnitsModel.DESTINATION_TYPE.PROVINCE_HOMELAND,
      },
      {
        to: GlobalUnitsModel.PROVINCE.ALEXANDRIA,
        connectionType: GlobalUnitsModel.CONNECTION_TYPE.DESERT,
        destinationType: GlobalUnitsModel.DESTINATION_TYPE.PROVINCE,
      },
      {
        to: GlobalUnitsModel.PROVINCE.JUDEA,
        connectionType: GlobalUnitsModel.CONNECTION_TYPE.DESERT,
        destinationType: GlobalUnitsModel.DESTINATION_TYPE.PROVINCE,
      },
    ],
  })
  mapBoard.set(arabia.name, arabia)
}
