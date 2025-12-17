import { React, useState } from "react"
import Modal from "react-bootstrap/Modal"
import Button from "react-bootstrap/Button"
import GlobalUnitsModel from "../../model/GlobalUnitsModel"
import GlobalGameState from "../../model/GlobalGameState"
import GlobalInit from "../../model/GlobalInit"
import ScenarioSetupFactory from "../../model/scenarios/ScenarioSetupFactory"
import "./Splash.css"

function SplashScreen(props) {
  const { setSplashShow, ...rest } = props
  const [showButtons, setShowButtons] = useState(true)
  const [selectedScenario, setSelectedScenario] = useState("27BCE")
  const [format, setFormat] = useState(GlobalGameState.dateFormat) // 👈 local mirror

  const toggleDateFormat = () => {
    console.log("FLIP DATE FORMAT")
    GlobalGameState.dateFormat =
      GlobalGameState.dateFormat === GlobalUnitsModel.DATE_FORMAT.TRADITIONAL
        ? GlobalUnitsModel.DATE_FORMAT.MODERN
        : GlobalUnitsModel.DATE_FORMAT.TRADITIONAL
    setFormat(GlobalGameState.dateFormat) // ✅ triggers re-render of SplashScreen
  }

  const loady = () => {
    console.log("LOAD GAME")
  }

  const newGameHandler = () => {
    setShowButtons(false)
  }

  const beginGameHandler = () => {
    ScenarioSetupFactory.setupScenario(selectedScenario)
    GlobalGameState.scenario = selectedScenario
    console.log("GET RID OF SPLASH SCREEN...")
    setSplashShow(false)
  }

  const handleChange = (event) => {
    setSelectedScenario(event.target.value)
  }

  const scenarioMsg = GlobalInit.controller.getSelectedLabel(selectedScenario, true)

  return (
    <Modal
      {...rest}
      contentClassName="custom-modal-content"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      backdrop="false"
    >
      <div
        style={{
          position: "absolute",
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <img src="/images/romesplash2.jpg" />
        {showButtons && (
          <Button
            className="button-88"
            size="lg"
            onClick={loady}
            style={{ width: "190px", position: "absolute", top: "68%", right: "61%" }}
          >
            LOAD GAME
          </Button>
        )}
        {showButtons && (
          <Button
            className="button-88"
            size="lg"
            onClick={newGameHandler}
            style={{ width: "190px", position: "absolute", top: "68%", right: "7%" }}
          >
            NEW GAME
          </Button>
        )}
        {showButtons && (
          <Button
            className="button-88"
            size="lg"
            onClick={loady}
            style={{ width: "190px", position: "absolute", top: "68%", right: "61%" }}
          >
            LOAD GAME
          </Button>
        )}
        {!showButtons && (
          <div
            style={{
              fontFamily: "'Marcellus', serif",
              fontWeight: "400",
              borderRadius: "15px",

              background: "rgba(75, 60, 52, 0.9)",
              width: "80%",
              minHeight: "50rem",
              position: "absolute",
              top: "28%",
              left: "10%",
            }}
          >
            <div
              style={{
                color: "white",
                marginTop: "1.5rem",
                fontSize: "1.5rem",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div className="scenario-selector-container">
                <h3>Select a Scenario for Rome, Inc.:</h3>

                <form>
                  {GlobalUnitsModel.SCENARIOS.map((scenario) => (
                    <label key={scenario.value} className="radio-label">
                      <input
                        type="radio"
                        name="game-scenario"
                        value={scenario.value}
                        checked={selectedScenario === scenario.value}
                        onChange={handleChange}
                      />
                      {/* {useBCE_CE ? scenario.labelBCECE : scenario.labelBCAD} */}
                      {format === GlobalUnitsModel.DATE_FORMAT.MODERN
                        ? scenario.longlabelBCECE
                        : scenario.longlabelBCAD}
                    </label>
                  ))}
                </form>

                {/* Use the new function to display the dynamic label */}
                <p>
                  Starting Scenario: <strong>{scenarioMsg}</strong>
                </p>
                <div
                  style={{
                    color: "white",
                    marginTop: "1.5rem",
                    fontSize: "1.5rem",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <button onClick={toggleDateFormat} className="toggle-button">
                    Switch to {GlobalGameState.dateFormat === GlobalUnitsModel.DATE_FORMAT.MODERN ? "BC/AD" : "BCE/CE"}{" "}
                    Format
                  </button>
                </div>
                <div
                  style={{
                    color: "white",
                    marginTop: "1.5rem",
                    fontSize: "1.5rem",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <button onClick={beginGameHandler} className="toggle-button2">
                    BEGIN GAME
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </Modal>
  )
}

export default SplashScreen
