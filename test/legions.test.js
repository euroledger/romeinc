import { loadStatesmen } from "../src/counters/StatesmanLoader"
import { describe, expect, it, beforeEach } from "vitest"
import GlobalUnitsModel from "../src/model/GlobalUnitsModel"
import Controller from "../src/controller/Controller"
import { loadCounters } from "../src/CounterLoader"
import { getAllProvinceMarkersOfType, getCounterType } from "../src/utils"

describe("Roman Legion tests", () => {
  let controller, counters
  beforeEach(() => {
    counters = new Map()
    controller = new Controller()
    counters = loadCounters(controller)
  })

  it("promotes and demotes roman legions correctly", () => {
    const gemina14 = counters.romanunits.get(GlobalUnitsModel.ROMAN_UNIT.XIV_GEMINA)

    // promote legion to veteran
    expect(gemina14.unitType).toEqual(GlobalUnitsModel.ROMAN_UNIT_TYPE.LEGION)
    expect(gemina14.image).toEqual(gemina14.imageFront)

    controller.promoteRomanUnit(gemina14.name)

    expect(gemina14.unitType).toEqual(GlobalUnitsModel.ROMAN_UNIT_TYPE.VETERAN_LEGION)
    expect(gemina14.image).toEqual(gemina14.imageBack)

    // demote veteran back to legion
    controller.demoteRomanUnit(gemina14.name)

    expect(gemina14.unitType).toEqual(GlobalUnitsModel.ROMAN_UNIT_TYPE.LEGION)
    expect(gemina14.image).toEqual(gemina14.imageFront)
  })

  it("promotes and demotes roman auxiliaries correctly", () => {
    const auxilia12 = counters.romanunits.get("AUXILIA 12")

    // promote legion to veteran auxilia
    expect(auxilia12.unitType).toEqual(GlobalUnitsModel.ROMAN_UNIT_TYPE.AUXILIA)
    expect(auxilia12.image).toEqual(auxilia12.imageFront)

    controller.promoteRomanUnit(auxilia12.name)

    expect(auxilia12.unitType).toEqual(GlobalUnitsModel.ROMAN_UNIT_TYPE.VETERAN_AUXILIA)
    expect(auxilia12.image).toEqual(auxilia12.imageBack)

    // demote veteran back to normal auxilia
    controller.demoteRomanUnit(auxilia12.name)

    expect(auxilia12.unitType).toEqual(GlobalUnitsModel.ROMAN_UNIT_TYPE.AUXILIA)
    expect(auxilia12.image).toEqual(auxilia12.imageFront)
  })

  it("promotes and demotes roman imperial cavalry correctly", () => {
    const cavalry1 = counters.romanunits.get("IMPERIAL CAVALRY 1")

    // promote legion to veteran cavalry
    expect(cavalry1.unitType).toEqual(GlobalUnitsModel.ROMAN_UNIT_TYPE.IMPERIAL_CAVALRY)
    expect(cavalry1.image).toEqual(cavalry1.imageFront)

    controller.promoteRomanUnit(cavalry1.name)

    expect(cavalry1.unitType).toEqual(GlobalUnitsModel.ROMAN_UNIT_TYPE.VETERAN_IMPERIAL_CAVALRY)
    expect(cavalry1.image).toEqual(cavalry1.imageBack)

    // demote veteran back to normal cavalry
    controller.demoteRomanUnit(cavalry1.name)

    expect(cavalry1.unitType).toEqual(GlobalUnitsModel.ROMAN_UNIT_TYPE.IMPERIAL_CAVALRY)
    expect(cavalry1.image).toEqual(cavalry1.imageFront)
  })

  it("promotes and demotes roman praetorian guard correctly", () => {
    const prGuard1 = counters.romanunits.get("PRAETORIAN GUARD 1")

    // promote legion to veteran praetorian guard
    expect(prGuard1.unitType).toEqual(GlobalUnitsModel.ROMAN_UNIT_TYPE.PRAETORIAN_GUARD)
    expect(prGuard1.image).toEqual(prGuard1.imageFront)

    controller.promoteRomanUnit(prGuard1.name)

    expect(prGuard1.unitType).toEqual(GlobalUnitsModel.ROMAN_UNIT_TYPE.VETERAN_PRAETORIAN_GUARD)
    expect(prGuard1.image).toEqual(prGuard1.imageBack)

    // demote veteran back to normal praetorian guard
    controller.demoteRomanUnit(prGuard1.name)

    expect(prGuard1.unitType).toEqual(GlobalUnitsModel.ROMAN_UNIT_TYPE.PRAETORIAN_GUARD)
    expect(prGuard1.image).toEqual(prGuard1.imageFront)
  })

})
