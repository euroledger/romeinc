import GlobalUnitsModel from "../model/GlobalUnitsModel"
import Statesman from "./Statesman"

export function loadStatesmen(counters) {
  let augustus = {
    name: GlobalUnitsModel.STATESMAN.AUGUSTUS,
    specialAbility: GlobalUnitsModel.SPECIAL_ABILITY.CONQUEST,
    imperial: true,
    military: 2,
    administration: 5,
    popularity: 4,
    intrigue: 3,
    image: "/images/counters/statesmen/Rome-SM-Augustus.png",
    scenario: GlobalUnitsModel.SCENARIO.BC_27,
  }
  counters.set(GlobalUnitsModel.STATESMAN.AUGUSTUS, new Statesman(augustus))

  let agrippa = {
    name: GlobalUnitsModel.STATESMAN.AGRIPPA,
    specialAbility: GlobalUnitsModel.SPECIAL_ABILITY.CANTABRIAN,
    imperial: false,
    military: 4,
    administration: 4,
    popularity: 4,
    intrigue: 3,
    image: "/images/counters/statesmen/Rome-SM-Agrippa.png",
    scenario: GlobalUnitsModel.SCENARIO.BC_27,
  }
  counters.set(GlobalUnitsModel.STATESMAN.AGRIPPA, new Statesman(agrippa))

  let tiberius = {
    name: GlobalUnitsModel.STATESMAN.TIBERIUS,
    specialAbility: GlobalUnitsModel.SPECIAL_ABILITY.ILLYRIAN,
    imperial: true,
    military: 4,
    administration: 3,
    popularity: 2,
    intrigue: 4,
    image: "/images/counters/statesmen/Rome-SM-Tiberius.png",
    scenario: GlobalUnitsModel.SCENARIO.BC_27,
  }

  counters.set(GlobalUnitsModel.STATESMAN.TIBERIUS, new Statesman(tiberius))

  let drusus = {
    name: GlobalUnitsModel.STATESMAN.DRUSUS,
    specialAbility: GlobalUnitsModel.SPECIAL_ABILITY.GERMAN,
    imperial: true,
    military: 4,
    administration: 4,
    popularity: 4,
    intrigue: 2,
    image: "/images/counters/statesmen/Rome-SM-Drusus.png",
    scenario: GlobalUnitsModel.SCENARIO.BC_27,
  }

  counters.set(GlobalUnitsModel.STATESMAN.DRUSUS, new Statesman(drusus))

  let germanicus = {
    name: GlobalUnitsModel.STATESMAN.GERMANICUS,
    specialAbility: GlobalUnitsModel.SPECIAL_ABILITY.GERMAN,
    imperial: true,
    military: 3,
    administration: 4,
    popularity: 5,
    intrigue: 2,
    image: "/images/counters/statesmen/Rome-SM-Germanicus.png",
    scenario: GlobalUnitsModel.SCENARIO.BC_27,
  }
  counters.set(GlobalUnitsModel.STATESMAN.GERMANICUS, new Statesman(germanicus))

  let sejanus = {
    name: GlobalUnitsModel.STATESMAN.SEJANUS,
    specialAbility: GlobalUnitsModel.SPECIAL_ABILITY.PREFECT,
    imperial: false,
    military: 2,
    administration: 3,
    popularity: 3,
    intrigue: 4,
    image: "/images/counters/statesmen/Rome-SM-Sejanus.png",
    scenario: GlobalUnitsModel.SCENARIO.BC_27,
  }
  counters.set(GlobalUnitsModel.STATESMAN.SEJANUS, new Statesman(sejanus))

  let macro = {
    name: GlobalUnitsModel.STATESMAN.MACRO,
    specialAbility: GlobalUnitsModel.SPECIAL_ABILITY.PREFECT,
    imperial: false,
    military: 2,
    administration: 2,
    popularity: 2,
    intrigue: 4,
    image: "/images/counters/statesmen/Rome-SM-Macro.png",
    scenario: GlobalUnitsModel.SCENARIO.BC_27,
  }
  counters.set(GlobalUnitsModel.STATESMAN.MACRO, new Statesman(macro))

  let caligula = {
    name: GlobalUnitsModel.STATESMAN.CALIGULA,
    specialAbility: GlobalUnitsModel.SPECIAL_ABILITY.TERROR,
    imperial: true,
    military: 1,
    administration: 1,
    popularity: 4,
    intrigue: 5,
    image: "/images/counters/statesmen/Rome-SM-Caligula.png",
    scenario: GlobalUnitsModel.SCENARIO.BC_27,
  }
  counters.set(GlobalUnitsModel.STATESMAN.CALIGULA, new Statesman(caligula))

  let paulinus = {
    name: GlobalUnitsModel.STATESMAN.PAULINUS,
    specialAbility: GlobalUnitsModel.SPECIAL_ABILITY.MOORISH,
    imperial: false,
    military: 4,
    administration: 2,
    popularity: 3,
    intrigue: 3,
    image: "/images/counters/statesmen/Rome-SM-Paulinus.png",
    scenario: GlobalUnitsModel.SCENARIO.BC_27,
  }
  counters.set(paulinus.name, new Statesman(paulinus))

  let claudius = {
    name: GlobalUnitsModel.STATESMAN.CLAUDIUS,
    specialAbility: GlobalUnitsModel.SPECIAL_ABILITY.CONQUEST,
    imperial: true,
    military: 1,
    administration: 3,
    popularity: 4,
    intrigue: 4,
    image: "/images/counters/statesmen/Rome-SM-Claudius.png",
    scenario: GlobalUnitsModel.SCENARIO.BC_27,
  }
  counters.set(claudius.name, new Statesman(claudius))

  // 10

  let plautius = {
    name: GlobalUnitsModel.STATESMAN.PLAUTIUS,
    specialAbility: GlobalUnitsModel.SPECIAL_ABILITY.BRITISH,
    imperial: false,
    military: 4,
    administration: 2,
    popularity: 2,
    intrigue: 3,
    image: "/images/counters/statesmen/Rome-SM-Plautius.png",
    scenario: GlobalUnitsModel.SCENARIO.BC_27,
  }
  counters.set(plautius.name, new Statesman(plautius))

  let nero = {
    name: GlobalUnitsModel.STATESMAN.NERO,
    specialAbility: GlobalUnitsModel.SPECIAL_ABILITY.USURPER,
    imperial: true,
    military: 1,
    administration: 2,
    popularity: 4,
    intrigue: 5,
    image: "/images/counters/statesmen/Rome-SM-Nero.png",
    scenario: GlobalUnitsModel.SCENARIO.BC_27,
  }
  counters.set(nero.name, new Statesman(nero))

  let corbulo = {
    name: GlobalUnitsModel.STATESMAN.CORBULO,
    specialAbility: GlobalUnitsModel.SPECIAL_ABILITY.PARTHIAN,
    imperial: false,
    military: 4,
    administration: 3,
    popularity: 1,
    intrigue: 3,
    image: "/images/counters/statesmen/Rome-SM-Corbulo.png",
    scenario: GlobalUnitsModel.SCENARIO.BC_27,
  }
  counters.set(corbulo.name, new Statesman(corbulo))

  let silvanus = {
    name: GlobalUnitsModel.STATESMAN.SILVANUS,
    specialAbility: GlobalUnitsModel.SPECIAL_ABILITY.SARMATIAN,
    imperial: false,
    military: 4,
    administration: 3,
    popularity: 3,
    intrigue: 3,
    image: "/images/counters/statesmen/Rome-SM-Silvanus.png",
    scenario: GlobalUnitsModel.SCENARIO.BC_27,
  }
  counters.set(silvanus.name, new Statesman(silvanus))

  let galba = {
    name: GlobalUnitsModel.STATESMAN.GALBA,
    specialAbility: GlobalUnitsModel.SPECIAL_ABILITY.STALEMATE,
    imperial: false,
    military: 3,
    administration: 3,
    popularity: 1,
    intrigue: 4,
    image: "/images/counters/statesmen/Rome-SM-Galba.png",
    scenario: GlobalUnitsModel.SCENARIO.BC_27,
  }
  counters.set(galba.name, new Statesman(galba))

  let otho = {
    name: GlobalUnitsModel.STATESMAN.OTHO,
    specialAbility: GlobalUnitsModel.SPECIAL_ABILITY.EVENT,
    imperial: false,
    military: 1,
    administration: 2,
    popularity: 3,
    intrigue: 4,
    image: "/images/counters/statesmen/Rome-SM-Otho.png",
    scenario: GlobalUnitsModel.SCENARIO.BC_27,
  }
  counters.set(otho.name, new Statesman(otho))

  let vitellius = {
    name: GlobalUnitsModel.STATESMAN.VITELLIUS,
    specialAbility: GlobalUnitsModel.SPECIAL_ABILITY.PRESTIGE,
    imperial: false,
    military: 2,
    administration: 3,
    popularity: 3,
    intrigue: 4,
    image: "/images/counters/statesmen/Rome-SM-Vitellius.png",
    scenario: GlobalUnitsModel.SCENARIO.BC_27,
  }
  counters.set(vitellius.name, new Statesman(vitellius))

  let vespasian = {
    name: GlobalUnitsModel.STATESMAN.VESPASIAN,
    specialAbility: GlobalUnitsModel.SPECIAL_ABILITY.JUDEAN,
    imperial: true,
    military: 3,
    administration: 4,
    popularity: 3,
    intrigue: 3,
    image: "/images/counters/statesmen/Rome-SM-Vespasian.png",
    scenario: GlobalUnitsModel.SCENARIO.BC_27,
  }
  counters.set(vespasian.name, new Statesman(vespasian))

  let cerialis = {
    name: GlobalUnitsModel.STATESMAN.CERIALIS,
    specialAbility: GlobalUnitsModel.SPECIAL_ABILITY.GERMAN,
    imperial: false,
    military: 3,
    administration: 3,
    popularity: 4,
    intrigue: 2,
    image: "/images/counters/statesmen/Rome-SM-Cerialis.png",
    scenario: GlobalUnitsModel.SCENARIO.AD_70,
  }
  counters.set(cerialis.name, new Statesman(cerialis))

  let titus = {
    name: GlobalUnitsModel.STATESMAN.TITUS,
    specialAbility: GlobalUnitsModel.SPECIAL_ABILITY.JUDEAN,
    imperial: true,
    military: 4,
    administration: 4,
    popularity: 4,
    intrigue: 4,
    image: "/images/counters/statesmen/Rome-SM-Titus.png",
    scenario: GlobalUnitsModel.SCENARIO.AD_70,
  }
  counters.set(titus.name, new Statesman(titus))

  let domitian = {
    name: GlobalUnitsModel.STATESMAN.DOMITIAN,
    specialAbility: GlobalUnitsModel.SPECIAL_ABILITY.TERROR,
    imperial: true,
    military: 2,
    administration: 4,
    popularity: 5,
    intrigue: 4,
    image: "/images/counters/statesmen/Rome-SM-Domitian.png",
    scenario: GlobalUnitsModel.SCENARIO.AD_70,
  }
  counters.set(domitian.name, new Statesman(domitian))

  let agricola = {
    name: GlobalUnitsModel.STATESMAN.AGRICOLA,
    specialAbility: GlobalUnitsModel.SPECIAL_ABILITY.CALEDONIAN,
    imperial: false,
    military: 4,
    administration: 4,
    popularity: 4,
    intrigue: 2,
    image: "/images/counters/statesmen/Rome-SM-Agricola.png",
    scenario: GlobalUnitsModel.SCENARIO.AD_70,
  }
  counters.set(agricola.name, new Statesman(agricola))

  let aelianus = {
    name: GlobalUnitsModel.STATESMAN.AELIANUS,
    specialAbility: GlobalUnitsModel.SPECIAL_ABILITY.PREFECT,
    imperial: false,
    military: 2,
    administration: 2,
    popularity: 3,
    intrigue: 4,
    image: "/images/counters/statesmen/Rome-SM-Aelianus.png",
    scenario: GlobalUnitsModel.SCENARIO.AD_70,
  }
  counters.set(aelianus.name, new Statesman(aelianus))

  let nerva = {
    name: GlobalUnitsModel.STATESMAN.NERVA,
    specialAbility: GlobalUnitsModel.SPECIAL_ABILITY.PRESTIGE,
    imperial: true,
    military: 1,
    administration: 3,
    popularity: 2,
    intrigue: 3,
    image: "/images/counters/statesmen/Rome-SM-Nerva.png",
    scenario: GlobalUnitsModel.SCENARIO.AD_70,
  }
  counters.set(nerva.name, new Statesman(nerva))

  let trajan = {
    name: GlobalUnitsModel.STATESMAN.TRAJAN,
    specialAbility: GlobalUnitsModel.SPECIAL_ABILITY.CONQUEST,
    imperial: true,
    military: 5,
    administration: 5,
    popularity: 5,
    intrigue: 2,
    image: "/images/counters/statesmen/Rome-SM-Trajan.png",
    scenario: GlobalUnitsModel.SCENARIO.AD_70,
  }
  counters.set(trajan.name, new Statesman(trajan))

  let quietus = {
    name: GlobalUnitsModel.STATESMAN.QUIETUS,
    specialAbility: GlobalUnitsModel.SPECIAL_ABILITY.JUDEAN,
    imperial: false,
    military: 3,
    administration: 3,
    popularity: 3,
    intrigue: 4,
    image: "/images/counters/statesmen/Rome-SM-Queitus.png",
    scenario: GlobalUnitsModel.SCENARIO.AD_70,
  }
  counters.set(quietus.name, new Statesman(quietus))

  let hadrian = {
    name: GlobalUnitsModel.STATESMAN.HADRIAN,
    specialAbility: GlobalUnitsModel.SPECIAL_ABILITY.STALEMATE,
    imperial: true,
    military: 3,
    administration: 5,
    popularity: 4,
    intrigue: 4,
    image: "/images/counters/statesmen/Rome-SM-Hadrian.png",
    scenario: GlobalUnitsModel.SCENARIO.AD_70,
  }
  counters.set(hadrian.name, new Statesman(hadrian))

  let turbo = {
    name: GlobalUnitsModel.STATESMAN.TURBO,
    specialAbility: GlobalUnitsModel.SPECIAL_ABILITY.MOORISH,
    imperial: false,
    military: 4,
    administration: 4,
    popularity: 3,
    intrigue: 3,
    image: "/images/counters/statesmen/Rome-SM-Turbo.png",
    scenario: GlobalUnitsModel.SCENARIO.AD_70,
  }
  counters.set(turbo.name, new Statesman(turbo))

  let arrian = {
    name: GlobalUnitsModel.STATESMAN.ARRIAN,
    specialAbility: GlobalUnitsModel.SPECIAL_ABILITY.ALAN,
    imperial: false,
    military: 3,
    administration: 4,
    popularity: 3,
    intrigue: 2,
    image: "/images/counters/statesmen/Rome-SM-Arrian.png",
    scenario: GlobalUnitsModel.SCENARIO.AD_70,
  }
  counters.set(arrian.name, new Statesman(arrian))

  let antoninus = {
    name: GlobalUnitsModel.STATESMAN.ANTONINUS,
    specialAbility: GlobalUnitsModel.SPECIAL_ABILITY.PRESTIGE,
    imperial: true,
    military: 1,
    administration: 4,
    popularity: 3,
    intrigue: 1,
    image: "/images/counters/statesmen/Rome-SM-Antoninus.png",
    scenario: GlobalUnitsModel.SCENARIO.AD_70,
  }
  counters.set(antoninus.name, new Statesman(antoninus))

  let marcus = {
    name: GlobalUnitsModel.STATESMAN.MARCUS,
    specialAbility: GlobalUnitsModel.SPECIAL_ABILITY.SARMATIAN,
    imperial: true,
    military: 3,
    administration: 5,
    popularity: 3,
    intrigue: 1,
    image: "/images/counters/statesmen/Rome-SM-Marcus.png",
    scenario: GlobalUnitsModel.SCENARIO.AD_138,
  }
  counters.set(marcus.name, new Statesman(marcus))

  let lucius = {
    name: GlobalUnitsModel.STATESMAN.LUCIUS,
    specialAbility: GlobalUnitsModel.SPECIAL_ABILITY.PRESTIGE,
    imperial: true,
    military: 2,
    administration: 2,
    popularity: 3,
    intrigue: 2,
    image: "/images/counters/statesmen/Rome-SM-Lucius.png",
    scenario: GlobalUnitsModel.SCENARIO.AD_138,
  }
  counters.set(lucius.name, new Statesman(lucius))

  let avidius = {
    name: GlobalUnitsModel.STATESMAN.AVIDIUS,
    specialAbility: GlobalUnitsModel.SPECIAL_ABILITY.PARTHIAN,
    imperial: false,
    military: 4,
    administration: 3,
    popularity: 2,
    intrigue: 3,
    image: "/images/counters/statesmen/Rome-SM-Avidius.png",
    scenario: GlobalUnitsModel.SCENARIO.AD_138,
  }
  counters.set(avidius.name, new Statesman(avidius))

  let pompeianus = {
    name: GlobalUnitsModel.STATESMAN.POMPEIANUS,
    specialAbility: GlobalUnitsModel.SPECIAL_ABILITY.MARCOMANNIC,
    imperial: false,
    military: 4,
    administration: 3,
    popularity: 3,
    intrigue: 2,
    image: "/images/counters/statesmen/Rome-SM-Pompeianus.png",
    scenario: GlobalUnitsModel.SCENARIO.AD_138,
  }
  counters.set(pompeianus.name, new Statesman(pompeianus))

  let commodus = {
    name: GlobalUnitsModel.STATESMAN.COMMODUS,
    specialAbility: GlobalUnitsModel.SPECIAL_ABILITY.TERROR,
    imperial: true,
    military: 2,
    administration: 1,
    popularity: 4,
    intrigue: 5,
    image: "/images/counters/statesmen/Rome-SM-Commodus.png",
    scenario: GlobalUnitsModel.SCENARIO.AD_138,
  }
  counters.set(commodus.name, new Statesman(commodus))

  let laetus = {
    name: GlobalUnitsModel.STATESMAN.LAETUS,
    specialAbility: GlobalUnitsModel.SPECIAL_ABILITY.PREFECT,
    imperial: false,
    military: 2,
    administration: 3,
    popularity: 2,
    intrigue: 4,
    image: "/images/counters/statesmen/Rome-SM-Laetus.png",
    scenario: GlobalUnitsModel.SCENARIO.AD_138,
  }
  counters.set(laetus.name, new Statesman(laetus))

  let pertinax = {
    name: GlobalUnitsModel.STATESMAN.PERTINAX,
    specialAbility: GlobalUnitsModel.SPECIAL_ABILITY.STALEMATE,
    imperial: false,
    military: 3,
    administration: 3,
    popularity: 1,
    intrigue: 2,
    image: "/images/counters/statesmen/Rome-SM-Pertinax.png",
    scenario: GlobalUnitsModel.SCENARIO.AD_138,
  }
  counters.set(pertinax.name, new Statesman(pertinax))

  let julianus = {
    name: GlobalUnitsModel.STATESMAN.JULIANUS,
    specialAbility: GlobalUnitsModel.SPECIAL_ABILITY.GERMAN,
    imperial: false,
    military: 3,
    administration: 3,
    popularity: 2,
    intrigue: 2,
    image: "/images/counters/statesmen/Rome-SM-Julianus.png",
    scenario: GlobalUnitsModel.SCENARIO.AD_138,
  }
  counters.set(julianus.name, new Statesman(julianus))

  let severus = {
    name: GlobalUnitsModel.STATESMAN.SEVERUS,
    specialAbility: GlobalUnitsModel.SPECIAL_ABILITY.PARTHIAN,
    imperial: true,
    military: 4,
    administration: 4,
    popularity: 5,
    intrigue: 4,
    image: "/images/counters/statesmen/Rome-SM-Cerialis.png",
    scenario: GlobalUnitsModel.SCENARIO.AD_138,
  }
  counters.set(severus.name, new Statesman(severus))

  let niger = {
    name: GlobalUnitsModel.STATESMAN.NIGER,
    specialAbility: GlobalUnitsModel.SPECIAL_ABILITY.EVENT,
    imperial: false,
    military: 3,
    administration: 3,
    popularity: 4,
    intrigue: 3,
    image: "/images/counters/statesmen/Rome-SM-Niger.png",
    scenario: GlobalUnitsModel.SCENARIO.AD_138,
  }
  counters.set(niger.name, new Statesman(niger))

  let albinus = {
    name: GlobalUnitsModel.STATESMAN.ALBINUS,
    specialAbility: GlobalUnitsModel.SPECIAL_ABILITY.EVENT,
    imperial: false,
    military: 3,
    administration: 3,
    popularity: 3,
    intrigue: 2,
    image: "/images/counters/statesmen/Rome-SM-Albinus.png",
    scenario: GlobalUnitsModel.SCENARIO.AD_138,
  }
  counters.set(albinus.name, new Statesman(albinus))

  let plautianus = {
    name: GlobalUnitsModel.STATESMAN.PLAUTIANUS,
    specialAbility: GlobalUnitsModel.SPECIAL_ABILITY.PREFECT,
    imperial: false,
    military: 2,
    administration: 3,
    popularity: 3,
    intrigue: 3,
    image: "/images/counters/statesmen/Rome-SM-Plautianus.png",
    scenario: GlobalUnitsModel.SCENARIO.AD_138,
  }
  counters.set(plautianus.name, new Statesman(plautianus))

  let caracalla = {
    name: GlobalUnitsModel.STATESMAN.CARACALLA,
    specialAbility: GlobalUnitsModel.SPECIAL_ABILITY.TERROR,
    imperial: true,
    military: 3,
    administration: 4,
    popularity: 4,
    intrigue: 5,
    image: "/images/counters/statesmen/Rome-SM-Caracalla.png",
    scenario: GlobalUnitsModel.SCENARIO.AD_138,
  }
  counters.set(caracalla.name, new Statesman(caracalla))

  let macrinus = {
    name: GlobalUnitsModel.STATESMAN.MACRINUS,
    specialAbility: GlobalUnitsModel.SPECIAL_ABILITY.PREFECT,
    imperial: false,
    military: 2,
    administration: 4,
    popularity: 2,
    intrigue: 4,
    image: "/images/counters/statesmen/Rome-SM-Macrinus.png",
    scenario: GlobalUnitsModel.SCENARIO.AD_138,
  }
  counters.set(macrinus.name, new Statesman(macrinus))

  let elagabalus = {
    name: GlobalUnitsModel.STATESMAN.ELAGABALUS,
    specialAbility: GlobalUnitsModel.SPECIAL_ABILITY.EVENT,
    imperial: true,
    military: 1,
    administration: 1,
    popularity: 1,
    intrigue: 4,
    image: "/images/counters/statesmen/Rome-SM-Elagabalus.png",
    scenario: GlobalUnitsModel.SCENARIO.AD_138,
  }
  counters.set(elagabalus.name, new Statesman(elagabalus))

  let alexander = {
    name: GlobalUnitsModel.STATESMAN.ALEXANDER,
    specialAbility: GlobalUnitsModel.SPECIAL_ABILITY.PRESTIGE,
    imperial: true,
    military: 2,
    administration: 3,
    popularity: 2,
    intrigue: 1,
    image: "/images/counters/statesmen/Rome-SM-Alexander.png",
    scenario: GlobalUnitsModel.SCENARIO.AD_138,
  }
  counters.set(alexander.name, new Statesman(alexander))

  let maximinus = {
    name: GlobalUnitsModel.STATESMAN.MAXIMINUS,
    specialAbility: GlobalUnitsModel.SPECIAL_ABILITY.ALAMANNIC,
    imperial: false,
    military: 4,
    administration: 1,
    popularity: 4,
    intrigue: 4,
    image: "/images/counters/statesmen/Rome-SM-Maximinus.png",
    scenario: GlobalUnitsModel.SCENARIO.AD_222,
  }
  counters.set(maximinus.name, new Statesman(maximinus))

  let gordian = {
    name: GlobalUnitsModel.STATESMAN.GORDIAN,
    specialAbility: GlobalUnitsModel.SPECIAL_ABILITY.PRESTIGE,
    imperial: true,
    military: 1,
    administration: 3,
    popularity: 2,
    intrigue: 1,
    image: "/images/counters/statesmen/Rome-SM-Gordian.png",
    scenario: GlobalUnitsModel.SCENARIO.AD_222,
  }
  counters.set(gordian.name, new Statesman(gordian))

  let timesitheus = {
    name: GlobalUnitsModel.STATESMAN.TIMESITHEUS,
    specialAbility: GlobalUnitsModel.SPECIAL_ABILITY.PERSIAN,
    imperial: false,
    military: 4,
    administration: 4,
    popularity: 3,
    intrigue: 2,
    image: "/images/counters/statesmen/Rome-SM-Timesitheus.png",
    scenario: GlobalUnitsModel.SCENARIO.AD_222,
  }
  counters.set(timesitheus.name, new Statesman(timesitheus))

  let philip = {
    name: GlobalUnitsModel.STATESMAN.PHILIP,
    specialAbility: GlobalUnitsModel.SPECIAL_ABILITY.PREFECT,
    imperial: false,
    military: 3,
    administration: 3,
    popularity: 2,
    intrigue: 4,
    image: "/images/counters/statesmen/Rome-SM-Philip.png",
    scenario: GlobalUnitsModel.SCENARIO.AD_222,
  }
  counters.set(philip.name, new Statesman(philip))

  let decius = {
    name: GlobalUnitsModel.STATESMAN.DECIUS,
    specialAbility: GlobalUnitsModel.SPECIAL_ABILITY.PERSECUTION,
    imperial: false,
    military: 2,
    administration: 4,
    popularity: 3,
    intrigue: 3,
    image: "/images/counters/statesmen/Rome-SM-Decius.png",
    scenario: GlobalUnitsModel.SCENARIO.AD_222,
  }
  counters.set(decius.name, new Statesman(decius))

  let gallus = {
    name: GlobalUnitsModel.STATESMAN.GALLUS,
    specialAbility: GlobalUnitsModel.SPECIAL_ABILITY.STALEMATE,
    imperial: false,
    military: 3,
    administration: 3,
    popularity: 2,
    intrigue: 3,
    image: "/images/counters/statesmen/Rome-SM-Gallus.png",
    scenario: GlobalUnitsModel.SCENARIO.AD_222,
  }
  counters.set(gallus.name, new Statesman(gallus))

  let aemilian = {
    name: GlobalUnitsModel.STATESMAN.AEMILIAN,
    specialAbility: GlobalUnitsModel.SPECIAL_ABILITY.EVENT,
    imperial: false,
    military: 3,
    administration: 2,
    popularity: 2,
    intrigue: 3,
    image: "/images/counters/statesmen/Rome-SM-Aemilian.png",
    scenario: GlobalUnitsModel.SCENARIO.AD_222,
  }
  counters.set(aemilian.name, new Statesman(aemilian))

  let valerian = {
    name: GlobalUnitsModel.STATESMAN.VALERIAN,
    specialAbility: GlobalUnitsModel.SPECIAL_ABILITY.PERSECUTION,
    imperial: true,
    military: 2,
    administration: 3,
    popularity: 2,
    intrigue: 3,
    image: "/images/counters/statesmen/Rome-SM-Valerian.png",
    scenario: GlobalUnitsModel.SCENARIO.AD_222,
  }
  counters.set(valerian.name, new Statesman(valerian))

  let gallienus = {
    name: GlobalUnitsModel.STATESMAN.GALLIENUS,
    specialAbility: GlobalUnitsModel.SPECIAL_ABILITY.USURPER,
    imperial: true,
    military: 4,
    administration: 2,
    popularity: 1,
    intrigue: 4,
    image: "/images/counters/statesmen/Rome-SM-Gallienus.png",
    scenario: GlobalUnitsModel.SCENARIO.AD_222,
  }
  counters.set(gallienus.name, new Statesman(gallienus))

  let odaenath = {
    name: GlobalUnitsModel.STATESMAN.ODAENATH,
    specialAbility: GlobalUnitsModel.SPECIAL_ABILITY.PERSIAN,
    imperial: false,
    military: 4,
    administration: 2,
    popularity: 4,
    intrigue: 3,
    image: "/images/counters/statesmen/Rome-SM-Odaenath.png",
    scenario: GlobalUnitsModel.SCENARIO.AD_222,
  }
  counters.set(odaenath.name, new Statesman(odaenath))

  let postumus = {
    name: GlobalUnitsModel.STATESMAN.POSTUMUS,
    specialAbility: GlobalUnitsModel.SPECIAL_ABILITY.FRANKISH,
    imperial: false,
    military: 3,
    administration: 2,
    popularity: 3,
    intrigue: 3,
    image: "/images/counters/statesmen/Rome-SM-Postumus.png",
    scenario: GlobalUnitsModel.SCENARIO.AD_222,
  }
  counters.set(postumus.name, new Statesman(postumus))

  let gothicus = {
    name: GlobalUnitsModel.STATESMAN.GOTHICUS,
    specialAbility: GlobalUnitsModel.SPECIAL_ABILITY.GOTHIC,
    imperial: false,
    military: 4,
    administration: 3,
    popularity: 4,
    intrigue: 3,
    image: "/images/counters/statesmen/Rome-SM-Gothicus.png",
    scenario: GlobalUnitsModel.SCENARIO.AD_222,
  }
  counters.set(gothicus.name, new Statesman(gothicus))

  let aurelian = {
    name: GlobalUnitsModel.STATESMAN.AURELIAN,
    specialAbility: GlobalUnitsModel.SPECIAL_ABILITY.PALMYRENE,
    imperial: false,
    military: 5,
    administration: 4,
    popularity: 2,
    intrigue: 4,
    image: "/images/counters/statesmen/Rome-SM-Aurelian.png",
    scenario: GlobalUnitsModel.SCENARIO.AD_222,
  }
  counters.set(aurelian.name, new Statesman(aurelian))

  let tacitus = {
    name: GlobalUnitsModel.STATESMAN.TACITUS,
    specialAbility: GlobalUnitsModel.SPECIAL_ABILITY.PRESTIGE,
    imperial: false,
    military: 3,
    administration: 3,
    popularity: 3,
    intrigue: 1,
    image: "/images/counters/statesmen/Rome-SM-Tacitus.png",
    scenario: GlobalUnitsModel.SCENARIO.AD_222,
  }
  counters.set(tacitus.name, new Statesman(tacitus))

  let probus = {
    name: GlobalUnitsModel.STATESMAN.PROBUS,
    specialAbility: GlobalUnitsModel.SPECIAL_ABILITY.BURGUNDIAN,
    imperial: false,
    military: 4,
    administration: 3,
    popularity: 2,
    intrigue: 2,
    image: "/images/counters/statesmen/Rome-SM-Probus.png",
    scenario: GlobalUnitsModel.SCENARIO.AD_222,
  }
  counters.set(probus.name, new Statesman(probus))

  let carus = {
    name: GlobalUnitsModel.STATESMAN.CARUS,
    specialAbility: GlobalUnitsModel.SPECIAL_ABILITY.PERSIAN,
    imperial: true,
    military: 3,
    administration: 3,
    popularity: 3,
    intrigue: 3,
    image: "/images/counters/statesmen/Rome-SM-Carus.png",
    scenario: GlobalUnitsModel.SCENARIO.AD_222,
  }
  counters.set(carus.name, new Statesman(carus))

  let carinus = {
    name: GlobalUnitsModel.STATESMAN.CARINUS,
    specialAbility: GlobalUnitsModel.SPECIAL_ABILITY.SAXON,
    imperial: true,
    military: 3,
    administration: 2,
    popularity: 3,
    intrigue: 4,
    image: "/images/counters/statesmen/Rome-SM-Carinus.png",
    scenario: GlobalUnitsModel.SCENARIO.AD_222,
  }
  counters.set(carinus.name, new Statesman(carinus))

  let diocletian = {
    name: GlobalUnitsModel.STATESMAN.DIOCLETIAN,
    specialAbility: GlobalUnitsModel.SPECIAL_ABILITY.PERSECUTION,
    imperial: false,
    military: 2,
    administration: 5,
    popularity: 3,
    intrigue: 3,
    image: "/images/counters/statesmen/Rome-SM-Diocletian.png",
    scenario: GlobalUnitsModel.SCENARIO.AD_222,
  }
  counters.set(diocletian.name, new Statesman(diocletian))

  let maximian = {
    name: GlobalUnitsModel.STATESMAN.MAXIMIAN,
    specialAbility: GlobalUnitsModel.SPECIAL_ABILITY.MOORISH,
    imperial: false,
    military: 3,
    administration: 3,
    popularity: 3,
    intrigue: 4,
    image: "/images/counters/statesmen/Rome-SM-Maximian.png",
    scenario: GlobalUnitsModel.SCENARIO.AD_222,
  }
  counters.set(maximian.name, new Statesman(maximian))

  let carausius = {
    name: GlobalUnitsModel.STATESMAN.CARAUSIUS,
    specialAbility: GlobalUnitsModel.SPECIAL_ABILITY.FRANKISH,
    imperial: false,
    military: 4,
    administration: 2,
    popularity: 3,
    intrigue: 3,
    image: "/images/counters/statesmen/Rome-SM-Carausius.png",
    scenario: GlobalUnitsModel.SCENARIO.AD_222,
  }
  counters.set(carausius.name, new Statesman(carausius))
}
