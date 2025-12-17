

// TreasuryTrackStacks.jsx
import React, { useCallback, useState, useEffect, useMemo, memo } from "react"
import { getImageForCounter } from "../../utils"
import GlobalUnitsModel from "../../model/GlobalUnitsModel"
import TTStack from "./TTStack"
import { placeMarkerHelper, doPrestige, doGold, doUnrest, doPay } from "./TreasuryTrackHelper"
import { useGameState } from "../../GameStateContext"

function TreasuryTrackStacks() {
  const [markersToRender, setMarkersToRender] = useState([])
  const [expandedStacks, setExpandedStacks] = useState(new Set())
  const { gameState } = useGameState()

  const toggleExpand = useCallback((stackKey) => {
    setExpandedStacks((prev) => {
      const newSet = new Set(prev)
      if (newSet.has(stackKey)) {
        newSet.delete(stackKey)
      } else {
        newSet.add(stackKey)
      }
      return newSet
    })
  }, [])

  useEffect(() => {
    const activeMarkers = []
    const occupiedPositions = new Map()

    // --- Process all markers using data from gameState ---
    placeMarkerHelper(
      getImageForCounter(GlobalUnitsModel.TREASURY_TRACK_TYPE.TURN).imageSource1,
      gameState.gameTurn,
      GlobalUnitsModel.TREASURY_TRACK_MARKER.TURN,
      GlobalUnitsModel.TREASURY_TRACK_TYPE.TURN,
      0,
      occupiedPositions,
      activeMarkers,
    )
    doPrestige(occupiedPositions, activeMarkers, gameState.prestige)

    doGold(occupiedPositions, activeMarkers, gameState.gold)

    doUnrest(occupiedPositions, activeMarkers, gameState.unrest)

    doPay(occupiedPositions, activeMarkers, gameState.pay)

    setMarkersToRender(activeMarkers)
  }, [gameState])

  const renderedMarkers = useMemo(() => {
    return markersToRender.map((markerData) => (
      <TTStack
        key={markerData.id}
        data={markerData}
        isExpanded={expandedStacks.has(markerData.stackKey)}
        toggleExpand={toggleExpand}
      />
    ))
  }, [markersToRender, expandedStacks, toggleExpand])

  return <>{renderedMarkers}</>
}

export default memo(TreasuryTrackStacks)
