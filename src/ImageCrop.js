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
  // We don't need getMapAreaCoordinates here initially
  return new Promise((resolve, reject) => {
    const tempImage = new Image();
    tempImage.crossOrigin = "Anonymous";
    tempImage.src = originalImageUrl;

    tempImage.onload = () => {
      const { areaWidth, areaHeight, startX, startY, scalingFactor } = getMapAreaCoordinates(mapArea);

      // *** CRITICAL CHANGE: Set canvas dimensions to the FINAL DISPLAY size ***
      const displayWidth = areaWidth * scalingFactor;
      const displayHeight = areaHeight * scalingFactor;

      const modalCanvas = document.createElement("canvas");
      modalCanvas.width = displayWidth; // Canvas is now the exact size needed
      modalCanvas.height = displayHeight;

      const modalCtx = modalCanvas.getContext("2d");

      // 1. Draw the background image section
      // We are drawing the source area (startX, startY, areaWidth, areaHeight) 
      // onto the *entire* destination canvas (0, 0, displayWidth, displayHeight)
      modalCtx.drawImage(tempImage, 
                          startX, startY, areaWidth, areaHeight, // Source Coords (from original image)
                          0, 0, displayWidth, displayHeight);    // Destination Coords (onto our new canvas)

      // 2. Draw the overlay shapes from the main canvas on top
      // This step might need careful review depending on how the overlayCanvas handles scaling internally,
      // but generally this approach should work if the overlay maps correctly to the area defined above.
      modalCtx.drawImage(overlayCanvas, 
                          startX, startY, areaWidth, areaHeight, 
                          0, 0, displayWidth, displayHeight);

      const dim = { w: displayWidth, h: displayHeight, map: mapArea };
      // This sets the state in your React component that drives dynamicWidth/Height
      setImageDimensions(() => dim); 

      resolve(modalCanvas.toDataURL("image/png"));
    };

    tempImage.onerror = reject; 
  });
};

export default generateCroppedModalImage
