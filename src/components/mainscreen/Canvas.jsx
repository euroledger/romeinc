import React, { useRef, useLayoutEffect, useState, useCallback, forwardRef } from "react"
import { PROVINCES } from "../screenobjects/data/Provinces"
import { TRACK_AREAS } from "../screenobjects/data/TrackAreas"
import { drawCircles, drawRectangles, drawHomelandProvinceSpaces } from "./CounterSpaces"

import "./Canvas.css"
import { HOMELAND_PROVINCES } from "../screenobjects/data/HomelandProvinces"

const Canvas = forwardRef(({ image, zoomPP, setBoardReady }, ref) => {
  const imgRef = useRef(null)
  const containerRef = useRef(null) // ADDED: Ref for the overlay container
  const [activeCircle, setActiveCircle] = useState(null)
  const circlesList = PROVINCES
  const rectList = TRACK_AREAS
  const squareList = HOMELAND_PROVINCES

  // --- Collision Detection Function ---
  const isMouseInCircle = useCallback((mouseX, mouseY, circle) => {
    const distance = Math.sqrt(Math.pow(mouseX - circle.centerX, 2) + Math.pow(mouseY - circle.centerY, 2))
    return distance < circle.radius
  }, [])

  // --- Handle Mouse Move Event ---
  const handleMouseMove = useCallback(
    (event) => {
      if (!ref.current || !circlesList.length) return

      const canvas = ref.current
      // Use getBoundingClientRect for robust viewport positioning/scaling info
      const rect = canvas.getBoundingClientRect()

      // MOUSE POSITION IN CSS PIXELS RELATIVE TO THE CANVAS ELEMENT (Viewport-based)
      const mouseX_CSS = event.clientX - rect.left
      const mouseY_CSS = event.clientY - rect.top

      // Scaling factors: (natural size) / (displayed size)
      const scaleX = canvas.width / rect.width
      const scaleY = canvas.height / rect.height

      // MOUSE POSITION IN CANVAS DRAWING PIXELS (For collision detection)
      const mouseX_Canvas = mouseX_CSS * scaleX
      const mouseY_Canvas = mouseY_CSS * scaleY

      let hoveredCircle = null

      // for (const circle of circlesList) {
      //   if (isMouseInCircle(mouseX_Canvas, mouseY_Canvas, circle)) {
      //     hoveredCircle = circle
      //     break
      //   }
      // }

      // if (hoveredCircle) {
      //   document.body.style.cursor = "pointer"
      //   setActiveCircle({
      //     data: hoveredCircle,
      //     // CHANGED: Store VIEWPORT coordinates (clientX/Y) for fixed positioning
      //     x: event.clientX,
      //     y: event.clientY,
      //   })
      // } else {
      //   document.body.style.cursor = "default"
      //   setActiveCircle(null)
      // }
    },
    [circlesList, isMouseInCircle, ref]
  )

  useLayoutEffect(() => {
    if (!ref.current) return

    const canvas = ref.current
    const ctx = canvas.getContext("2d")
    const img = imgRef.current

    const handleLoad = () => {
      const width = img.naturalWidth
      const height = img.naturalHeight
      canvas.width = width
      canvas.height = height

      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw all circles and rectangles from the list (Original drawing code)
      // drawCircles(ctx, circlesList)
      // drawRectangles(ctx, rectList)
      // drawHomelandProvinceSpaces(ctx, squareList)
      setBoardReady()
    }

    img.addEventListener("load", handleLoad)
    if (img.complete) {
      handleLoad()
    }

    return () => {
      img.removeEventListener("load", handleLoad)
    }
  }, [image, rectList, circlesList, ref, setBoardReady])

  return (
    // ADDED: containerRef attached here
    <div className="overlay-container" ref={containerRef}>
      <img ref={imgRef} src={image} className="covered-image" />
      <canvas ref={ref} className="covering-canvas" onMouseMove={handleMouseMove} />
    </div>
  )
})

Canvas.displayName = "Canvas"

export default Canvas
