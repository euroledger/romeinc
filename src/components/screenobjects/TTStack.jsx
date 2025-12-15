// TTStack.jsx (Amended Logic)

import React, { memo, useCallback, useMemo } from 'react';

// Define the offsets here for use in the style calc (must match TreasuryTrackStacks constants)
const EXPANDED_OFFSET_PX_VERTICAL = 15; 
const COLLAPSED_OFFSET_PX_VERTICAL = 5; 
const EXPANDED_OFFSET_PX_HORIZONTAL = 10;
const COLLAPSED_OFFSET_PX_HORIZONTAL = 3;


function TTStack({ data, isExpanded, toggleExpand }) {

    const handleDoubleClick = useCallback((event) => {
        event.stopPropagation();
        toggleExpand(data.stackKey); 
    }, [data.stackKey, toggleExpand]);

    const dynamicStyle = useMemo(() => {
        const vertOffsetAmount = isExpanded ? EXPANDED_OFFSET_PX_VERTICAL : COLLAPSED_OFFSET_PX_VERTICAL;
        const horizOffsetAmount = isExpanded ? EXPANDED_OFFSET_PX_HORIZONTAL : COLLAPSED_OFFSET_PX_HORIZONTAL;

        const offsetX_px = data.stackIndex * horizOffsetAmount;
        // CHANGE HERE: Apply a negative offset to move UP the screen
        const offsetY_px = data.stackIndex * -vertOffsetAmount; 

        return {
            position: "absolute",
            width: data.width, // This is still "1.6%"
            // Use calc() to combine percentage base position with pixel offset for stacking/expanding
            top: `calc(${data.position.top} + ${offsetY_px}px)`,
            left: `calc(${data.position.left} + ${offsetX_px}px)`,
            zIndex: 500 + data.stackIndex, 
            cursor: "pointer",
            transition: "all 0.2s ease-in-out", 
            pointerEvents: "auto",
        };
    }, [data, isExpanded]); 

    return (
        <div>
            <input
                type="image"
                src={data.image}
                style={dynamicStyle}
                alt={data.name}
                onDoubleClick={handleDoubleClick}
            />
        </div>
    );
}

export default memo(TTStack);
