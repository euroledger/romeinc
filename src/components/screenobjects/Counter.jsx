// Counter.jsx

import React, { memo } from "react"

function Counter({ counterData, index, offsetAmount, onDoubleClick }) {
  // ... (rest of the component logic remains the same) ...
  const offsetX = index * offsetAmount
  const offsetY = index * -offsetAmount

  const handleDoubleClick = (event) => {
    event.stopPropagation()
    onDoubleClick()
  }

  const counterStyle = {
    position: "absolute",
    width: counterData.width,
    left: `${counterData.position.left}%`,
    top: `${counterData.position.top}%`,
    zIndex: 100 + index,
    display: "block",
    transform: `translate(${offsetX}px, ${offsetY}px)`,
    cursor: "pointer",
    transition: "transform 0.2s ease-in-out",
  }

  return (
    <div>
      <input
        type="image"
        src={counterData.image}
        style={counterStyle}
        alt={counterData.name}
        onDoubleClick={handleDoubleClick}
      />
    </div>
  )
}

export default memo(Counter)
