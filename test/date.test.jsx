import { loadStatesmen } from "../src/counters/StatesmanLoader"
import { describe, expect, it, beforeEach } from "vitest"
import GlobalUnitsModel from "../src/model/GlobalUnitsModel"
import Controller from "../src/controller/Controller"
import GlobalGameState from "../src/model/GlobalGameState"

describe("Date Tests", () => {
  let controller
  beforeEach(() => {
    controller = new Controller()
  })

  it("returns date in old format", () => {
    GlobalGameState.dateFormat = GlobalUnitsModel.DATE_FORMAT.TRADITIONAL
    let date = controller.getDateString(-27)
    expect(date).toEqual("27 BC")

    date = controller.getDateString(70)
    expect(date).toEqual("70 AD")
  })

  it("returns date in modern format", () => {
    GlobalGameState.dateFormat = GlobalUnitsModel.DATE_FORMAT.MODERN
    let date = controller.getDateString(-27)
    expect(date).toEqual("27 BCE")

    date = controller.getDateString(70)
    expect(date).toEqual("70 CE")
  })
})
