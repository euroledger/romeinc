import { describe, expect, it, beforeEach } from "vitest"
import Controller from "../src/controller/Controller"
import GlobalUnitsModel from "../src/model/GlobalUnitsModel"
import { buildMap } from "../src/model/map/MapBuilder"
import { loadCounters } from "../src/CounterLoader"
import { getPositionForCounter } from "../src/utils"
import { BOTTOM_LEFT, BOTTOM_RIGHT, TOP_LEFT, TOP_RIGHT } from "../src/components/screenobjects/Provinces"

describe("Mapboard Tests", () => {
  let controller, counters

  beforeEach(() => {
    counters = new Map()
    controller = new Controller()
    counters = loadCounters(controller)
    buildMap(controller)
  })

  describe("Tests all mapboard connections for reciprocity", () => {
    it("traverse all connections, ensure reverse is present and same", () => {
      // 1. Get list of all provinces in the mapboard
      const provinces = controller.getAllProvincesInMapboard()

      // 2. Iterate over provinces
      for (const provinceName of provinces) {
        // 3. => get Province object
        const province = controller.getProvince(provinceName)

        // 4. => get the list of connections for that province
        const connectionListA = province.connections
        // console.log("PROVINCE:", provinceName, "CONNECTIONS:", connectionListA)

        // 5 => => Iterate over connections
        for (const connection of connectionListA) {
          // 6 => => Get the connection to and type (TYPE 1)
          // console.log("CONNECTION TO=", connection.to)
          // console.log("CONNECTION TYPE=", connection.connectionType)

          // 7 => => Get the province for the 'to' property
          const otherProvince = controller.getProvince(connection.to)
          // expect (otherProvince).toBeDefined
          // console.log("OTHER PROVINCE=", otherProvince)

          if (!otherProvince) {
            console.log("Province", connection.to, "NOT FOUND ON MAP")
          }

          // // 8 => => Find connection to province
          // console.log("LOOKING FOR CONNECTION FROM", otherProvince)

          // const connectionBackToProvince = otherProvince.connections.find((connection) => connection.to === province)
          // console.log("")
          // expect (connectionBackToProvince).toBeDefined()
        }
      }

      // 9 => => Compare connection type to TYPE 1
    })
  })
  describe("Mapboard Tests for Britannia", () => {
    it("loads Caledonian homeland province", () => {
      const caledonian = controller.getProvince(GlobalUnitsModel.HOMELAND_PROVINCE.CALEDONIAN)

      expect(caledonian.connections.length).toEqual(2)
      expect(caledonian.icons.length).toEqual(0)
      expect(caledonian.gold).toEqual(0)
      expect(caledonian.command).toEqual(undefined)
      expect(caledonian.homeland).toEqual(true)

      const connection1 = caledonian.connections[0]
      expect(connection1.connectionType).toEqual(GlobalUnitsModel.CONNECTION_TYPE.MOUNTAIN)
      expect(connection1.to).toEqual(GlobalUnitsModel.PROVINCE.CALEDONIA)

      const connection2 = caledonian.connections[1]
      expect(connection2.connectionType).toEqual(GlobalUnitsModel.CONNECTION_TYPE.SEA)
      expect(connection2.to).toEqual(GlobalUnitsModel.PROVINCE.HIBERNIA)

      const connectedProvinces = controller.getProvincesAdjacentTo(GlobalUnitsModel.HOMELAND_PROVINCE.CALEDONIAN)
      expect(connectedProvinces).toEqual([GlobalUnitsModel.PROVINCE.CALEDONIA, GlobalUnitsModel.PROVINCE.HIBERNIA])
    })

    it("loads Britannia Inferior province", () => {
      const britinferior = controller.getProvince(GlobalUnitsModel.PROVINCE.BRITANNIA_INFERIOR)

      expect(britinferior.connections.length).toEqual(4)
      expect(britinferior.icons.length).toEqual(1)
      expect(britinferior.gold).toEqual(3)
      expect(britinferior.command).toEqual(GlobalUnitsModel.COMMAND.BRITANNIA)

      const connectedProvinces = controller.getProvincesAdjacentTo(GlobalUnitsModel.PROVINCE.BRITANNIA_INFERIOR)
      expect(connectedProvinces).toEqual([
        GlobalUnitsModel.PROVINCE.CALEDONIA,
        GlobalUnitsModel.PROVINCE.HIBERNIA,
        GlobalUnitsModel.HOMELAND_PROVINCE.BRITISH,
        GlobalUnitsModel.PROVINCE.BRITANNIA_SUPERIOR,
      ])
    })

    it("loads Britannia Superior province", () => {
      const britinferior = controller.getProvince(GlobalUnitsModel.PROVINCE.BRITANNIA_SUPERIOR)

      expect(britinferior.connections.length).toEqual(6)
      expect(britinferior.icons.length).toEqual(2)
      expect(britinferior.gold).toEqual(4)
      expect(britinferior.command).toEqual(GlobalUnitsModel.COMMAND.BRITANNIA)

      const connectedProvinces = controller.getProvincesAdjacentTo(GlobalUnitsModel.PROVINCE.BRITANNIA_SUPERIOR)
      expect(connectedProvinces).toEqual([
        GlobalUnitsModel.PROVINCE.BRITANNIA_INFERIOR,
        GlobalUnitsModel.HOMELAND_PROVINCE.BRITISH,
        GlobalUnitsModel.PROVINCE.BELGICA,
        GlobalUnitsModel.PROVINCE.GERMANIA_INFERIOR,
        GlobalUnitsModel.PROVINCE.FRISIA,
        GlobalUnitsModel.PROVINCE.LUGDUNENSIS,
      ])
    })

    it("determines counter position within province", () => {
      const gemina14 = counters.romanunits.get(GlobalUnitsModel.ROMAN_UNIT.XIV_GEMINA)
      let pos = getPositionForCounter(gemina14)
      expect(pos).toEqual(TOP_RIGHT)

      const insurgent3 = counters.provincemarkers.get("INSURGENT 3")
      pos = getPositionForCounter(insurgent3)
      expect(pos).toEqual(TOP_LEFT)

      const allied18 = counters.provincemarkers.get("ALLIED 18")
      pos = getPositionForCounter(allied18)
      expect(pos).toEqual(TOP_LEFT)

      const vallied8 = counters.provincemarkers.get("VETERAN ALLIED 8")
      pos = getPositionForCounter(vallied8)
      expect(pos).toEqual(TOP_LEFT)

      const british = counters.romanunits.get(GlobalUnitsModel.ROMAN_UNIT.BRITISH_FLEET)
      pos = getPositionForCounter(british)
      expect(pos).toEqual(BOTTOM_LEFT)

      const palmyrene14 = counters.wars.get(GlobalUnitsModel.WAR.PALMYRENE_14)
      pos = getPositionForCounter(palmyrene14)
      expect(pos).toEqual(BOTTOM_RIGHT)

      const vologases = counters.leaders.get(GlobalUnitsModel.LEADER.VOLOGASES)
      pos = getPositionForCounter(vologases)
      expect(pos).toEqual(BOTTOM_RIGHT)
    })

    it("returns gold for Britannia command", () => {
      const gold = controller.getGoldForCommand(GlobalUnitsModel.COMMAND.BRITANNIA)
      expect(gold).toEqual(9)
    })
  })

  describe("Mapboard Tests for Hispania", () => {
    it("loads Cantabrian homeland province", () => {
      const cantabrian = controller.getProvince(GlobalUnitsModel.HOMELAND_PROVINCE.CANTABRIAN)

      expect(cantabrian.connections.length).toEqual(1)
      expect(cantabrian.icons.length).toEqual(0)
      expect(cantabrian.gold).toEqual(0)
      expect(cantabrian.command).toEqual(undefined)
      expect(cantabrian.homeland).toEqual(true)

      const connection1 = cantabrian.connections[0]
      expect(connection1.connectionType).toEqual(GlobalUnitsModel.CONNECTION_TYPE.MOUNTAIN)
      expect(connection1.to).toEqual(GlobalUnitsModel.PROVINCE.GALLAECIA)

      const connectedProvinces = controller.getProvincesAdjacentTo(GlobalUnitsModel.HOMELAND_PROVINCE.CANTABRIAN)
      expect(connectedProvinces).toEqual([GlobalUnitsModel.PROVINCE.GALLAECIA])
    })

    it("loads Gallaecia province", () => {
      const gallaecia = controller.getProvince(GlobalUnitsModel.PROVINCE.GALLAECIA)

      expect(gallaecia.connections.length).toEqual(4)
      expect(gallaecia.icons.length).toEqual(1)
      expect(gallaecia.gold).toEqual(3)
      expect(gallaecia.command).toEqual(GlobalUnitsModel.COMMAND.HISPANA)
      expect(gallaecia.homeland).toEqual(false)

      const connection1 = gallaecia.connections[0]
      expect(connection1.connectionType).toEqual(GlobalUnitsModel.CONNECTION_TYPE.MOUNTAIN)
      expect(connection1.to).toEqual(GlobalUnitsModel.HOMELAND_PROVINCE.CANTABRIAN)
      expect(connection1.destinationType).toEqual(GlobalUnitsModel.DESTINATION_TYPE.PROVINCE_HOMELAND)

      const connectedProvinces = controller.getProvincesAdjacentTo(GlobalUnitsModel.PROVINCE.GALLAECIA)
      expect(connectedProvinces).toContain(GlobalUnitsModel.HOMELAND_PROVINCE.CANTABRIAN)
      expect(connectedProvinces).toContain(GlobalUnitsModel.PROVINCE.AQUITANIA)
      expect(connectedProvinces).toContain(GlobalUnitsModel.PROVINCE.LUSITANIA)
      expect(connectedProvinces).toContain(GlobalUnitsModel.PROVINCE.TARRACONENSIS)
    })

    it("loads Tarraconensis province", () => {
      const tarraconensis = controller.getProvince(GlobalUnitsModel.PROVINCE.TARRACONENSIS)

      expect(tarraconensis.connections.length).toEqual(4)
      expect(tarraconensis.icons.length).toEqual(0)
      expect(tarraconensis.gold).toEqual(3)
      expect(tarraconensis.command).toEqual(GlobalUnitsModel.COMMAND.HISPANA)
      expect(tarraconensis.homeland).toEqual(false)

      const connectedProvinces = controller.getProvincesAdjacentTo(GlobalUnitsModel.PROVINCE.TARRACONENSIS)

      expect(connectedProvinces).toContain(GlobalUnitsModel.PROVINCE.GALLAECIA)
      expect(connectedProvinces).toContain(GlobalUnitsModel.PROVINCE.NARBONENSIS)
      expect(connectedProvinces).toContain(GlobalUnitsModel.PROVINCE.BALEARES)
      expect(connectedProvinces).toContain(GlobalUnitsModel.PROVINCE.CARTHAGINENSIS)
    })

    it("loads Lusitania province", () => {
      const lusitania = controller.getProvince(GlobalUnitsModel.PROVINCE.LUSITANIA)

      expect(lusitania.connections.length).toEqual(2)
      expect(lusitania.icons.length).toEqual(0)
      expect(lusitania.gold).toEqual(3)
      expect(lusitania.command).toEqual(GlobalUnitsModel.COMMAND.HISPANA)
      expect(lusitania.homeland).toEqual(false)

      const connectedProvinces = controller.getProvincesAdjacentTo(GlobalUnitsModel.PROVINCE.LUSITANIA)

      expect(connectedProvinces).toContain(GlobalUnitsModel.PROVINCE.GALLAECIA)
      expect(connectedProvinces).toContain(GlobalUnitsModel.PROVINCE.BAETICA)
    })

    it("loads Baetica province", () => {
      const baetica = controller.getProvince(GlobalUnitsModel.PROVINCE.BAETICA)

      expect(baetica.connections.length).toEqual(3)

      expect(baetica.icons.length).toEqual(1)
      expect(baetica.icons).toContain(GlobalUnitsModel.MAP_ICON.GRAIN)

      expect(baetica.gold).toEqual(5)
      expect(baetica.command).toEqual(GlobalUnitsModel.COMMAND.HISPANA)
      expect(baetica.homeland).toEqual(false)

      const connectedProvinces = controller.getProvincesAdjacentTo(GlobalUnitsModel.PROVINCE.BAETICA)
      expect(connectedProvinces).toContain(GlobalUnitsModel.PROVINCE.LUSITANIA)
      expect(connectedProvinces).toContain(GlobalUnitsModel.PROVINCE.CARTHAGINENSIS)
      expect(connectedProvinces).toContain(GlobalUnitsModel.PROVINCE.MAURETANIA_TINGITANA)
    })

    it("loads Carthaginensis province", () => {
      const carthaginensis = controller.getProvince(GlobalUnitsModel.PROVINCE.CARTHAGINENSIS)

      expect(carthaginensis.connections.length).toEqual(4)

      expect(carthaginensis.icons.length).toEqual(0)

      expect(carthaginensis.gold).toEqual(4)
      expect(carthaginensis.command).toEqual(GlobalUnitsModel.COMMAND.HISPANA)
      expect(carthaginensis.homeland).toEqual(false)

      const connectedProvinces = controller.getProvincesAdjacentTo(GlobalUnitsModel.PROVINCE.CARTHAGINENSIS)
      expect(connectedProvinces).toContain(GlobalUnitsModel.PROVINCE.TARRACONENSIS)
      expect(connectedProvinces).toContain(GlobalUnitsModel.PROVINCE.BAETICA)
      expect(connectedProvinces).toContain(GlobalUnitsModel.PROVINCE.BALEARES)
      expect(connectedProvinces).toContain(GlobalUnitsModel.PROVINCE.MAURETANIA_CAESARIENSIS)
    })

    it("loads Baleares province", () => {
      const baleares = controller.getProvince(GlobalUnitsModel.PROVINCE.BALEARES)

      expect(baleares.connections.length).toEqual(5)

      expect(baleares.icons.length).toEqual(0)

      expect(baleares.gold).toEqual(2)
      expect(baleares.command).toEqual(GlobalUnitsModel.COMMAND.HISPANA)
      expect(baleares.homeland).toEqual(false)

      const connectedProvinces = controller.getProvincesAdjacentTo(GlobalUnitsModel.PROVINCE.BALEARES)
      expect(connectedProvinces).toContain(GlobalUnitsModel.PROVINCE.TARRACONENSIS)
      expect(connectedProvinces).toContain(GlobalUnitsModel.PROVINCE.NARBONENSIS)
      expect(connectedProvinces).toContain(GlobalUnitsModel.PROVINCE.CARTHAGINENSIS)
      expect(connectedProvinces).toContain(GlobalUnitsModel.PROVINCE.CORSICA_SARDINIA)
      expect(connectedProvinces).toContain(GlobalUnitsModel.PROVINCE.NUMIDIA)
    })

    it("returns gold for Hispania command", () => {
      const gold = controller.getGoldForCommand(GlobalUnitsModel.COMMAND.HISPANA)
      expect(gold).toEqual(20)
    })
  })

  describe("Mapboard Tests for Gallia", () => {
    it("loads Frisia province", () => {
      const frisia = controller.getProvince(GlobalUnitsModel.PROVINCE.FRISIA)

      expect(frisia.connections.length).toEqual(3)
      expect(frisia.icons.length).toEqual(1)
      expect(frisia.gold).toEqual(1)
      expect(frisia.command).toEqual(GlobalUnitsModel.COMMAND.GALLIA)
      expect(frisia.homeland).toEqual(false)

      const connectedProvinces = controller.getProvincesAdjacentTo(GlobalUnitsModel.PROVINCE.FRISIA)
      expect(connectedProvinces).toContain(GlobalUnitsModel.HOMELAND_PROVINCE.GERMAN)
      expect(connectedProvinces).toContain(GlobalUnitsModel.PROVINCE.BRITANNIA_SUPERIOR)
      expect(connectedProvinces).toContain(GlobalUnitsModel.PROVINCE.GERMANIA_INFERIOR)
    })

    it("loads Germania Magna province", () => {
      const germagna = controller.getProvince(GlobalUnitsModel.PROVINCE.GERMANIA_MAGNA)

      expect(germagna.connections.length).toEqual(5)
      expect(germagna.icons.length).toEqual(1)
      expect(germagna.gold).toEqual(1)
      expect(germagna.command).toEqual(GlobalUnitsModel.COMMAND.GALLIA)
      expect(germagna.homeland).toEqual(false)

      const connectedProvinces = controller.getProvincesAdjacentTo(GlobalUnitsModel.PROVINCE.GERMANIA_MAGNA)
      expect(connectedProvinces).toContain(GlobalUnitsModel.HOMELAND_PROVINCE.GERMAN)
      expect(connectedProvinces).toContain(GlobalUnitsModel.HOMELAND_PROVINCE.FRANKISH)
      expect(connectedProvinces).toContain(GlobalUnitsModel.PROVINCE.GERMANIA_SUPERIOR)
      expect(connectedProvinces).toContain(GlobalUnitsModel.PROVINCE.GERMANIA_INFERIOR)
      expect(connectedProvinces).toContain(GlobalUnitsModel.PROVINCE.AGRI_DECUMATES)
    })

    it("loads Germania Inferior province", () => {
      const gerinferior = controller.getProvince(GlobalUnitsModel.PROVINCE.GERMANIA_INFERIOR)

      expect(gerinferior.connections.length).toEqual(5)
      expect(gerinferior.icons.length).toEqual(2)
      expect(gerinferior.gold).toEqual(2)
      expect(gerinferior.command).toEqual(GlobalUnitsModel.COMMAND.GALLIA)
      expect(gerinferior.homeland).toEqual(false)

      const connectedProvinces = controller.getProvincesAdjacentTo(GlobalUnitsModel.PROVINCE.GERMANIA_INFERIOR)
      expect(connectedProvinces).toContain(GlobalUnitsModel.PROVINCE.BRITANNIA_SUPERIOR)
      expect(connectedProvinces).toContain(GlobalUnitsModel.PROVINCE.FRISIA)
      expect(connectedProvinces).toContain(GlobalUnitsModel.PROVINCE.GERMANIA_SUPERIOR)
      expect(connectedProvinces).toContain(GlobalUnitsModel.PROVINCE.GERMANIA_MAGNA)
      expect(connectedProvinces).toContain(GlobalUnitsModel.PROVINCE.BELGICA)
    })

    it("loads Germania Superior province", () => {
      const gersuperior = controller.getProvince(GlobalUnitsModel.PROVINCE.GERMANIA_SUPERIOR)

      expect(gersuperior.connections.length).toEqual(7)
      expect(gersuperior.icons.length).toEqual(1)
      expect(gersuperior.gold).toEqual(2)
      expect(gersuperior.command).toEqual(GlobalUnitsModel.COMMAND.GALLIA)
      expect(gersuperior.homeland).toEqual(false)

      const connectedProvinces = controller.getProvincesAdjacentTo(GlobalUnitsModel.PROVINCE.GERMANIA_SUPERIOR)
      expect(connectedProvinces).toContain(GlobalUnitsModel.PROVINCE.LUGDUNENSIS)
      expect(connectedProvinces).toContain(GlobalUnitsModel.PROVINCE.BELGICA)
      expect(connectedProvinces).toContain(GlobalUnitsModel.PROVINCE.GERMANIA_INFERIOR)
      expect(connectedProvinces).toContain(GlobalUnitsModel.PROVINCE.GERMANIA_MAGNA)
      expect(connectedProvinces).toContain(GlobalUnitsModel.PROVINCE.AGRI_DECUMATES)
      expect(connectedProvinces).toContain(GlobalUnitsModel.PROVINCE.RHAETIA)
      expect(connectedProvinces).toContain(GlobalUnitsModel.PROVINCE.ALPES)
    })

    it("loads Agri Decumates province", () => {
      const agri = controller.getProvince(GlobalUnitsModel.PROVINCE.AGRI_DECUMATES)

      expect(agri.connections.length).toEqual(5)
      expect(agri.icons.length).toEqual(1)
      expect(agri.gold).toEqual(1)
      expect(agri.command).toEqual(GlobalUnitsModel.COMMAND.GALLIA)
      expect(agri.homeland).toEqual(false)

      const connectedProvinces = controller.getProvincesAdjacentTo(GlobalUnitsModel.PROVINCE.AGRI_DECUMATES)
      expect(connectedProvinces).toContain(GlobalUnitsModel.PROVINCE.GERMANIA_MAGNA)
      expect(connectedProvinces).toContain(GlobalUnitsModel.HOMELAND_PROVINCE.ALAMANNIC)
      expect(connectedProvinces).toContain(GlobalUnitsModel.PROVINCE.BOIOHAEMIA)
      expect(connectedProvinces).toContain(GlobalUnitsModel.PROVINCE.GERMANIA_SUPERIOR)
      expect(connectedProvinces).toContain(GlobalUnitsModel.PROVINCE.RHAETIA)
    })

    it("loads Belgica province", () => {
      const belgica = controller.getProvince(GlobalUnitsModel.PROVINCE.BELGICA)

      expect(belgica.connections.length).toEqual(4)
      expect(belgica.icons.length).toEqual(0)
      expect(belgica.gold).toEqual(3)
      expect(belgica.command).toEqual(GlobalUnitsModel.COMMAND.GALLIA)
      expect(belgica.homeland).toEqual(false)

      const connectedProvinces = controller.getProvincesAdjacentTo(GlobalUnitsModel.PROVINCE.BELGICA)
      expect(connectedProvinces).toContain(GlobalUnitsModel.PROVINCE.BRITANNIA_SUPERIOR)
      expect(connectedProvinces).toContain(GlobalUnitsModel.PROVINCE.GERMANIA_INFERIOR)
      expect(connectedProvinces).toContain(GlobalUnitsModel.PROVINCE.GERMANIA_SUPERIOR)
      expect(connectedProvinces).toContain(GlobalUnitsModel.PROVINCE.LUGDUNENSIS)
    })

    it("loads Rhaetia province", () => {
      const rhaetia = controller.getProvince(GlobalUnitsModel.PROVINCE.RHAETIA)

      expect(rhaetia.connections.length).toEqual(6)
      expect(rhaetia.icons.length).toEqual(1)
      expect(rhaetia.gold).toEqual(2)
      expect(rhaetia.command).toEqual(GlobalUnitsModel.COMMAND.GALLIA)
      expect(rhaetia.homeland).toEqual(false)

      const connectedProvinces = controller.getProvincesAdjacentTo(GlobalUnitsModel.PROVINCE.RHAETIA)
      expect(connectedProvinces).toContain(GlobalUnitsModel.PROVINCE.AGRI_DECUMATES)
      expect(connectedProvinces).toContain(GlobalUnitsModel.PROVINCE.GERMANIA_SUPERIOR)
      expect(connectedProvinces).toContain(GlobalUnitsModel.PROVINCE.BOIOHAEMIA)
      expect(connectedProvinces).toContain(GlobalUnitsModel.PROVINCE.NORICUM)
      expect(connectedProvinces).toContain(GlobalUnitsModel.PROVINCE.RAVENNA)
      expect(connectedProvinces).toContain(GlobalUnitsModel.PROVINCE.MEDIOLANUM)
    })

    it("loads Lugdunensis province", () => {
      const lugdunensis = controller.getProvince(GlobalUnitsModel.PROVINCE.LUGDUNENSIS)

      expect(lugdunensis.connections.length).toEqual(5)
      expect(lugdunensis.icons.length).toEqual(0)
      expect(lugdunensis.gold).toEqual(3)
      expect(lugdunensis.command).toEqual(GlobalUnitsModel.COMMAND.GALLIA)
      expect(lugdunensis.homeland).toEqual(false)

      const connectedProvinces = controller.getProvincesAdjacentTo(GlobalUnitsModel.PROVINCE.LUGDUNENSIS)
      expect(connectedProvinces).toContain(GlobalUnitsModel.PROVINCE.BELGICA)
      expect(connectedProvinces).toContain(GlobalUnitsModel.PROVINCE.GERMANIA_SUPERIOR)
      expect(connectedProvinces).toContain(GlobalUnitsModel.PROVINCE.BRITANNIA_SUPERIOR)
      expect(connectedProvinces).toContain(GlobalUnitsModel.PROVINCE.NARBONENSIS)
      expect(connectedProvinces).toContain(GlobalUnitsModel.PROVINCE.AQUITANIA)
    })

    it("loads Aquitania province", () => {
      const aquitania = controller.getProvince(GlobalUnitsModel.PROVINCE.AQUITANIA)

      expect(aquitania.connections.length).toEqual(3)
      expect(aquitania.icons.length).toEqual(0)
      expect(aquitania.gold).toEqual(3)
      expect(aquitania.command).toEqual(GlobalUnitsModel.COMMAND.GALLIA)
      expect(aquitania.homeland).toEqual(false)

      const connectedProvinces = controller.getProvincesAdjacentTo(GlobalUnitsModel.PROVINCE.AQUITANIA)
      expect(connectedProvinces).toContain(GlobalUnitsModel.PROVINCE.LUGDUNENSIS)
      expect(connectedProvinces).toContain(GlobalUnitsModel.PROVINCE.NARBONENSIS)
      expect(connectedProvinces).toContain(GlobalUnitsModel.PROVINCE.GALLAECIA)
    })

    it("loads Narbonensis province", () => {
      const narbonensis = controller.getProvince(GlobalUnitsModel.PROVINCE.NARBONENSIS)

      expect(narbonensis.connections.length).toEqual(6)
      expect(narbonensis.icons.length).toEqual(0)
      expect(narbonensis.gold).toEqual(4)
      expect(narbonensis.command).toEqual(GlobalUnitsModel.COMMAND.GALLIA)
      expect(narbonensis.homeland).toEqual(false)

      const connectedProvinces = controller.getProvincesAdjacentTo(GlobalUnitsModel.PROVINCE.NARBONENSIS)
      expect(connectedProvinces).toContain(GlobalUnitsModel.PROVINCE.AQUITANIA)
      expect(connectedProvinces).toContain(GlobalUnitsModel.PROVINCE.LUGDUNENSIS)
      expect(connectedProvinces).toContain(GlobalUnitsModel.PROVINCE.ALPES)
      expect(connectedProvinces).toContain(GlobalUnitsModel.PROVINCE.CORSICA_SARDINIA)
      expect(connectedProvinces).toContain(GlobalUnitsModel.PROVINCE.BALEARES)
      expect(connectedProvinces).toContain(GlobalUnitsModel.PROVINCE.TARRACONENSIS)
    })
    it("returns gold for Gallia command", () => {
      const gold = controller.getGoldForCommand(GlobalUnitsModel.COMMAND.GALLIA)
      expect(gold).toEqual(22)
    })
  })
  describe("Mapboard Tests for Pannonia", () => {
    it("loads Boiohaemia province", () => {
      const boiohaemia = controller.getProvince(GlobalUnitsModel.PROVINCE.BOIOHAEMIA)

      expect(boiohaemia.connections.length).toEqual(7)
      expect(boiohaemia.icons.length).toEqual(1)
      expect(boiohaemia.gold).toEqual(1)
      expect(boiohaemia.command).toEqual(GlobalUnitsModel.COMMAND.PANNONIA)
      expect(boiohaemia.homeland).toEqual(false)

      const connectedProvinces = controller.getProvincesAdjacentTo(GlobalUnitsModel.PROVINCE.BOIOHAEMIA)
      expect(connectedProvinces).toContain(GlobalUnitsModel.HOMELAND_PROVINCE.ALAMANNIC)
      expect(connectedProvinces).toContain(GlobalUnitsModel.HOMELAND_PROVINCE.MARCOMANNIC)

      expect(connectedProvinces).toContain(GlobalUnitsModel.PROVINCE.AGRI_DECUMATES)
      expect(connectedProvinces).toContain(GlobalUnitsModel.PROVINCE.QUADIA)
      expect(connectedProvinces).toContain(GlobalUnitsModel.PROVINCE.RHAETIA)
      expect(connectedProvinces).toContain(GlobalUnitsModel.PROVINCE.NORICUM)
      expect(connectedProvinces).toContain(GlobalUnitsModel.PROVINCE.PANNONIA_SUPERIOR)
    })

    it("loads Quadia province", () => {
      const quadia = controller.getProvince(GlobalUnitsModel.PROVINCE.QUADIA)

      expect(quadia.connections.length).toEqual(6)
      expect(quadia.icons.length).toEqual(1)
      expect(quadia.gold).toEqual(1)
      expect(quadia.command).toEqual(GlobalUnitsModel.COMMAND.PANNONIA)
      expect(quadia.homeland).toEqual(false)

      const connectedProvinces = controller.getProvincesAdjacentTo(GlobalUnitsModel.PROVINCE.QUADIA)
      expect(connectedProvinces).toContain(GlobalUnitsModel.HOMELAND_PROVINCE.ILLYRIAN)
      expect(connectedProvinces).toContain(GlobalUnitsModel.HOMELAND_PROVINCE.MARCOMANNIC)

      expect(connectedProvinces).toContain(GlobalUnitsModel.PROVINCE.BOIOHAEMIA)
      expect(connectedProvinces).toContain(GlobalUnitsModel.PROVINCE.SARMATIA)
      expect(connectedProvinces).toContain(GlobalUnitsModel.PROVINCE.PANNONIA_INFERIOR)
      expect(connectedProvinces).toContain(GlobalUnitsModel.PROVINCE.PANNONIA_SUPERIOR)
    })

    it("loads Sarmatia province", () => {
      const sarmatia = controller.getProvince(GlobalUnitsModel.PROVINCE.SARMATIA)

      expect(sarmatia.connections.length).toEqual(6)
      expect(sarmatia.icons.length).toEqual(1)
      expect(sarmatia.gold).toEqual(1)
      expect(sarmatia.command).toEqual(GlobalUnitsModel.COMMAND.PANNONIA)
      expect(sarmatia.homeland).toEqual(false)

      const connectedProvinces = controller.getProvincesAdjacentTo(GlobalUnitsModel.PROVINCE.SARMATIA)
      expect(connectedProvinces).toContain(GlobalUnitsModel.HOMELAND_PROVINCE.ILLYRIAN)
      expect(connectedProvinces).toContain(GlobalUnitsModel.HOMELAND_PROVINCE.SARMATIAN)

      expect(connectedProvinces).toContain(GlobalUnitsModel.PROVINCE.QUADIA)
      expect(connectedProvinces).toContain(GlobalUnitsModel.PROVINCE.DACIA_SUPERIOR)
      expect(connectedProvinces).toContain(GlobalUnitsModel.PROVINCE.PANNONIA_INFERIOR)
      expect(connectedProvinces).toContain(GlobalUnitsModel.PROVINCE.MOESIA_SUPERIOR)
    })

    it("loads Noricum province", () => {
      const noricum = controller.getProvince(GlobalUnitsModel.PROVINCE.NORICUM)

      expect(noricum.connections.length).toEqual(4)
      expect(noricum.icons.length).toEqual(1)
      expect(noricum.gold).toEqual(3)
      expect(noricum.command).toEqual(GlobalUnitsModel.COMMAND.PANNONIA)
      expect(noricum.homeland).toEqual(false)

      const connectedProvinces = controller.getProvincesAdjacentTo(GlobalUnitsModel.PROVINCE.NORICUM)
      expect(connectedProvinces).toContain(GlobalUnitsModel.PROVINCE.BOIOHAEMIA)
      expect(connectedProvinces).toContain(GlobalUnitsModel.PROVINCE.RHAETIA)
      expect(connectedProvinces).toContain(GlobalUnitsModel.PROVINCE.PANNONIA_SUPERIOR)
      expect(connectedProvinces).toContain(GlobalUnitsModel.PROVINCE.RAVENNA)
    })

    it("loads Pannonia Superior province", () => {
      const pannsuperior = controller.getProvince(GlobalUnitsModel.PROVINCE.PANNONIA_SUPERIOR)

      expect(pannsuperior.connections.length).toEqual(5)
      expect(pannsuperior.icons.length).toEqual(1)
      expect(pannsuperior.gold).toEqual(2)
      expect(pannsuperior.command).toEqual(GlobalUnitsModel.COMMAND.PANNONIA)
      expect(pannsuperior.homeland).toEqual(false)

      const connectedProvinces = controller.getProvincesAdjacentTo(GlobalUnitsModel.PROVINCE.PANNONIA_SUPERIOR)
      expect(connectedProvinces).toContain(GlobalUnitsModel.PROVINCE.BOIOHAEMIA)
      expect(connectedProvinces).toContain(GlobalUnitsModel.PROVINCE.QUADIA)
      expect(connectedProvinces).toContain(GlobalUnitsModel.PROVINCE.PANNONIA_INFERIOR)
      expect(connectedProvinces).toContain(GlobalUnitsModel.PROVINCE.NORICUM)
      expect(connectedProvinces).toContain(GlobalUnitsModel.PROVINCE.ILLYRIA)
    })

    it("loads Pannonia Inferior province", () => {
      const panninferior = controller.getProvince(GlobalUnitsModel.PROVINCE.PANNONIA_INFERIOR)

      expect(panninferior.connections.length).toEqual(5)
      expect(panninferior.icons.length).toEqual(2)
      expect(panninferior.gold).toEqual(2)
      expect(panninferior.command).toEqual(GlobalUnitsModel.COMMAND.PANNONIA)
      expect(panninferior.homeland).toEqual(false)

      const connectedProvinces = controller.getProvincesAdjacentTo(GlobalUnitsModel.PROVINCE.PANNONIA_INFERIOR)
      expect(connectedProvinces).toContain(GlobalUnitsModel.PROVINCE.SARMATIA)
      expect(connectedProvinces).toContain(GlobalUnitsModel.PROVINCE.QUADIA)
      expect(connectedProvinces).toContain(GlobalUnitsModel.PROVINCE.PANNONIA_SUPERIOR)
      expect(connectedProvinces).toContain(GlobalUnitsModel.PROVINCE.MOESIA_SUPERIOR)
      expect(connectedProvinces).toContain(GlobalUnitsModel.PROVINCE.ILLYRIA)
    })

    it("loads Illyria province", () => {
      const illyria = controller.getProvince(GlobalUnitsModel.PROVINCE.ILLYRIA)

      expect(illyria.connections.length).toEqual(7)
      expect(illyria.icons.length).toEqual(0)
      expect(illyria.gold).toEqual(4)
      expect(illyria.command).toEqual(GlobalUnitsModel.COMMAND.PANNONIA)
      expect(illyria.homeland).toEqual(false)

      const connectedProvinces = controller.getProvincesAdjacentTo(GlobalUnitsModel.PROVINCE.ILLYRIA)
      expect(connectedProvinces).toContain(GlobalUnitsModel.PROVINCE.RAVENNA)
      expect(connectedProvinces).toContain(GlobalUnitsModel.PROVINCE.PANNONIA_INFERIOR)
      expect(connectedProvinces).toContain(GlobalUnitsModel.PROVINCE.PANNONIA_SUPERIOR)
      expect(connectedProvinces).toContain(GlobalUnitsModel.PROVINCE.MOESIA_SUPERIOR)
      expect(connectedProvinces).toContain(GlobalUnitsModel.PROVINCE.MACEDONIA)
      expect(connectedProvinces).toContain(GlobalUnitsModel.PROVINCE.EPIRUS)
      expect(connectedProvinces).toContain(GlobalUnitsModel.PROVINCE.NEAPOLIS)
    })
    it("returns gold for Pannonia command", () => {
      const gold = controller.getGoldForCommand(GlobalUnitsModel.COMMAND.PANNONIA)
      expect(gold).toEqual(14)
    })
  })

  describe("Mapboard Tests for Moesia", () => {
    it("loads Dacia Superior province", () => {
      const daciasuperior = controller.getProvince(GlobalUnitsModel.PROVINCE.DACIA_SUPERIOR)

      expect(daciasuperior.connections.length).toEqual(5)
      expect(daciasuperior.icons.length).toEqual(1)
      expect(daciasuperior.gold).toEqual(2)
      expect(daciasuperior.command).toEqual(GlobalUnitsModel.COMMAND.MOESIA)
      expect(daciasuperior.homeland).toEqual(false)

      const connectedProvinces = controller.getProvincesAdjacentTo(GlobalUnitsModel.PROVINCE.DACIA_SUPERIOR)
      expect(connectedProvinces).toContain(GlobalUnitsModel.HOMELAND_PROVINCE.SARMATIAN)
      expect(connectedProvinces).toContain(GlobalUnitsModel.HOMELAND_PROVINCE.DACIAN)

      expect(connectedProvinces).toContain(GlobalUnitsModel.PROVINCE.SARMATIA)
      expect(connectedProvinces).toContain(GlobalUnitsModel.PROVINCE.SCYTHIA)
      expect(connectedProvinces).toContain(GlobalUnitsModel.PROVINCE.DACIA_INFERIOR)
    })

    it("loads Scythia province", () => {
      const scythia = controller.getProvince(GlobalUnitsModel.PROVINCE.SCYTHIA)

      expect(scythia.connections.length).toEqual(6)
      expect(scythia.icons.length).toEqual(1)
      expect(scythia.gold).toEqual(1)
      expect(scythia.command).toEqual(GlobalUnitsModel.COMMAND.MOESIA)
      expect(scythia.homeland).toEqual(false)

      const connectedProvinces = controller.getProvincesAdjacentTo(GlobalUnitsModel.PROVINCE.SCYTHIA)
      expect(connectedProvinces).toContain(GlobalUnitsModel.HOMELAND_PROVINCE.GOTHIC)
      expect(connectedProvinces).toContain(GlobalUnitsModel.HOMELAND_PROVINCE.DACIAN)

      expect(connectedProvinces).toContain(GlobalUnitsModel.PROVINCE.DACIA_SUPERIOR)
      expect(connectedProvinces).toContain(GlobalUnitsModel.PROVINCE.BOSPORUS)
      expect(connectedProvinces).toContain(GlobalUnitsModel.PROVINCE.DACIA_INFERIOR)
      expect(connectedProvinces).toContain(GlobalUnitsModel.PROVINCE.MOESIA_INFERIOR)
    })

    it("loads Moesia Superior province", () => {
      const moesiasuperior = controller.getProvince(GlobalUnitsModel.PROVINCE.MOESIA_SUPERIOR)

      expect(moesiasuperior.connections.length).toEqual(6)
      expect(moesiasuperior.icons.length).toEqual(1)
      expect(moesiasuperior.gold).toEqual(2)
      expect(moesiasuperior.command).toEqual(GlobalUnitsModel.COMMAND.MOESIA)
      expect(moesiasuperior.homeland).toEqual(false)

      const connectedProvinces = controller.getProvincesAdjacentTo(GlobalUnitsModel.PROVINCE.MOESIA_SUPERIOR)
      expect(connectedProvinces).toContain(GlobalUnitsModel.PROVINCE.PANNONIA_INFERIOR)
      expect(connectedProvinces).toContain(GlobalUnitsModel.PROVINCE.DACIA_INFERIOR)
      expect(connectedProvinces).toContain(GlobalUnitsModel.PROVINCE.SARMATIA)
      expect(connectedProvinces).toContain(GlobalUnitsModel.PROVINCE.ILLYRIA)
      expect(connectedProvinces).toContain(GlobalUnitsModel.PROVINCE.MOESIA_INFERIOR)
      expect(connectedProvinces).toContain(GlobalUnitsModel.PROVINCE.MACEDONIA)
    })

    it("loads Dacia Inferior province", () => {
      const daciainferior = controller.getProvince(GlobalUnitsModel.PROVINCE.DACIA_INFERIOR)

      expect(daciainferior.connections.length).toEqual(4)
      expect(daciainferior.icons.length).toEqual(1)
      expect(daciainferior.gold).toEqual(2)
      expect(daciainferior.command).toEqual(GlobalUnitsModel.COMMAND.MOESIA)
      expect(daciainferior.homeland).toEqual(false)

      const connectedProvinces = controller.getProvincesAdjacentTo(GlobalUnitsModel.PROVINCE.DACIA_INFERIOR)
      expect(connectedProvinces).toContain(GlobalUnitsModel.PROVINCE.SCYTHIA)
      expect(connectedProvinces).toContain(GlobalUnitsModel.PROVINCE.DACIA_SUPERIOR)
      expect(connectedProvinces).toContain(GlobalUnitsModel.PROVINCE.MOESIA_SUPERIOR)
      expect(connectedProvinces).toContain(GlobalUnitsModel.PROVINCE.MOESIA_INFERIOR)
    })

    it("loads Moesia Inferior province", () => {
      const moesiainferior = controller.getProvince(GlobalUnitsModel.PROVINCE.MOESIA_INFERIOR)

      expect(moesiainferior.connections.length).toEqual(5)
      expect(moesiainferior.icons.length).toEqual(2)
      expect(moesiainferior.gold).toEqual(2)
      expect(moesiainferior.command).toEqual(GlobalUnitsModel.COMMAND.MOESIA)
      expect(moesiainferior.homeland).toEqual(false)

      const connectedProvinces = controller.getProvincesAdjacentTo(GlobalUnitsModel.PROVINCE.MOESIA_INFERIOR)
      expect(connectedProvinces).toContain(GlobalUnitsModel.PROVINCE.SCYTHIA)
      expect(connectedProvinces).toContain(GlobalUnitsModel.PROVINCE.DACIA_INFERIOR)
      expect(connectedProvinces).toContain(GlobalUnitsModel.PROVINCE.MOESIA_SUPERIOR)
      expect(connectedProvinces).toContain(GlobalUnitsModel.PROVINCE.THRACIA)
    })

    it("loads Epirus province", () => {
      const epirus = controller.getProvince(GlobalUnitsModel.PROVINCE.EPIRUS)

      expect(epirus.connections.length).toEqual(4)
      expect(epirus.icons.length).toEqual(0)
      expect(epirus.gold).toEqual(3)
      expect(epirus.command).toEqual(GlobalUnitsModel.COMMAND.MOESIA)
      expect(epirus.homeland).toEqual(false)

      const connectedProvinces = controller.getProvincesAdjacentTo(GlobalUnitsModel.PROVINCE.EPIRUS)
      expect(connectedProvinces).toContain(GlobalUnitsModel.PROVINCE.ILLYRIA)
      expect(connectedProvinces).toContain(GlobalUnitsModel.PROVINCE.MACEDONIA)
      expect(connectedProvinces).toContain(GlobalUnitsModel.PROVINCE.NEAPOLIS)
      expect(connectedProvinces).toContain(GlobalUnitsModel.PROVINCE.ACHAEA)
    })

    it("loads Macedonia province", () => {
      const macedonia = controller.getProvince(GlobalUnitsModel.PROVINCE.MACEDONIA)

      expect(macedonia.connections.length).toEqual(5)
      expect(macedonia.icons.length).toEqual(0)
      expect(macedonia.gold).toEqual(4)
      expect(macedonia.command).toEqual(GlobalUnitsModel.COMMAND.MOESIA)
      expect(macedonia.homeland).toEqual(false)

      const connectedProvinces = controller.getProvincesAdjacentTo(GlobalUnitsModel.PROVINCE.MACEDONIA)
      expect(connectedProvinces).toContain(GlobalUnitsModel.PROVINCE.ILLYRIA)
      expect(connectedProvinces).toContain(GlobalUnitsModel.PROVINCE.THRACIA)
      expect(connectedProvinces).toContain(GlobalUnitsModel.PROVINCE.EPIRUS)
      expect(connectedProvinces).toContain(GlobalUnitsModel.PROVINCE.ACHAEA)
    })

    it("loads Thracia province", () => {
      const thracia = controller.getProvince(GlobalUnitsModel.PROVINCE.THRACIA)

      expect(thracia.connections.length).toEqual(4)
      expect(thracia.icons.length).toEqual(0)
      expect(thracia.gold).toEqual(3)
      expect(thracia.command).toEqual(GlobalUnitsModel.COMMAND.MOESIA)
      expect(thracia.homeland).toEqual(false)

      const connectedProvinces = controller.getProvincesAdjacentTo(GlobalUnitsModel.PROVINCE.THRACIA)
      expect(connectedProvinces).toContain(GlobalUnitsModel.PROVINCE.MACEDONIA)
      expect(connectedProvinces).toContain(GlobalUnitsModel.PROVINCE.MOESIA_INFERIOR)
      expect(connectedProvinces).toContain(GlobalUnitsModel.PROVINCE.BITHYNIA)
      expect(connectedProvinces).toContain(GlobalUnitsModel.PROVINCE.ASIA)
    })

    it("loads Achaea province", () => {
      const achaea = controller.getProvince(GlobalUnitsModel.PROVINCE.ACHAEA)

      expect(achaea.connections.length).toEqual(6)
      expect(achaea.icons.length).toEqual(0)
      expect(achaea.gold).toEqual(5)
      expect(achaea.command).toEqual(GlobalUnitsModel.COMMAND.MOESIA)
      expect(achaea.homeland).toEqual(false)

      const connectedProvinces = controller.getProvincesAdjacentTo(GlobalUnitsModel.PROVINCE.ACHAEA)
      expect(connectedProvinces).toContain(GlobalUnitsModel.PROVINCE.MACEDONIA)
      expect(connectedProvinces).toContain(GlobalUnitsModel.PROVINCE.SICILIA)
      expect(connectedProvinces).toContain(GlobalUnitsModel.PROVINCE.EPIRUS)
      expect(connectedProvinces).toContain(GlobalUnitsModel.PROVINCE.ASIA)
      expect(connectedProvinces).toContain(GlobalUnitsModel.PROVINCE.RHODUS)
      expect(connectedProvinces).toContain(GlobalUnitsModel.PROVINCE.CRETA)
    })

    it("loads Bosporus province", () => {
      const achaea = controller.getProvince(GlobalUnitsModel.PROVINCE.BOSPORUS)

      expect(achaea.connections.length).toEqual(7)
      expect(achaea.icons.length).toEqual(2)
      expect(achaea.gold).toEqual(3)
      expect(achaea.command).toEqual(GlobalUnitsModel.COMMAND.MOESIA)
      expect(achaea.homeland).toEqual(false)

      const connectedProvinces = controller.getProvincesAdjacentTo(GlobalUnitsModel.PROVINCE.BOSPORUS)
      expect(connectedProvinces).toContain(GlobalUnitsModel.HOMELAND_PROVINCE.GOTHIC)

      expect(connectedProvinces).toContain(GlobalUnitsModel.PROVINCE.SCYTHIA)
      expect(connectedProvinces).toContain(GlobalUnitsModel.PROVINCE.CAUCASIA)
      expect(connectedProvinces).toContain(GlobalUnitsModel.PROVINCE.MOESIA_INFERIOR)
      expect(connectedProvinces).toContain(GlobalUnitsModel.PROVINCE.BITHYNIA)
      expect(connectedProvinces).toContain(GlobalUnitsModel.PROVINCE.PONTUS)
      expect(connectedProvinces).toContain(GlobalUnitsModel.PROVINCE.ARMENIA_MINOR)
    })

    it("returns gold for Moesia command", () => {
      const gold = controller.getGoldForCommand(GlobalUnitsModel.COMMAND.MOESIA)
      expect(gold).toEqual(27)
    })
  })

  describe("Mapboard Tests for Syria", () => {
    it("loads Commagene province", () => {
      const commagene = controller.getProvince(GlobalUnitsModel.PROVINCE.COMMAGENE)

      expect(commagene.connections.length).toEqual(3)
      expect(commagene.icons.length).toEqual(2)
      expect(commagene.gold).toEqual(2)
      expect(commagene.command).toEqual(GlobalUnitsModel.COMMAND.SYRIA)
      expect(commagene.homeland).toEqual(false)

      const connectedProvinces = controller.getProvincesAdjacentTo(GlobalUnitsModel.PROVINCE.COMMAGENE)
      expect(connectedProvinces).toContain(GlobalUnitsModel.PROVINCE.CAPPADOCIA)
      expect(connectedProvinces).toContain(GlobalUnitsModel.PROVINCE.OSRHOENE)
      expect(connectedProvinces).toContain(GlobalUnitsModel.PROVINCE.SYRIA)
    })

    it("loads Osrhoene province", () => {
      const osrhoene = controller.getProvince(GlobalUnitsModel.PROVINCE.OSRHOENE)

      expect(osrhoene.connections.length).toEqual(5)
      expect(osrhoene.icons.length).toEqual(2)
      expect(osrhoene.gold).toEqual(3)
      expect(osrhoene.command).toEqual(GlobalUnitsModel.COMMAND.SYRIA)
      expect(osrhoene.homeland).toEqual(false)

      const connectedProvinces = controller.getProvincesAdjacentTo(GlobalUnitsModel.PROVINCE.OSRHOENE)
      expect(connectedProvinces).toContain(GlobalUnitsModel.PROVINCE.ARMENIA_MAJOR)
      expect(connectedProvinces).toContain(GlobalUnitsModel.PROVINCE.COMMAGENE)
      expect(connectedProvinces).toContain(GlobalUnitsModel.PROVINCE.ASSYTRIA)
      expect(connectedProvinces).toContain(GlobalUnitsModel.PROVINCE.MESOPOTAMIA)
      expect(connectedProvinces).toContain(GlobalUnitsModel.PROVINCE.SYRIA)
    })

    it("loads Assyria province", () => {
      const assyria = controller.getProvince(GlobalUnitsModel.PROVINCE.ASSYTRIA)

      expect(assyria.connections.length).toEqual(5)
      expect(assyria.icons.length).toEqual(2)
      expect(assyria.gold).toEqual(4)
      expect(assyria.command).toEqual(GlobalUnitsModel.COMMAND.SYRIA)
      expect(assyria.homeland).toEqual(false)

      const connectedProvinces = controller.getProvincesAdjacentTo(GlobalUnitsModel.PROVINCE.ASSYTRIA)
      expect(connectedProvinces).toContain(GlobalUnitsModel.HOMELAND_PROVINCE.PARTHIAN)
      expect(connectedProvinces).toContain(GlobalUnitsModel.PROVINCE.ARMENIA_MAJOR)
      expect(connectedProvinces).toContain(GlobalUnitsModel.PROVINCE.OSRHOENE)
      expect(connectedProvinces).toContain(GlobalUnitsModel.PROVINCE.MESOPOTAMIA)
      expect(connectedProvinces).toContain(GlobalUnitsModel.PROVINCE.BABYLONIA)
    })

    it("loads Cilicia province", () => {
      const cilicia = controller.getProvince(GlobalUnitsModel.PROVINCE.CILICIA)

      expect(cilicia.connections.length).toEqual(4)
      expect(cilicia.icons.length).toEqual(0)
      expect(cilicia.gold).toEqual(3)
      expect(cilicia.command).toEqual(GlobalUnitsModel.COMMAND.SYRIA)
      expect(cilicia.homeland).toEqual(false)

      const connectedProvinces = controller.getProvincesAdjacentTo(GlobalUnitsModel.PROVINCE.CILICIA)
      expect(connectedProvinces).toContain(GlobalUnitsModel.PROVINCE.LYCIA_PAMPHILIA)
      expect(connectedProvinces).toContain(GlobalUnitsModel.PROVINCE.CAPPADOCIA)
      expect(connectedProvinces).toContain(GlobalUnitsModel.PROVINCE.CYPRUS)
      expect(connectedProvinces).toContain(GlobalUnitsModel.PROVINCE.SYRIA)
    })
    it("loads Syria province", () => {
      const syria = controller.getProvince(GlobalUnitsModel.PROVINCE.SYRIA)

      expect(syria.connections.length).toEqual(7)
      expect(syria.icons.length).toEqual(2)
      expect(syria.gold).toEqual(4)
      expect(syria.command).toEqual(GlobalUnitsModel.COMMAND.SYRIA)
      expect(syria.homeland).toEqual(false)

      const connectedProvinces = controller.getProvincesAdjacentTo(GlobalUnitsModel.PROVINCE.SYRIA)
      expect(connectedProvinces).toContain(GlobalUnitsModel.PROVINCE.CILICIA)
      expect(connectedProvinces).toContain(GlobalUnitsModel.PROVINCE.COMMAGENE)
      expect(connectedProvinces).toContain(GlobalUnitsModel.PROVINCE.OSRHOENE)
      expect(connectedProvinces).toContain(GlobalUnitsModel.PROVINCE.MESOPOTAMIA)
      expect(connectedProvinces).toContain(GlobalUnitsModel.PROVINCE.PALMYRA)
      expect(connectedProvinces).toContain(GlobalUnitsModel.PROVINCE.PHOENECIA)
      expect(connectedProvinces).toContain(GlobalUnitsModel.PROVINCE.CYPRUS)
    })

    it("loads Mesopotamia province", () => {
      const mesopotamia = controller.getProvince(GlobalUnitsModel.PROVINCE.MESOPOTAMIA)

      expect(mesopotamia.connections.length).toEqual(5)
      expect(mesopotamia.icons.length).toEqual(2)
      expect(mesopotamia.gold).toEqual(3)
      expect(mesopotamia.command).toEqual(GlobalUnitsModel.COMMAND.SYRIA)
      expect(mesopotamia.homeland).toEqual(false)

      const connectedProvinces = controller.getProvincesAdjacentTo(GlobalUnitsModel.PROVINCE.MESOPOTAMIA)
      expect(connectedProvinces).toContain(GlobalUnitsModel.PROVINCE.OSRHOENE)
      expect(connectedProvinces).toContain(GlobalUnitsModel.PROVINCE.ASSYTRIA)
      expect(connectedProvinces).toContain(GlobalUnitsModel.PROVINCE.BABYLONIA)
      expect(connectedProvinces).toContain(GlobalUnitsModel.PROVINCE.PALMYRA)
      expect(connectedProvinces).toContain(GlobalUnitsModel.PROVINCE.SYRIA)
    })

    it("loads Babylonia province", () => {
      const mesopotamia = controller.getProvince(GlobalUnitsModel.PROVINCE.BABYLONIA)

      expect(mesopotamia.connections.length).toEqual(4)
      expect(mesopotamia.icons.length).toEqual(3)
      expect(mesopotamia.gold).toEqual(4)
      expect(mesopotamia.command).toEqual(GlobalUnitsModel.COMMAND.SYRIA)
      expect(mesopotamia.homeland).toEqual(false)

      const connectedProvinces = controller.getProvincesAdjacentTo(GlobalUnitsModel.PROVINCE.BABYLONIA)
      expect(connectedProvinces).toContain(GlobalUnitsModel.HOMELAND_PROVINCE.PARTHIAN)
      expect(connectedProvinces).toContain(GlobalUnitsModel.HOMELAND_PROVINCE.PERSIAN)
      expect(connectedProvinces).toContain(GlobalUnitsModel.PROVINCE.ASSYTRIA)
      expect(connectedProvinces).toContain(GlobalUnitsModel.PROVINCE.MESOPOTAMIA)
    })

    it("loads Cyprus province", () => {
      const cyprus = controller.getProvince(GlobalUnitsModel.PROVINCE.CYPRUS)

      expect(cyprus.connections.length).toEqual(6)
      expect(cyprus.icons.length).toEqual(0)
      expect(cyprus.gold).toEqual(3)
      expect(cyprus.command).toEqual(GlobalUnitsModel.COMMAND.SYRIA)
      expect(cyprus.homeland).toEqual(false)

      const connectedProvinces = controller.getProvincesAdjacentTo(GlobalUnitsModel.PROVINCE.CYPRUS)

      expect(connectedProvinces).toContain(GlobalUnitsModel.PROVINCE.LYCIA_PAMPHILIA)
      expect(connectedProvinces).toContain(GlobalUnitsModel.PROVINCE.CILICIA)
      expect(connectedProvinces).toContain(GlobalUnitsModel.PROVINCE.SYRIA)
      expect(connectedProvinces).toContain(GlobalUnitsModel.PROVINCE.PHOENECIA)
      expect(connectedProvinces).toContain(GlobalUnitsModel.PROVINCE.JUDEA)
      expect(connectedProvinces).toContain(GlobalUnitsModel.PROVINCE.ALEXANDRIA)
    })

    it("loads Phoenecia province", () => {
      const phoenecia = controller.getProvince(GlobalUnitsModel.PROVINCE.PHOENECIA)

      expect(phoenecia.connections.length).toEqual(4)
      expect(phoenecia.icons.length).toEqual(1)
      expect(phoenecia.gold).toEqual(3)
      expect(phoenecia.command).toEqual(GlobalUnitsModel.COMMAND.SYRIA)
      expect(phoenecia.homeland).toEqual(false)

      const connectedProvinces = controller.getProvincesAdjacentTo(GlobalUnitsModel.PROVINCE.PHOENECIA)

      expect(connectedProvinces).toContain(GlobalUnitsModel.PROVINCE.CYPRUS)
      expect(connectedProvinces).toContain(GlobalUnitsModel.PROVINCE.SYRIA)
      expect(connectedProvinces).toContain(GlobalUnitsModel.PROVINCE.PALMYRA)
      expect(connectedProvinces).toContain(GlobalUnitsModel.PROVINCE.JUDEA)
    })

    it("loads Palmyra province", () => {
      const palmyra = controller.getProvince(GlobalUnitsModel.PROVINCE.PALMYRA)

      expect(palmyra.connections.length).toEqual(4)
      expect(palmyra.icons.length).toEqual(2)
      expect(palmyra.gold).toEqual(3)
      expect(palmyra.command).toEqual(GlobalUnitsModel.COMMAND.SYRIA)
      expect(palmyra.homeland).toEqual(false)

      const connectedProvinces = controller.getProvincesAdjacentTo(GlobalUnitsModel.PROVINCE.PALMYRA)

      expect(connectedProvinces).toContain(GlobalUnitsModel.HOMELAND_PROVINCE.PALMYRENE)
      expect(connectedProvinces).toContain(GlobalUnitsModel.PROVINCE.SYRIA)
      expect(connectedProvinces).toContain(GlobalUnitsModel.PROVINCE.MESOPOTAMIA)
      expect(connectedProvinces).toContain(GlobalUnitsModel.PROVINCE.PHOENECIA)
    })

    it("loads Judea province", () => {
      const judea = controller.getProvince(GlobalUnitsModel.PROVINCE.JUDEA)

      expect(judea.connections.length).toEqual(5)
      expect(judea.icons.length).toEqual(1)
      expect(judea.gold).toEqual(3)
      expect(judea.command).toEqual(GlobalUnitsModel.COMMAND.SYRIA)
      expect(judea.homeland).toEqual(false)

      const connectedProvinces = controller.getProvincesAdjacentTo(GlobalUnitsModel.PROVINCE.JUDEA)

      expect(connectedProvinces).toContain(GlobalUnitsModel.HOMELAND_PROVINCE.JUDEAN)
      expect(connectedProvinces).toContain(GlobalUnitsModel.PROVINCE.CYPRUS)
      expect(connectedProvinces).toContain(GlobalUnitsModel.PROVINCE.ALEXANDRIA)
      expect(connectedProvinces).toContain(GlobalUnitsModel.PROVINCE.PHOENECIA)
      expect(connectedProvinces).toContain(GlobalUnitsModel.PROVINCE.ARABIA)
    })

    it("loads Arabia province", () => {
      const arabia = controller.getProvince(GlobalUnitsModel.PROVINCE.ARABIA)

      expect(arabia.connections.length).toEqual(3)
      expect(arabia.icons.length).toEqual(1)
      expect(arabia.gold).toEqual(3)
      expect(arabia.command).toEqual(GlobalUnitsModel.COMMAND.SYRIA)
      expect(arabia.homeland).toEqual(false)

      const connectedProvinces = controller.getProvincesAdjacentTo(GlobalUnitsModel.PROVINCE.ARABIA)

      expect(connectedProvinces).toContain(GlobalUnitsModel.HOMELAND_PROVINCE.JUDEAN)
      expect(connectedProvinces).toContain(GlobalUnitsModel.PROVINCE.JUDEA)
      expect(connectedProvinces).toContain(GlobalUnitsModel.PROVINCE.ALEXANDRIA)
    })

    it("returns gold for Syria command", () => {
      const gold = controller.getGoldForCommand(GlobalUnitsModel.COMMAND.SYRIA)
      expect(gold).toEqual(38)
    })
  })
  describe("Mapboard Tests for Pontica", () => {
    it("loads Caucasia province", () => {
      const caucasia = controller.getProvince(GlobalUnitsModel.PROVINCE.CAUCASIA)

      expect(caucasia.connections.length).toEqual(3)
      expect(caucasia.icons.length).toEqual(1)
      expect(caucasia.gold).toEqual(1)
      expect(caucasia.command).toEqual(GlobalUnitsModel.COMMAND.PONTICA)
      expect(caucasia.homeland).toEqual(false)

      const connectedProvinces = controller.getProvincesAdjacentTo(GlobalUnitsModel.PROVINCE.CAUCASIA)
      expect(connectedProvinces).toContain(GlobalUnitsModel.HOMELAND_PROVINCE.ALAN)
      expect(connectedProvinces).toContain(GlobalUnitsModel.PROVINCE.BOSPORUS)
      expect(connectedProvinces).toContain(GlobalUnitsModel.PROVINCE.COLCHIS)
    })

    it("loads Colchis province", () => {
      const colchis = controller.getProvince(GlobalUnitsModel.PROVINCE.COLCHIS)

      expect(colchis.connections.length).toEqual(4)
      expect(colchis.icons.length).toEqual(1)
      expect(colchis.gold).toEqual(2)
      expect(colchis.command).toEqual(GlobalUnitsModel.COMMAND.PONTICA)
      expect(colchis.homeland).toEqual(false)

      const connectedProvinces = controller.getProvincesAdjacentTo(GlobalUnitsModel.PROVINCE.COLCHIS)
      expect(connectedProvinces).toContain(GlobalUnitsModel.HOMELAND_PROVINCE.ALAN)
      expect(connectedProvinces).toContain(GlobalUnitsModel.PROVINCE.CAUCASIA)
      expect(connectedProvinces).toContain(GlobalUnitsModel.PROVINCE.IBERIA)
      expect(connectedProvinces).toContain(GlobalUnitsModel.PROVINCE.ARMENIA_MINOR)
    })

    it("loads Iberia province", () => {
      const iberia = controller.getProvince(GlobalUnitsModel.PROVINCE.IBERIA)

      expect(iberia.connections.length).toEqual(4)
      expect(iberia.icons.length).toEqual(2)
      expect(iberia.gold).toEqual(2)
      expect(iberia.command).toEqual(GlobalUnitsModel.COMMAND.PONTICA)
      expect(iberia.homeland).toEqual(false)

      const connectedProvinces = controller.getProvincesAdjacentTo(GlobalUnitsModel.PROVINCE.IBERIA)
      expect(connectedProvinces).toContain(GlobalUnitsModel.HOMELAND_PROVINCE.ALAN)
      expect(connectedProvinces).toContain(GlobalUnitsModel.PROVINCE.COLCHIS)
      expect(connectedProvinces).toContain(GlobalUnitsModel.PROVINCE.ALBANIA)
      expect(connectedProvinces).toContain(GlobalUnitsModel.PROVINCE.ARMENIA_MAJOR)
    })

    it("loads Albania province", () => {
      const albania = controller.getProvince(GlobalUnitsModel.PROVINCE.ALBANIA)

      expect(albania.connections.length).toEqual(3)
      expect(albania.icons.length).toEqual(2)
      expect(albania.gold).toEqual(2)
      expect(albania.command).toEqual(GlobalUnitsModel.COMMAND.PONTICA)
      expect(albania.homeland).toEqual(false)

      const connectedProvinces = controller.getProvincesAdjacentTo(GlobalUnitsModel.PROVINCE.ALBANIA)
      expect(connectedProvinces).toContain(GlobalUnitsModel.HOMELAND_PROVINCE.ALAN)
      expect(connectedProvinces).toContain(GlobalUnitsModel.PROVINCE.IBERIA)
      expect(connectedProvinces).toContain(GlobalUnitsModel.PROVINCE.ARMENIA_MAJOR)
    })

    it("loads Bithynia province", () => {
      const bithynia = controller.getProvince(GlobalUnitsModel.PROVINCE.BITHYNIA)

      expect(bithynia.connections.length).toEqual(5)
      expect(bithynia.icons.length).toEqual(0)
      expect(bithynia.gold).toEqual(4)
      expect(bithynia.command).toEqual(GlobalUnitsModel.COMMAND.PONTICA)
      expect(bithynia.homeland).toEqual(false)

      const connectedProvinces = controller.getProvincesAdjacentTo(GlobalUnitsModel.PROVINCE.BITHYNIA)
      expect(connectedProvinces).toContain(GlobalUnitsModel.PROVINCE.BOSPORUS)
      expect(connectedProvinces).toContain(GlobalUnitsModel.PROVINCE.THRACIA)
      expect(connectedProvinces).toContain(GlobalUnitsModel.PROVINCE.PONTUS)
      expect(connectedProvinces).toContain(GlobalUnitsModel.PROVINCE.GALATIA)
      expect(connectedProvinces).toContain(GlobalUnitsModel.PROVINCE.ASIA)
    })

    it("loads Pontus province", () => {
      const pontus = controller.getProvince(GlobalUnitsModel.PROVINCE.PONTUS)

      expect(pontus.connections.length).toEqual(5)
      expect(pontus.icons.length).toEqual(0)
      expect(pontus.gold).toEqual(3)
      expect(pontus.command).toEqual(GlobalUnitsModel.COMMAND.PONTICA)
      expect(pontus.homeland).toEqual(false)

      const connectedProvinces = controller.getProvincesAdjacentTo(GlobalUnitsModel.PROVINCE.PONTUS)
      expect(connectedProvinces).toContain(GlobalUnitsModel.PROVINCE.BOSPORUS)
      expect(connectedProvinces).toContain(GlobalUnitsModel.PROVINCE.BITHYNIA)
      expect(connectedProvinces).toContain(GlobalUnitsModel.PROVINCE.ARMENIA_MINOR)
      expect(connectedProvinces).toContain(GlobalUnitsModel.PROVINCE.GALATIA)
      expect(connectedProvinces).toContain(GlobalUnitsModel.PROVINCE.CAPPADOCIA)
    })

    it("loads Armenia Minor province", () => {
      const armeniaminor = controller.getProvince(GlobalUnitsModel.PROVINCE.ARMENIA_MINOR)

      expect(armeniaminor.connections.length).toEqual(5)
      expect(armeniaminor.icons.length).toEqual(2)
      expect(armeniaminor.gold).toEqual(2)
      expect(armeniaminor.command).toEqual(GlobalUnitsModel.COMMAND.PONTICA)
      expect(armeniaminor.homeland).toEqual(false)

      const connectedProvinces = controller.getProvincesAdjacentTo(GlobalUnitsModel.PROVINCE.ARMENIA_MINOR)
      expect(connectedProvinces).toContain(GlobalUnitsModel.PROVINCE.BOSPORUS)
      expect(connectedProvinces).toContain(GlobalUnitsModel.PROVINCE.PONTUS)
      expect(connectedProvinces).toContain(GlobalUnitsModel.PROVINCE.COLCHIS)
      expect(connectedProvinces).toContain(GlobalUnitsModel.PROVINCE.ARMENIA_MAJOR)
      expect(connectedProvinces).toContain(GlobalUnitsModel.PROVINCE.CAPPADOCIA)
    })

    it("loads Armenia Major province", () => {
      const armeniamajor = controller.getProvince(GlobalUnitsModel.PROVINCE.ARMENIA_MAJOR)

      expect(armeniamajor.connections.length).toEqual(7)
      expect(armeniamajor.icons.length).toEqual(2)
      expect(armeniamajor.gold).toEqual(4)
      expect(armeniamajor.command).toEqual(GlobalUnitsModel.COMMAND.PONTICA)
      expect(armeniamajor.homeland).toEqual(false)

      const connectedProvinces = controller.getProvincesAdjacentTo(GlobalUnitsModel.PROVINCE.ARMENIA_MAJOR)
      expect(connectedProvinces).toContain(GlobalUnitsModel.HOMELAND_PROVINCE.PARTHIAN)
      expect(connectedProvinces).toContain(GlobalUnitsModel.PROVINCE.ARMENIA_MINOR)
      expect(connectedProvinces).toContain(GlobalUnitsModel.PROVINCE.IBERIA)
      expect(connectedProvinces).toContain(GlobalUnitsModel.PROVINCE.ALBANIA)
      expect(connectedProvinces).toContain(GlobalUnitsModel.PROVINCE.ASSYTRIA)
      expect(connectedProvinces).toContain(GlobalUnitsModel.PROVINCE.OSRHOENE)
      expect(connectedProvinces).toContain(GlobalUnitsModel.PROVINCE.CAPPADOCIA)
    })
    it("loads Asia province", () => {
      const asia = controller.getProvince(GlobalUnitsModel.PROVINCE.ASIA)

      expect(asia.connections.length).toEqual(6)
      expect(asia.icons.length).toEqual(0)
      expect(asia.gold).toEqual(5)
      expect(asia.command).toEqual(GlobalUnitsModel.COMMAND.PONTICA)
      expect(asia.homeland).toEqual(false)

      const connectedProvinces = controller.getProvincesAdjacentTo(GlobalUnitsModel.PROVINCE.ASIA)
      expect(connectedProvinces).toContain(GlobalUnitsModel.PROVINCE.ACHAEA)
      expect(connectedProvinces).toContain(GlobalUnitsModel.PROVINCE.BITHYNIA)
      expect(connectedProvinces).toContain(GlobalUnitsModel.PROVINCE.THRACIA)
      expect(connectedProvinces).toContain(GlobalUnitsModel.PROVINCE.GALATIA)
      expect(connectedProvinces).toContain(GlobalUnitsModel.PROVINCE.LYCIA_PAMPHILIA)
      expect(connectedProvinces).toContain(GlobalUnitsModel.PROVINCE.RHODUS)
    })

    it("loads Galatia province", () => {
      const galatia = controller.getProvince(GlobalUnitsModel.PROVINCE.GALATIA)

      expect(galatia.connections.length).toEqual(5)
      expect(galatia.icons.length).toEqual(1)
      expect(galatia.gold).toEqual(2)
      expect(galatia.command).toEqual(GlobalUnitsModel.COMMAND.PONTICA)
      expect(galatia.homeland).toEqual(false)

      const connectedProvinces = controller.getProvincesAdjacentTo(GlobalUnitsModel.PROVINCE.GALATIA)
      expect(connectedProvinces).toContain(GlobalUnitsModel.PROVINCE.ASIA)
      expect(connectedProvinces).toContain(GlobalUnitsModel.PROVINCE.BITHYNIA)
      expect(connectedProvinces).toContain(GlobalUnitsModel.PROVINCE.PONTUS)
      expect(connectedProvinces).toContain(GlobalUnitsModel.PROVINCE.CAPPADOCIA)
      expect(connectedProvinces).toContain(GlobalUnitsModel.PROVINCE.LYCIA_PAMPHILIA)
    })

    it("loads Cappadocia province", () => {
      const cappadocia = controller.getProvince(GlobalUnitsModel.PROVINCE.CAPPADOCIA)

      expect(cappadocia.connections.length).toEqual(6)
      expect(cappadocia.icons.length).toEqual(2)
      expect(cappadocia.gold).toEqual(3)
      expect(cappadocia.command).toEqual(GlobalUnitsModel.COMMAND.PONTICA)
      expect(cappadocia.homeland).toEqual(false)

      const connectedProvinces = controller.getProvincesAdjacentTo(GlobalUnitsModel.PROVINCE.CAPPADOCIA)
      expect(connectedProvinces).toContain(GlobalUnitsModel.PROVINCE.GALATIA)
      expect(connectedProvinces).toContain(GlobalUnitsModel.PROVINCE.ARMENIA_MINOR)
      expect(connectedProvinces).toContain(GlobalUnitsModel.PROVINCE.PONTUS)
      expect(connectedProvinces).toContain(GlobalUnitsModel.PROVINCE.ARMENIA_MAJOR)
      expect(connectedProvinces).toContain(GlobalUnitsModel.PROVINCE.COMMAGENE)
      expect(connectedProvinces).toContain(GlobalUnitsModel.PROVINCE.CILICIA)
    })

    it("loads Rhodus province", () => {
      const rhodus = controller.getProvince(GlobalUnitsModel.PROVINCE.RHODUS)

      expect(rhodus.connections.length).toEqual(4)
      expect(rhodus.icons.length).toEqual(0)
      expect(rhodus.gold).toEqual(3)
      expect(rhodus.command).toEqual(GlobalUnitsModel.COMMAND.PONTICA)
      expect(rhodus.homeland).toEqual(false)

      const connectedProvinces = controller.getProvincesAdjacentTo(GlobalUnitsModel.PROVINCE.RHODUS)
      expect(connectedProvinces).toContain(GlobalUnitsModel.PROVINCE.ACHAEA)
      expect(connectedProvinces).toContain(GlobalUnitsModel.PROVINCE.CRETA)
      expect(connectedProvinces).toContain(GlobalUnitsModel.PROVINCE.ASIA)
      expect(connectedProvinces).toContain(GlobalUnitsModel.PROVINCE.LYCIA_PAMPHILIA)
    })

    it("loads Lycia & Pamphilia province", () => {
      const lycia = controller.getProvince(GlobalUnitsModel.PROVINCE.LYCIA_PAMPHILIA)

      expect(lycia.connections.length).toEqual(5)
      expect(lycia.icons.length).toEqual(0)
      expect(lycia.gold).toEqual(3)
      expect(lycia.command).toEqual(GlobalUnitsModel.COMMAND.PONTICA)
      expect(lycia.homeland).toEqual(false)

      const connectedProvinces = controller.getProvincesAdjacentTo(GlobalUnitsModel.PROVINCE.LYCIA_PAMPHILIA)
      expect(connectedProvinces).toContain(GlobalUnitsModel.PROVINCE.RHODUS)
      expect(connectedProvinces).toContain(GlobalUnitsModel.PROVINCE.GALATIA)
      expect(connectedProvinces).toContain(GlobalUnitsModel.PROVINCE.ASIA)
      expect(connectedProvinces).toContain(GlobalUnitsModel.PROVINCE.CILICIA)
      expect(connectedProvinces).toContain(GlobalUnitsModel.PROVINCE.CYPRUS)
    })
    it("returns gold for Pontica command", () => {
      const gold = controller.getGoldForCommand(GlobalUnitsModel.COMMAND.PONTICA)
      expect(gold).toEqual(36)
    })
  })

  describe("Mapboard Tests for Aegyptus", () => {
    it("loads Creta province", () => {
      const creta = controller.getProvince(GlobalUnitsModel.PROVINCE.CRETA)

      expect(creta.connections.length).toEqual(3)
      expect(creta.icons.length).toEqual(0)
      expect(creta.gold).toEqual(2)
      expect(creta.command).toEqual(GlobalUnitsModel.COMMAND.AEGYPTUS)
      expect(creta.homeland).toEqual(false)

      const connectedProvinces = controller.getProvincesAdjacentTo(GlobalUnitsModel.PROVINCE.CRETA)
      expect(connectedProvinces).toContain(GlobalUnitsModel.PROVINCE.ACHAEA)
      expect(connectedProvinces).toContain(GlobalUnitsModel.PROVINCE.RHODUS)
      expect(connectedProvinces).toContain(GlobalUnitsModel.PROVINCE.CYRENAICA)
    })

    it("loads Cyrenaica province", () => {
      const cyrenaica = controller.getProvince(GlobalUnitsModel.PROVINCE.CYRENAICA)

      expect(cyrenaica.connections.length).toEqual(3)
      expect(cyrenaica.icons.length).toEqual(0)
      expect(cyrenaica.gold).toEqual(3)
      expect(cyrenaica.command).toEqual(GlobalUnitsModel.COMMAND.AEGYPTUS)
      expect(cyrenaica.homeland).toEqual(false)

      const connectedProvinces = controller.getProvincesAdjacentTo(GlobalUnitsModel.PROVINCE.CYRENAICA)
      expect(connectedProvinces).toContain(GlobalUnitsModel.PROVINCE.LIBYA)
      expect(connectedProvinces).toContain(GlobalUnitsModel.PROVINCE.CRETA)
      expect(connectedProvinces).toContain(GlobalUnitsModel.PROVINCE.ALEXANDRIA)
    })

    it("loads Alexandria province", () => {
      const alexandria = controller.getProvince(GlobalUnitsModel.PROVINCE.ALEXANDRIA)

      expect(alexandria.connections.length).toEqual(5)
      expect(alexandria.icons.length).toEqual(3)
      expect(alexandria.gold).toEqual(5)
      expect(alexandria.command).toEqual(GlobalUnitsModel.COMMAND.AEGYPTUS)
      expect(alexandria.homeland).toEqual(false)

      const connectedProvinces = controller.getProvincesAdjacentTo(GlobalUnitsModel.PROVINCE.ALEXANDRIA)
      expect(connectedProvinces).toContain(GlobalUnitsModel.PROVINCE.CYRENAICA)
      expect(connectedProvinces).toContain(GlobalUnitsModel.PROVINCE.CYPRUS)
      expect(connectedProvinces).toContain(GlobalUnitsModel.PROVINCE.JUDEA)
      expect(connectedProvinces).toContain(GlobalUnitsModel.PROVINCE.ARABIA)
      expect(connectedProvinces).toContain(GlobalUnitsModel.PROVINCE.ARCADIA)
    })

    it("loads Arcadia province", () => {
      const arcadia = controller.getProvince(GlobalUnitsModel.PROVINCE.ARCADIA)

      expect(arcadia.connections.length).toEqual(2)
      expect(arcadia.icons.length).toEqual(1)
      expect(arcadia.gold).toEqual(4)
      expect(arcadia.command).toEqual(GlobalUnitsModel.COMMAND.AEGYPTUS)
      expect(arcadia.homeland).toEqual(false)

      const connectedProvinces = controller.getProvincesAdjacentTo(GlobalUnitsModel.PROVINCE.ARCADIA)
      expect(connectedProvinces).toContain(GlobalUnitsModel.PROVINCE.ALEXANDRIA)
      expect(connectedProvinces).toContain(GlobalUnitsModel.PROVINCE.THEBAIS)
    })

    it("loads Thebais province", () => {
      const thebais = controller.getProvince(GlobalUnitsModel.PROVINCE.THEBAIS)

      expect(thebais.connections.length).toEqual(2)
      expect(thebais.icons.length).toEqual(1)
      expect(thebais.gold).toEqual(4)
      expect(thebais.command).toEqual(GlobalUnitsModel.COMMAND.AEGYPTUS)
      expect(thebais.homeland).toEqual(false)

      const connectedProvinces = controller.getProvincesAdjacentTo(GlobalUnitsModel.PROVINCE.THEBAIS)
      expect(connectedProvinces).toContain(GlobalUnitsModel.PROVINCE.ARCADIA)
      expect(connectedProvinces).toContain(GlobalUnitsModel.PROVINCE.AETHIOPIA)
    })

     it("loads Aethiopia province", () => {
      const thebais = controller.getProvince(GlobalUnitsModel.PROVINCE.AETHIOPIA)

      expect(thebais.connections.length).toEqual(2)
      expect(thebais.icons.length).toEqual(1)
      expect(thebais.gold).toEqual(2)
      expect(thebais.command).toEqual(GlobalUnitsModel.COMMAND.AEGYPTUS)
      expect(thebais.homeland).toEqual(false)

      const connectedProvinces = controller.getProvincesAdjacentTo(GlobalUnitsModel.PROVINCE.AETHIOPIA)
      expect(connectedProvinces).toContain(GlobalUnitsModel.HOMELAND_PROVINCE.NUBIAN)
      expect(connectedProvinces).toContain(GlobalUnitsModel.PROVINCE.THEBAIS)
    })
    it("returns gold for Aegyptus command", () => {
      const gold = controller.getGoldForCommand(GlobalUnitsModel.COMMAND.AEGYPTUS)
      expect(gold).toEqual(20)
    })
  })
})
