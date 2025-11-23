// import { React, useState } from "react"
// import Modal from "react-bootstrap/Modal"
// import Button from "react-bootstrap/Button"
// import GlobalUnitsModel from "../../model/GlobalUnitsModel"
// import GlobalGameState from "../../model/GlobalGameState"
// import GlobalUIConstants from "../../model/GlobalUIConstants"
// import GlobalInit from "../../model/GlobalInit"
// import "./Splash.css"

// function ImageModal(props) {
//   const { setSplashShow, ...rest } = props

//   return (
//     <Modal {...rest} aria-labelledby="contained-modal-title-vcenter" centered>
//       <div
//         style={{
//           position: "absolute",
//           left: "50%",
//           top: "50%",
//           transform: "translate(-50%, -50%)",
//         }}
//       >
//         <img src="/images/romesplash2.jpg" />
//       </div>
//     </Modal>
//   )
// }

// export default ImageModal

import Modal from "react-bootstrap/Modal"
import Button from "react-bootstrap/Button"
// import GameStatePanel from "../leftpanel/GameStatePanel"
import "./modal.css"

function GameStatusPanel(props) {
  const bg = "#003300"
  return (
    <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Body style={{ backgroundColor: "#003300", color: "black" }}>
        <div> HEY THERE!</div>
      </Modal.Body>
      <Modal.Footer style={{ backgroundColor: "#003300", color: "black" }}>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  )
}

export default GameStatusPanel

