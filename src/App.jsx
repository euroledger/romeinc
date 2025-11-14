import { useState, useRef, useEffect, createContext } from "react"
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch"
import img1 from "/images/romemap2.jpg"
import img2 from "/images/banner.jpg"
import { windowsInit } from "./utils"
import { Controls } from "./components/Controls"
import Board from "./components/Board"
import { DialogContext } from "./Context"
import "./App.css"
import Dialogs from "./components/dialogs/Dialogs"

export default App

export function App() {
  const bollocksStr = "PISS OFF"
  const navBarFont = "cinzel-regular"
  windowsInit()

  const [zoomPP, setZoomPP] = useState({})

  const [modalShow, setModalShow] = useState(false)

  function handleScaleChange(event) {
    setZoomPP({
      scale: event.instance.transformState.scale,
      panX: event.instance.transformState.positionX,
      panY: event.instance.transformState.positionY,
    })
    // console.log("scale=", scale)
    // console.log("positionX=", event.instance.transformState.positionX)
    console.log("1 panY=", event.instance.transformState.positionY)
  }
  function bollocks() {
    setModalShow(true)
  }

  return (
    <>
      <TransformWrapper
        initialScale={1}
        minScale={0.5}
        maxScale={6}
        limitToBounds={false}
        onTransformed={(e) => handleScaleChange(e)}
      >
        <Controls clicky={bollocks} setnavBarFont={navBarFont} banner={img2}></Controls>
        <div>
          <main className="image-container">
            <TransformComponent>
              <DialogContext.Provider
                value={{
                  modalShow: modalShow,
                  setModalShow,
                }}
              >
                <Dialogs></Dialogs>
              </DialogContext.Provider>
              {/* <img
                // style={{
                //   width: `100%`,
                //   height: 'auto'
                // }}
                src={img1}
              ></img> */}
              <Board zoomPP={zoomPP} image={img1}></Board>
            </TransformComponent>
          </main>
        </div>
      </TransformWrapper>
    </>
  )
}
