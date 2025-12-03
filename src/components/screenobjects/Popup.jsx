// Popup.jsx

import React, { memo, useMemo } from "react"
import './Popup.css'; 

const POPUP_OFFSET_Y_PX = 50; 
const POPUP_OFFSET_X_PX = 10;
const BORDER_RADIUS_PX = 8; 

function Popup({ counters, basePosition, provinceName, provinceGold, flipDirection }) {
  
  const topOffset = flipDirection ? POPUP_OFFSET_Y_PX : -POPUP_OFFSET_Y_PX;
  const transformDirection = flipDirection ? 'translateY(0%)' : 'translateY(-100%)';

  // --- ADDED SORTING LOGIC ---
  const sortedCounters = useMemo(() => {
    // Sort the counters array based on the stackPositionId (0, 1, 2, 3 order)
    return [...counters].sort((a, b) => {
        return a.stackPositionId - b.stackPositionId;
    });
  }, [counters]);

  return (
    <div
      className="popup-container"
      style={{
        position: "absolute",
        top: `calc(${basePosition.top}% + ${topOffset}px)`, 
        left: `calc(${basePosition.left}% + ${POPUP_OFFSET_X_PX}px)`, 
        backgroundColor: "rgba(75, 60, 52, 0.9)",
        border: "1px solid black",
        padding: "16px", 
        zIndex: 10000,
        boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
        transform: transformDirection,
        color: 'white', 
        fontFamily: 'Cinzel, serif', 
        borderRadius: `${BORDER_RADIUS_PX}px`, 
      }}
    >
      <div style={{ fontWeight: "bold", marginBottom: "8px" }}>
        <div style={{ marginBottom: "2px", fontSize: '1.3rem', fontWeight: '700' }}>
            {provinceName}
        </div>
        
        <div style={{ borderBottom: '1px solid white',paddingTop: '10px', paddingBottom: '16px' }}>Gold: {provinceGold}</div>
      </div>

      <div style={{ display: "flex", flexDirection: "row", gap: "5px" }}>
        {/* Use the sorted list of counters here */}
        {sortedCounters.map((counter) => (
          <img key={counter.id} src={counter.image} alt={counter.name} style={{ width: "40px", height: "auto" }} />
        ))}
      </div>
    </div>
  )
}

export default memo(Popup)
