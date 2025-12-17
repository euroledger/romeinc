// Board.jsx\
import { useState } from "react"
import Canvas from "./Canvas"
import GlobalInit from "../../model/GlobalInit"
import Marker from "../buttons/Marker"
import Stacks from "../screenobjects/Stacks"
import SingleStacks from "../screenobjects/SingleStacks"
import TreasuryTrackStacks from "../screenobjects/TreasuryTrackStacks"
import TestStacks from "../screenobjects/TestStacks"
import GlobalGameState from "../../model/GlobalGameState"
import TestProvinces from "../screenobjects/TestProvinces"

function Board({ canvasRef, zoomPP, image, setBoardReady, gameState }) {


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
      {/* <TestStacks controller={GlobalInit.controller} currentScale={currentScale} /> */}
      {/* <TestProvinces showLabels={false}></TestProvinces> */}
      <TreasuryTrackStacks gameState={gameState} controller={GlobalInit.controller} currentScale={currentScale} />
    </>
  )
}

export default Board
