import { useContext } from "react"
import CountersPanel from "./CountersPanel"
import { DialogContext } from "../../Context"
import GlobalInit from "../../model/GlobalInit"
import GlobalUnitsModel from "../../model/GlobalUnitsModel"
function Dialogs() {
  const statesmen = Array.from(GlobalInit.counters.statesmen.values())
  const leaders = Array.from(GlobalInit.counters.leaders.values())
  const romanunits = Array.from(GlobalInit.counters.romanunits.values())
  let provincemarkers = Array.from(GlobalInit.counters.provincemarkers.values())
  const barbarianMarkers = provincemarkers.filter((item) => item.unitType === GlobalUnitsModel.PROVINCE_TYPE.BARBARIAN)
  const alliedMarkers = provincemarkers.filter((item) => item.unitType === GlobalUnitsModel.PROVINCE_TYPE.ALLIED)
  const veteranAlliedMarkers = provincemarkers.filter(
    (item) => item.unitType === GlobalUnitsModel.PROVINCE_TYPE.VETERAN_ALLIED
  )
  const insurgentMarkers = provincemarkers.filter((item) => item.unitType === GlobalUnitsModel.PROVINCE_TYPE.INSURGENT)
  const trackmarkers = Array.from(GlobalInit.counters.trackmarkers.values())

  const { modalShow, setModalShow } = useContext(DialogContext)
  return (
    <CountersPanel
      width="90rem"
      show={modalShow}
      onHide={setModalShow}
      statesmen={statesmen}
      leaders={leaders}
      romanunits={romanunits}
      barbarianMarkers={barbarianMarkers}
      alliedMarkers={alliedMarkers}
      veteranAlliedMarkers={veteranAlliedMarkers}
      insurgentMarkers={insurgentMarkers}
      trackmarkers={trackmarkers}
    ></CountersPanel>
  )
}

export default Dialogs
