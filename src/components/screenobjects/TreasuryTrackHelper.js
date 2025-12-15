import {
  TREASURY_TRACK_START_BOX,
  TT_OFFSETS_PERCENT,
  VERTICAL_ROW_SPACING_PERCENT,
  NUMBER_OF_ROWS,
  TRACK_SECTION_A_MAX_VALUE,
  TRACK_SECTION_B_START_VALUE,
  MAX_TRACK_VALUE,
} from "./data/TreasuryTrack"
import GlobalUnitsModel from "../../model/GlobalUnitsModel"
import GlobalGameState from "../../model/GlobalGameState"
import { getImageForCounter } from "../../utils"

export const counterDataHelper = (imageSrc, rowIndex, colIndex, counterName, stackIndex = 0) => {
  const startTop = TREASURY_TRACK_START_BOX.top
  const startLeft = TREASURY_TRACK_START_BOX.left

  const baseRowTop = startTop + rowIndex * VERTICAL_ROW_SPACING_PERCENT

  const top = `${baseRowTop}%`
  const left = `calc(${startLeft}% + ${TT_OFFSETS_PERCENT[colIndex].left}%)`

  return {
    id: `${counterName}-${rowIndex}-${colIndex}-${stackIndex}`,
    name: counterName,
    image: imageSrc,
    position: { left, top },
    width: "1.6%",
    stackIndex: stackIndex,
    rowIndex: rowIndex,
    colIndex: colIndex,
  }
}

export const valueToPositionHelper = (value) => {
  let rowIndex, colIndex
  const MAX_COLS = TT_OFFSETS_PERCENT.length
  if (value <= TRACK_SECTION_A_MAX_VALUE) {
    rowIndex = value
    colIndex = 0
  } else {
    const baseRowForSectionB = TRACK_SECTION_A_MAX_VALUE + 1
    const valueOffset = value - TRACK_SECTION_B_START_VALUE
    colIndex = valueOffset % MAX_COLS
    rowIndex = baseRowForSectionB + Math.floor(valueOffset / MAX_COLS)
  }
  return { rowIndex, colIndex }
}

export const placeMarkerHelper = (
  imageSrc,
  rowIndexInput,
  markerName,
  markerType,
  colIndexAssignment,
  occupiedPositions,
  activeMarkers
) => {
  let rowIndex = rowIndexInput
  let colIndex = colIndexAssignment

  if (markerType === GlobalUnitsModel.TREASURY_TRACK_TYPE.UNREST) {
    const mappedPos = valueToPositionHelper(rowIndexInput)
    rowIndex = mappedPos.rowIndex
    colIndex = colIndexAssignment
  }

  const stackKey = `${rowIndex}-${colIndex}`
  const stackIndex = occupiedPositions.get(stackKey) || 0
  const trackMaxValue =
    markerType === GlobalUnitsModel.TREASURY_TRACK_TYPE.UNREST ? MAX_TRACK_VALUE : TRACK_SECTION_A_MAX_VALUE

  if (
    (rowIndexInput <= trackMaxValue || markerType === GlobalUnitsModel.TREASURY_TRACK_TYPE.UNREST) &&
    rowIndex < NUMBER_OF_ROWS
  ) {
    const markerData = counterDataHelper(imageSrc, rowIndex, colIndex, markerName, stackIndex)
    markerData.stackKey = stackKey
    activeMarkers.push(markerData)
    occupiedPositions.set(stackKey, stackIndex + 1)
  }
}

