import GlobalUnitsModel from "../GlobalUnitsModel"
import Province from "./Province"

export function buildMap(controller) {
  const mapBoard = new Map()

  const caledonian = new Province({
    name: GlobalUnitsModel.HOMELAND_PROVINCE.CALEDONIAN,
    homeland: true,
    command: GlobalUnitsModel.COMMAND.BRITANNIA,
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

  const caledonia = new Province({
    name: GlobalUnitsModel.PROVINCE.CALEDONIA,
    homeland: false,
    command: GlobalUnitsModel.COMMAND.BRITANNIA,
    gold: 1,
    icons: [GlobalUnitsModel.MAP_ICON.UNREST],
    connections: [
      {
        to: GlobalUnitsModel.HOMELAND_PROVINCE.CALEDONIAN,
        connectionType: GlobalUnitsModel.CONNECTION_TYPE.MOUNTAIN,
        destinationType: GlobalUnitsModel.DESTINATION_TYPE.HOMELAND_PROVINCE,
      },
      {
        to: GlobalUnitsModel.PROVINCE.HIBERNIA,
        connectionType: GlobalUnitsModel.CONNECTION_TYPE.RIVER_STRAIGHT,
        destinationType: GlobalUnitsModel.DESTINATION_TYPE.PROVINCE,
      },
      {
        to: GlobalUnitsModel.PROVINCE.BRITANNIA_INFERIOR,
        connectionType: GlobalUnitsModel.CONNECTION_TYPE.ROAD,
        destinationType: GlobalUnitsModel.DESTINATION_TYPE.PROVINCE,
      },
    ],
  })
  mapBoard.set(caledonia.name, caledonia)

  const hibernia = new Province({
    name: GlobalUnitsModel.PROVINCE.HIBERNIA,
    homeland: false,
    command: GlobalUnitsModel.COMMAND.BRITANNIA,
    gold: 1,
    icons: [GlobalUnitsModel.MAP_ICON.UNREST],
    connections: [
      {
        to: GlobalUnitsModel.HOMELAND_PROVINCE.CALEDONIAN,
        connectionType: GlobalUnitsModel.CONNECTION_TYPE.SEA,
        destinationType: GlobalUnitsModel.DESTINATION_TYPE.HOMELAND_PROVINCE,
      },
      {
        to: GlobalUnitsModel.PROVINCE.CALEDONIA,
        connectionType: GlobalUnitsModel.CONNECTION_TYPE.RIVER_STRAIGHT,
        destinationType: GlobalUnitsModel.DESTINATION_TYPE.PROVINCE,
      },
      {
        to: GlobalUnitsModel.HOMELAND_PROVINCE.BRITISH,
        connectionType: GlobalUnitsModel.CONNECTION_TYPE.SEA,
        destinationType: GlobalUnitsModel.DESTINATION_TYPE.HOMELAND_PROVINCE,
      },
      {
        to: GlobalUnitsModel.HOMELAND_PROVINCE.BRITANNIA_INFERIOR,
        connectionType: GlobalUnitsModel.CONNECTION_TYPE.RIVER_STRAIGHT,
        destinationType: GlobalUnitsModel.DESTINATION_TYPE.PROVINCE,
      },
    ],
  })
  mapBoard.set(hibernia.name, hibernia)

  const britanniainferior = new Province({
    name: GlobalUnitsModel.PROVINCE.BRITANNIA_INFERIOR,
    homeland: false,
    command: GlobalUnitsModel.COMMAND.BRITANNIA,
    gold: 3,
    icons: [GlobalUnitsModel.MAP_ICON.UNREST],
    connections: [
      {
        to: GlobalUnitsModel.PROVINCE.CALEDONIA,
        connectionType: GlobalUnitsModel.CONNECTION_TYPE.ROAD,
        destinationType: GlobalUnitsModel.DESTINATION_TYPE.PROVINCE,
      },
      {
        to: GlobalUnitsModel.PROVINCE.HIBERNIA,
        connectionType: GlobalUnitsModel.CONNECTION_TYPE.RIVER_STRAIGHT,
        destinationType: GlobalUnitsModel.DESTINATION_TYPE.PROVINCE,
      },
      {
        to: GlobalUnitsModel.HOMELAND_PROVINCE.BRITISH,
        connectionType: GlobalUnitsModel.CONNECTION_TYPE.MOUNTAIN,
        destinationType: GlobalUnitsModel.DESTINATION_TYPE.HOMELAND_PROVINCE,
      },
           {
        to: GlobalUnitsModel.PROVINCE.BRITANNIA_SUPERIOR,
        connectionType: GlobalUnitsModel.CONNECTION_TYPE.ROAD,
        destinationType: GlobalUnitsModel.DESTINATION_TYPE.PROVINCE,
      },
    ],
  })
  mapBoard.set(britanniainferior.name, britanniainferior)

  controller.setMapboard(mapBoard)
}
