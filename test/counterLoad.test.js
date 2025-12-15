import { loadStatesmen } from "../src/counters/StatesmanLoader"
import { describe, expect, it, beforeEach } from "vitest"
import GlobalUnitsModel from "../src/model/GlobalUnitsModel"
import Controller from "../src/controller/Controller"
import { loadCounters } from "../src/CounterLoader"
import { getAllProvinceMarkersOfType, getCounterType } from "../src/utils"

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

  it("loads all miscellaneous markers", () => {
    const keysArray = Array.from(counters.othermarkers.keys())
    expect(keysArray.length).toEqual(16)

    const event2 = counters.othermarkers.get("EVENT 2")
    expect(event2.image).toContain("Event")

    const italia = counters.othermarkers.get(GlobalUnitsModel.COMMAND.ITALIA)
    expect(italia.ltype).toEqual(GlobalUnitsModel.LOYALTY_TYPE.LOYAL)

    italia.setType(GlobalUnitsModel.LOYALTY_TYPE.REBEL)
    expect(italia.ltype).toEqual(GlobalUnitsModel.LOYALTY_TYPE.REBEL)
  })

  it("loads all roman legions", () => {
    const keysArray = Array.from(counters.romanunits.keys())
    expect(keysArray.length).toEqual(88)

    const gemina14 = counters.romanunits.get(GlobalUnitsModel.ROMAN_UNIT.XIV_GEMINA)

    expect(gemina14.unitType).toEqual(GlobalUnitsModel.ROMAN_UNIT_TYPE.LEGION)
    expect(gemina14.image).toEqual(gemina14.imageFront)

    controller.promoteRomanUnit(gemina14.name)

    expect(gemina14.unitType).toEqual(GlobalUnitsModel.ROMAN_UNIT_TYPE.VETERAN_LEGION)
    expect(gemina14.image).toEqual(gemina14.imageBack)
  })

  it("loads all roman fleets", () => {
    const british = counters.romanunits.get(GlobalUnitsModel.ROMAN_UNIT.BRITISH_FLEET)

    expect(british.unitType).toEqual(GlobalUnitsModel.ROMAN_UNIT_TYPE.FLEET)
    expect(british.image).toEqual(british.imageFront)

    controller.promoteRomanUnit(british.name)

    expect(british.unitType).toEqual(GlobalUnitsModel.ROMAN_UNIT_TYPE.VETERAN_FLEET)
    expect(british.image).toEqual(british.imageBack)

    controller.demoteRomanUnit(british.name)

    expect(british.unitType).toEqual(GlobalUnitsModel.ROMAN_UNIT_TYPE.FLEET)
    expect(british.image).toEqual(british.imageFront)
  })

  it("loads all roman auxilia", () => {
    const auxilia19 = counters.romanunits.get("AUXILIA 19")

    expect(auxilia19.unitType).toEqual(GlobalUnitsModel.ROMAN_UNIT_TYPE.AUXILIA)
    expect(auxilia19.image).toEqual(auxilia19.imageFront)

    controller.promoteRomanUnit(auxilia19.name)

    expect(auxilia19.unitType).toEqual(GlobalUnitsModel.ROMAN_UNIT_TYPE.VETERAN_AUXILIA)
    expect(auxilia19.image).toEqual(auxilia19.imageBack)
  })

  it("loads all roman imperial cavalry", () => {
    const cavalry2 = counters.romanunits.get("IMPERIAL CAVALRY 2")

    expect(cavalry2.unitType).toEqual(GlobalUnitsModel.ROMAN_UNIT_TYPE.IMPERIAL_CAVALRY)
    expect(cavalry2.image).toEqual(cavalry2.imageFront)

    controller.promoteRomanUnit(cavalry2.name)

    expect(cavalry2.unitType).toEqual(GlobalUnitsModel.ROMAN_UNIT_TYPE.VETERAN_IMPERIAL_CAVALRY)
    expect(cavalry2.image).toEqual(cavalry2.imageBack)
  })

  it("loads all roman praetorian guard", () => {
    const prGuard0 = counters.romanunits.get("PRAETORIAN GUARD 0")

    expect(prGuard0.unitType).toEqual(GlobalUnitsModel.ROMAN_UNIT_TYPE.PRAETORIAN_GUARD)
    expect(prGuard0.image).toEqual(prGuard0.imageFront)

    controller.promoteRomanUnit(prGuard0.name)

    expect(prGuard0.unitType).toEqual(GlobalUnitsModel.ROMAN_UNIT_TYPE.VETERAN_PRAETORIAN_GUARD)
    expect(prGuard0.image).toEqual(prGuard0.imageBack)
  })

  it("loads all roman walls", () => {
    const wall3 = counters.romanunits.get("WALL 3")

    expect(wall3.unitType).toEqual(GlobalUnitsModel.ROMAN_UNIT_TYPE.WALL)
    expect(wall3.image).toEqual(wall3.imageFront)

    controller.promoteRomanUnit(wall3.name)

    // cannot promote a wall
    expect(wall3.unitType).toEqual(GlobalUnitsModel.ROMAN_UNIT_TYPE.WALL)
    expect(wall3.image).toEqual(wall3.imageFront)
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

    const british6 = counters.wars.get(GlobalUnitsModel.WAR.BRITISH_6)
    expect(british6.strength).toEqual(6)
    expect(british6.navalStrength).toEqual(1)
    expect(british6.region).toEqual(GlobalUnitsModel.HOMELAND_PROVINCE.BRITISH)
    expect(british6.imageFront).toContain("British")
  })

  it("loads all barbarian province markers", () => {
    const alliedMarkers = getAllProvinceMarkersOfType(counters, GlobalUnitsModel.PROVINCE_TYPE.BARBARIAN)
    expect(alliedMarkers.length).toEqual(60)

    const barbarian14 = counters.provincemarkers.get("BARBARIAN 14")
    expect(barbarian14.unitType).toEqual(GlobalUnitsModel.PROVINCE_TYPE.BARBARIAN)
  })

  it("loads all allied province markers", () => {
    const alliedMarkers = getAllProvinceMarkersOfType(counters, GlobalUnitsModel.PROVINCE_TYPE.ALLIED)
    expect(alliedMarkers.length).toEqual(34)

    const allied18 = counters.provincemarkers.get("ALLIED 18")
    expect(allied18.unitType).toEqual(GlobalUnitsModel.PROVINCE_TYPE.ALLIED)
  })

  it("loads all veteran allied province markers", () => {
    const valliedMarkers = getAllProvinceMarkersOfType(counters, GlobalUnitsModel.PROVINCE_TYPE.VETERAN_ALLIED)
    expect(valliedMarkers.length).toEqual(20)

    const vallied8 = counters.provincemarkers.get("VETERAN ALLIED 8")
    expect(vallied8.unitType).toEqual(GlobalUnitsModel.PROVINCE_TYPE.VETERAN_ALLIED)
  })

  it("loads all insurgent province markers", () => {
    const insurgentMarkers = getAllProvinceMarkersOfType(counters, GlobalUnitsModel.PROVINCE_TYPE.INSURGENT)
    expect(insurgentMarkers.length).toEqual(14)

    const insurgent3 = counters.provincemarkers.get("INSURGENT 3")
    expect(insurgent3.unitType).toEqual(GlobalUnitsModel.PROVINCE_TYPE.INSURGENT)
  })

  it("returns the type of counter", () => {
    let counterType = getCounterType(GlobalUnitsModel.WAR.BRITISH_7)
    expect(counterType).toEqual(GlobalUnitsModel.WAR_BOX_TYPE.WAR)

    counterType = getCounterType(GlobalUnitsModel.LEADER.CALGACUS)
    expect(counterType).toEqual(GlobalUnitsModel.WAR_BOX_TYPE.LEADER)

    counterType = getCounterType(GlobalUnitsModel.PROVINCE_TYPE.BARBARIAN)
    expect(counterType).toEqual(GlobalUnitsModel.PROVINCE_TYPE.BARBARIAN)

    counterType = getCounterType(GlobalUnitsModel.ROMAN_UNIT.III_AUGUSTA)
    expect(counterType).toEqual(GlobalUnitsModel.ROMAN_UNIT_TYPE.LEGION)

    counterType = getCounterType(GlobalUnitsModel.ROMAN_UNIT.AFRICAN_FLEET)
    expect(counterType).toEqual(GlobalUnitsModel.ROMAN_UNIT_TYPE.FLEET)

    counterType = getCounterType(GlobalUnitsModel.ROMAN_UNIT_TYPE.WALL)
    expect(counterType).toEqual(GlobalUnitsModel.ROMAN_UNIT_TYPE.WALL)

    counterType = getCounterType(GlobalUnitsModel.PROVINCE_TYPE.ALLIED)
    expect(counterType).toEqual(GlobalUnitsModel.PROVINCE_TYPE.ALLIED)

    counterType = getCounterType(GlobalUnitsModel.PROVINCE_TYPE.VETERAN_ALLIED)
    expect(counterType).toEqual(GlobalUnitsModel.PROVINCE_TYPE.VETERAN_ALLIED)

    counterType = getCounterType(GlobalUnitsModel.PROVINCE_TYPE.INSURGENT)
    expect(counterType).toEqual(GlobalUnitsModel.PROVINCE_TYPE.INSURGENT)

    counterType = getCounterType(GlobalUnitsModel.ROMAN_UNIT_TYPE.AUXILIA)
    expect(counterType).toEqual(GlobalUnitsModel.ROMAN_UNIT_TYPE.AUXILIA)
  })

  it("loads all treasury track markers", () => {
    const keysArray = Array.from(counters.trackmarkers.keys())
    expect(keysArray.length).toEqual(13)

    const pay1 = counters.trackmarkers.get(GlobalUnitsModel.TREASURY_TRACK_MARKER.PAY_1)
    expect(pay1.image).toContain("Shield")

    const gold1 = counters.trackmarkers.get(GlobalUnitsModel.TREASURY_TRACK_MARKER.GOLD_1)
    expect(gold1.image).toContain("Coin")
  })
})
