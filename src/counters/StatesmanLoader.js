import GlobalUnitsModel from "../model/GlobalUnitsModel"
import Statesman from "./Statesman"

export function loadStatesmen(counters) {
  let augustus = {
    name: "AUGUSTUS",
    specialAbility: GlobalUnitsModel.SPECIAL_ABILITY.CONQUEST,
    imperial: true,
    military: 2,
    administration: 5,
    popularity: 4,
    intrigue: 3,
    image: "./assets/counters/statesmen/Rome-SM-Augustus.png",
  }
  counters.set("AUGUSTUS", new Statesman(augustus))

  let agrippa = {
    name: "AGRIPPA",
    specialAbility: GlobalUnitsModel.SPECIAL_ABILITY.CANTABRIAN,
    imperial: false,
    military: 4,
    administration: 4,
    popularity: 4,
    intrigue: 3,
    image: "./assets/counters/statesmen/Rome-SM-Agrippa.png",
  }
  counters.set("AGRIPPA", new Statesman(agrippa))

  let tiberius = {
    name: "TIBERIUS",
    specialAbility: GlobalUnitsModel.SPECIAL_ABILITY.ILLYRIAN,
    imperial: true,
    military: 4,
    administration: 3,
    popularity: 2,
    intrigue: 4,
    image: "./assets/counters/statesmen/Rome-SM-Tiberius.png",
  }

  counters.set("TIBERIUS", new Statesman(tiberius))

  let drusus = {
    name: "DRUSUS",
    specialAbility: GlobalUnitsModel.SPECIAL_ABILITY.GERMAN,
    imperial: true,
    military: 4,
    administration: 4,
    popularity: 4,
    intrigue: 2,
    image: "./assets/counters/statesmen/Rome-SM-Drusus.png",
  }

  counters.set("DRUSUS", new Statesman(drusus))

  let germanicus = {
    name: "GERMANICUS",
    specialAbility: GlobalUnitsModel.SPECIAL_ABILITY.GERMAN,
    imperial: true,
    military: 3,
    administration: 4,
    popularity: 5,
    intrigue: 2,
    image: "./assets/counters/statesmen/Rome-SM-Germanicus.png",
  }
  counters.set("GERMANICUS", new Statesman(germanicus))

  let sejanus = {
    name: "SEJANUS",
    specialAbility: GlobalUnitsModel.SPECIAL_ABILITY.PREFECT,
    imperial: false,
    military: 2,
    administration: 3,
    popularity: 3,
    intrigue: 4,
    image: "./assets/counters/statesmen/Rome-SM-Sejanus.png",
  }
  counters.set("SEJANUS", new Statesman(sejanus))

  let macro = {
    name: "MACRO",
    specialAbility: GlobalUnitsModel.SPECIAL_ABILITY.PREFECT,
    imperial: false,
    military: 2,
    administration: 2,
    popularity: 2,
    intrigue: 4,
    image: "./assets/counters/statesmen/Rome-SM-Macro.png",
  }
  counters.set("MACRO", new Statesman(macro))

  let caligula = {
    name: "CALIGULA",
    specialAbility: GlobalUnitsModel.SPECIAL_ABILITY.TERROR,
    imperial: true,
    military: 1,
    administration: 1,
    popularity: 4,
    intrigue: 5,
    image: "./assets/counters/statesmen/Rome-SM-Caligula.png",
  }
  counters.set("CALIGULA", new Statesman(caligula))

  let paulinus = {
    name: "PAULINUS",
    specialAbility: GlobalUnitsModel.SPECIAL_ABILITY.MOORISH,
    imperial: false,
    military: 4,
    administration: 2,
    popularity: 3,
    intrigue: 3,
    image: "./assets/counters/statesmen/Rome-SM-Paulinus.png",
  }
  counters.set(paulinus.name, new Statesman(paulinus))

  let claudius = {
    name: "CLAUDIUS",
    specialAbility: GlobalUnitsModel.SPECIAL_ABILITY.CONQUEST,
    imperial: true,
    military: 1,
    administration: 3,
    popularity: 4,
    intrigue: 4,
    image: "./assets/counters/statesmen/Rome-SM-Claudius.png",
  }
  counters.set(claudius.name, new Statesman(claudius))

  // 10

  let plautius = {
    name: "PLAUTIUS",
    specialAbility: GlobalUnitsModel.SPECIAL_ABILITY.BRITISH,
    imperial: false,
    military: 4,
    administration: 2,
    popularity: 2,
    intrigue: 3,
    image: "./assets/counters/statesmen/Rome-SM-Plautius.png",
  }
  counters.set(plautius.name, new Statesman(plautius))

  let nero = {
    name: "NERO",
    specialAbility: GlobalUnitsModel.SPECIAL_ABILITY.USURPER,
    imperial: true,
    military: 1,
    administration: 2,
    popularity: 4,
    intrigue: 5,
    image: "./assets/counters/statesmen/Rome-SM-Nero.png",
  }
  counters.set(nero.name, new Statesman(nero))

  let corbulo = {
    name: "CORBULO",
    specialAbility: GlobalUnitsModel.SPECIAL_ABILITY.PARTHIAN,
    imperial: false,
    military: 4,
    administration: 3,
    popularity: 1,
    intrigue: 3,
    image: "./assets/counters/statesmen/Rome-SM-Corbulo.png",
  }
  counters.set(corbulo.name, new Statesman(corbulo))

  let silvanus = {
    name: "SILVANUS",
    specialAbility: GlobalUnitsModel.SPECIAL_ABILITY.SARMATIAN,
    imperial: false,
    military: 4,
    administration: 3,
    popularity: 3,
    intrigue: 3,
    image: "./assets/counters/statesmen/Rome-SM-Silvanus.png",
  }
  counters.set(silvanus.name, new Statesman(silvanus))

  let galba = {
    name: "GALBA",
    specialAbility: GlobalUnitsModel.SPECIAL_ABILITY.STALEMATE,
    imperial: false,
    military: 3,
    administration: 3,
    popularity: 1,
    intrigue: 4,
    image: "./assets/counters/statesmen/Rome-SM-Galba.png",
  }
  counters.set(galba.name, new Statesman(galba))

  let otho = {
    name: "OTHO",
    specialAbility: GlobalUnitsModel.SPECIAL_ABILITY.EVENT,
    imperial: false,
    military: 1,
    administration: 2,
    popularity: 3,
    intrigue: 4,
    image: "./assets/counters/statesmen/Rome-SM-Otho.png",
  }
  counters.set(otho.name, new Statesman(otho))

  let vitellius = {
    name: "VITELLIUS",
    specialAbility: GlobalUnitsModel.SPECIAL_ABILITY.PRESTIGE,
    imperial: false,
    military: 2,
    administration: 3,
    popularity: 3,
    intrigue: 4,
    image: "./assets/counters/statesmen/Rome-SM-Vitellius.png",
  }
  counters.set(vitellius.name, new Statesman(vitellius))

  let vespasian = {
    name: "VESPASIAN",
    specialAbility: GlobalUnitsModel.SPECIAL_ABILITY.JUDEAN,
    imperial: true,
    military: 3,
    administration: 4,
    popularity: 3,
    intrigue: 3,
    image: "./assets/counters/statesmen/Rome-SM-Vespasian.png",
  }
  counters.set(vespasian.name, new Statesman(vespasian))

  let cerialis = {
    name: "CERIALIS",
    specialAbility: GlobalUnitsModel.SPECIAL_ABILITY.GERMAN,
    imperial: false,
    military: 3,
    administration: 3,
    popularity: 4,
    intrigue: 2,
    image: "./assets/counters/statesmen/Rome-SM-Cerialis.png",
  }
  counters.set(cerialis.name, new Statesman(cerialis))

  let titus = {
    name: "TITUS",
    specialAbility: GlobalUnitsModel.SPECIAL_ABILITY.JUDEAN,
    imperial: true,
    military: 4,
    administration: 4,
    popularity: 4,
    intrigue: 4,
    image: "./assets/counters/statesmen/Rome-SM-Titus.png",
  }
  counters.set(titus.name, new Statesman(titus))

  let domitian = {
    name: "DOMITIAN",
    specialAbility: GlobalUnitsModel.SPECIAL_ABILITY.TERROR,
    imperial: true,
    military: 2,
    administration: 4,
    popularity: 5,
    intrigue: 4,
    image: "./assets/counters/statesmen/Rome-SM-Domitian.png",
  }
  counters.set(domitian.name, new Statesman(domitian))

  let agricola = {
    name: "AGRICOLA",
    specialAbility: GlobalUnitsModel.SPECIAL_ABILITY.CALEDONIAN,
    imperial: false,
    military: 4,
    administration: 4,
    popularity: 4,
    intrigue: 2,
    image: "./assets/counters/statesmen/Rome-SM-Agricola.png",
  }
  counters.set(agricola.name, new Statesman(agricola))

  let aelianus = {
    name: "AELIANUS",
    specialAbility: GlobalUnitsModel.SPECIAL_ABILITY.PREFECT,
    imperial: false,
    military: 2,
    administration: 2,
    popularity: 3,
    intrigue: 4,
    image: "./assets/counters/statesmen/Rome-SM-Aelianus.png",
  }
  counters.set(aelianus.name, new Statesman(aelianus))

  let nerva = {
    name: "NERVA",
    specialAbility: GlobalUnitsModel.SPECIAL_ABILITY.PRESTIGE,
    imperial: true,
    military: 1,
    administration: 3,
    popularity: 2,
    intrigue: 3,
    image: "./assets/counters/statesmen/Rome-SM-Nerva.png",
  }
  counters.set(nerva.name, new Statesman(nerva))

  let trajan = {
    name: "TRAJAN",
    specialAbility: GlobalUnitsModel.SPECIAL_ABILITY.CONQUEST,
    imperial: true,
    military: 5,
    administration: 5,
    popularity: 5,
    intrigue: 2,
    image: "./assets/counters/statesmen/Rome-SM-Trajan.png",
  }
  counters.set(trajan.name, new Statesman(trajan))

  let quietus = {
    name: "QUIETUS",
    specialAbility: GlobalUnitsModel.SPECIAL_ABILITY.JUDEAN,
    imperial: false,
    military: 3,
    administration: 3,
    popularity: 3,
    intrigue: 4,
    image: "./assets/counters/statesmen/Rome-SM-Quietus.png",
  }
  counters.set(quietus.name, new Statesman(quietus))

  let hadrian = {
    name: "HADRIAN",
    specialAbility: GlobalUnitsModel.SPECIAL_ABILITY.STALEMATE,
    imperial: true,
    military: 3,
    administration: 5,
    popularity: 4,
    intrigue: 4,
    image: "./assets/counters/statesmen/Rome-SM-Hadrian.png",
  }
  counters.set(hadrian.name, new Statesman(hadrian))

  let turbo = {
    name: "TURBO",
    specialAbility: GlobalUnitsModel.SPECIAL_ABILITY.MOORISH,
    imperial: false,
    military: 4,
    administration: 4,
    popularity: 3,
    intrigue: 3,
    image: "./assets/counters/statesmen/Rome-SM-Turbo.png",
  }
  counters.set(turbo.name, new Statesman(turbo))

  let arrian = {
    name: "ARRIAN",
    specialAbility: GlobalUnitsModel.SPECIAL_ABILITY.ALAN,
    imperial: false,
    military: 3,
    administration: 4,
    popularity: 3,
    intrigue: 2,
    image: "./assets/counters/statesmen/Rome-SM-Arrian.png",
  }
  counters.set(arrian.name, new Statesman(arrian))

  let antoninus = {
    name: "ANTONINUS",
    specialAbility: GlobalUnitsModel.SPECIAL_ABILITY.PRESTIGE,
    imperial: true,
    military: 1,
    administration: 4,
    popularity: 3,
    intrigue: 1,
    image: "./assets/counters/statesmen/Rome-SM-Antoninus.png",
  }
  counters.set(antoninus.name, new Statesman(antoninus))

  let marcus = {
    name: "MARCUS",
    specialAbility: GlobalUnitsModel.SPECIAL_ABILITY.SARMATIAN,
    imperial: true,
    military: 3,
    administration: 5,
    popularity: 3,
    intrigue: 1,
    image: "./assets/counters/statesmen/Rome-SM-Marcus.png",
  }
  counters.set(marcus.name, new Statesman(marcus))

  let lucius = {
    name: "LUCIUS",
    specialAbility: GlobalUnitsModel.SPECIAL_ABILITY.PRESTIGE,
    imperial: true,
    military: 2,
    administration: 2,
    popularity: 3,
    intrigue: 2,
    image: "./assets/counters/statesmen/Rome-SM-Lucius.png",
  }
  counters.set(lucius.name, new Statesman(lucius))

  let avidius = {
    name: "AVIDIUS",
    specialAbility: GlobalUnitsModel.SPECIAL_ABILITY.PARTHIAN,
    imperial: false,
    military: 4,
    administration: 3,
    popularity: 2,
    intrigue: 3,
    image: "./assets/counters/statesmen/Rome-SM-Avidius.png",
  }
  counters.set(avidius.name, new Statesman(avidius))

  let pompeianus = {
    name: "POMPEIANUS",
    specialAbility: GlobalUnitsModel.SPECIAL_ABILITY.MARCOMANNIC,
    imperial: false,
    military: 4,
    administration: 3,
    popularity: 3,
    intrigue: 2,
    image: "./assets/counters/statesmen/Rome-SM-Pompeianus.png",
  }
  counters.set(pompeianus.name, new Statesman(pompeianus))

  let commodus = {
    name: "COMMODUS",
    specialAbility: GlobalUnitsModel.SPECIAL_ABILITY.TERROR,
    imperial: true,
    military: 2,
    administration: 1,
    popularity: 4,
    intrigue: 5,
    image: "./assets/counters/statesmen/Rome-SM-Commodus.png",
  }
  counters.set(commodus.name, new Statesman(commodus))

  let laetus = {
    name: "LAETUS",
    specialAbility: GlobalUnitsModel.SPECIAL_ABILITY.PREFECT,
    imperial: false,
    military: 2,
    administration: 3,
    popularity: 2,
    intrigue: 4,
    image: "./assets/counters/statesmen/Rome-SM-Laetus.png",
  }
  counters.set(laetus.name, new Statesman(laetus))

  let pertinax = {
    name: "PERTINAX",
    specialAbility: GlobalUnitsModel.SPECIAL_ABILITY.STALEMATE,
    imperial: false,
    military: 3,
    administration: 3,
    popularity: 1,
    intrigue: 2,
    image: "./assets/counters/statesmen/Rome-SM-Pertinax.png",
  }
  counters.set(pertinax.name, new Statesman(pertinax))

  let julianus = {
    name: "JULIANUS",
    specialAbility: GlobalUnitsModel.SPECIAL_ABILITY.GERMAN,
    imperial: false,
    military: 3,
    administration: 3,
    popularity: 2,
    intrigue: 2,
    image: "./assets/counters/statesmen/Rome-SM-Julianus.png",
  }
  counters.set(julianus.name, new Statesman(julianus))

  let severus = {
    name: "SEVERUS",
    specialAbility: GlobalUnitsModel.SPECIAL_ABILITY.PARTHIAN,
    imperial: true,
    military: 4,
    administration: 4,
    popularity: 5,
    intrigue: 4,
    image: "./assets/counters/statesmen/Rome-SM-Cerialis.png",
  }
  counters.set(severus.name, new Statesman(severus))

  let niger = {
    name: "NIGER",
    specialAbility: GlobalUnitsModel.SPECIAL_ABILITY.EVENT,
    imperial: false,
    military: 3,
    administration: 3,
    popularity: 4,
    intrigue: 3,
    image: "./assets/counters/statesmen/Rome-SM-Niger.png",
  }
  counters.set(niger.name, new Statesman(niger))
}
