import GlobalUnitsModel from "./model/GlobalUnitsModel"
import Statesman from "./counters/Statesman"

export function loadCounters(controller) {
  let counters = new Map()

  loadStatesmen(counters)

  return counters
}

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
}
// export default loadStatesmen
