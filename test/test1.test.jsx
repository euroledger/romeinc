import { loadStatesmen } from "../src/counters/StatesmanLoader"
import { describe, expect, it } from "vitest"
import GlobalUnitsModel from "../src/model/GlobalUnitsModel"

describe("Counter Load tests", () => {
  it("loads all statesmen", () => {
    let counters = new Map()
    loadStatesmen(counters)
    const keysArray = Array.from(counters.keys())
    expect(keysArray.length).toEqual(40)
  })

  it("loads statesmen values correctly", () => {
    let counters = new Map()
    loadStatesmen(counters)

    const augustus = counters.get("AUGUSTUS")
    expect(augustus.specialAbility).toEqual(GlobalUnitsModel.SPECIAL_ABILITY.CONQUEST)
    expect(augustus.imperial).toEqual(true)
    expect(augustus.administration).toEqual(5)
    expect(augustus.military).toEqual(2)
    expect(augustus.popularity).toEqual(4)
    expect(augustus.intrigue).toEqual(3)

    const agrippa = counters.get("AGRIPPA")
    expect(agrippa.specialAbility).toEqual(GlobalUnitsModel.SPECIAL_ABILITY.CANTABRIAN)
    expect(agrippa.imperial).toEqual(false)
    expect(agrippa.intrigue).toEqual(3)
    expect(agrippa.military).toEqual(4)
    expect(agrippa.administration).toEqual(4)
    expect(agrippa.popularity).toEqual(4)

    const macro = counters.get("MACRO")
    expect(macro.specialAbility).toEqual(GlobalUnitsModel.SPECIAL_ABILITY.PREFECT)
    expect(macro.imperial).toEqual(false)
    expect(macro.military).toEqual(2)
    expect(macro.administration).toEqual(2)
    expect(macro.popularity).toEqual(2)
    expect(macro.intrigue).toEqual(4)
  })
})
