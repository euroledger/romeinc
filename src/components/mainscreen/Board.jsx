import Canvas from "./Canvas"
import { PROVINCES } from "../screenobjects/Provinces"
function Board({ zoomPP, image }) {


  return (
    <>
      <Canvas zoomPP={zoomPP} image={image} circlesList={PROVINCES}></Canvas> 
    </>
  )
}

export default Board
