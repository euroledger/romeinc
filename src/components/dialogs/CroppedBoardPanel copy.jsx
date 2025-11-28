import Button from "react-bootstrap/Button"
import { Modal, Image, Container, Row, Col } from "react-bootstrap"
import GlobalUIConstants from "../../model/GlobalUIConstants"

import "./modal.css"

function CroppedBoardPanel(props) {
  const { show, onClose, imageWidth, imageHeight, imagesrc, ...rest } = props
  let dynamicWidth = props.width ? props.width : GlobalUIConstants.Defaults.MODAL_WIDTH
  let dynamicHeight = props.height ?? "600px"

  dynamicWidth = `${imageWidth}px`
  dynamicHeight = `${imageHeight}px`

  console.log("width:", dynamicWidth, "height:", dynamicHeight)
  return (
    <Modal
      {...props}
      contentClassName="custom-modal-main-content"
      // dialogClassName="dynamic-modal-dialog"
  
      // size="lg"
      centered
    >
      <Modal.Body>
        <div style={{ width: "300px", height: "300px", backgroundColor: "yellow" }}>
          {/* 
        Ensure no "fluid" prop is used here. 
        The image will default to its intrinsic size which matches the div size. 
      */}
          {/* <Image
            // style={{ width: "100%", height: "auto" }} // or 100%
            src={imagesrc}
            fluid
            alt="Sized to container"
          /> */}
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button className="toggle-button2" onClick={props.onHide}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default CroppedBoardPanel
