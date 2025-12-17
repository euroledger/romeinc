// TreasureyTrackHelper.jsx

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
import { getImageForCounter } from "../../utils"

export const counterDataHelper = (imageSrc, rowIndex, colIndex, counterName, stackIndex = 0) => {
  const startTop = TREASURY_TRACK_START_BOX.top
  const startLeft = TREASURY_TRACK_START_BOX.left

  const baseRowTop = startTop + rowIndex * VERTICAL_ROW_SPACING_PERCENT

  const top = `${baseRowTop}%`
  const left = `calc(${startLeft}% + ${TT_OFFSETS_PERCENT[colIndex].left}%)`

  // console.log("\t=> DISPLAY", `IMAGE ${imageSrc} -> ${counterName}-${rowIndex}-${colIndex}-${stackIndex}`)
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

  // UNREST: remap only when caller passed a raw unrest value (0..25)
  const isUnrest = markerType === GlobalUnitsModel.TREASURY_TRACK_TYPE.UNREST
  if (isUnrest) {
    const hasProvidedCol = typeof colIndexAssignment === "number"
    const looksLikeUnrestValue = typeof rowIndexInput === "number" && rowIndexInput >= 0 && rowIndexInput <= 25

    if (!hasProvidedCol && looksLikeUnrestValue) {
      const mappedPos = valueToPositionHelper(rowIndexInput) // expects unrest value 0..25
      rowIndex = mappedPos.rowIndex
      colIndex = mappedPos.colIndex
    } else {
      rowIndex = rowIndexInput
      colIndex = colIndexAssignment
    }
  } else {
    rowIndex = Math.floor(rowIndex)
    colIndex = Math.floor(colIndex)
  }

  // TURN: clamp the turn marker so its rowIndex never increases past 10
  if (markerType === GlobalUnitsModel.TREASURY_TRACK_TYPE.TURN) {
    rowIndex = Math.min(rowIndex, 10)
  }

  // Gate by board bounds (allow rows 0..15)
  if (rowIndex <= 15 && rowIndex < NUMBER_OF_ROWS) {
    const stackKey = `${rowIndex}-${colIndex}`
    const stackIndex = occupiedPositions.get(stackKey) || 0

    const markerData = counterDataHelper(imageSrc, rowIndex, colIndex, markerName, stackIndex)
    markerData.stackKey = stackKey

    activeMarkers.push(markerData)
    occupiedPositions.set(stackKey, stackIndex + 1)
  }
}

export const doUnrest = (occupiedPositions, activeMarkers, unrest) => {
  // Unrest ranges 0..50 (0..25 on x1 side, 26..50 as 25 + x1 on >25 side)
  const value = Math.max(0, Math.min(unrest || 0, 50))

  // Decide which side to use and normalize to a 0..25 value for placement
  const useGt25 = value > 25
  const valueAdjusted = useGt25 ? value - 25 : value // 0..25

  // clamp and ensure integer
  const v = Math.max(0, Math.min(Math.floor(valueAdjusted), 25))

  // Compute rowIndexInput and colIndex deterministically
  let rowIndexInput, colIndex
  if (v <= 10) {
    // rows 0..10, box 0
    rowIndexInput = v
    colIndex = 0
  } else {
    // values 11..25 map into rows 11..15, boxes 0..2
    const idx = v - 11 // 0..14
    rowIndexInput = 11 + Math.floor(idx / 3) // 11..15
    colIndex = idx % 3 // 0..2
  }

  // Debugging output to confirm computed placement
  // Remove or comment out these logs when stable
  console.log(`UNREST VALUE ${value} -> useGt25=${useGt25} v=${v} rowIndexInput=${rowIndexInput} colIndex=${colIndex}`)

  const { imageSource1, imageSource2 } = getImageForCounter(GlobalUnitsModel.TREASURY_TRACK_TYPE.UNREST, value)
  const imageSrc = useGt25 ? imageSource2 : imageSource1
  const markerName = useGt25
    ? GlobalUnitsModel.TREASURY_TRACK_MARKER.UNREST_GT_25
    : GlobalUnitsModel.TREASURY_TRACK_MARKER.UNREST_1

  // Place using the exact computed rowIndexInput and colIndex
  placeMarkerHelper(
    imageSrc,
    rowIndexInput,
    markerName,
    GlobalUnitsModel.TREASURY_TRACK_TYPE.UNREST,
    colIndex,
    occupiedPositions,
    activeMarkers
  )
}

