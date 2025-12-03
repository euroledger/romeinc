import { describe, expect, it, beforeEach } from "vitest"
import Controller from "../src/controller/Controller"
import GlobalUnitsModel from "../src/model/GlobalUnitsModel"
import { buildMap } from "../src/model/map/MapBuilder"
import { loadCounters } from "../src/CounterLoader"
import { getPositionForCounter } from "../src/utils"
import { BOTTOM_LEFT, BOTTOM_RIGHT, TOP_LEFT, TOP_RIGHT } from "../src/components/screenobjects/Provinces"

describe("Mapboard Tests", () => {
  let controller, counters

  beforeEach(() => {
    counters = new Map()
    controller = new Controller()
    counters = loadCounters(controller)
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
    expect(connectedProvinces).toEqual([GlobalUnitsModel.PROVINCE.CALEDONIA, GlobalUnitsModel.PROVINCE.HIBERNIA])
  })

  it("loads Britannia Inferior province", () => {
    const britinferior = controller.getProvince(GlobalUnitsModel.PROVINCE.BRITANNIA_INFERIOR)

    expect(britinferior.connections.length).toEqual(4)
    expect(britinferior.icons.length).toEqual(1)
    expect(britinferior.gold).toEqual(3)
    expect(britinferior.command).toEqual(GlobalUnitsModel.COMMAND.BRITANNIA)

    expect(britinferior.connections.length).toEqual(4)

    const connectedProvinces = controller.getProvincesAdjacentTo(GlobalUnitsModel.PROVINCE.BRITANNIA_INFERIOR)
    expect(connectedProvinces).toEqual([
      GlobalUnitsModel.PROVINCE.CALEDONIA,
      GlobalUnitsModel.PROVINCE.HIBERNIA,
      GlobalUnitsModel.HOMELAND_PROVINCE.BRITISH,
      GlobalUnitsModel.PROVINCE.BRITANNIA_SUPERIOR,
    ])
  })

  it("determines counter position within province", () => {
    const gemina14 = counters.romanunits.get(GlobalUnitsModel.ROMAN_UNIT.XIV_GEMINA)
    let pos = getPositionForCounter(gemina14)
    expect(pos).toEqual(TOP_RIGHT)

    const insurgent3 = counters.provincemarkers.get("INSURGENT 3")
    pos = getPositionForCounter(insurgent3)
    expect(pos).toEqual(TOP_LEFT)

    const allied18 = counters.provincemarkers.get("ALLIED 18")
    pos = getPositionForCounter(allied18)
    expect(pos).toEqual(TOP_LEFT)

    const vallied8 = counters.provincemarkers.get("VETERAN ALLIED 8")
    pos = getPositionForCounter(vallied8)
    expect(pos).toEqual(TOP_LEFT)

    const british = counters.romanunits.get(GlobalUnitsModel.ROMAN_UNIT.BRITISH_FLEET)
    pos = getPositionForCounter(british)
    expect(pos).toEqual(BOTTOM_LEFT)

    const palmyrene14 = counters.wars.get(GlobalUnitsModel.WAR.PALMYRENE_14)
    pos = getPositionForCounter(palmyrene14)
    expect(pos).toEqual(BOTTOM_RIGHT)

    const vologases = counters.leaders.get(GlobalUnitsModel.LEADER.VOLOGASES)
    pos = getPositionForCounter(vologases)
    expect(pos).toEqual(BOTTOM_RIGHT)
  })
})
