import { loadStatesmen } from "../src/counters/StatesmanLoader"
import { describe, expect, it, beforeEach } from "vitest"
import GlobalUnitsModel from "../src/model/GlobalUnitsModel"
import Controller from "../src/controller/Controller"
import GlobalGameState from "../src/model/GlobalGameState"
import Scenario27BC from "../src/model/scenarios/Scenario27bc"
import Scenario70AD from "../src/model/scenarios/Scenario70AD"

describe("Scenario Setup Tests", () => {
  let controller, counters, scenario
  beforeEach(() => {
    controller = new Controller()
    counters = new Map()
    loadStatesmen(counters)
    controller.setUpEmperorsMap()
    GlobalGameState.dateFormat = GlobalUnitsModel.DATE_FORMAT.TRADITIONAL
  })

  it("returns correct statesman and rank in julian dynasty", () => {
    const statesmen = controller.getStatesmenInDynasty(GlobalUnitsModel.DYNASTY.JULIAN)
    expect(statesmen.length).toEqual(4)

    const rank = statesmen.indexOf(GlobalUnitsModel.STATESMAN.GERMANICUS)
    expect(rank).toEqual(2)
  })

  it("returns correct emperors box info for 27BC Setup", () => {
    scenario = new Scenario27BC(controller)
    expect(scenario.getName()).toEqual("27 BC")

    GlobalGameState.dateFormat = GlobalUnitsModel.DATE_FORMAT.MODERN
    scenario = new Scenario27BC(controller)
    expect(scenario.getName()).toEqual("27 BCE")

    const isInBox = controller.isInEmperorsBox(GlobalUnitsModel.DYNASTY.JULIAN)
    expect(isInBox).toEqual(false)
  })

  it("returns correct emperors box info for 70AD Setup", () => {
    scenario = new Scenario70AD(controller)
    expect(scenario.getName()).toEqual("70 AD")

    GlobalGameState.dateFormat = GlobalUnitsModel.DATE_FORMAT.MODERN
    scenario = new Scenario70AD(controller)
    expect(scenario.getName()).toEqual("70 CE")

    let isInBox = controller.isInEmperorsBox(GlobalUnitsModel.DYNASTY.JULIAN)
    expect(isInBox).toEqual(true)

    isInBox = controller.isInEmperorsBox(GlobalUnitsModel.DYNASTY.CLAUDIAN)
    expect(isInBox).toEqual(true)

    isInBox = controller.isInEmperorsBox(GlobalUnitsModel.DYNASTY.FLAVIAN)
    expect(isInBox).toEqual(false)
  })
})
