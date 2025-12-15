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
    console.log("TBD")
  })
  
})
