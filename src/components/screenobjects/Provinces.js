import GlobalUnitsModel from "../../model/GlobalUnitsModel"

export const PROVINCES = [
  // {
  //   id: 1,
  //   name: GlobalUnitsModel.PROVINCE.PANNONIA_INFERIOR,
  //   info: "Region: Moesia",
  //   centerX: 2550,
  //   centerY: 1513,
  //   radius: 87,
  //   top: "42.8%",
  //   left: "47.0%",
  // },
  {
    id: 2,
    name: GlobalUnitsModel.PROVINCE.HIBERNIA,
    info: "Region: Britannia",
    centerX: 1095,
    centerY: 313,
    radius: 87,
     top: 9.5,
    left: 21.0,
  },

  //   // Add more circles with their specific center coordinates (in image's natural pixels)

  {
    id: 3,
    name: GlobalUnitsModel.PROVINCE.BRITANNIA_INFERIOR,
    info: "Region: Britannia",

    // TO DO REMOVE 

    // Might need the circle to highlight certain subset
    // of provinces

    // OR might we use transparent buttons???

    centerX: 1413,
    centerY: 547,
    radius: 87,
    // ---------------

    top: 16.7,
    left: 27.2,
  },
  {
    id: 4,
    name: GlobalUnitsModel.PROVINCE.CALEDONIA,
    info: "Region: Caledonia",
    // centerX: 1365,
    // centerY: 240,
    // radius: 87,
    top: 7.4,
    left: 26.2,
  },
]

export const TOP_LEFT = 0
export const TOP_RIGHT = 1
export const BOTTOM_LEFT = 2
export const BOTTOM_RIGHT = 3

export const PROVINCE_OFFSETS_PERCENT = [
  {
    top: 0,
    left: 0,
  },
  {
    top: 0,
    left: 2.0,
  },
  {
    top: 3.2,
    left: 0.0,
  },
  {
    top: 3.2,
    left: 2.0,
  },
]
export const PROVINCE_OFFSETS = [
  {
    // start with province circle centerX, centerY and create a rectangle with upper left x,y coordinates
    // equal to centerX + offset, centerY + offset
    // and height and width

    // PROVINCE MARKERS, barbarian, allied etc
    xOffset: -95,
    yOffset: -95,
    height: 85,
    width: 85,
  },

  // ROMAN UNITS, legions, auxilia etc
  {
    xOffset: 5,
    yOffset: -95,
    height: 85,
    width: 85,
  },

  // ROMAN FLEETS
  {
    xOffset: -95,
    yOffset: 5,
    height: 85,
    width: 85,
  },

  // REBEL MARKERS???
  {
    xOffset: 5,
    yOffset: 5,
    height: 85,
    width: 85,
  },
]
