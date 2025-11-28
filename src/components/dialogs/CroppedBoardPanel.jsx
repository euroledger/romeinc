import Button from "react-bootstrap/Button"
import { Modal, Image, Container, Row, Col } from "react-bootstrap"

import "./modal.css"

function CroppedBoardPanel(props) {
  const { show, onClose, imageWidth, imageHeight, map, imagesrc, ...rest } = props

  let dynamicWidth = imageWidth + "px"
  let dynamicHeight = imageHeight + "px"

  let widthHack = map == "Treasury" ? "100%" : "131%"
  return (
    <Modal
      {...props}
      centered
      contentClassName="custom-modal-main-content"
      dialogClassName="dynamic-modal-dialog"
      // Pass only the image dimensions (the core content width)
      style={{
        "--modal-width": dynamicWidth,
        "--modal-height": dynamicHeight,
      }}
    >
      <Modal.Body>
        {/* Uses default Bootstrap padding (1rem horizontal) */}
        <div className="image-wrapper-with-padding">
          <div style={{ backgroundColor: "yellow", width: "100%", height: "100%" }}>
            <img
              src={imagesrc}
              alt="Dynamic content"
              style={{
                width: widthHack,
                height: "100%",
                objectFit: "fill",
              }}
            />
          </div>
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
