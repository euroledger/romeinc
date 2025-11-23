import { loadStatesmen } from "../src/counters/StatesmanLoader"
import { describe, expect, it, beforeEach } from "vitest"
import GlobalUnitsModel from "../src/model/GlobalUnitsModel"
import Controller from "../src/controller/Controller"
import { loadCounters } from "../src/CounterLoader"

describe("Counter Load tests", () => {
  let controller, counters
  beforeEach(() => {
    counters = new Map()
    controller = new Controller()
    counters = loadCounters(controller)
  })

  it("loads all statesmen", () => {
    const keysArray = Array.from(counters.statesmen.keys())
    expect(keysArray.length).toEqual(66)
  })

  it("loads all leaders", () => {
    const keysArray = Array.from(counters.leaders.keys())
    expect(keysArray.length).toEqual(15)
  })

  it("loads all wars", () => {
    const keysArray = Array.from(counters.wars.keys())
    expect(keysArray.length).toEqual(45)
  })

  it("loads statesmen values correctly", () => {
    const augustus = counters.statesmen.get(GlobalUnitsModel.STATESMAN.AUGUSTUS)
    expect(augustus.specialAbility).toEqual(GlobalUnitsModel.SPECIAL_ABILITY.CONQUEST)
    expect(augustus.imperial).toEqual(true)
    expect(augustus.administration).toEqual(5)
    expect(augustus.military).toEqual(2)
    expect(augustus.popularity).toEqual(4)
    expect(augustus.intrigue).toEqual(3)
    expect(augustus.image).toContain("Augustus")

    const agrippa = counters.statesmen.get(GlobalUnitsModel.STATESMAN.AGRIPPA)
    expect(agrippa.specialAbility).toEqual(GlobalUnitsModel.SPECIAL_ABILITY.CANTABRIAN)
    expect(agrippa.imperial).toEqual(false)
    expect(agrippa.intrigue).toEqual(3)
    expect(agrippa.military).toEqual(4)
    expect(agrippa.administration).toEqual(4)
    expect(agrippa.popularity).toEqual(4)
    expect(agrippa.image).toContain("Agrippa")

    const macro = counters.statesmen.get(GlobalUnitsModel.STATESMAN.MACRO)
    expect(macro.specialAbility).toEqual(GlobalUnitsModel.SPECIAL_ABILITY.PREFECT)
    expect(macro.imperial).toEqual(false)
    expect(macro.military).toEqual(2)
    expect(macro.administration).toEqual(2)
    expect(macro.popularity).toEqual(2)
    expect(macro.intrigue).toEqual(4)
    expect(macro.image).toContain("Macro")
  })

  it("loads leader values correctly", () => {
    const vologases = counters.leaders.get(GlobalUnitsModel.LEADER.VOLOGASES)
    expect(vologases.pillage).toEqual(2)
    expect(vologases.strength).toEqual(4)
    expect(vologases.homelandProvince).toEqual(GlobalUnitsModel.HOMELAND_PROVINCE.PARTHIAN)
    expect(vologases.imageFront).toContain("Vologases")
  })

    it("loads war values correctly", () => {
    const palmyrene14 = counters.wars.get(GlobalUnitsModel.WAR.PALMYRENE_14)
    expect(palmyrene14.strength).toEqual(14)
    expect(palmyrene14.navalStrength).toEqual(1)
    expect(palmyrene14.region).toEqual(GlobalUnitsModel.HOMELAND_PROVINCE.PALMYRENE)
    expect(palmyrene14.imageFront).toContain("Palmyrene")
  })
})
