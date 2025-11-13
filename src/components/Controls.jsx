import Container from "react-bootstrap/Container"
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
import Button from "react-bootstrap/Button"
import ButtonGroup from "react-bootstrap/ButtonGroup"
import { useControls } from "react-zoom-pan-pinch"
import { Image } from "./Image"
import GlobalUIConstants from "../model/GlobalUIConstants"

export const Controls = ({ navBarFont, banner, clicky }) => {
  const { zoomIn, zoomOut, resetTransform } = useControls()

  const font = "1.2rem"
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
              left: "19%",
              top: "25.0%",
              fontSize: font,
              borderColor: "white",
              color: "white",
              width: "9rem",
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
              left: "26%",
              top: "25%",
              fontSize: font,
              borderColor: "white",
              color: "white",
              width: "9rem",
              background: GlobalUIConstants.Colors.PRIMARY_BUTTON,
            }}
          >
            Counters
          </Button>
          <Navbar.Text
            className={navBarFont}
            style={{
              position: "absolute",
              left: "45%",
              top: "20%",
              fontSize: "1.4rem",
              color: "white",
            }}
          >
            Game State: EVENT PHASE
          </Navbar.Text>
          <ButtonGroup
            style={{ position: "absolute", left: "74%", top: "25%", fontSize: font }}
            className={navBarFont}
            aria-label="Basic example"
          >
            <Button
              style={{
                marginRight: "0.3rem",
                borderColor: "white",
                fontSize: font,
                color: "white",
                width: "10rem",
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
                fontSize: font,
                color: "white",
                width: "10rem",
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
                fontSize: font,
                borderColor: "white",
                color: "white",
                width: "10rem",
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
