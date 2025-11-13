import Modal from "react-bootstrap/Modal"
import Button from "react-bootstrap/Button"
import "./modal.css"
import ImageGrid from "./ImageGrid"
import GlobalUIConstants from "../../model/GlobalUIConstants"
import TabbedPane from "./TabbedPane"

function CountersPanel(props) {
  const sidebg = GlobalUIConstants.Colors.PRIMARY
  const dynamicWidth = props.width ? props.width : GlobalUIConstants.Defaults.MODAL_WIDTH

  const imagesSm = props.statesmen.map((item) => {
    return {
      name: item.name,
      url: item.image,
      alt: item.name,
    }
  })

  const imagesLdr = props.leaders.map((item) => {
    return {
      name: item.name,
      url: item.imageFront,
      alt: item.name,
    }
  })
  return (
    <Modal
      {...props}
      dialogClassName="dynamic-modal-dialog" // Reference the class from CSS
      style={{ "--modal-width": dynamicWidth, "--modal-height": "80rem" }}
      aria-labelledby="contained-modal-title-vcenter"
      centered
      backdrop="static"
    >
      <Modal.Header
        style={{
          background: `${sidebg}`,
          color: "white",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1>COUNTERS</h1>
      </Modal.Header>
      <Modal.Body style={{ background: `${sidebg}`, color: "white" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginBottom: "2rem",
            fontSize: "2rem",
          }}
        >
          Click on tab to see Counters
        </div>
        <div
          style={{
            marginLeft: "2rem",
          }}
        >
          {/* <ImageGrid images={images}></ImageGrid> */}
          <TabbedPane
            label1="Statesmen"
            tab1={<ImageGrid images={imagesSm} cols={11}></ImageGrid>}
            label2="Leaders"
            tab2={<ImageGrid images={imagesLdr} cols={5}></ImageGrid>}
          ></TabbedPane>
        </div>
      </Modal.Body>
      <Modal.Footer style={{ background: `${sidebg}`, color: "black" }}>
        <Button onClick={(e) => props.onHide(false)}>Close</Button>
      </Modal.Footer>
    </Modal>
  )
}

export default CountersPanel
