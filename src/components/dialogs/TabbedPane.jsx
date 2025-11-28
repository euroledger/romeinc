import Tab from "react-bootstrap/Tab"
import Tabs from "react-bootstrap/Tabs"
import { Button } from "react-bootstrap"
import "./Tabs.css"

function TabbedPane({ label1, label2, tab1, tab2, label3, tab3, tab3Click, tab4, label4 }) {
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
        <div className="my-custom-tabs" style={{ minHeight: "51rem" }}>
          {tab1}
        </div>
      </Tab>
      <Tab eventKey="profile" title={label2}>
        <div className="my-custom-tabs" style={{ minHeight: "51rem" }}>
          {tab2}
        </div>
      </Tab>
      <Tab eventKey="legions" title={label3}>
        <div className="my-custom-tabs" style={{ minHeight: "49.5rem" }}>
          {tab3}
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Button
            onClick={tab3Click}
            style={{
              marginTop: "1rem",
              color: "black",
              backgroundColor: "#babac8ff",
              minWidth: "10rem",
              minHeight: "1.5rem",
            }}
          >
            TEST
          </Button>
        </div>
      </Tab>
      <Tab eventKey="barbarians" title={label4}>
        <div className="my-custom-tabs" style={{ minHeight: "51rem" }}>
          {tab4}
        </div>
      </Tab>
    </Tabs>
  )
}

export default TabbedPane