export const doPrestige = (occupiedPositions, activeMarkers, prestige) => {
  // --- Prestige Logic ---
  const prestigeValue = prestige
  const prestigeImages = getImageForCounter(GlobalUnitsModel.TREASURY_TRACK_TYPE.PRESTIGE)

  // Always work with absolute value for positioning
  const absolutePrestige = Math.abs(prestigeValue)
  const prestigeTens = Math.floor(absolutePrestige / 10) % 10
  const prestigeOnes = absolutePrestige % 10

  // Tens marker
  if (absolutePrestige >= 10 && prestigeTens <= TRACK_SECTION_A_MAX_VALUE) {
    placeMarkerHelper(
      prestigeImages.imageSource2,
      prestigeTens,
      prestigeValue < 0
        ? GlobalUnitsModel.TREASURY_TRACK_MARKER.PRESTIGE_MINUS_10
        : GlobalUnitsModel.TREASURY_TRACK_MARKER.PRESTIGE_10,
      GlobalUnitsModel.TREASURY_TRACK_TYPE.PRESTIGE,
      1,
      occupiedPositions,
      activeMarkers
    )
  }
  // Ones marker
  if (prestigeOnes >= 0 && prestigeOnes <= TRACK_SECTION_A_MAX_VALUE) {
    placeMarkerHelper(
      prestigeImages.imageSource1,
      prestigeOnes,
      prestigeValue < 0
        ? GlobalUnitsModel.TREASURY_TRACK_MARKER.PRESTIGE_MINUS_1
        : GlobalUnitsModel.TREASURY_TRACK_MARKER.PRESTIGE_1,
      GlobalUnitsModel.TREASURY_TRACK_TYPE.PRESTIGE,
      2,
      occupiedPositions,
      activeMarkers
    )
  }
}
export const doPay = (occupiedPositions, activeMarkers, pay) => {
  const currentPayValue = pay
  const payType = GlobalUnitsModel.TREASURY_TRACK_TYPE.PAY
  const payImages = getImageForCounter(payType)
  const payTens = Math.floor(currentPayValue / 10) % 10
  const payOnes = currentPayValue % 10

  if (currentPayValue >= 10 && payTens <= TRACK_SECTION_A_MAX_VALUE) {
    placeMarkerHelper(
      payImages.imageSource2,
      payTens,
      GlobalUnitsModel.TREASURY_TRACK_MARKER.PAY_10,
      payType,
      1,
      occupiedPositions,
      activeMarkers
    )
  }
  if (payOnes >= 0 && payOnes <= TRACK_SECTION_A_MAX_VALUE) {
    placeMarkerHelper(
      payImages.imageSource1,
      payOnes,
      GlobalUnitsModel.TREASURY_TRACK_MARKER.PAY_1,
      payType,
      2,
      occupiedPositions,
      activeMarkers
    )
  }
}

export const doUnrest = (occupiedPositions, activeMarkers, unrest) => {
  const currentUnrestValue = unrest
  const unrestType = GlobalUnitsModel.TREASURY_TRACK_TYPE.UNREST
  const unrestImages = getImageForCounter(unrestType)
  const trackPositionValue = currentUnrestValue > 0 ? ((currentUnrestValue - 1) % MAX_TRACK_VALUE) + 1 : 0
  const imageToUse = currentUnrestValue > MAX_TRACK_VALUE ? unrestImages.imageSource2 : unrestImages.imageSource1
  placeMarkerHelper(
    imageToUse,
    trackPositionValue,
    GlobalUnitsModel.TREASURY_TRACK_MARKER.UNREST_1,
    unrestType,
    0,
    occupiedPositions,
    activeMarkers
  )
}

export const doGold = (occupiedPositions, activeMarkers, gold) => {
  const val = gold
  const goldType = GlobalUnitsModel.TREASURY_TRACK_TYPE.GOLD
  const goldImages = getImageForCounter(goldType)

  const goldOnes = val % 10
  let goldTens = Math.floor(val / 10)
  if (val === 100) goldTens = 10

  if (val >= 10 && goldTens <= TRACK_SECTION_A_MAX_VALUE) {
    placeMarkerHelper(
      goldImages.imageSource2,
      goldTens,
      GlobalUnitsModel.TREASURY_TRACK_MARKER.GOLD_10,
      goldType,
      1,
      occupiedPositions,
      activeMarkers
    )
  }
  if (goldOnes >= 0 && goldOnes <= TRACK_SECTION_A_MAX_VALUE) {
    placeMarkerHelper(
      goldImages.imageSource1,
      goldOnes,
      GlobalUnitsModel.TREASURY_TRACK_MARKER.GOLD_1,
      goldType,
      2,
      occupiedPositions,
      activeMarkers
    )
  }
}
