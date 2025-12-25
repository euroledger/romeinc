import React, { useMemo, memo, useRef, useState, useCallback } from "react"
import { CSSTransition } from "react-transition-group"
import Counter from "./Counter"
import Popup from "./Popup"

// Flip threshold percentages
const TOP_THRESHOLD_PERCENT = 30
const RIGHT_THRESHOLD_PERCENT = 75
const ANIMATION_TIMEOUT = 700

function Stack({ provinceData, currentScale, areaHeight, areaWidth }) {
  const [isExpanded, setIsExpanded] = useState(false)
  const [isHovered, setIsHovered] = useState(false)
  const nodeRef = useRef(null)

  // Use stable handlers to prevent re-renders
  const show = useCallback(() => setIsHovered(true), [])
  const hide = useCallback(() => setIsHovered(false), [])

  const toggleExpand = useCallback(() => {
    setIsExpanded((prev) => !prev)
  }, [])

  const OFFSET_AMOUNT_PX = useMemo(() => (isExpanded ? 10 : 3), [isExpanded])

  // Derive stable anchor position for the province
  const stableAnchorPosition = useMemo(() => {
    if (provinceData.counters.length > 0) {
      return provinceData.counters[0].position
    }
    return { top: provinceData.baseTop || 0, left: provinceData.baseLeft || 0 }
  }, [provinceData.counters, provinceData.baseLeft, provinceData.baseTop])

  const isNearTopEdge = stableAnchorPosition.top < TOP_THRESHOLD_PERCENT
  const isNearRightEdge = stableAnchorPosition.left > RIGHT_THRESHOLD_PERCENT

  // Detection Anchor Component
  const HoverAnchor = memo(({ stableAnchorPosition, areaWidth, areaHeight }) => {
    const style = {
      position: "absolute",
      top: `${stableAnchorPosition.top}%`,
      left: `${stableAnchorPosition.left}%`,
      width: `${areaWidth}%`,
      height: `${areaHeight}%`,
      transform: "translate(-50%, -50%)",
      zIndex: 100,
      cursor: "pointer",
      pointerEvents: "auto", // Crucial: This child captures the events
    }
    return <div style={style} />
  })
  HoverAnchor.displayName = "HoverAnchor"

  const renderedCounters = useMemo(() => {
    const groups = {}
    provinceData.counters.forEach((counterData) => {
      const key = counterData.stackPositionId
      if (!groups[key]) groups[key] = []
      groups[key].push(counterData)
    })

    const COMP_LEFT_PERCENT = provinceData.homeland ? 0.9 : 1.8
    const COMP_TOP_PERCENT = provinceData.homeland ? 1.6 : 2.6

    return Object.keys(groups).flatMap((positionIdKey) => {
      const countersInVisualStack = groups[positionIdKey]
      return countersInVisualStack.map((counterData, i) => (
        <Counter
          key={counterData.id || `${positionIdKey}-${i}`}
          leftOffset={COMP_LEFT_PERCENT}
          topOffset={COMP_TOP_PERCENT}
          counterData={counterData}
          index={i}
          offsetAmount={OFFSET_AMOUNT_PX}
          onDoubleClick={toggleExpand}
          currentScale={currentScale}
          // Individual counters also report hover to the shared state
          onMouseEnter={show}
          onMouseLeave={hide}
        />
      ))
    })
  }, [OFFSET_AMOUNT_PX, toggleExpand, currentScale, show, hide, provinceData])

  return (
    // PARENT WRAPPER: Must be absolute 100x100 to avoid collapsing 
    // but pointerEvents: none so it doesn't block other provinces.
    <div 
      style={{ 
        position: 'absolute', 
        top: 0, 
        left: 0, 
        width: '100%', 
        height: '100%', 
        pointerEvents: 'none' 
      }}
    >
      {/* DETECTION AREA: High z-index to capture hover */}
      <div 
        onMouseEnter={show} 
        onMouseLeave={hide} 
        style={{ pointerEvents: 'auto' }}
      >
        <HoverAnchor
          stableAnchorPosition={stableAnchorPosition}
          areaWidth={areaWidth}
          areaHeight={areaHeight}
        />
        {renderedCounters}
      </div>

      <CSSTransition 
        nodeRef={nodeRef} 
        in={isHovered} 
        timeout={ANIMATION_TIMEOUT} 
        classNames="popup" 
        unmountOnExit
      >
        <Popup
          provinceName={provinceData.provinceName}
          provinceGold={provinceData.provinceGold}
          provinceHomeland={provinceData.homeland}
          provinceCommand={provinceData.provinceCommand}
          counters={provinceData.counters}
          basePosition={stableAnchorPosition}
          flipDirection={isNearTopEdge}
          flipDirectionX={isNearRightEdge}
          currentScale={currentScale}
          ref={nodeRef}
        />
      </CSSTransition>
    </div>
  )
}

export default memo(Stack)
