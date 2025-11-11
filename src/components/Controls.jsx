import Container from "react-bootstrap/Container"
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
import Button from "react-bootstrap/Button"
import ButtonGroup from "react-bootstrap/ButtonGroup"
import { useControls } from "react-zoom-pan-pinch"
import { Image } from "./Image"

export const Controls = ({ navBarFont, banner }) => {
  const { zoomIn, zoomOut, resetTransform } = useControls()

  const font = "1.2rem"
  return (
    <Navbar
      style={{ fontSize: font }}
      bg="black"
      data-bs-threme="dark"
      // fixed="top"
      className="justify-content-between"
    >
      <Container style={{ background: "#610C0F", fontSize: font, height: "5rem" }}>
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
              left: "22%",
              top: "1.1%",
              fontSize: font,
              borderColor: "white",
              color: "white",
              width: "12rem",
              background: "#1844abff",
            }}
          >
            SAVE
          </Button>
          <Navbar.Text
            className={navBarFont}
            style={{
              position: "absolute",
              left: "45%",
              top: "1.7%",
              fontSize: "1.4rem",
              color: "white",
            }}
          >
            Game State: EVENT PHASE
          </Navbar.Text>
          <ButtonGroup
            style={{ position: "absolute", left: "74%", top: "1.1%", fontSize: font }}
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
                width: "10rem",
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
              style={{ fontSize: font, borderColor: "white", color: "white", width: "10rem", background: "#610C0F" }}
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
