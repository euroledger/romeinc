// ProvinceBoxVisual.jsx
import React, { memo } from "react";

/**
 * Visual debug box for province stack positions.
 *
 * Props:
 *  - top: number (percent)
 *  - left: number (percent)
 *  - width: number (percent) optional, default 3.6
 *  - height: number (percent) optional, default 5.2
 *  - color: css color string optional
 *  - label: string optional
 */
function ProvinceBoxVisual({
  top,
  left,
  width,
  height,
  color = "rgba(255,0,0,0.25)",
  label,
}) {

    console.log("LABEL:", label, "TOP:", top, "LEFT:", left)
  const style = {
    position: "absolute",
    top: `${top - 0.9}%`,
    left: `${left - 0.7}%`,
    width: `${width}%`,
    height: `${height}%`,
    transform: "translate(-50%, -50%)",
    backgroundColor: color,
    // border: "1px solid rgba(0,0,0,0.6)",
    // boxSizing: "border-box",
    zIndex: 9999,
    // pointerEvents: "none", // won't interfere with hover/click
    // display: "flex",
    // alignItems: "center",
    // justifyContent: "center",
    // fontSize: "0.7rem",
    // color: "white",
    // textShadow: "0 1px 0 rgba(0,0,0,0.6)",
    // borderRadius: 4,
  };

  return (
    <div style={style} aria-hidden>
      {label && (
        <div style={{ padding: "2px 6px", background: "rgba(0,0,0,0.25)", borderRadius: 4 }}>
          {label}
        </div>
      )}
    </div>
  );
}

export default memo(ProvinceBoxVisual);
