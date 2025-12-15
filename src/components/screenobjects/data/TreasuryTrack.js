import GlobalUnitsModel from "../../../model/GlobalUnitsModel"

export const TREASURY_TRACK_START_BOX = {
  // This is only the base position for Row 1 (Index 0)
  top: 47.3,
  left: 0.9,
}

export const VERTICAL_ROW_SPACING_PERCENT = 2.7 // Tweak this value to align with your map visually

export const TT_0 = 0
export const TT_1 = 1
export const TT_2 = 2

export const TT_OFFSETS_PERCENT = [
  {
    top: 0,
    left: 0,
  },
  {
    top: 0,
    left: 1.8,
  },
  {
    top: 0,
    left: 3.6,
  },
]

export const NUMBER_OF_ROWS = 16 // Define the total count here
export const TRACK_SECTION_A_MAX_VALUE = 10; // Values 0 through 10 use rows 0-10
export const TRACK_SECTION_B_START_VALUE = 11; // Values 11+ wrap horizontally
export const MAX_TRACK_VALUE = 25; // The absolute maximum value represented on the track
