import GlobalUnitsModel from "../model/GlobalUnitsModel"
import EventMarker from "./EventMarker"
import LoyalMarker from "./LoyalMarker"

export function loadEventMarkers(counters) {
  for (let i = 0; i < 6; i++) {
    const event = new EventMarker({
      name: "EVENT " + i,
      imageFront: "/images/counters/othermarkers/Mkr-Event.png",
      imageBack: "/images/counters/othermarkers/Mkr-EventDoubled.png",
    })
    counters.set(event.name, event)
  }
}
//   AEGYPTUS: "LOYAL AEGYPTUS",
//   AFRICA: "LOYAL AFRICA",
//   BRITANNIA: "LOYAL BRITANNIA",
//   GALLIA: "LOYAL GALLIA",
//   HISPANIA: "LOYAL HISPANIA",
//   ITALIA: "LOYAL ITALIA",
//   MOESIA: "LOYAL MOESIA",
//   PANNONIA: "LOYAL PANNONIA",
//   PONTICA: "LOYAL PONTICA",
//   SYRIA: "LOYAL SYRIA",
export function loadLoyalMarkers(counters) {
  const aegyptus = new LoyalMarker({
    name: GlobalUnitsModel.COMMAND.AEGYPTUS,
    ltype: GlobalUnitsModel.LOYALTY_TYPE.LOYAL,
    imageFront: "/images/counters/othermarkers/Loyal-Aegyptus.png",
    imageBack: "/images/counters/othermarkers/Rebel-Aegyptus.png",
  })
  counters.set(aegyptus.name, aegyptus)

  const africa = new LoyalMarker({
    name: GlobalUnitsModel.COMMAND.AFRICA,
    ltype: GlobalUnitsModel.LOYALTY_TYPE.LOYAL,
    imageFront: "/images/counters/othermarkers/Loyal-Africa.png",
    imageBack: "/images/counters/othermarkers/Rebel-Africa.png",
  })
  counters.set(africa.name, africa)

  const britannia = new LoyalMarker({
    name: GlobalUnitsModel.COMMAND.BRITANNIA,
    ltype: GlobalUnitsModel.LOYALTY_TYPE.LOYAL,
    imageFront: "/images/counters/othermarkers/Loyal-Britannia.png",
    imageBack: "/images/counters/othermarkers/Rebel-Britannia.png",
  })
  counters.set(britannia.name, britannia)

  const gallia = new LoyalMarker({
    name: GlobalUnitsModel.COMMAND.GALLIA,
    ltype: GlobalUnitsModel.LOYALTY_TYPE.LOYAL,
    imageFront: "/images/counters/othermarkers/Loyal-Gallia.png",
    imageBack: "/images/counters/othermarkers/Rebel-Gallia.png",
  })
  counters.set(gallia.name, gallia)

  const hispania = new LoyalMarker({
    name: GlobalUnitsModel.COMMAND.HISPANA,
    ltype: GlobalUnitsModel.LOYALTY_TYPE.LOYAL,
    imageFront: "/images/counters/othermarkers/Loyal-Hispania.png",
    imageBack: "/images/counters/othermarkers/Rebel-Hispania.png",
  })
  counters.set(hispania.name, hispania)

  const italia = new LoyalMarker({
    name: GlobalUnitsModel.COMMAND.ITALIA,
    ltype: GlobalUnitsModel.LOYALTY_TYPE.LOYAL,
    imageFront: "/images/counters/othermarkers/Loyal-Italia.png",
    imageBack: "/images/counters/othermarkers/Rebel-Italia.png",
  })
  counters.set(italia.name, italia)

  const moesia = new LoyalMarker({
    name: GlobalUnitsModel.COMMAND.MOESIA,
    ltype: GlobalUnitsModel.LOYALTY_TYPE.LOYAL,
    imageFront: "/images/counters/othermarkers/Loyal-Moesia.png",
    imageBack: "/images/counters/othermarkers/Rebel-Moesia.png",
  })
  counters.set(moesia.name, moesia)

    const pannonia = new LoyalMarker({
    name: GlobalUnitsModel.COMMAND.PANNONIA,
    ltype: GlobalUnitsModel.LOYALTY_TYPE.LOYAL,
    imageFront: "/images/counters/othermarkers/Loyal-Pannonia.png",
    imageBack: "/images/counters/othermarkers/Rebel-Pannonia.png",
  })
  counters.set(pannonia.name, pannonia)

    const pontica = new LoyalMarker({
    name: GlobalUnitsModel.COMMAND.PONTICA,
    ltype: GlobalUnitsModel.LOYALTY_TYPE.LOYAL,
    imageFront: "/images/counters/othermarkers/Loyal-Pontica.png",
    imageBack: "/images/counters/othermarkers/Rebel-Pontica.png",
  })
  counters.set(pontica.name, pontica)

    const syria = new LoyalMarker({
    name: GlobalUnitsModel.COMMAND.SYRIA,
    ltype: GlobalUnitsModel.LOYALTY_TYPE.LOYAL,
    imageFront: "/images/counters/othermarkers/Loyal-Syria.png",
    imageBack: "/images/counters/othermarkers/Rebel-Syria.png",
  })
  counters.set(syria.name, syria)
}
