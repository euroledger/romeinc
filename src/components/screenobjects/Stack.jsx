// Stack.jsx

import React, { useMemo, memo, useState, useCallback } from "react"
import { CSSTransition } from "react-transition-group" // Import CSSTransition
import Counter from "./Counter"
import Popup from "./Popup"

// Define the threshold (e.g., if the stack is within the top 20% of the board, flip the popup direction)
const TOP_THRESHOLD_PERCENT = 20
// Set a timeout duration for the animation (must match CSS transition time in Popup.css)
const ANIMATION_TIMEOUT = 300

function Stack({ provinceData, currentScale, areaHeight, areaWidth }) {
  const [isExpanded, setIsExpanded] = useState(false)
  const [isHovered, setIsHovered] = useState(false)
  // We no longer need hoverBasePosition state as it's derived from useMemo

  const toggleExpand = useCallback(() => {
    setIsExpanded((prev) => !prev)
  }, [])

  // Stable hover handlers for the entire stack area (attached to the main div)
  const handleMouseEnter = useCallback(() => {
    setIsHovered(true)
  }, [])
  const handleMouseLeave = useCallback(() => {
    setIsHovered(false)
  }, [])

  const OFFSET_AMOUNT_PX = useMemo(() => (isExpanded ? 10 : 3), [isExpanded])

  // Derive the single stable anchor position for the stack area upfront
  const stableAnchorPosition = useMemo(() => {
    // Assuming the first counter in the list is the top-left one
    if (provinceData.counters.length > 0) {
      return provinceData.counters[0].position // Access the first item's position
    }
    // return { top: 0, left: 0 } // Fallback
    return { top: provinceData.baseTop || 0, left: provinceData.baseLeft || 0 }
  }, [provinceData.counters, provinceData.baseLeft, provinceData.baseTop])

  // Check if the stack is near the top edge based on the stable position
  const isNearTopEdge = stableAnchorPosition.top < TOP_THRESHOLD_PERCENT

  // --- NEW ANCHOR COMPONENT ---
  const HoverAnchor = memo(({ stableAnchorPosition, areaWidth, areaHeight, onMouseEnter, onMouseLeave }) => {
    const style = {
      position: "absolute",
      top: `${stableAnchorPosition.top}%`,
      left: `${stableAnchorPosition.left}%`,
      width: `${areaWidth}%`,
      height: `${areaHeight}%`,
      transform: "translate(-50%, -50%)",
      backgroundColor: "rgba(75, 60, 52, 0.6)",

      zIndex: 100, // Above canvas
      cursor: "pointer",
      // backgroundColor: "rgba(0, 255, 0, 0.3)", // Debug color for the anchor div
    }
    // This div captures all mouse events for the province area
    return <div style={style} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} />
  })

  // *** FIX: Add display name ***
  HoverAnchor.displayName = "HoverAnchor"

  // ----------------------------
  const renderedCounters = useMemo(() => {
    const groups = {}
    provinceData.counters.forEach((counterData) => {
      const key = counterData.stackPositionId
      if (!groups[key]) {
        groups[key] = []
      }
      groups[key].push(counterData)
    })

    return Object.keys(groups).flatMap((positionIdKey) => {
      const countersInVisualStack = groups[positionIdKey]

      return countersInVisualStack.map((counterData, i) => {
        const key = counterData.id || `${positionIdKey}-${i}`
        return (
          <Counter
            key={key}
            counterData={counterData}
            index={i}
            offsetAmount={OFFSET_AMOUNT_PX}
            onDoubleClick={toggleExpand}
            // Handlers passed to every counter for hover detection
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            currentScale={currentScale}
          />
        )
      })
    })
  }, [provinceData.counters, OFFSET_AMOUNT_PX, toggleExpand, currentScale, handleMouseEnter, handleMouseLeave])

  const PopupComponent = (
    <CSSTransition in={isHovered} timeout={ANIMATION_TIMEOUT} classNames="popup" unmountOnExit>
      <Popup
        provinceName={provinceData.provinceName}
        provinceGold={provinceData.provinceGold}
        counters={provinceData.counters}
        basePosition={stableAnchorPosition}
        flipDirection={isNearTopEdge}
        currentScale={currentScale}
      />
    </CSSTransition>
  )
  if (renderedCounters.length === 0) {
    return (
      <>
        <HoverAnchor
          stableAnchorPosition={stableAnchorPosition}
          areaWidth={areaWidth}
          areaHeight={areaHeight}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        />
        {PopupComponent}
      </>
    )
  } else {
    return (
      <div>
        <HoverAnchor
          stableAnchorPosition={stableAnchorPosition}
          areaWidth={areaWidth}
          areaHeight={areaHeight}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        />
        {renderedCounters}
        {PopupComponent}
      </div>
    )
  }
}

export default memo(Stack)
