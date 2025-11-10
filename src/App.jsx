import { useState, } from "react"
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch"
import img1 from "./assets/romemap.jpg"
import img2 from "./assets/banner.jpg"
import { windowsInit } from "./utils"
import { Controls } from "./components/Controls"
import GlobalInit from "./model/GlobalInit"
import "./App.css"

export default App

export function App() {
  const navBarFont = "cinzel-regular"
  windowsInit()

  const { innerWidth: width, innerHeight: height } = window

  console.log("HEIGHT=", innerHeight)
  console.log("WIDTH=", innerWidth)

  const [scale, setScale] = useState(1)

  function handleScaleChange(event) {
    setScale(event.instance.transformState.scale)
    // console.log("scale=", scale)
  }

  // console.log(">>> width=", dimensions.width)
  // console.log(">>> height=", dimensions.height)

  return (
    <>
      <TransformWrapper
        initialScale={1}
        minScale={0.5}
        maxScale={6}
        limitToBounds={false}
        onTransformed={(e) => handleScaleChange(e)}
      >
        <Controls navBarFont={navBarFont} banner={img2}></Controls>

        <div className="d-flex p-2">
          <div>
            <TransformComponent>
              <img
                style={{
                  width: `${innerWidth}px`,
                  height: `864px`,
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
