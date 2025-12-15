import { useState, useRef } from "react"
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch"
import img1 from "/images/romemap2.jpg"
import img2 from "/images/banner.jpg"
import { windowsInit } from "./utils"
import { Controls } from "./components/mainscreen/Controls"
import Board from "./components/mainscreen/Board"
import generateCroppedModalImage from "./ImageCrop"
import { DialogContext } from "./GameStateContext"
import { GameStateProvider } from "./GameStateProvider"
import "./App.css"
import Dialogs from "./components/dialogs/Dialogs"
import SplashScreen from "./components/dialogs/SplashScreen"
import GlobalGameState from "./model/GlobalGameState"
import CroppedBoardPanel from "./components/dialogs/CroppedBoardPanel"
import GlobalInit from "./model/GlobalInit"


GlobalInit.init()   // ✅ initialize before React renders anything

export default function App() {
  const [modalOpen, setModalOpen] = useState(false)
  const [zoomedImageSrc, setZoomedImageSrc] = useState("")
  const [isBoardReady, setIsBoardReady] = useState(false) // Add this state
  const [imageDimensions, setImageDimensions] = useState({ w: 0, h: 0, map: "" })
  const setBoardReady = () => setIsBoardReady(true)

  // We need a ref in the App component to access the Canvas component's underlying canvas element
  const canvasRef = useRef(null)


  // --- Modal Management Functions ---
  const openModal = (imageSrc) => {
    setZoomedImageSrc(imageSrc)
    setModalOpen(true)
  }

  const handleViewAreaClick = async (mapArea) => {
    if (!isBoardReady || !canvasRef.current) {
      alert("Board is still loading, please wait.")
      return
    }

    // Use a NEW function for the modal that handles both layers
    const croppedImageDataUrl = await generateCroppedModalImage(canvasRef.current, img1, mapArea, setImageDimensions)
    openModal(croppedImageDataUrl)
  }

  const navBarFont = "cinzel-regular"
  windowsInit()

  const [zoomPP, setZoomPP] = useState({})
  const [showSplash, setSplashShow] = useState(true)
  const [modalShow, setModalShow] = useState(false)

  function gameStateHandler() {
    // force re-render by replacing state with a new object reference
  }

  GlobalGameState.stateHandler = gameStateHandler

  function handleScaleChange(event) {
    setZoomPP({
      scale: event.instance.transformState.scale,
      panX: event.instance.transformState.positionX,
      panY: event.instance.transformState.positionY,
    })
    // console.log("scale=", scale)
    // console.log("positionX=", event.instance.transformState.positionX)
    // console.log("1 panY=", event.instance.transformState.positionY)
  }
  function bollocks() {
    setModalShow(true)
  }

  return (
    <>
      <CroppedBoardPanel
        width="30rem"
        imageWidth={imageDimensions.w}
        imageHeight={imageDimensions.h}
        map={imageDimensions.map}
        imagesrc={zoomedImageSrc}
        show={modalOpen}
        onHide={() => setModalOpen(false)}
      ></CroppedBoardPanel>

      {showSplash && <SplashScreen show={showSplash} setSplashShow={setSplashShow}></SplashScreen>}
      {!showSplash && (
        <>
          <TransformWrapper
            initialScale={1}
            minScale={0.5}
            doubleClick={{ disabled: true }}
            maxScale={6}
            limitToBounds={false}
            onTransformed={(e) => handleScaleChange(e)}
          >
            <GameStateProvider>
              <Controls
                onViewAreaClick={handleViewAreaClick}
                clicky={bollocks}
                setnavBarFont={navBarFont}
                banner={img2}
                // setGameState={setGameState}
              ></Controls>
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
                    <Board
                      // gameState={gameState}
                      canvasRef={canvasRef}
                      zoomPP={zoomPP}
                      image={img1}
                      setBoardReady={setBoardReady}
                    ></Board>
                  </TransformComponent>
                </main>
              </div>
            </GameStateProvider>
          </TransformWrapper>
        </>
      )}
    </>
  )
}
