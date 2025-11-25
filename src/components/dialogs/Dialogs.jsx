import { useContext } from "react"
import CountersPanel from "./CountersPanel"
import { DialogContext } from "../../Context"
import GlobalInit from "../../model/GlobalInit"
function Dialogs() {
  const statesmen = Array.from(GlobalInit.counters.statesmen.values())
  const leaders = Array.from(GlobalInit.counters.leaders.values())
  const romanunits = Array.from(GlobalInit.counters.romanunits.values())

  const { modalShow, setModalShow } = useContext(DialogContext)
  return (
    <CountersPanel
      width="90rem"
      show={modalShow}
      onHide={setModalShow}
      statesmen={statesmen}
      leaders={leaders}
      romanunits={romanunits}
    ></CountersPanel>
  )
}

export default Dialogs
