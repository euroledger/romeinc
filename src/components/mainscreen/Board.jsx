import Canvas from "./Canvas"
import GlobalInit from "../../model/GlobalInit"
import Marker from "../buttons/Marker"
import Stacks from "../screenobjects/Stacks"
import SingleStacks from "../screenobjects/SingleStacks"

function Board({ canvasRef, zoomPP, image, setBoardReady }) {
  const currentScale = zoomPP.scale

  return (
    <>
      <Canvas
        ref={canvasRef}
        zoomPP={zoomPP}
        image={image}
        setBoardReady={setBoardReady}
        style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", pointerEvents: "none" }}
      />

      {/* Pass the current scale down to Stacks */}
      <Stacks controller={GlobalInit.controller} currentScale={currentScale} />
      <SingleStacks controller={GlobalInit.controller} currentScale={currentScale} />
    </>
  )
}

export default Board
