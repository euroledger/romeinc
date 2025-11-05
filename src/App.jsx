import { useState, useRef, useEffect } from "react"
import Container from "react-bootstrap/Container"
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
import Button from "react-bootstrap/Button"
import ButtonGroup from "react-bootstrap/ButtonGroup"
import { TransformWrapper, TransformComponent, useControls } from "react-zoom-pan-pinch"
import img1 from "./assets/romemap.jpg"
import img2 from "./assets/banner.jpg"
import { windowsInit } from "./utils"
import "./App.css"

export default App

export function App() {
  const refContainer = useRef(null)
  const [dimensions, setDimensions] = useState({
    width: 0,
    height: 0,
  })

  windowsInit()

  useEffect(() => {
    if (refContainer.current) {
      const w = screen.availWidth
      const h = screen.availHeight
      setDimensions({
        width: w,
        height: h - refContainer.current.offsetHeight + -40,
      })
    }
  }, [])

  const [scale, setScale] = useState(1)
  const Controls = () => {
    const { zoomIn, zoomOut, resetTransform } = useControls()

    const font = "12px"
    return (
      <Navbar
        ref={refContainer}
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
                  src={img2}
                ></img>
              </div>
            </Nav>
            <Button className="cinzel-regular"
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
            <Navbar.Text className="cinzel-regular"
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
              className="cinzel-regular"
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
  function handleScaleChange(event) {
    setScale(event.instance.transformState.scale)
    console.log("scale=", scale)
  }

  console.log(">>> width=", dimensions.width)
  console.log(">>> height=", dimensions.height)

  return (
    <>
      <TransformWrapper
        initialScale={1}
        minScale={0.5}
        maxScale={6}
        limitToBounds={false}
        onTransformed={(e) => handleScaleChange(e)}
      >
        <Controls />

        <div className="d-flex p-2">
          <div>
            <TransformComponent>
              <img
                style={{
                  minWidth: `1308px`,
                  maxWidth: `1308px`,
                  minHeight: `${dimensions.height}px`,
                  maxHeight: `${dimensions.height}px`,
                }}
                src={img1}
              ></img>
              {/* <Board
                  scale={scale}
                  USMapRegions={USMapRegions}
                  japanMapRegions={japanMapRegions}
                  japanMIFMapRegions={japanMIFMapRegions}
                  japanStrikePanelEnabled={japanStrikePanelEnabled}
                  usStrikePanelEnabled={usStrikePanelEnabled}
                  enabledJapanFleetBoxes={enabledJapanFleetBoxes}
                  enabledUSFleetBoxes={enabledUSFleetBoxes}
                  en%bledJapanReorgBoxes={enabledJapanReorgBoxes}
                  enabledUSReorgBoxes={enabledUSReorgBoxes}
                  setPreviousPosition={setPreviousPosition}
                  previousPosition={previousPosition}
                /> */}
            </TransformComponent>
          </div>
        </div>
      </TransformWrapper>
    </>
  )
}
