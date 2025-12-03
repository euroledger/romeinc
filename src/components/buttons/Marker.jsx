import React, { useState } from "react"

function Marker({ counterData }) {
  const [position, setPosition] = useState({
    left: counterData.position.left,
    top: counterData.position.top,
  })

  let disp = "block"
  return (
    <>
      <div>
        <input
          type="image"
          src={counterData.image}
          style={{
            position: "absolute",
            width: counterData.width,
            display: disp,
            left: position.left,
            top: position.top,
            zIndex: 100,
            // "&:focus": {
            //   borderRadius: "2px",
            //   border: "3px solid rgb(197,9,9)",
            // },
          }}
        />
      </div>
    </>
  )
}

export default Marker
