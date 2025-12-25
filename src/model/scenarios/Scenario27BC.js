import GlobalGameState from "../GlobalGameState"
import GlobalUnitsModel from "../GlobalUnitsModel"
import BaseScenario from "./BaseScenario"

export default class Scenario27BC extends BaseScenario {
  constructor(controller) {
    super(controller, GlobalUnitsModel.SCENARIO.BC_27)
    GlobalGameState.caesar = GlobalUnitsModel.STATESMAN.AUGUSTUS
    GlobalGameState.consul = GlobalUnitsModel.STATESMAN.AGRIPPA
  }

  setUpWars() {
    console.log("SCENARION 27BC...setUpWars")

    GlobalGameState.warsBox.push({ type: GlobalUnitsModel.WAR_BOX_TYPE.LEADER, name: GlobalUnitsModel.LEADER.ARMINIUS })
    GlobalGameState.warsBox.push({ type: GlobalUnitsModel.WAR_BOX_TYPE.LEADER, name: GlobalUnitsModel.LEADER.BATO })

    // ...etc TODO
  }

  setTreasuryTrackValues() {
    GlobalGameState.treasuryValues = {
      gold: 44,
      prestige: 19,
      pay: 29,
      unrest: 7,
      gameTurn: 1,
      version: new Date(),
    }
  }

