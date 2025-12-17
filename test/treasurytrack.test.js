// treasuryTracks.test.js

import { describe, it, expect, beforeEach } from "vitest"

import { doGold, doPrestige, doUnrest, doPay } from "../src/components/screenobjects/TreasuryTrackHelper"
import Controller from "../src/controller/Controller"
import GlobalUnitsModel from "../src/model/GlobalUnitsModel"
import { loadCounters } from "../src/CounterLoader"
import GlobalInit from "../src/model/GlobalInit"

// Helper to run a placement and return a Map of markerName -> marker object
function runPlacement(fn, value) {
  const occupiedPositions = new Map()
  const activeMarkers = []
  // call the placement function under test
  fn(occupiedPositions, activeMarkers, value)

  // Normalize activeMarkers into a map keyed by markerName
  const byName = new Map()
  for (const m of activeMarkers) {
    // adapt to the shape your counterDataHelper produces
    const name = m.markerName || m.name || m.marker || "UNKNOWN"
    byName.set(name, {
      markerName: name,
      rowIndex: m.rowIndex,
      colIndex: m.colIndex,
    })
  }
  return byName
}

describe("Treasury track placement", () => {
  let controller, counters
  beforeEach(() => {
    counters = new Map()
    controller = new Controller()
    counters = loadCounters(controller)
    GlobalInit.counters = counters
  })
  describe("Gold placement", () => {
    it("Gold <= 250 uses GOLD_10 tens marker and GOLD_1 ones marker (example: 101)", () => {
      const gold = 101
      const markers = runPlacement(doGold, gold)

      const tens = markers.get(GlobalUnitsModel.TREASURY_TRACK_MARKER.GOLD_10)
      expect(tens).toBeDefined()
      expect(tens.rowIndex).toBe(10)
      expect(tens.colIndex).toBe(1)

      const ones = markers.get(GlobalUnitsModel.TREASURY_TRACK_MARKER.GOLD_1)
      expect(ones).toBeDefined()
      expect(ones.rowIndex).toBe(1)
      expect(ones.colIndex).toBe(2)
    })

    it("Gold > 250 uses GOLD_PLUS_250 tens marker and GOLD_1 ones marker (example: 287)", () => {
      const gold = 287
      const markers = runPlacement(doGold, gold)

      const tens = markers.get(GlobalUnitsModel.TREASURY_TRACK_MARKER.GOLD_PLUS_250)
      expect(tens).toBeDefined()
      expect(tens.rowIndex).toBe(3)
      expect(tens.colIndex).toBe(1)

      const ones = markers.get(GlobalUnitsModel.TREASURY_TRACK_MARKER.GOLD_1)
      expect(ones).toBeDefined()
      expect(ones.rowIndex).toBe(7)
      expect(ones.colIndex).toBe(2)
    })

    it("Gold > 250 example: 401 -> tens at row 12 col 1, ones at row 1 col 2", () => {
      const gold = 401
      const markers = runPlacement(doGold, gold)

      const tens = markers.get(GlobalUnitsModel.TREASURY_TRACK_MARKER.GOLD_PLUS_250)
      expect(tens).toBeDefined()
      expect(tens.rowIndex).toBe(12)
      expect(tens.colIndex).toBe(1)

      const ones = markers.get(GlobalUnitsModel.TREASURY_TRACK_MARKER.GOLD_1)
      expect(ones).toBeDefined()
      expect(ones.rowIndex).toBe(1)
      expect(ones.colIndex).toBe(2)
    })
  })

  describe("Unrest placement (sanity around boundary)", () => {
    it("Unrest values 10..14 map to expected rows/cols", () => {
      let markers = runPlacement(doUnrest, 10)
      let m = markers.get(GlobalUnitsModel.TREASURY_TRACK_MARKER.UNREST_1)
      expect(m.rowIndex).toBe(10)
      expect(m.colIndex).toBe(0)

      markers = runPlacement(doUnrest, 11)
      m = markers.get(GlobalUnitsModel.TREASURY_TRACK_MARKER.UNREST_1)
      expect(m.rowIndex).toBe(11)
      expect(m.colIndex).toBe(0)

      markers = runPlacement(doUnrest, 12)
      m = markers.get(GlobalUnitsModel.TREASURY_TRACK_MARKER.UNREST_1)
      expect(m.rowIndex).toBe(11)
      expect(m.colIndex).toBe(1)

      markers = runPlacement(doUnrest, 14)
      m = markers.get(GlobalUnitsModel.TREASURY_TRACK_MARKER.UNREST_1)
      expect(m.rowIndex).toBe(12)
      expect(m.colIndex).toBe(0)
    })
  })

  describe("Prestige placement (basic checks)", () => {
    it("Prestige tens and ones placement around row 9/10", () => {
      const prestigeValue = 97
      const markers = runPlacement(doPrestige, prestigeValue)

      const tens = markers.get(GlobalUnitsModel.TREASURY_TRACK_MARKER.PRESTIGE_10)
      const ones = markers.get(GlobalUnitsModel.TREASURY_TRACK_MARKER.PRESTIGE_1)

      expect(tens).toBeDefined()
      expect(ones).toBeDefined()

      expect(tens.rowIndex).toBe(9)
      expect(tens.colIndex).toBe(1)

      expect(ones.rowIndex).toBe(7)
      expect(ones.colIndex).toBe(2)
    })
  })

  describe("Pay placement (basic checks)", () => {
    it("Pay tens and ones placement example", () => {
      const payValue = 123
      const markers = runPlacement(doPay, payValue)

      const tens = markers.get(GlobalUnitsModel.TREASURY_TRACK_MARKER.PAY_10)
      const ones = markers.get(GlobalUnitsModel.TREASURY_TRACK_MARKER.PAY_1)

      expect(tens).toBeDefined()
      expect(ones).toBeDefined()

      expect(tens.rowIndex).toBe(11)
      expect(tens.colIndex).toBe(1)

      expect(ones.rowIndex).toBe(3)
      expect(ones.colIndex).toBe(2)
    })
  })
})
