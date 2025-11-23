import Canvas from "./Canvas"
function Board({ canvasRef, zoomPP, image, setBoardReady }) {


  return (
    <>
      <Canvas ref={canvasRef} zoomPP={zoomPP} image={image} setBoardReady={setBoardReady}></Canvas> 
    </>
  )
}

export default Board
