import Canvas from "./Canvas"
import GlobalInit from "../../model/GlobalInit"
import Marker from "../buttons/Marker"
import Stacks from "../screenobjects/Stacks"


function Board({ canvasRef, zoomPP, image, setBoardReady }) {
  return (
    <>
      <Canvas ref={canvasRef} zoomPP={zoomPP} image={image} setBoardReady={setBoardReady}></Canvas>
      <Stacks controller={GlobalInit.controller}></Stacks>
    </>
  )
}

export default Board
