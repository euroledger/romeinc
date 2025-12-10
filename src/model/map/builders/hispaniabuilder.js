import GlobalUnitsModel from "../../GlobalUnitsModel"
import Province from "../Province"

export function buildHispania(mapBoard) {


  const gallaecia = new Province({
    name: GlobalUnitsModel.PROVINCE.GALLAECIA,
    homeland: false,
    command: GlobalUnitsModel.COMMAND.HISPANA,
    gold: 3,
    icons: [GlobalUnitsModel.MAP_ICON.UNREST],
    connections: [
      {
        to: GlobalUnitsModel.HOMELAND_PROVINCE.CANTABRIAN,
        connectionType: GlobalUnitsModel.CONNECTION_TYPE.MOUNTAIN,
        destinationType: GlobalUnitsModel.DESTINATION_TYPE.PROVINCE_HOMELAND,
      },
      {
        to: GlobalUnitsModel.PROVINCE.AQUITANIA,
        connectionType: GlobalUnitsModel.CONNECTION_TYPE.MOUNTAIN,
        destinationType: GlobalUnitsModel.DESTINATION_TYPE.PROVINCE,
      },
      {
        to: GlobalUnitsModel.PROVINCE.TARRACONENSIS,
        connectionType: GlobalUnitsModel.CONNECTION_TYPE.ROAD,
        destinationType: GlobalUnitsModel.DESTINATION_TYPE.PROVINCE,
      },
      {
        to: GlobalUnitsModel.PROVINCE.LUSITANIA,
        connectionType: GlobalUnitsModel.CONNECTION_TYPE.ROAD,
        destinationType: GlobalUnitsModel.DESTINATION_TYPE.PROVINCE,
      },
    ],
  })
  mapBoard.set(gallaecia.name, gallaecia)

  const tarraconensis = new Province({
    name: GlobalUnitsModel.PROVINCE.TARRACONENSIS,
    homeland: false,
    command: GlobalUnitsModel.COMMAND.HISPANA,
    gold: 3,
    icons: [],
    connections: [
      {
        to: GlobalUnitsModel.PROVINCE.GALLAECIA,
        connectionType: GlobalUnitsModel.CONNECTION_TYPE.ROAD,
        destinationType: GlobalUnitsModel.DESTINATION_TYPE.PROVINCE,
      },
      {
        to: GlobalUnitsModel.PROVINCE.CARTHAGINENSIS,
        connectionType: GlobalUnitsModel.CONNECTION_TYPE.ROAD,
        destinationType: GlobalUnitsModel.DESTINATION_TYPE.PROVINCE,
      },
      {
        to: GlobalUnitsModel.PROVINCE.NARBONENSIS,
        connectionType: GlobalUnitsModel.CONNECTION_TYPE.MOUNTAIN,
        destinationType: GlobalUnitsModel.DESTINATION_TYPE.PROVINCE,
      },
      {
        to: GlobalUnitsModel.PROVINCE.BALEARES,
        connectionType: GlobalUnitsModel.CONNECTION_TYPE.SEA,
        destinationType: GlobalUnitsModel.DESTINATION_TYPE.PROVINCE,
      },
    ],
  })
  mapBoard.set(tarraconensis.name, tarraconensis)

  const lusitania = new Province({
    name: GlobalUnitsModel.PROVINCE.LUSITANIA,
    homeland: false,
    command: GlobalUnitsModel.COMMAND.HISPANA,
    gold: 3,
    icons: [],
    connections: [
      {
        to: GlobalUnitsModel.PROVINCE.GALLAECIA,
        connectionType: GlobalUnitsModel.CONNECTION_TYPE.ROAD,
        destinationType: GlobalUnitsModel.DESTINATION_TYPE.PROVINCE,
      },
      {
        to: GlobalUnitsModel.PROVINCE.BAETICA,
        connectionType: GlobalUnitsModel.CONNECTION_TYPE.ROAD,
        destinationType: GlobalUnitsModel.DESTINATION_TYPE.PROVINCE,
      },
    ],
  })
  mapBoard.set(lusitania.name, lusitania)

  const baetica = new Province({
    name: GlobalUnitsModel.PROVINCE.BAETICA,
    homeland: false,
    command: GlobalUnitsModel.COMMAND.HISPANA,
    gold: 5,
    icons: [GlobalUnitsModel.MAP_ICON.GRAIN],
    connections: [
      {
        to: GlobalUnitsModel.PROVINCE.LUSITANIA,
        connectionType: GlobalUnitsModel.CONNECTION_TYPE.ROAD,
        destinationType: GlobalUnitsModel.DESTINATION_TYPE.PROVINCE,
      },
      {
        to: GlobalUnitsModel.PROVINCE.CARTHAGINENSIS,
        connectionType: GlobalUnitsModel.CONNECTION_TYPE.ROAD,
        destinationType: GlobalUnitsModel.DESTINATION_TYPE.PROVINCE,
      },
      {
        to: GlobalUnitsModel.PROVINCE.MAURETANIA_TINGITANA,
        connectionType: GlobalUnitsModel.CONNECTION_TYPE.RIVER_STRAIGHT,
        destinationType: GlobalUnitsModel.DESTINATION_TYPE.PROVINCE,
      },
    ],
  })
  mapBoard.set(baetica.name, baetica)

  const carthaginensis = new Province({
    name: GlobalUnitsModel.PROVINCE.CARTHAGINENSIS,
    homeland: false,
    command: GlobalUnitsModel.COMMAND.HISPANA,
    gold: 4,
    icons: [],
    connections: [
      {
        to: GlobalUnitsModel.PROVINCE.TARRACONENSIS,
        connectionType: GlobalUnitsModel.CONNECTION_TYPE.ROAD,
        destinationType: GlobalUnitsModel.DESTINATION_TYPE.PROVINCE,
      },
      {
        to: GlobalUnitsModel.PROVINCE.BAETICA,
        connectionType: GlobalUnitsModel.CONNECTION_TYPE.ROAD,
        destinationType: GlobalUnitsModel.DESTINATION_TYPE.PROVINCE,
      },
      {
        to: GlobalUnitsModel.PROVINCE.BALEARES,
        connectionType: GlobalUnitsModel.CONNECTION_TYPE.SEA,
        destinationType: GlobalUnitsModel.DESTINATION_TYPE.PROVINCE,
      },
      {
        to: GlobalUnitsModel.PROVINCE.MAURETANIA_CAESARIENSIS,
        connectionType: GlobalUnitsModel.CONNECTION_TYPE.SEA,
        destinationType: GlobalUnitsModel.DESTINATION_TYPE.PROVINCE,
      },
    ],
  })
  mapBoard.set(carthaginensis.name, carthaginensis)

  const baleares = new Province({
    name: GlobalUnitsModel.PROVINCE.BALEARES,
    homeland: false,
    command: GlobalUnitsModel.COMMAND.HISPANA,
    gold: 2,
    icons: [],
    connections: [
      {
        to: GlobalUnitsModel.PROVINCE.TARRACONENSIS,
        connectionType: GlobalUnitsModel.CONNECTION_TYPE.SEA,
        destinationType: GlobalUnitsModel.DESTINATION_TYPE.PROVINCE,
      },
      {
        to: GlobalUnitsModel.PROVINCE.CARTHAGINENSIS,
        connectionType: GlobalUnitsModel.CONNECTION_TYPE.SEA,
        destinationType: GlobalUnitsModel.DESTINATION_TYPE.PROVINCE,
      },
      {
        to: GlobalUnitsModel.PROVINCE.NARBONENSIS,
        connectionType: GlobalUnitsModel.CONNECTION_TYPE.SEA,
        destinationType: GlobalUnitsModel.DESTINATION_TYPE.PROVINCE,
      },
      {
        to: GlobalUnitsModel.PROVINCE.CORSICA_SARDINIA,
        connectionType: GlobalUnitsModel.CONNECTION_TYPE.SEA,
        destinationType: GlobalUnitsModel.DESTINATION_TYPE.PROVINCE,
      },
      {
        to: GlobalUnitsModel.PROVINCE.NUMIDIA,
        connectionType: GlobalUnitsModel.CONNECTION_TYPE.SEA,
        destinationType: GlobalUnitsModel.DESTINATION_TYPE.PROVINCE,
      },
    ],
  })
  mapBoard.set(baleares.name, baleares)
}
