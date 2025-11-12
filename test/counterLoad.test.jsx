import { loadStatesmen } from "../src/counters/StatesmanLoader"
import { describe, expect, it, beforeEach } from "vitest"
import GlobalUnitsModel from "../src/model/GlobalUnitsModel"
import Controller from "../src/controller/Controller"

describe("Counter Load tests", () => {
  let controller, counters
  beforeEach(() => {
    counters = new Map()
    controller = new Controller()
  })

  it("loads all statesmen", () => {
    loadStatesmen(counters)
    const keysArray = Array.from(counters.keys())
    expect(keysArray.length).toEqual(66)
  })

  it("loads statesmen values correctly", () => {
    loadStatesmen(counters)

    const augustus = counters.get(GlobalUnitsModel.STATESMAN.AUGUSTUS)
    expect(augustus.specialAbility).toEqual(GlobalUnitsModel.SPECIAL_ABILITY.CONQUEST)
    expect(augustus.imperial).toEqual(true)
    expect(augustus.administration).toEqual(5)
    expect(augustus.military).toEqual(2)
    expect(augustus.popularity).toEqual(4)
    expect(augustus.intrigue).toEqual(3)
    expect(augustus.image).toContain("Augustus")

    const agrippa = counters.get(GlobalUnitsModel.STATESMAN.AGRIPPA)
    expect(agrippa.specialAbility).toEqual(GlobalUnitsModel.SPECIAL_ABILITY.CANTABRIAN)
    expect(agrippa.imperial).toEqual(false)
    expect(agrippa.intrigue).toEqual(3)
    expect(agrippa.military).toEqual(4)
    expect(agrippa.administration).toEqual(4)
    expect(agrippa.popularity).toEqual(4)
    expect(agrippa.image).toContain("Agrippa")

    const macro = counters.get(GlobalUnitsModel.STATESMAN.MACRO)
    expect(macro.specialAbility).toEqual(GlobalUnitsModel.SPECIAL_ABILITY.PREFECT)
    expect(macro.imperial).toEqual(false)
    expect(macro.military).toEqual(2)
    expect(macro.administration).toEqual(2)
    expect(macro.popularity).toEqual(2)
    expect(macro.intrigue).toEqual(4)
    expect(macro.image).toContain("Macro")
  })
})
