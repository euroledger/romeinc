// Popup.jsx
import React, { memo, useMemo, forwardRef } from "react"
import "./Popup.css"

const POPUP_OFFSET_Y_PX = 35
const POPUP_OFFSET_X_PX = 140
const BORDER_RADIUS_PX = 8
const MIN_POPUP_WIDTH_PX = 200

const Popup = forwardRef(function Popup(
  {
    counters,
    basePosition,
    provinceName,
    provinceHomeland,
    provinceGold,
    provinceCommand,
    flipDirection,
    flipDirectionX,
    currentScale,
    // hover handlers forwarded from parent (optional)
    onMouseEnter,
    onMouseLeave,
    onPointerEnter,
    onPointerLeave,
  },
  ref
) {
  const topOffset = flipDirection ? POPUP_OFFSET_Y_PX : -POPUP_OFFSET_Y_PX
  const rightOffset = flipDirectionX ? -POPUP_OFFSET_X_PX : 0

  const transformValue = `scale(${1 / currentScale}) translateY(${flipDirection ? "0%" : "-100%"})`

  const sortedCounters = useMemo(() => {
    return [...counters].sort((a, b) => a.stackPositionId - b.stackPositionId)
  }, [counters])

  let backgroundColor = "rgba(75, 60, 52, 0.9)"
  if (provinceHomeland) {
    backgroundColor = "rgba(121, 122, 63, 0.9)"
  }

  console.log("NAME:", provinceName, "flipDirectionX=", flipDirectionX)
  return (
    <div
      ref={ref} // forward the ref so CSSTransition can use nodeRef safely
      className="popup-container"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onPointerEnter={onPointerEnter}
      onPointerLeave={onPointerLeave}
      style={{
        position: "absolute",
        top: `calc(${basePosition.top}% + ${topOffset}px)`,
        left: `calc(${basePosition.left}% + ${rightOffset}px)`,
        backgroundColor,
        border: "1px solid black",
        padding: "1rem",
        zIndex: 10000,
        boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
        color: "white",
        fontFamily: "Cinzel, serif",
        borderRadius: `${BORDER_RADIUS_PX}px`,
        minWidth: `${MIN_POPUP_WIDTH_PX}px`,
        transform: transformValue,
        transformOrigin: "top left",
        pointerEvents: "none", // Makes the popup "ghost-like" so it won't block the leave event
      }}
    >
      <div style={{ fontWeight: "bold", marginBottom: "8px" }}>
        <div style={{ marginBottom: "2px", fontSize: "1.3rem", fontWeight: "600" }}>{provinceName}</div>
        {provinceGold && (
          <div style={{ paddingTop: "10px", paddingBottom: "6px" }}>
            Gold: <strong>{provinceGold}</strong>
          </div>
        )}
        {provinceCommand && (
          <div style={{ borderBottom: "1px solid white", paddingBottom: "16px" }}>
            Command: <strong>{provinceCommand}</strong>
          </div>
        )}
        {provinceHomeland && (
          <div style={{ borderBottom: "1px solid white", paddingTop: "10px", paddingBottom: "16px" }}>(Homeland)</div>
        )}
      </div>

      <div style={{ display: "flex", flexDirection: "row", gap: "5px" }}>
        {sortedCounters.map((counter) => (
          <img key={counter.id} src={counter.image} alt={counter.name} style={{ width: "40px", height: "auto" }} />
        ))}
      </div>
    </div>
  )
})

export default memo(Popup)
