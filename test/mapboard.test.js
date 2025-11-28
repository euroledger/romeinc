import { describe, expect, it, beforeEach } from "vitest"
import Controller from "../src/controller/Controller"
import GlobalUnitsModel from "../src/model/GlobalUnitsModel"
import { buildMap } from "../src/model/map/MapBuilder"

describe("Mapboard Tests", () => {
  let controller
  beforeEach(() => {
    controller = new Controller()
    buildMap(controller)
  })

  it("loads Caledonian homeland province", () => {
    const caledonian = controller.getProvince(GlobalUnitsModel.HOMELAND_PROVINCE.CALEDONIAN)

    expect(caledonian.connections.length).toEqual(2)
    expect(caledonian.icons.length).toEqual(0)
    expect(caledonian.gold).toEqual(0)
    expect(caledonian.command).toEqual(GlobalUnitsModel.COMMAND.BRITANNIA)

    const connection1 = caledonian.connections[0]
    expect(connection1.connectionType).toEqual(GlobalUnitsModel.CONNECTION_TYPE.MOUNTAIN)
    expect(connection1.to).toEqual(GlobalUnitsModel.PROVINCE.CALEDONIA)

    const connection2 = caledonian.connections[1]
    expect(connection2.connectionType).toEqual(GlobalUnitsModel.CONNECTION_TYPE.SEA)
    expect(connection2.to).toEqual(GlobalUnitsModel.PROVINCE.HIBERNIA)

    const connectedProvinces = controller.getProvincesAdjacentTo(GlobalUnitsModel.HOMELAND_PROVINCE.CALEDONIAN)
    expect(connectedProvinces).toEqual([GlobalUnitsModel.PROVINCE.CALEDONIA,GlobalUnitsModel.PROVINCE.HIBERNIA])
  })
})
