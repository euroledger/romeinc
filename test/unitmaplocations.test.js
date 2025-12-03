import { describe, expect, it, beforeEach } from "vitest"
import Controller from "../src/controller/Controller"
import GlobalUnitsModel from "../src/model/GlobalUnitsModel"
import { buildMap } from "../src/model/map/MapBuilder"
import { loadCounters } from "../src/CounterLoader"

describe("Unit Map Locations Tests", () => {
  let controller
  beforeEach(() => {
    controller = new Controller()
    loadCounters(controller)
    buildMap(controller)
  })

  it("Adds various units and markers to Britannia province", () => {
    controller.addCounterToProvince(
      GlobalUnitsModel.PROVINCE_TYPE.BARBARIAN,
      GlobalUnitsModel.PROVINCE.BRITANNIA_INFERIOR
    )
    controller.addCounterToProvince(GlobalUnitsModel.WAR.BRITISH_6, GlobalUnitsModel.PROVINCE.BRITANNIA_INFERIOR)

    controller.addCounterToProvince(
      GlobalUnitsModel.ROMAN_UNIT.II_AUGUSTA,
      GlobalUnitsModel.PROVINCE.BRITANNIA_INFERIOR
    )

    controller.addVeteranCounterToProvince(
      GlobalUnitsModel.ROMAN_UNIT.XIV_GEMINA,
      GlobalUnitsModel.PROVINCE.BRITANNIA_INFERIOR
    )

    controller.addCounterToProvince(GlobalUnitsModel.LEADER.BOUDICCA, GlobalUnitsModel.PROVINCE.BRITANNIA_INFERIOR)

    const units = controller.getCountersInProvince(GlobalUnitsModel.PROVINCE.BRITANNIA_INFERIOR)
    expect(units.length).toEqual(5)
  })

  it("Adds various units and markers to Britannia province using array of counters/provinces", () => {
    controller.addCountersToProvinces([
      {
        province: GlobalUnitsModel.PROVINCE.BRITANNIA_INFERIOR,
        counters: [
          { name: GlobalUnitsModel.PROVINCE_TYPE.BARBARIAN },
          { name: GlobalUnitsModel.WAR.BRITISH_6 },
          { name: GlobalUnitsModel.ROMAN_UNIT.II_AUGUSTA },
          {
            name: GlobalUnitsModel.ROMAN_UNIT.XIV_GEMINA,
            veteran: true,
          },
          {
            name: GlobalUnitsModel.ROMAN_UNIT_TYPE.PRAETORIAN_GUARD,
            veteran: true,
          },
          {
            name: GlobalUnitsModel.ROMAN_UNIT.BRITISH_FLEET,
            veteran: true,
          },
          { name: GlobalUnitsModel.LEADER.BOUDICCA },
        ],
      },
    ])
    const units = controller.getCountersInProvince(GlobalUnitsModel.PROVINCE.BRITANNIA_INFERIOR)
    expect(units.length).toEqual(7)
  })
})
