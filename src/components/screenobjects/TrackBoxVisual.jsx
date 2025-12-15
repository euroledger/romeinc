// TrackBoxVisual.jsx
import { memo } from 'react';

function TrackBoxVisual({ top, left, width, currentScale, color = "rgba(255, 0, 0, 0.5)" }) {
    const style = {
        position: "absolute",
        top: `${top}%`,
        left: `${left}%`,
        width: "1.8%",    // Roughly the size of one of your counter slots
        height: "3.0%",   // Adjust height/width as needed for a square appearance
        backgroundColor: color,
        border: "1px solid white",
        zIndex: 500,
        pointerEvents: 'none', // Prevents it from interfering with other interactions
    };

    return <div style={style} />;
}

export default memo(TrackBoxVisual);
