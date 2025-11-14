import Tab from "react-bootstrap/Tab"
import Tabs from "react-bootstrap/Tabs"
import "./Tabs.css"

function TabbedPane({ label1, label2, tab1, tab2 }) {
  return (
    <Tabs
      className="my-custom-tabs"
      defaultActiveKey="profile"
      id="fill-tab-example"
      mountOnEnter={true}
      unmountOnExit={true}
      transition={true}
    >
      <Tab eventKey="home" title={label1}>
        <div className="my-custom-tabs" style={{ minHeight: "50rem" }}>
          {" "}
          {tab1}
        </div>
      </Tab>
      <Tab eventKey="profile" title={label2}>
        <div className="my-custom-tabs" style={{ minHeight: "50rem" }}>
          {" "}
          {tab2}
        </div>
      </Tab>
      <Tab eventKey="longer-tab" title="Wars">
        <div style={{ height: "50rem" }}></div>
      </Tab>
      <Tab eventKey="contact" title="Roman Units">
        <div style={{ height: "50rem" }}></div>
      </Tab>
    </Tabs>
  )
}

export default TabbedPane
