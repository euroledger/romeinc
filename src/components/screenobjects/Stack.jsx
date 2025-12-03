// Stack.jsx 

import React, { useMemo, memo, useState, useCallback } from "react";
import { CSSTransition } from 'react-transition-group'; // Import CSSTransition
import Counter from "./Counter"; 
import Popup from "./Popup"; 

// Define the threshold (e.g., if the stack is within the top 20% of the board, flip the popup direction)
const TOP_THRESHOLD_PERCENT = 20;
// Set a timeout duration for the animation (must match CSS transition time in Popup.css)
const ANIMATION_TIMEOUT = 300; 

function Stack({ provinceData }) { 
    const [isExpanded, setIsExpanded] = useState(false);
    const [isHovered, setIsHovered] = useState(false); 
    // We no longer need hoverBasePosition state as it's derived from useMemo

    const toggleExpand = useCallback(() => { setIsExpanded(prev => !prev); }, []); 
    
    // Stable hover handlers for the entire stack area (attached to the main div)
    const handleMouseEnter = useCallback(() => { setIsHovered(true); }, []);
    const handleMouseLeave = useCallback(() => { setIsHovered(false); }, []);

    const OFFSET_AMOUNT_PX = useMemo(() => isExpanded ? 10 : 3, [isExpanded]);
    
    // Derive the single stable anchor position for the stack area upfront
    const stableAnchorPosition = useMemo(() => {
        // Assuming the first counter in the list is the top-left one
        if (provinceData.counters.length > 0) {
            return provinceData.counters[0].position; // Access the first item's position
        }
        return { top: 0, left: 0 }; // Fallback
    }, [provinceData.counters]);

    // Check if the stack is near the top edge based on the stable position
    const isNearTopEdge = stableAnchorPosition.top < TOP_THRESHOLD_PERCENT;

    const renderedCounters = useMemo(() => {
        const groups = {}; 
        provinceData.counters.forEach(counterData => { 
            const key = counterData.stackPositionId; 
            if (!groups[key]) { groups[key] = []; }
            groups[key].push(counterData);
        });

        return Object.keys(groups).flatMap(positionIdKey => {
            const countersInVisualStack = groups[positionIdKey];
            
            return countersInVisualStack.map((counterData, i) => {
                const key = counterData.id || `${positionIdKey}-${i}`;
                return (
                    <Counter key={key} counterData={counterData} index={i} offsetAmount={OFFSET_AMOUNT_PX}
                        onDoubleClick={toggleExpand}
                        // Hover handlers are managed by the parent div, not individual counters
                    />
                );
            });
        });
    }, [provinceData.counters, OFFSET_AMOUNT_PX, toggleExpand]); 

    return (
        // Attach hover handlers to this main wrapper div for the entire stack area
        <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            {renderedCounters}
            
            {/* Use CSSTransition to manage the fade */}
            <CSSTransition
                in={isHovered} // 'in' prop toggles visibility/animation state
                timeout={ANIMATION_TIMEOUT}
                classNames="popup" // Prefixes CSS classes (popup-enter, popup-enter-active, etc.)
                unmountOnExit // Removes the component entirely when finished exiting
            >
                {/* CSSTransition expects the component to animate inside it */}
                <Popup 
                    provinceName={provinceData.provinceName}
                    provinceGold={provinceData.provinceGold}
                    counters={provinceData.counters} 
                    basePosition={stableAnchorPosition} 
                    flipDirection={isNearTopEdge}
                />
            </CSSTransition>

        </div>
    );
}

export default memo(Stack);
