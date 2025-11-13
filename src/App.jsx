import { useState, useRef, useEffect, createContext } from "react"
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch"
import img1 from "/images/romemap2.jpg"
import img2 from "/images/banner.jpg"
import { windowsInit } from "./utils"
import { Controls } from "./components/Controls"
import { DialogContext } from "./Context"
import "./App.css"
import Dialogs from "./components/dialogs/Dialogs"

export default App

export function App() {
  const bollocksStr = "PISS OFF"
  const navBarFont = "cinzel-regular"
  windowsInit()

  const [scale, setScale] = useState(1)

  const [modalShow, setModalShow] = useState(false)

  function handleScaleChange(event) {
    setScale(event.instance.transformState.scale)
    // console.log("scale=", scale)
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

              <img
                // style={{
                //   width: `100%`,
                //   height: 'auto'
                // }}
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
          </main>
        </div>
      </TransformWrapper>
    </>
  )
}
