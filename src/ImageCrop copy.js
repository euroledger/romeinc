const getMapAreaCoordinates = (mapArea) => {
  console.log("mapArea=", mapArea)
  switch (mapArea) {
    case "Treasury":
      return { areaWidth: 270, areaHeight: 1480, startX: 50, startY: 1510, scalingFactor: 0.5 }
    case "Event":
      return { areaWidth: 2900, areaHeight: 930, startX: 2980, startY: 8, scalingFactor: 1.0 }
  }
}

const generateCroppedModalImage = (overlayCanvas, originalImageUrl, mapArea, setImageDimensions) => {
  getMapAreaCoordinates(mapArea)
  return new Promise((resolve, reject) => {
    const tempImage = new Image()
    tempImage.crossOrigin = "Anonymous"
    tempImage.src = originalImageUrl

    tempImage.onload = () => {
      const { areaWidth, areaHeight, startX, startY, scalingFactor } = getMapAreaCoordinates(mapArea)
      const modalCanvas = document.createElement("canvas")
      modalCanvas.width = areaWidth
      modalCanvas.height = areaHeight
      const modalCtx = modalCanvas.getContext("2d")

      const displayWidth = areaWidth * scalingFactor
      const displayHeight = areaHeight * scalingFactor

      // 1. Draw the background image section (SAFE to do now)
      modalCtx.drawImage(tempImage, startX, startY, areaWidth, areaHeight, 0, 0, displayWidth, displayHeight)

      // 2. Draw the overlay shapes from the main canvas on top
      modalCtx.drawImage(overlayCanvas, startX, startY, areaWidth, areaHeight, 0, 0, displayWidth, displayHeight)

      const dim = {w: displayWidth, h: displayHeight}
      setImageDimensions(() => dim)


      // Resolve the promise with the final data URL
      resolve(modalCanvas.toDataURL("image/png"))
    }

    tempImage.onerror = reject // Reject promise if image fails to load
  })
}

export default generateCroppedModalImage
