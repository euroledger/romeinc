export const PROVINCES = [
  { id: 1, name: "Pannonia Inferior", info: "Region: Moesia", centerX: 2550, centerY: 1513, radius: 87, top: "42.8%", left: "47.0%" },
  { id: 2, name: "Hibernia", info: "Region: Britain", centerX: 1095, centerY: 313, radius: 87 },
  //   // Add more circles with their specific center coordinates (in image's natural pixels)
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