export const doGold = (occupiedPositions, activeMarkers, gold) => {
  // clamp gold to a sensible non-negative integer
  const value = Math.max(0, Math.floor(gold || 0))

  // Helper: map a 0..25 "value" into (row, col) for tens markers (col default 1)
  const mapTensPosition = (v) => {
    const vv = Math.max(0, Math.min(Math.floor(v), 25))
    if (vv <= 10) {
      return { rowIndex: vv, colIndex: 1 } // tens markers sit in column 1 for rows 0..10
    } else {
      const idx = vv - 11 // 0..14
      return { rowIndex: 11 + Math.floor(idx / 3), colIndex: idx % 3 } // rows 11..15, cols 0..2
    }
  }

  // Helper: map a 0..25 "value" into (row, col) for ones markers (col default 2)
  const mapOnesPosition = (v) => {
    const vv = Math.max(0, Math.min(Math.floor(v), 25))
    if (vv <= 10) {
      return { rowIndex: vv, colIndex: 2 } // ones markers sit in column 2 for rows 0..10
    } else {
      const idx = vv - 11 // 0..14
      return { rowIndex: 11 + Math.floor(idx / 3), colIndex: idx % 3 } // rows 11..15, cols 0..2
    }
  }

  if (value <= 250) {
    // Normal behavior: place tens (x10) and ones (x1) using the usual images
    const tensValue = Math.floor(value / 10) // 0..25
    const onesValue = value % 10 // 0..9

    const tensPos = mapTensPosition(tensValue)
    const onesPos = mapOnesPosition(onesValue)

    // getImageForCounter will return imageSource1 (x1) and imageSource2 (x10)
    const { imageSource1: onesImage, imageSource2: tensImage } = getImageForCounter(
      GlobalUnitsModel.TREASURY_TRACK_TYPE.GOLD,
      value
    )

    // Place tens (x10)
    placeMarkerHelper(
      tensImage,
      tensPos.rowIndex,
      GlobalUnitsModel.TREASURY_TRACK_MARKER.GOLD_10,
      GlobalUnitsModel.TREASURY_TRACK_TYPE.GOLD,
      tensPos.colIndex,
      occupiedPositions,
      activeMarkers
    )

    // Place ones (x1)
    placeMarkerHelper(
      onesImage,
      onesPos.rowIndex,
      GlobalUnitsModel.TREASURY_TRACK_MARKER.GOLD_1,
      GlobalUnitsModel.TREASURY_TRACK_TYPE.GOLD,
      onesPos.colIndex,
      occupiedPositions,
      activeMarkers
    )
  } else {
    // value > 250: deduct 250 and compute positions from the remainder
    const adjusted = value - 250 // e.g., 287 -> 37
    const tensValue = Math.floor(adjusted / 10) // tens for the >250 marker (0..25)
    const onesValue = adjusted % 10 // ones (0..9)

    const tensPos = mapTensPosition(tensValue)
    const onesPos = mapOnesPosition(onesValue)

    // getImageForCounter will return imageSource2 as GOLD_PLUS_250 when value > 250
    // We pass the original full value so getImageForCounter can decide which imageSource2 to return
    const { imageSource1: onesImage, imageSource2: tensImage } = getImageForCounter(
      GlobalUnitsModel.TREASURY_TRACK_TYPE.GOLD,
      value
    )

    // Place the special >250 tens marker (imageSource2 will be GOLD_PLUS_250)
    placeMarkerHelper(
      tensImage,
      tensPos.rowIndex,
      GlobalUnitsModel.TREASURY_TRACK_MARKER.GOLD_PLUS_250,
      GlobalUnitsModel.TREASURY_TRACK_TYPE.GOLD,
      tensPos.colIndex,
      occupiedPositions,
      activeMarkers
    )

    // Place the ones (x1) marker as usual
    placeMarkerHelper(
      onesImage,
      onesPos.rowIndex,
      GlobalUnitsModel.TREASURY_TRACK_MARKER.GOLD_1,
      GlobalUnitsModel.TREASURY_TRACK_TYPE.GOLD,
      onesPos.colIndex,
      occupiedPositions,
      activeMarkers
    )
  }
}

