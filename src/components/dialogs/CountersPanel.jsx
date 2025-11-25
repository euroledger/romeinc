import Modal from "react-bootstrap/Modal"
import Button from "react-bootstrap/Button"
import "./modal.css"
import ImageGrid from "./ImageGrid"
import GlobalUIConstants from "../../model/GlobalUIConstants"
import TabbedPane from "./TabbedPane"
import GlobalUnitsModel from "../../model/GlobalUnitsModel"
import GlobalInit from "../../model/GlobalInit"
import GlobalGameState from "../../model/GlobalGameState"

function CountersPanel(props) {
  const sidebg = GlobalUIConstants.Colors.PRIMARY
  const dynamicWidth = props.width ? props.width : GlobalUIConstants.Defaults.MODAL_WIDTH

  const imagesSm = props.statesmen.map((item) => {
    return {
      name: item.name,
      url: item.image,
      alt: item.name,
    }
  })

  const imagesLdr = props.leaders.map((item) => {
    return {
      name: item.name,
      url: item.imageFront,
      alt: item.name,
    }
  })

  const imagesRu = props.romanunits.map((item) => {
    return {
      name: item.name,
      url: item.image,
      alt: item.name,
    }
  })

  const promoteOrDemote = () => {
    for (const unit of props.romanunits) {
      if (unit.unitType === GlobalUnitsModel.ROMAN_UNIT_TYPE.WALL) {
        continue
      }
      if (
        unit.unitType === GlobalUnitsModel.ROMAN_UNIT_TYPE.LEGION ||
        unit.unitType === GlobalUnitsModel.ROMAN_UNIT_TYPE.AUXILIA ||
        unit.unitType === GlobalUnitsModel.ROMAN_UNIT_TYPE.IMPERIAL_CAVALRY ||
        unit.unitType === GlobalUnitsModel.ROMAN_UNIT_TYPE.FLEET ||
        unit.unitType === GlobalUnitsModel.ROMAN_UNIT_TYPE.PRAETORIAN_GUARD
      ) {
        GlobalInit.controller.promoteRomanUnit(unit.name)
      } else {
        GlobalInit.controller.demoteRomanUnit(unit.name)
      }
    }
    GlobalGameState.updateGlobalState()
  }
  return (
    <Modal
      {...props}
      contentClassName="custom-modal-content"
      dialogClassName="dynamic-modal-dialog" // Reference the class from CSS
      style={{ "--modal-width": dynamicWidth, "--modal-height": "80rem" }}
      aria-labelledby="contained-modal-title-vcenter"
      centered
      backdrop="static"
    >
      <Modal.Body style={{ background: `${sidebg}`, color: "#f8c51a" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginBottom: "2rem",
            fontSize: "2rem",
            color: "#f8c51a",
          }}
        >
          COUNTERS
        </div>
        <div
          style={{
            marginLeft: "1rem",
          }}
        >
          {/* <ImageGrid images={images}></ImageGrid> */}
          <TabbedPane
            label1="Statesmen"
            tab1={<ImageGrid images={imagesSm} cols={11}></ImageGrid>}
            label2="Leaders"
            tab2={<ImageGrid images={imagesLdr} cols={5}></ImageGrid>}
            label3="Roman Units"
            tab3={<ImageGrid images={imagesRu} cols={10}></ImageGrid>}
            tab3Click={promoteOrDemote}
          ></TabbedPane>
        </div>
      </Modal.Body>
      <Modal.Footer style={{ background: `${sidebg}`, color: "black" }}>
        <Button className="toggle-button2" onClick={(e) => props.onHide(false)}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default CountersPanel
