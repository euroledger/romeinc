import GlobalUnitsModel from "../../GlobalUnitsModel"
import Province from "../Province"

export function buildAfrica(mapBoard) {
  const libya = new Province({
    name: GlobalUnitsModel.PROVINCE.LIBYA,
    homeland: false,
    command: GlobalUnitsModel.COMMAND.AFRICA,
    gold: 3,
    icons: [],
    connections: [
      {
        to: GlobalUnitsModel.PROVINCE.CYRENAICA,
        connectionType: GlobalUnitsModel.CONNECTION_TYPE.RIVER_STRAIGHT,
        destinationType: GlobalUnitsModel.DESTINATION_TYPE.PROVINCE,
      },
      {
        to: GlobalUnitsModel.PROVINCE.AFRICA,
        connectionType: GlobalUnitsModel.CONNECTION_TYPE.DESERT,
        destinationType: GlobalUnitsModel.DESTINATION_TYPE.PROVINCE,
      },
    ],
  })
  mapBoard.set(libya.name, libya)

  const africa = new Province({
    name: GlobalUnitsModel.PROVINCE.AFRICA,
    homeland: false,
    command: GlobalUnitsModel.COMMAND.AFRICA,
    emperors: [GlobalUnitsModel.DYNASTY.ANTONINE],
    gold: 5,
    icons: [GlobalUnitsModel.MAP_ICON.GRAIN, GlobalUnitsModel.MAP_ICON.FLEET],
    connections: [
      {
        to: GlobalUnitsModel.PROVINCE.CORSICA_SARDINIA,
        connectionType: GlobalUnitsModel.CONNECTION_TYPE.SEA,
        destinationType: GlobalUnitsModel.DESTINATION_TYPE.PROVINCE,
      },
      {
        to: GlobalUnitsModel.PROVINCE.SICILIA,
        connectionType: GlobalUnitsModel.CONNECTION_TYPE.SEA,
        destinationType: GlobalUnitsModel.DESTINATION_TYPE.PROVINCE,
      },
      {
        to: GlobalUnitsModel.PROVINCE.LIBYA,
        connectionType: GlobalUnitsModel.CONNECTION_TYPE.DESERT,
        destinationType: GlobalUnitsModel.DESTINATION_TYPE.PROVINCE,
      },
      {
        to: GlobalUnitsModel.PROVINCE.NUMIDIA,
        connectionType: GlobalUnitsModel.CONNECTION_TYPE.ROAD,
        destinationType: GlobalUnitsModel.DESTINATION_TYPE.PROVINCE,
      },
    ],
  })
  mapBoard.set(africa.name, africa)

  const numidia = new Province({
    name: GlobalUnitsModel.PROVINCE.NUMIDIA,
    homeland: false,
    command: GlobalUnitsModel.COMMAND.AFRICA,
    gold: 4,
    icons: [GlobalUnitsModel.MAP_ICON.UNREST],
    connections: [
      {
        to: GlobalUnitsModel.HOMELAND_PROVINCE.MOORISH,
        connectionType: GlobalUnitsModel.CONNECTION_TYPE.ROAD,
        destinationType: GlobalUnitsModel.DESTINATION_TYPE.PROVINCE_HOMELAND,
      },
      {
        to: GlobalUnitsModel.PROVINCE.AFRICA,
        connectionType: GlobalUnitsModel.CONNECTION_TYPE.ROAD,
        destinationType: GlobalUnitsModel.DESTINATION_TYPE.PROVINCE,
      },
      {
        to: GlobalUnitsModel.PROVINCE.MAURETANIA_CAESARIENSIS,
        connectionType: GlobalUnitsModel.CONNECTION_TYPE.ROAD,
        destinationType: GlobalUnitsModel.DESTINATION_TYPE.PROVINCE,
      },
      {
        to: GlobalUnitsModel.PROVINCE.BALEARES,
        connectionType: GlobalUnitsModel.CONNECTION_TYPE.SEA,
        destinationType: GlobalUnitsModel.DESTINATION_TYPE.PROVINCE,
      },
    ],
  })
  mapBoard.set(numidia.name, numidia)

  const mauretania_c = new Province({
    name: GlobalUnitsModel.PROVINCE.MAURETANIA_CAESARIENSIS,
    homeland: false,
    command: GlobalUnitsModel.COMMAND.AFRICA,
    gold: 3,
    icons: [],
    connections: [
      {
        to: GlobalUnitsModel.PROVINCE.NUMIDIA,
        connectionType: GlobalUnitsModel.CONNECTION_TYPE.ROAD,
        destinationType: GlobalUnitsModel.DESTINATION_TYPE.PROVINCE,
      },
      {
        to: GlobalUnitsModel.PROVINCE.MAURETANIA_TINGITANA,
        connectionType: GlobalUnitsModel.CONNECTION_TYPE.ROAD,
        destinationType: GlobalUnitsModel.DESTINATION_TYPE.PROVINCE,
      },
      {
        to: GlobalUnitsModel.PROVINCE.CARTHAGINENSIS,
        connectionType: GlobalUnitsModel.CONNECTION_TYPE.SEA,
        destinationType: GlobalUnitsModel.DESTINATION_TYPE.PROVINCE,
      },
    ],
  })
  mapBoard.set(mauretania_c.name, mauretania_c)

  const mauretania_t = new Province({
    name: GlobalUnitsModel.PROVINCE.MAURETANIA_TINGITANA,
    homeland: false,
    command: GlobalUnitsModel.COMMAND.AFRICA,
    gold: 2,
    icons: [],
    connections: [
      {
        to: GlobalUnitsModel.PROVINCE.MAURETANIA_CAESARIENSIS,
        connectionType: GlobalUnitsModel.CONNECTION_TYPE.ROAD,
        destinationType: GlobalUnitsModel.DESTINATION_TYPE.PROVINCE,
      },
      {
        to: GlobalUnitsModel.PROVINCE.BAETICA,
        connectionType: GlobalUnitsModel.CONNECTION_TYPE.RIVER_STRAIGHT,
        destinationType: GlobalUnitsModel.DESTINATION_TYPE.PROVINCE,
      },
    ],
  })
  mapBoard.set(mauretania_t.name, mauretania_t)
}
