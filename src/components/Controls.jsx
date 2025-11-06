import Container from "react-bootstrap/Container"
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
import Button from "react-bootstrap/Button"
import ButtonGroup from "react-bootstrap/ButtonGroup"
import { useControls } from "react-zoom-pan-pinch"
// import App.css from "../App,css"

export const Controls = ({navBarFont, banner}) => {
  const { zoomIn, zoomOut, resetTransform } = useControls()

  const font = "12px"
  return (
    <Navbar
      style={{ fontSize: font }}
      bg="black"
      data-bs-threme="dark"
      fixed="top"
      className="justify-content-between navbar-fixed-top"
    >
      <Container style={{ background: "#610C0F", fontSize: font, height: "6rem" }}>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav style={{ fontSize: font }} className="mr-auto">
            <div
              style={{
                marginLeft: "1rem",
                paddingTop: "1.5rem",
              }}
            >
              <img
                style={{
                  width: `18rem`,
                  height: `3.5rem`,
                }}
                src={banner}
              ></img>
            </div>
          </Nav>
          <Button
            className={navBarFont}
            style={{
              position: "absolute",
              left: "25%",
              top: "4.5%",
              fontSize: font,
              borderColor: "white",
              color: "white",
              width: "7rem",
              background: "#1844abff",
            }}
          >
            SAVE
          </Button>
          <Navbar.Text
            className={navBarFont}
            style={{
              position: "absolute",
              left: "50%",
              top: "5.5%",
              fontSize: "14px",
              color: "white",
            }}
          >
            Game State: EVENT PHASE
          </Navbar.Text>
          <ButtonGroup
            style={{ position: "absolute", left: "74%", top: "4.5%", fontSize: font }}
            className={navBarFont}
            aria-label="Basic example"
          >
            <Button
              style={{
                marginRight: "0.3rem",
                borderColor: "white",
                fontSize: font,
                color: "white",
                width: "6.5rem",
                background: "#610C0F",
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
                width: "6.5rem",
                background: "#610C0F",
              }}
              className="me-1"
              size="sm"
              variant="secondary"
              onClick={() => zoomOut()}
            >
              Zoom Out
            </Button>
            <Button
              style={{ fontSize: font, borderColor: "white", color: "white", width: "6.5rem", background: "#610C0F" }}
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
