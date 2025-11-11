import { useState, useRef, useEffect } from "react"
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch"
import img1 from "./assets/romemap2.jpg"
import img2 from "./assets/banner.jpg"
import { windowsInit } from "./utils"
import { Controls } from "./components/Controls"
import "./App.css"

export default App

export function App() {

  const navBarFont = "cinzel-regular"
  windowsInit()


  const [scale, setScale] = useState(1)

  function handleScaleChange(event) {
    setScale(event.instance.transformState.scale)
    // console.log("scale=", scale)
  }

  return (
    <div >
      <TransformWrapper
        initialScale={1}
        minScale={0.5}
        maxScale={6}
        limitToBounds={false}
        onTransformed={(e) => handleScaleChange(e)}
      >
        <Controls navBarFont={navBarFont} banner={img2}></Controls>
        <div>
          <main className="image-container">
            <TransformComponent>
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
    </div>
  )
}