  setUpProvinces() {
    console.log("SCENARION 27BC...setUpProvinces")

    this.controller.addCountersToProvinces([
      {
        province: GlobalUnitsModel.PROVINCE.BRITANNIA_INFERIOR,
        counters: [
          { name: GlobalUnitsModel.PROVINCE_TYPE.BARBARIAN },
          // { name: GlobalUnitsModel.WAR.BRITISH_6 },
          // { name: GlobalUnitsModel.ROMAN_UNIT.II_AUGUSTA },
          // {
          //   name: GlobalUnitsModel.ROMAN_UNIT.XIV_GEMINA,
          //   veteran: true,
          // },
          // {
          //   name: GlobalUnitsModel.ROMAN_UNIT_TYPE.PRAETORIAN_GUARD,
          //   veteran: true,
          // },
          // {
          //   name: GlobalUnitsModel.ROMAN_UNIT.BRITISH_FLEET,
          //   veteran: true,
          // },
          // { name: GlobalUnitsModel.LEADER.BOUDICCA },
        ],
      },
      {
        province: GlobalUnitsModel.PROVINCE.BRITANNIA_SUPERIOR,
        counters: [
          { name: GlobalUnitsModel.PROVINCE_TYPE.BARBARIAN },
          { name: GlobalUnitsModel.WAR.BRITISH_6 },
          { name: GlobalUnitsModel.ROMAN_UNIT.II_AUGUSTA },
          {
            name: GlobalUnitsModel.ROMAN_UNIT.XIV_GEMINA,
            veteran: true,
          },
          {
            name: GlobalUnitsModel.ROMAN_UNIT_TYPE.PRAETORIAN_GUARD,
            veteran: true,
          },
          {
            name: GlobalUnitsModel.ROMAN_UNIT.BRITISH_FLEET,
            veteran: true,
          },
          { name: GlobalUnitsModel.LEADER.BOUDICCA },
        ],
      },
      {
        province: GlobalUnitsModel.PROVINCE.HIBERNIA,
        counters: [{ name: GlobalUnitsModel.PROVINCE_TYPE.BARBARIAN }],
      },

      {
        province: GlobalUnitsModel.HOMELAND_PROVINCE.BRITISH,
        counters: [{ name: GlobalUnitsModel.LEADER.BOUDICCA }],
      },

      {
        province: GlobalUnitsModel.HOMELAND_PROVINCE.CALEDONIAN,
        counters: [{ name: GlobalUnitsModel.LEADER.CARATACUS }],
      },
      {
        province: GlobalUnitsModel.PROVINCE.FRISIA,
        counters: [
          { name: GlobalUnitsModel.PROVINCE_TYPE.ALLIED },
          { name: GlobalUnitsModel.WAR.BRITISH_6 },
          { name: GlobalUnitsModel.ROMAN_UNIT.II_AUGUSTA },
          {
            name: GlobalUnitsModel.ROMAN_UNIT.XIV_GEMINA,
            veteran: true,
          },
          {
            name: GlobalUnitsModel.ROMAN_UNIT_TYPE.PRAETORIAN_GUARD,
            veteran: true,
          },
          {
            name: GlobalUnitsModel.ROMAN_UNIT.BRITISH_FLEET,
            veteran: true,
          },
          { name: GlobalUnitsModel.LEADER.BOUDICCA },
        ],
      },
      {
        province: GlobalUnitsModel.HOMELAND_PROVINCE.GERMAN,
        counters: [{ name: GlobalUnitsModel.LEADER.ARMINIUS }],
      },

      {
        province: GlobalUnitsModel.HOMELAND_PROVINCE.SAXON,
        counters: [{ name: GlobalUnitsModel.LEADER.BATO }],
      },
      {
        province: GlobalUnitsModel.HOMELAND_PROVINCE.FRANKISH,
        counters: [{ name: GlobalUnitsModel.WAR.FRANKISH_11 }],
      },
      {
        province: GlobalUnitsModel.HOMELAND_PROVINCE.BURGUNDIAN,
        counters: [{ name: GlobalUnitsModel.WAR.BURGUNDIAN_11 }],
      },
      {
        province: GlobalUnitsModel.HOMELAND_PROVINCE.ALAMANNIC,
        counters: [{ name: GlobalUnitsModel.WAR.ALAMANNIC_10 }, { name: GlobalUnitsModel.LEADER.CHROCUS }],
      },

      {
        province: GlobalUnitsModel.HOMELAND_PROVINCE.MARCOMANNIC,
        counters: [
          { name: GlobalUnitsModel.WAR.MARCOMANNIC_11 },
          { name: GlobalUnitsModel.WAR.MARCOMANNIC_13 },
          { name: GlobalUnitsModel.LEADER.BALLOMAR },
        ],
      },
      {
        province: GlobalUnitsModel.HOMELAND_PROVINCE.ILLYRIAN,
        counters: [
          { name: GlobalUnitsModel.WAR.ILLYRIAN_10 },
          { name: GlobalUnitsModel.WAR.ILLYRIAN_12 },
          { name: GlobalUnitsModel.LEADER.BATO },
        ],
      },
      {
        province: GlobalUnitsModel.HOMELAND_PROVINCE.VANDAL,
        counters: [{ name: GlobalUnitsModel.WAR.VANDAL_9 }],
      },

      {
        province: GlobalUnitsModel.HOMELAND_PROVINCE.SARMATIAN,
        counters: [{ name: GlobalUnitsModel.WAR.SARMATIAN_10 }],
      },

      {
        province: GlobalUnitsModel.HOMELAND_PROVINCE.DACIAN,
        counters: [{ name: GlobalUnitsModel.LEADER.DECEBALUS }, { name: GlobalUnitsModel.WAR.DACIAN_11 }],
      },
      {
        province: GlobalUnitsModel.HOMELAND_PROVINCE.GOTHIC,
        counters: [{ name: GlobalUnitsModel.WAR.GOTHIC_13 }],
      },

      {
        province: GlobalUnitsModel.HOMELAND_PROVINCE.ALAN,
        counters: [{ name: GlobalUnitsModel.WAR.ALAN_9 }],
      },
      {
        province: GlobalUnitsModel.HOMELAND_PROVINCE.PARTHIAN,
        counters: [{ name: GlobalUnitsModel.WAR.PARTHIAN_10 }, { name: GlobalUnitsModel.LEADER.VOLOGASES }],
      },
      {
        province: GlobalUnitsModel.HOMELAND_PROVINCE.PERSIAN,
        counters: [{ name: GlobalUnitsModel.WAR.PERSIAN_11 }],
      },
      {
        province: GlobalUnitsModel.HOMELAND_PROVINCE.PALMYRENE,
        counters: [{ name: GlobalUnitsModel.WAR.PALMYRENE_14 }, { name: GlobalUnitsModel.LEADER.ZENOBIA }],
      },
      {
        province: GlobalUnitsModel.HOMELAND_PROVINCE.JUDEAN,
        counters: [{ name: GlobalUnitsModel.WAR.JUDEAN_6 }, { name: GlobalUnitsModel.LEADER.SIMEON }],
      },
      {
        province: GlobalUnitsModel.HOMELAND_PROVINCE.NUBIAN,
        counters: [{ name: GlobalUnitsModel.WAR.NUBIAN_4 }],
      },
      {
        province: GlobalUnitsModel.HOMELAND_PROVINCE.MOORISH,
        counters: [{ name: GlobalUnitsModel.LEADER.TACFARINUS }],
      },
      {
        province: GlobalUnitsModel.HOMELAND_PROVINCE.CANTABRIAN,
        counters: [{ name: GlobalUnitsModel.WAR.CALEDONIAN_5 }],
      },
      {
        province: GlobalUnitsModel.PROVINCE.GERMANIA_INFERIOR,
        counters: [
          { name: GlobalUnitsModel.PROVINCE_TYPE.ALLIED },
          { name: GlobalUnitsModel.WAR.BRITISH_6 },
          { name: GlobalUnitsModel.ROMAN_UNIT.III_CYRENAICA },
        ],
      },
      {
        province: GlobalUnitsModel.PROVINCE.GERMANIA_MAGNA,
        counters: [
          { name: GlobalUnitsModel.PROVINCE_TYPE.VETERAN_ALLIED },
          { name: GlobalUnitsModel.WAR.GERMAN_10 },
          { name: GlobalUnitsModel.ROMAN_UNIT.IV_FLAVIA },
        ],
      },
        {
        province: GlobalUnitsModel.PROVINCE.BELGICA,
        counters: [
          { name: GlobalUnitsModel.PROVINCE_TYPE.VETERAN_ALLIED },
          { name: GlobalUnitsModel.WAR.GERMAN_10 },
          { name: GlobalUnitsModel.ROMAN_UNIT.IV_FLAVIA },
           { name: GlobalUnitsModel.ROMAN_UNIT.II_AUGUSTA },
          {
            name: GlobalUnitsModel.ROMAN_UNIT.III_GALLICA,
            veteran: true,
          },
          {
            name: GlobalUnitsModel.ROMAN_UNIT_TYPE.PRAETORIAN_GUARD,
            veteran: true,
          },
        ],
      },
          {
        province: GlobalUnitsModel.PROVINCE.LUGDUNENSIS,
        counters: [
          { name: GlobalUnitsModel.PROVINCE_TYPE.VETERAN_ALLIED },
          { name: GlobalUnitsModel.WAR.GERMAN_10 },
          { name: GlobalUnitsModel.ROMAN_UNIT.IV_FLAVIA },
        ],
      },
           {
        province: GlobalUnitsModel.PROVINCE.GERMANIA_SUPERIOR,
        counters: [
          { name: GlobalUnitsModel.PROVINCE_TYPE.VETERAN_ALLIED },
          { name: GlobalUnitsModel.WAR.GERMAN_10 },
          { name: GlobalUnitsModel.ROMAN_UNIT.IV_FLAVIA },
        ],
      },
    ])
  }
}
