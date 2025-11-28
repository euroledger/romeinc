import { PROVINCE_OFFSETS } from "../screenobjects/Provinces"


export const drawProvinceSpaces = (ctx, circle) => {
  // add the rectangle offset TOP LEFT
  ctx.fillStyle = "rgba(255, 100, 0, 0.5)" // Semi-transparent orange
  ctx.fillRect(
    circle.centerX + PROVINCE_OFFSETS[0].xOffset,
    circle.centerY + PROVINCE_OFFSETS[0].yOffset,
    PROVINCE_OFFSETS[0].width,
    PROVINCE_OFFSETS[0].height
  )

  ctx.lineWidth = 2
  ctx.strokeStyle = "darkorange"
  ctx.strokeRect(
    circle.centerX + PROVINCE_OFFSETS[0].xOffset,
    circle.centerY + PROVINCE_OFFSETS[0].yOffset,
    PROVINCE_OFFSETS[0].width,
    PROVINCE_OFFSETS[0].height
  )
  // ----------------
  // TOP RIGHT
  ctx.fillStyle = "rgba(255, 100, 0, 0.5)" // Semi-transparent orange
  ctx.fillRect(
    circle.centerX + PROVINCE_OFFSETS[1].xOffset,
    circle.centerY + PROVINCE_OFFSETS[1].yOffset,
    PROVINCE_OFFSETS[1].width,
    PROVINCE_OFFSETS[1].height
  )

  ctx.lineWidth = 2
  ctx.strokeStyle = "darkorange"
  ctx.strokeRect(
    circle.centerX + PROVINCE_OFFSETS[1].xOffset,
    circle.centerY + PROVINCE_OFFSETS[1].yOffset,
    PROVINCE_OFFSETS[1].width,
    PROVINCE_OFFSETS[1].height
  )

  // ----------------
  // BOTTOM LEFT
  ctx.fillStyle = "rgba(255, 100, 0, 0.5)" // Semi-transparent orange
  ctx.fillRect(
    circle.centerX + PROVINCE_OFFSETS[2].xOffset,
    circle.centerY + PROVINCE_OFFSETS[2].yOffset,
    PROVINCE_OFFSETS[2].width,
    PROVINCE_OFFSETS[2].height
  )

  ctx.lineWidth = 2
  ctx.strokeStyle = "darkorange"
  ctx.strokeRect(
    circle.centerX + PROVINCE_OFFSETS[2].xOffset,
    circle.centerY + PROVINCE_OFFSETS[2].yOffset,
    PROVINCE_OFFSETS[2].width,
    PROVINCE_OFFSETS[2].height
  )

  // ----------------
  // BOTTOM LEFT
  ctx.fillStyle = "rgba(255, 100, 0, 0.5)" // Semi-transparent orange
  ctx.fillRect(
    circle.centerX + PROVINCE_OFFSETS[3].xOffset,
    circle.centerY + PROVINCE_OFFSETS[3].yOffset,
    PROVINCE_OFFSETS[3].width,
    PROVINCE_OFFSETS[3].height
  )

  ctx.lineWidth = 2
  ctx.strokeStyle = "darkorange"
  ctx.strokeRect(
    circle.centerX + PROVINCE_OFFSETS[3].xOffset,
    circle.centerY + PROVINCE_OFFSETS[3].yOffset,
    PROVINCE_OFFSETS[3].width,
    PROVINCE_OFFSETS[3].height
  )
}

export const drawCircles = (ctx, circlesList) => {
  circlesList.forEach((circle) => {
    ctx.beginPath()
    ctx.arc(circle.centerX, circle.centerY, circle.radius, 0, 2 * Math.PI)
    // Use a generic style for now, or customize per circle if needed
    ctx.fillStyle = "rgba(0, 0, 255, 0.5)"
    ctx.fill()
    ctx.lineWidth = 1
    ctx.strokeStyle = "black"
    ctx.stroke()

    drawProvinceSpaces(ctx, circle)
  })
}

export const drawRectangles = (ctx, rectList) => {
  rectList.forEach((rectData) => {
    ctx.fillStyle = "rgba(255, 100, 0, 0.5)" // Semi-transparent orange
    ctx.fillRect(rectData.x, rectData.y, rectData.width, rectData.height)

    ctx.lineWidth = 2
    ctx.strokeStyle = "darkorange"
    ctx.strokeRect(rectData.x, rectData.y, rectData.width, rectData.height)
  })
}
