// CountersPanel.jsx
import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import "./modal.css";
import ImageGrid from "./ImageGrid";
import GlobalUIConstants from "../../model/GlobalUIConstants";
import TabbedPane from "./TabbedPane";
import GlobalUnitsModel from "../../model/GlobalUnitsModel";
import GlobalInit from "../../model/GlobalInit";
import GlobalGameState from "../../model/GlobalGameState";

/**
 * Defensive helper: ensure we always operate on an array and filter out falsy entries.
 * This prevents intermittent startup crashes when counters are still loading.
 */
const safeArray = (arr) => (Array.isArray(arr) ? arr.filter(Boolean) : []);

function CountersPanel(props) {
  const sidebg = GlobalUIConstants.Colors.PRIMARY;
  const dynamicWidth = props.width ? props.width : GlobalUIConstants.Defaults.MODAL_WIDTH;

  // Build image arrays defensively
  const imagesSm = safeArray(props.statesmen).map((item) => ({
    name: item.name,
    url: item.image,
    alt: item.name,
  }));

  const imagesLdr = safeArray(props.leaders).map((item) => ({
    name: item.name,
    url: item.imageFront,
    alt: item.name,
  }));

  const imagesRu = safeArray(props.romanunits).map((item) => ({
    name: item.name,
    url: item.image,
    alt: item.name,
  }));

  const imagesBb = safeArray(props.barbarianMarkers).map((item) => ({
    name: item.name,
    url: item.image,
    alt: item.name,
  }));

  const alliedM = safeArray(props.alliedMarkers).map((item) => ({
    name: item.name,
    url: item.image,
    alt: item.name,
  }));

  const valliedM = safeArray(props.veteranAlliedMarkers).map((item) => ({
    name: item.name,
    url: item.image,
    alt: item.name,
  }));

  const insurgentM = safeArray(props.insurgentMarkers).map((item) => ({
    name: item.name,
    url: item.image,
    alt: item.name,
  }));

  const trackM = safeArray(props.trackmarkers).map((item) => ({
    name: item.name,
    url: item.image,
    alt: item.name,
  }));

  const loyalM = safeArray(props.othermarkers).map((item) => ({
    name: item.name,
    url: item.image,
    alt: item.name,
  }));

  const rebelM = safeArray(props.othermarkers).map((item) => ({
    name: item.name,
    url: item.imageBack,
    alt: item.name,
  }));

  const allMarkers = alliedM.concat(valliedM).concat(insurgentM).concat(trackM).concat(loyalM).concat(rebelM);

  const promoteOrDemote = () => {
    const romanUnits = safeArray(props.romanunits);
    for (const unit of romanUnits) {
      if (!unit) continue;
      if (unit.unitType === GlobalUnitsModel.ROMAN_UNIT_TYPE.WALL) {
        continue;
      }
      if (
        unit.unitType === GlobalUnitsModel.ROMAN_UNIT_TYPE.LEGION ||
        unit.unitType === GlobalUnitsModel.ROMAN_UNIT_TYPE.AUXILIA ||
        unit.unitType === GlobalUnitsModel.ROMAN_UNIT_TYPE.IMPERIAL_CAVALRY ||
        unit.unitType === GlobalUnitsModel.ROMAN_UNIT_TYPE.FLEET ||
        unit.unitType === GlobalUnitsModel.ROMAN_UNIT_TYPE.PRAETORIAN_GUARD
      ) {
        // Defensive call: ensure controller exists
        if (GlobalInit && GlobalInit.controller && typeof GlobalInit.controller.promoteRomanUnit === "function") {
          GlobalInit.controller.promoteRomanUnit(unit.name);
        }
      } else {
        if (GlobalInit && GlobalInit.controller && typeof GlobalInit.controller.demoteRomanUnit === "function") {
          GlobalInit.controller.demoteRomanUnit(unit.name);
        }
      }
    }
    if (GlobalGameState && typeof GlobalGameState.updateGlobalState === "function") {
      GlobalGameState.updateGlobalState();
    }
  };

  return (
    <Modal
      {...props}
      contentClassName="custom-modal-content"
      dialogClassName="dynamic-modal-dialog"
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
        <div style={{ marginLeft: "1rem" }}>
          <TabbedPane
            label1="Statesmen"
            tab1={<ImageGrid images={imagesSm} cols={11} />}
            label2="Leaders"
            tab2={<ImageGrid images={imagesLdr} cols={5} />}
            label3="Roman Units"
            tab3={<ImageGrid images={imagesRu} cols={10} />}
            tab3Click={promoteOrDemote}
            label4="Barbarians"
            tab4={<ImageGrid images={imagesBb} cols={10} />}
            label5="Other Markers"
            tab5={<ImageGrid images={allMarkers} cols={10} />}
          />
        </div>
      </Modal.Body>
      <Modal.Footer style={{ background: `${sidebg}`, color: "black" }}>
        <Button className="toggle-button2" onClick={(e) => props.onHide(false)}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

// Provide default props so callers that render before data is ready won't crash
CountersPanel.defaultProps = {
  statesmen: [],
  leaders: [],
  romanunits: [],
  barbarianMarkers: [],
  alliedMarkers: [],
  veteranAlliedMarkers: [],
  insurgentMarkers: [],
  trackmarkers: [],
  othermarkers: [],
  width: GlobalUIConstants.Defaults.MODAL_WIDTH,
  onHide: () => {},
  show: false,
};

export default CountersPanel;
