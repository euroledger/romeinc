import GlobalUnitsModel from "../model/GlobalUnitsModel"

export function loadTreasuryTrackMarkers(counters) {
  let prestige1 = {
    name: GlobalUnitsModel.TREASURY_TRACK_MARKER.PRESTIGE_1,
    image: "/images/counters/trackmarkers/Mkr-Leaf x1.png",
  }
  counters.set(prestige1.name, prestige1)

  let prestige10 = {
    name: GlobalUnitsModel.TREASURY_TRACK_MARKER.PRESTIGE_10,
    image: "/images/counters/trackmarkers/Mkr-Leaf x10.png",
  }
  counters.set(prestige10.name, prestige10)

  let prestigeminus1 = {
    name: GlobalUnitsModel.TREASURY_TRACK_MARKER.PRESTIGE_MINUS_1,
    image: "/images/counters/trackmarkers/Mkr-Leaf Minus1.png",
  }
  counters.set(prestigeminus1.name, prestigeminus1)

  let prestigeminus10 = {
    name: GlobalUnitsModel.TREASURY_TRACK_MARKER.PRESTIGE_MINUS_10,
    image: "/images/counters/trackmarkers/Mkr-Leaf Minus10.png",
  }
  counters.set(prestigeminus10.name, prestigeminus10)

  let unrest1 = {
    name: GlobalUnitsModel.TREASURY_TRACK_MARKER.UNREST_1,
    image: "/images/counters/trackmarkers/Mkr-Fire x1.png",
  }
  counters.set(unrest1.name, unrest1)

  let unrest25 = {
    name: GlobalUnitsModel.TREASURY_TRACK_MARKER.UNREST_GT_25,
    image: "/images/counters/trackmarkers/Mkr-Fire Gr25.png",
  }
  counters.set(unrest25.name, unrest25)

  let pay1 = {
    name: GlobalUnitsModel.TREASURY_TRACK_MARKER.PAY_1,
    image: "/images/counters/trackmarkers/Mkr-Shield x1.png",
  }
  counters.set(pay1.name, pay1)

  let pay10 = {
    name: GlobalUnitsModel.TREASURY_TRACK_MARKER.PAY_10,
    image: "/images/counters/trackmarkers/Mkr-Shield x10.png",
  }
  counters.set(pay10.name, pay10)

  let gold1 = {
    name: GlobalUnitsModel.TREASURY_TRACK_MARKER.GOLD_1,
    image: "/images/counters/trackmarkers/Mkr-Coin x1.png",
  }
  counters.set(gold1.name, gold1)

  let gold10 = {
    name: GlobalUnitsModel.TREASURY_TRACK_MARKER.GOLD_10,
    image: "/images/counters/trackmarkers/Mkr-Coin x10.png",
  }
  counters.set(gold10.name, gold10)

  let goldminus1 = {
    name: GlobalUnitsModel.TREASURY_TRACK_MARKER.GOLD_MINUS_1,
    image: "/images/counters/trackmarkers/Mkr-Coin Minus1.png",
  }
  counters.set(goldminus1.name, goldminus1)

  let goldplus250 = {
    name: GlobalUnitsModel.TREASURY_TRACK_MARKER.GOLD_PLUS_250,
    image: "/images/counters/trackmarkers/Mkr-Coin Plus250.png",
  }
  counters.set(goldplus250.name, goldplus250)

  let turn = {
    name: GlobalUnitsModel.TREASURY_TRACK_MARKER.TURN,
    image: "/images/counters/trackmarkers/Mkr-Turn.png",
  }
  counters.set(turn.name, turn)
}
