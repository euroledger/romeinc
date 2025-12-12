// TreasuryTrackStacks.jsx (Strict Column Assignment)

import React, { useCallback, useState, useEffect, useMemo, memo } from "react"
import {
  TREASURY_TRACK_START_BOX,
  TT_OFFSETS_PERCENT,
  VERTICAL_ROW_SPACING_PERCENT,
  NUMBER_OF_ROWS,
  TRACK_SECTION_A_MAX_VALUE,
  TRACK_SECTION_B_START_VALUE,
  MAX_TRACK_VALUE,
} from "./TreasuryTrack" 
import { getImageForCounter } from "../../utils" 
import GlobalInit from "../../model/GlobalInit"
import GlobalGameState from "../../model/GlobalGameState"
import GlobalUnitsModel from "../../model/GlobalUnitsModel"
import TTStack from "./TTStack" // Uses zIndex and offsets

// Define the visual stacking offset in pixels (adjust as needed)
// These offsets are now used *only* if multiple items target the exact same final physical spot (e.g. 2 markers in Box 0)
const STACK_OFFSET_PX_VERTICAL = 5; 
const STACK_OFFSET_PX_HORIZONTAL = 3;

function TreasuryTrackStacks({ controller }) {
  const [markersToRender, setMarkersToRender] = useState([])

  const getCounterScreenData = useCallback((imageSrc, rowIndex, colIndex, counterName, stackIndex = 0) => {
    const startTop = TREASURY_TRACK_START_BOX.top
    const startLeft = TREASURY_TRACK_START_BOX.left

    const baseRowTop = startTop + rowIndex * VERTICAL_ROW_SPACING_PERCENT
    
    // Position uses calc() for mixed % and px values, applying stack offset
    const top = `calc(${baseRowTop}% - ${stackIndex * STACK_OFFSET_PX_VERTICAL}px)`
    const left = `calc(${startLeft}% + ${TT_OFFSETS_PERCENT[colIndex].left}% + ${stackIndex * STACK_OFFSET_PX_HORIZONTAL}px)`
    
    return {
      id: `${counterName}-${rowIndex}-${colIndex}-${stackIndex}`, 
      name: counterName, image: imageSrc, position: { left, top }, width: "1.6%", 
      rowIndex: rowIndex, colIndex: colIndex, stackIndex: stackIndex,
    }
  }, [])

  const mapValueToPosition = useCallback((value) => { 
    // This function is only used for internal calculation for Unrest's row/col lookup
    let rowIndex, colIndex; const MAX_COLS = TT_OFFSETS_PERCENT.length; 
    if (value <= TRACK_SECTION_A_MAX_VALUE) { rowIndex = value; colIndex = 0; } 
    else {
      const baseRowForSectionB = TRACK_SECTION_A_MAX_VALUE + 1;
      const valueOffset = value - TRACK_SECTION_B_START_VALUE; 
      colIndex = valueOffset % MAX_COLS; 
      rowIndex = baseRowForSectionB + Math.floor(valueOffset / MAX_COLS);
    }
    return { rowIndex, colIndex };
  }, []); 

  const generateActiveMarkers = useCallback(() => {
    const activeMarkers = []
    // Track stack height within strict column assignments
    const occupiedPositions = new Map() 

    /**
     * Helper function to place a marker using strict column assignment.
     */
    const placeMarker = (imageSrc, rowIndexInput, markerName, markerType, colIndexAssignment) => {
        
        let rowIndex = rowIndexInput;
        let colIndex = colIndexAssignment; // Use the provided column

        // If it's the UNREST type, we need to convert the track value to the physical row index
        if (markerType === GlobalUnitsModel.TREASURY_TRACK_TYPE.UNREST) {
             const mappedPos = mapValueToPosition(rowIndexInput);
             rowIndex = mappedPos.rowIndex;
             // We still force the colIndexAssignment here, ignoring the mapper's output col (Box 0 rule)
             colIndex = colIndexAssignment; 
        }

        const MAX_COLS = TT_OFFSETS_PERCENT.length; 
        // Key is the exact physical spot: "Row-Col" (e.g. "1-0")
        const stackKey = `${rowIndex}-${colIndex}`; 
        const stackIndex = occupiedPositions.get(stackKey) || 0; // Get current stack height


        const trackMaxValue = (markerType === GlobalUnitsModel.TREASURY_TRACK_TYPE.UNREST) ? MAX_TRACK_VALUE : TRACK_SECTION_A_MAX_VALUE;

        if ((rowIndexInput <= trackMaxValue || markerType === GlobalUnitsModel.TREASURY_TRACK_TYPE.UNREST) && rowIndex < NUMBER_OF_ROWS) {
            const markerData = getCounterScreenData(imageSrc, rowIndex, colIndex, markerName, stackIndex);
            activeMarkers.push(markerData);
            // Increment the stack count for this exact physical spot
            occupiedPositions.set(stackKey, stackIndex + 1); 
        }
    };


    // --- 1. Process Game Turn Marker (Box 0) ---
    const currentTurnValue = GlobalGameState.gameTurn; 
    const turnType = GlobalUnitsModel.TREASURY_TRACK_TYPE.TURN;
    if (currentTurnValue >= 1 && currentTurnValue <= TRACK_SECTION_A_MAX_VALUE) { 
        const turnImages = getImageForCounter(turnType); 
        placeMarker(turnImages.imageSource1, currentTurnValue, GlobalUnitsModel.TREASURY_TRACK_MARKER.TURN, turnType, 0); // Assign Col 0
    }


    // --- 2. Process Prestige Marker(s) --- 
    const currentPrestigeValue = GlobalGameState.prestige; 
    const prestigeType = GlobalUnitsModel.TREASURY_TRACK_TYPE.PRESTIGE;
    const prestigeImages = getImageForCounter(prestigeType);
    const prestigeTens = Math.floor(currentPrestigeValue / 10) % 10; 
    const prestigeOnes = currentPrestigeValue % 10;           

    if (currentPrestigeValue >= 10 && prestigeTens <= TRACK_SECTION_A_MAX_VALUE) { 
        placeMarker(prestigeImages.imageSource2, prestigeTens, GlobalUnitsModel.TREASURY_TRACK_MARKER.PRESTIGE_10, prestigeType, 1); // Assign Col 1
    }
    if (prestigeOnes >= 0 && prestigeOnes <= TRACK_SECTION_A_MAX_VALUE) { 
        placeMarker(prestigeImages.imageSource1, prestigeOnes, GlobalUnitsModel.TREASURY_TRACK_MARKER.PRESTIGE_1, prestigeType, 2); // Assign Col 2
    }


    // --- 3. Process Gold Marker(s) --- 
    const currentGoldValue = GlobalGameState.gold;
    const goldType = GlobalUnitsModel.TREASURY_TRACK_TYPE.GOLD;
    const goldImages = getImageForCounter(goldType);
    const goldTens = Math.floor(currentGoldValue / 10) % 10;
    const goldOnes = currentGoldValue % 10;

    if (currentGoldValue >= 10 && goldTens <= TRACK_SECTION_A_MAX_VALUE) { 
        placeMarker(goldImages.imageSource2, goldTens, GlobalUnitsModel.TREASURY_TRACK_MARKER.GOLD_10, goldType, 1); // Assign Col 1
    }
    if (goldOnes >= 0 && goldOnes <= TRACK_SECTION_A_MAX_VALUE) { 
        placeMarker(goldImages.imageSource1, goldOnes, GlobalUnitsModel.TREASURY_TRACK_MARKER.GOLD_1, goldType, 2); // Assign Col 2
    }


    // --- 4. Process Unrest Marker (Box 0) ---
    const currentUnrestValue = GlobalGameState.unrest;
    const unrestType = GlobalUnitsModel.TREASURY_TRACK_TYPE.UNREST;
    const unrestImages = getImageForCounter(unrestType);
    const trackPositionValue = currentUnrestValue > 0 ? (currentUnrestValue - 1) % MAX_TRACK_VALUE + 1 : 0;
    const imageToUse = currentUnrestValue <= MAX_TRACK_VALUE ? unrestImages.imageSource1 : unrestImages.imageSource2;
    
    // Unrest uses the full track logic for the Row, but is forced into Col 0
    placeMarker(imageToUse, trackPositionValue, GlobalUnitsModel.TREASURY_TRACK_MARKER.UNREST_1, unrestType, 0);
    

    setMarkersToRender(activeMarkers)
  }, [getCounterScreenData, mapValueToPosition]) 

  useEffect(() => { generateActiveMarkers() }, [generateActiveMarkers])
  const renderedMarkers = useMemo(() => {
    return markersToRender.map((markerData) => <TTStack key={markerData.id} data={markerData} />)
  }, [markersToRender])
  return <>{renderedMarkers}</>
}

export default memo(TreasuryTrackStacks)
