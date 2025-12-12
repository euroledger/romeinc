import { loadStatesmen } from "../src/counters/StatesmanLoader"
import { describe, expect, it, beforeEach } from "vitest"
import GlobalUnitsModel from "../src/model/GlobalUnitsModel"
import Controller from "../src/controller/Controller"
import GlobalGameState from "../src/model/GlobalGameState"
import { getBoxesFor } from "../src/utils"

describe("Treasury Track Tests", () => {
  let controller
  beforeEach(() => {
    controller = new Controller()
  })

  it("returns correct boxes for treasure track values", () => {
    GlobalGameState.prestige = 25
    const { box1, box2 } = getBoxesFor(GlobalUnitsModel.TREASURY_TRACK_TYPE.PRESTIGE)

    expect(box1).toEqual(2)
    expect(box2).toEqual(5)
  })
  
})
