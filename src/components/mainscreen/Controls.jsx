import { useGameState } from "../../GameStateContext"
import Container from "react-bootstrap/Container"
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
import Button from "react-bootstrap/Button"
import ButtonGroup from "react-bootstrap/ButtonGroup"
import { useControls } from "react-zoom-pan-pinch"
import { Image } from "./Image"
import GlobalUIConstants from "../../model/GlobalUIConstants"
import GlobalInit from "../../model/GlobalInit"
import GlobalGameState from "../../model/GlobalGameState"
import GlobalUnitsModel from "../../model/GlobalUnitsModel"
import { forceGlobalRender } from "../../GlobalRenderPoke"

export const Controls = ({ onViewAreaClick, navBarFont, banner, clicky }) => {
  const { gameState, setGameState } = useGameState()
  const { zoomIn, zoomOut, resetTransform } = useControls()

  const doBollocks = () => {
    console.log("Increment Gold gold now =", gameState.gold + 1)

    setGameState((prev) => ({
      ...prev,
      gold: prev.gold + 1,
    }))

    //    setGameState((prev) => ({
    //   ...prev,
    //   gameTurn: prev.gameTurn + 1,
    // }))
  }

  const doCounterPromotion = () => {
    const unit = GlobalInit.controller.getRomanUnit(GlobalUnitsModel.ROMAN_UNIT.II_AUGUSTA)
    console.log("1", GlobalUnitsModel.ROMAN_UNIT.II_AUGUSTA, "unit type=", unit.unitType)
    if (unit.unitType === GlobalUnitsModel.ROMAN_UNIT_TYPE.LEGION) {
      GlobalInit.controller.promoteRomanUnit(GlobalUnitsModel.ROMAN_UNIT.II_AUGUSTA)
    } else if (unit.unitType === GlobalUnitsModel.ROMAN_UNIT_TYPE.VETERAN_LEGION) {
      GlobalInit.controller.demoteRomanUnit(GlobalUnitsModel.ROMAN_UNIT.II_AUGUSTA)
    }
    console.log("2", GlobalUnitsModel.ROMAN_UNIT.II_AUGUSTA, "image=", unit.image, "unit type=", unit.unitType)
    forceGlobalRender()
  }
  const showHide = () => {
      setGameState((prev) => ({
      ...prev,
      show: !prev.show
    }))
    // forceGlobalRender()
  }

  const font = "0.8rem"
  const zoomButtonFont = "1.0rem"
  const buttonWidth = "6.2rem"
  return (
    <Navbar
      style={{ fontSize: font, margin: "0" }}
      bg="black"
      data-bs-threme="dark"
      // fixed="top"
      className="py-0"
    >
      <Container
        style={{
          background: GlobalUIConstants.Colors.PRIMARY,
          fontSize: font,
          // margin: "0px",
          padding: "0px",
          minWidth: "100vw",
          height: "5rem",
        }}
      >
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav style={{ fontSize: font }} className="mr-auto">
            <div
              style={{
                marginLeft: "1rem",
                paddingTop: "0.5rem",
              }}
            >
              <Image w="22rem" h="4.0rem" src={banner}></Image>
            </div>
          </Nav>
          <Button
            className={navBarFont}
            style={{
              position: "absolute",
              left: "18.5%",
              top: "25.0%",
              fontSize: font,
              borderColor: "white",
              color: "white",
              width: buttonWidth,
              background: GlobalUIConstants.Colors.PRIMARY_BUTTON,
            }}
          >
            Save Game
          </Button>
          <Button
            onClick={() => clicky()}
            className={navBarFont}
            style={{
              position: "absolute",
              left: "23.4%",
              top: "25%",
              fontSize: font,
              borderColor: "white",
              color: "white",
              width: buttonWidth,
              background: GlobalUIConstants.Colors.PRIMARY_BUTTON,
            }}
          >
            Counters
          </Button>
          <Button
            // onClick={() => onViewAreaClick("Treasury")}

            onClick={() => doBollocks()}
            className={navBarFont}
            style={{
              position: "absolute",
              left: "28.3%",
              top: "25%",
              fontSize: font,
              borderColor: "white",
              color: "white",
              width: buttonWidth,
              background: GlobalUIConstants.Colors.PRIMARY_BUTTON,
            }}
          >
            Treasury
          </Button>
          <Button
            // onClick={() => onViewAreaClick("Event")}
            onClick={() => doCounterPromotion()}
            className={navBarFont}
            style={{
              position: "absolute",
              left: "33.2%",
              top: "25%",
              fontSize: font,
              borderColor: "white",
              color: "white",
              width: buttonWidth,
              background: GlobalUIConstants.Colors.PRIMARY_BUTTON,
            }}
          >
            Event
          </Button>
          <Button
            // onClick={() => onViewAreaClick("Event")}
            onClick={() => showHide()}
            className={navBarFont}
            style={{
              position: "absolute",
              left: "38.2%",
              top: "25%",
              fontSize: font,
              borderColor: "white",
              color: "white",
              width: buttonWidth,
              background: GlobalUIConstants.Colors.PRIMARY_BUTTON,
            }}
          >
            {gameState.show ? "Hide" : "Show"}
          </Button>
          <Navbar.Text
            className={navBarFont}
            style={{
              position: "absolute",
              left: "50%",
              top: "1%",
              fontFamily: "Cinzel",
              fontSize: "1.2rem",
              color: "white",
            }}
          >
            <div>
              Scenario: <strong>{GlobalInit.controller.getSelectedLabel(GlobalGameState.scenario)}</strong>
            </div>

            <div>
              {" "}
              Game State: <strong>SETUP</strong>
            </div>
          </Navbar.Text>
          <ButtonGroup
            style={{ position: "absolute", left: "79%", top: "25%", fontSize: font }}
            className={navBarFont}
            aria-label="Basic example"
          >
            <Button
              style={{
                marginRight: "0.3rem",
                borderColor: "white",
                fontSize: zoomButtonFont,
                color: "white",
                width: "8em",
                background: GlobalUIConstants.Colors.PRIMARY,
              }}
              className="me-1"
              size="sm"
              variant="secondary"
              onClick={() => zoomIn()}
            >
              Zoom In
            </Button>
            <Button
              style={{
                marginRight: "0.3rem",
                borderColor: "white",
                fontSize: zoomButtonFont,
                color: "white",
                width: "8rem",
                background: GlobalUIConstants.Colors.PRIMARY,
              }}
              className="me-1"
              size="sm"
              variant="secondary"
              onClick={() => zoomOut()}
            >
              Zoom Out
            </Button>
            <Button
              style={{
                fontSize: zoomButtonFont,
                borderColor: "white",
                color: "white",
                width: "8rem",
                background: GlobalUIConstants.Colors.PRIMARY,
              }}
              className="me-1"
              size="sm"
              variant="secondary"
              onClick={() => resetTransform()}
            >
              Reset
            </Button>
          </ButtonGroup>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
