import GlobalUnitsModel from "../../GlobalUnitsModel"
import Province from "../Province"

export function buildAegyptus(mapBoard) {
  const creta = new Province({
    name: GlobalUnitsModel.PROVINCE.CRETA,
    homeland: false,
    command: GlobalUnitsModel.COMMAND.AEGYPTUS,
    gold: 2,
    icons: [],
    connections: [
      {
        to: GlobalUnitsModel.PROVINCE.ACHAEA,
        connectionType: GlobalUnitsModel.CONNECTION_TYPE.SEA,
        destinationType: GlobalUnitsModel.DESTINATION_TYPE.PROVINCE,
      },
      {
        to: GlobalUnitsModel.PROVINCE.RHODUS,
        connectionType: GlobalUnitsModel.CONNECTION_TYPE.SEA,
        destinationType: GlobalUnitsModel.DESTINATION_TYPE.PROVINCE,
      },
      {
        to: GlobalUnitsModel.PROVINCE.CYRENAICA,
        connectionType: GlobalUnitsModel.CONNECTION_TYPE.SEA,
        destinationType: GlobalUnitsModel.DESTINATION_TYPE.PROVINCE,
      },
    ],
  })
  mapBoard.set(creta.name, creta)

  const cyrenaica = new Province({
    name: GlobalUnitsModel.PROVINCE.CYRENAICA,
    homeland: false,
    command: GlobalUnitsModel.COMMAND.AEGYPTUS,
    gold: 3,
    icons: [],
    connections: [
      {
        to: GlobalUnitsModel.PROVINCE.LIBYA,
        connectionType: GlobalUnitsModel.CONNECTION_TYPE.RIVER_STRAIGHT,
        destinationType: GlobalUnitsModel.DESTINATION_TYPE.PROVINCE,
      },
      {
        to: GlobalUnitsModel.PROVINCE.CRETA,
        connectionType: GlobalUnitsModel.CONNECTION_TYPE.SEA,
        destinationType: GlobalUnitsModel.DESTINATION_TYPE.PROVINCE,
      },
      {
        to: GlobalUnitsModel.PROVINCE.ALEXANDRIA,
        connectionType: GlobalUnitsModel.CONNECTION_TYPE.RIVER_STRAIGHT,
        destinationType: GlobalUnitsModel.DESTINATION_TYPE.PROVINCE,
      },
    ],
  })
  mapBoard.set(cyrenaica.name, cyrenaica)

  const alexandria = new Province({
    name: GlobalUnitsModel.PROVINCE.ALEXANDRIA,
    homeland: false,
    command: GlobalUnitsModel.COMMAND.AEGYPTUS,
    gold: 5,
    icons: [GlobalUnitsModel.MAP_ICON.UNREST, GlobalUnitsModel.MAP_ICON.GRAIN, GlobalUnitsModel.MAP_ICON.FLEET],
    connections: [
      {
        to: GlobalUnitsModel.PROVINCE.CYRENAICA,
        connectionType: GlobalUnitsModel.CONNECTION_TYPE.RIVER_STRAIGHT,
        destinationType: GlobalUnitsModel.DESTINATION_TYPE.PROVINCE,
      },
      {
        to: GlobalUnitsModel.PROVINCE.CYPRUS,
        connectionType: GlobalUnitsModel.CONNECTION_TYPE.SEA,
        destinationType: GlobalUnitsModel.DESTINATION_TYPE.PROVINCE,
      },
      {
        to: GlobalUnitsModel.PROVINCE.JUDEA,
        connectionType: GlobalUnitsModel.CONNECTION_TYPE.DESERT,
        destinationType: GlobalUnitsModel.DESTINATION_TYPE.PROVINCE,
      },

      {
        to: GlobalUnitsModel.PROVINCE.ARABIA,
        connectionType: GlobalUnitsModel.CONNECTION_TYPE.DESERT,
        destinationType: GlobalUnitsModel.DESTINATION_TYPE.PROVINCE,
      },
      {
        to: GlobalUnitsModel.PROVINCE.ARCADIA,
        connectionType: GlobalUnitsModel.CONNECTION_TYPE.RIVER_STRAIGHT,
        destinationType: GlobalUnitsModel.DESTINATION_TYPE.PROVINCE,
      },
    ],
  })
  mapBoard.set(alexandria.name, alexandria)

  const arcadia = new Province({
    name: GlobalUnitsModel.PROVINCE.ARCADIA,
    homeland: false,
    command: GlobalUnitsModel.COMMAND.AEGYPTUS,
    gold: 4,
    icons: [GlobalUnitsModel.MAP_ICON.GRAIN],
    connections: [
      {
        to: GlobalUnitsModel.PROVINCE.ALEXANDRIA,
        connectionType: GlobalUnitsModel.CONNECTION_TYPE.RIVER_STRAIGHT,
        destinationType: GlobalUnitsModel.DESTINATION_TYPE.PROVINCE,
      },
      {
        to: GlobalUnitsModel.PROVINCE.THEBAIS,
        connectionType: GlobalUnitsModel.CONNECTION_TYPE.RIVER_STRAIGHT,
        destinationType: GlobalUnitsModel.DESTINATION_TYPE.PROVINCE,
      },
    ],
  })
  mapBoard.set(arcadia.name, arcadia)

  const thebais = new Province({
    name: GlobalUnitsModel.PROVINCE.THEBAIS,
    homeland: false,
    command: GlobalUnitsModel.COMMAND.AEGYPTUS,
    gold: 4,
    icons: [GlobalUnitsModel.MAP_ICON.GRAIN],
    connections: [
      {
        to: GlobalUnitsModel.PROVINCE.ARCADIA,
        connectionType: GlobalUnitsModel.CONNECTION_TYPE.RIVER_STRAIGHT,
        destinationType: GlobalUnitsModel.DESTINATION_TYPE.PROVINCE,
      },
      {
        to: GlobalUnitsModel.PROVINCE.AETHIOPIA,
        connectionType: GlobalUnitsModel.CONNECTION_TYPE.RIVER_STRAIGHT,
        destinationType: GlobalUnitsModel.DESTINATION_TYPE.PROVINCE,
      },
    ],
  })
  mapBoard.set(thebais.name, thebais)

  const aetheopia = new Province({
    name: GlobalUnitsModel.PROVINCE.AETHIOPIA,
    homeland: false,
    command: GlobalUnitsModel.COMMAND.AEGYPTUS,
    gold: 2,
    icons: [GlobalUnitsModel.MAP_ICON.UNREST],
    connections: [
      {
        to: GlobalUnitsModel.HOMELAND_PROVINCE.NUBIAN,
        connectionType: GlobalUnitsModel.CONNECTION_TYPE.RIVER_STRAIGHT,
        destinationType: GlobalUnitsModel.DESTINATION_TYPE.PROVINCE_HOMELAND,
      },
      {
        to: GlobalUnitsModel.PROVINCE.THEBAIS,
        connectionType: GlobalUnitsModel.CONNECTION_TYPE.RIVER_STRAIGHT,
        destinationType: GlobalUnitsModel.DESTINATION_TYPE.PROVINCE,
      },
    ],
  })
  mapBoard.set(aetheopia.name, aetheopia)
}
