import GlobalUnitsModel from "../GlobalUnitsModel"
import Province from "./Province"

export function buildMap(controller) {
  const mapBoard = new Map()

  const caledonia = new Province({
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
        destinationType: GlobalUnitsModel.DESTINATION_TYPE.PROVINCE
      }
    ],
  })
  mapBoard.set(caledonia.name, caledonia)

  controller.setMapboard(mapBoard)
}
