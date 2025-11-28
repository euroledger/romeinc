import Canvas from "./Canvas"
import GlobalInit from "../../model/GlobalInit"
import Marker from "../buttons/Marker"
import { PROVINCES } from "../screenobjects/Provinces"

function Board({ canvasRef, zoomPP, image, setBoardReady }) {
  const barbarianMarker = GlobalInit.counters.provincemarkers.get("BARBARIAN 14")

  const left = PROVINCES[0].left 
  const top  = PROVINCES[0].top 

  const counterData = {
    image: barbarianMarker.image,
    position: {
      left: left,
      top: top
    },
    width: "1.9%"
  }

  return (
    <>
      <Canvas ref={canvasRef} zoomPP={zoomPP} image={image} setBoardReady={setBoardReady}></Canvas>
      <Marker counterData={counterData}></Marker>
    </>
  )
}

export default Board
