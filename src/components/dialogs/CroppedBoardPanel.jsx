import Modal from "react-bootstrap/Modal"
import Button from "react-bootstrap/Button"
import GlobalUIConstants from "../../model/GlobalUIConstants"
import "./modal.css"

function CroppedBoardPanel(props) {
  const { show, onClose, title, imagesrc, ...rest } = props
  const dynamicWidth = props.width ? props.width : GlobalUIConstants.Defaults.MODAL_WIDTH

  const bg = GlobalUIConstants.Colors.PRIMARY

  return (
    <Modal
      {...props}
      contentClassName="custom-modal-content"
      dialogClassName="dynamic-modal-dialog"
      style={{ "--modal-width": dynamicWidth, display: "flex", justifyContent: "center", alignItems: "center" }}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body
        style={{
          backgroundColor: "#610C0F",
          color: "black",
        }}
      >
        <div style={{ display: "block", marginLeft: "auto", marginRight: "auto" }}>
          {imagesrc && <img src={imagesrc} alt="Zoomed Area" style={{ marginLeft: "7rem", maxHeight: "700px" }} />}
        </div>
      </Modal.Body>
      <Modal.Footer style={{ backgroundColor: "#610C0F", color: "black" }}>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  )
}

export default CroppedBoardPanel