export const doPrestige = (occupiedPositions, activeMarkers, prestige) => {
  const value = Math.max(-260, Math.min(prestige || 0, 260))
  const absVal = Math.abs(value)

  const rawTens = Math.floor(absVal / 10)
  const tensValue = absVal <= 110 ? Math.min(rawTens, 10) : Math.min(rawTens, 25)
  const onesValue = absVal - tensValue * 10

  let tensRow, tensBox
  if (tensValue <= 10) {
    tensRow = tensValue
    tensBox = 1
  } else {
    const idx = tensValue - 11
    tensRow = 11 + Math.floor(idx / 3)
    tensBox = idx % 3
  }

  const onesRow = Math.min(Math.max(onesValue, 0), 10)
  const onesBox = 2

  const { imageSource1, imageSource2 } = getImageForCounter(GlobalUnitsModel.TREASURY_TRACK_TYPE.PRESTIGE, value)
  const imgX1 = imageSource1
  const imgX10 = imageSource2

  placeMarkerHelper(
    imgX10,
    tensRow,
    value >= 0
      ? GlobalUnitsModel.TREASURY_TRACK_MARKER.PRESTIGE_10
      : GlobalUnitsModel.TREASURY_TRACK_MARKER.PRESTIGE_MINUS_10,
    GlobalUnitsModel.TREASURY_TRACK_TYPE.PRESTIGE,
    tensBox,
    occupiedPositions,
    activeMarkers
  )

  placeMarkerHelper(
    imgX1,
    onesRow,
    value >= 0
      ? GlobalUnitsModel.TREASURY_TRACK_MARKER.PRESTIGE_1
      : GlobalUnitsModel.TREASURY_TRACK_MARKER.PRESTIGE_MINUS_1,
    GlobalUnitsModel.TREASURY_TRACK_TYPE.PRESTIGE,
    onesBox,
    occupiedPositions,
    activeMarkers
  )
}

export const doPay = (occupiedPositions, activeMarkers, pay) => {
  const value = Math.max(0, Math.min(pay || 0, 260))
  const absVal = value

  const rawTens = Math.floor(absVal / 10)
  const tensValue = Math.min(rawTens, 25)
  const onesValue = absVal - tensValue * 10

  let tensRow, tensBox
  if (tensValue <= 10) {
    tensRow = tensValue
    tensBox = 1
  } else {
    const idx = tensValue - 11
    tensRow = 11 + Math.floor(idx / 3)
    tensBox = idx % 3
  }

  const onesRow = Math.min(Math.max(onesValue, 0), 10)
  const onesBox = 2

  const { imageSource1, imageSource2 } = getImageForCounter(GlobalUnitsModel.TREASURY_TRACK_TYPE.PAY, value)
  const imgX1 = imageSource1
  const imgX10 = imageSource2

  placeMarkerHelper(
    imgX10,
    tensRow,
    GlobalUnitsModel.TREASURY_TRACK_MARKER.PAY_10,
    GlobalUnitsModel.TREASURY_TRACK_TYPE.PAY,
    tensBox,
    occupiedPositions,
    activeMarkers
  )

  placeMarkerHelper(
    imgX1,
    onesRow,
    GlobalUnitsModel.TREASURY_TRACK_MARKER.PAY_1,
    GlobalUnitsModel.TREASURY_TRACK_TYPE.PAY,
    onesBox,
    occupiedPositions,
    activeMarkers
  )
}
