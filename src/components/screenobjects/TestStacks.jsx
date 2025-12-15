// TestStacks.jsx

import React, { useCallback, useState, useEffect, useMemo, memo } from "react"
import { 
  TREASURY_TRACK_START_BOX, 
  TT_OFFSETS_PERCENT,
  VERTICAL_ROW_SPACING_PERCENT, 
  NUMBER_OF_ROWS                
} from "./data/TreasuryTrack" // Ensure path is correct
import TrackBoxVisual from "./TrackBoxVisual" 

// Renamed component from TreasuryTrackStacks to TestStacks as requested
function TestStacks() { 
  const [allBoxPositions, setAllBoxPositions] = useState([])

  const generateAllBoxPositions = useCallback(() => {
    const positions = []
    const startTop = TREASURY_TRACK_START_BOX.top;
    const startLeft = TREASURY_TRACK_START_BOX.left;

    // Loop through all 15 rows (index 0 to 14)
    for (let row = 0; row < NUMBER_OF_ROWS; row++) {
      // Calculate the base vertical position for this specific row
      const baseRowTop = startTop + (row * VERTICAL_ROW_SPACING_PERCENT);

      // Loop through all 3 columns within the current row
      TT_OFFSETS_PERCENT.forEach((offset) => {
        const top = baseRowTop + offset.top;
        const left = startLeft + offset.left;

        positions.push({ top, left });
      });
    }

    setAllBoxPositions(positions);
  }, []);

  useEffect(() => {
    generateAllBoxPositions()
  }, [generateAllBoxPositions])

  const renderedBoxes = useMemo(() => {
    return allBoxPositions.map((pos, i) => {
      return (
        <TrackBoxVisual
          key={i}
          top={pos.top}
          left={pos.left}
          color="rgba(0, 100, 255, 0.4)" 
        />
      )
    })
  }, [allBoxPositions])

  return <>{renderedBoxes}</>
}

export default memo(TestStacks)
