import React, { useRef, useLayoutEffect, useState, useCallback, forwardRef } from "react"
import { PROVINCES } from "../screenobjects/Provinces"
import { TRACK_AREAS } from "../screenobjects/TrackAreas"

import "./Canvas.css"

const Canvas = forwardRef(({ image, zoomPP, setBoardReady }, ref) => {
  const imgRef = useRef(null)
  const [activeCircle, setActiveCircle] = useState(null)

  const circlesList = PROVINCES
  const rectList = TRACK_AREAS

  const isMouseInCircle = useCallback((mouseX, mouseY, circle) => {
    const distance = Math.sqrt(Math.pow(mouseX - circle.centerX, 2) + Math.pow(mouseY - circle.centerY, 2))
    return distance < circle.radius
  }, [])

  

  const handleMouseMove = useCallback(
    (event) => {
      if (!ref.current || !circlesList.length) return

      const canvas = ref.current
      // Get the current position and size of the canvas relative to the browser viewport
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

      for (const circle of circlesList) {
        if (isMouseInCircle(mouseX_Canvas, mouseY_Canvas, circle)) {
          hoveredCircle = circle
          break
        }
      }
      if (hoveredCircle) {
        document.body.style.cursor = "pointer"
        setActiveCircle({
          data: hoveredCircle,
          // Store the viewport coordinates (clientX/Y) instead of CSS_Pos
          x: event.clientX,
          y: event.clientY,
        })
        // if (hoveredCircle) {
        //   document.body.style.cursor = "pointer"
        //   setActiveCircle({
        //     data: hoveredCircle,
        //     x: mouseX_CSS, // Store the CSS pixels
        //     y: mouseY_CSS,
        //   })

        // *** PLEASE LOG THESE VALUES ***
        console.log(`CSS Pos: (${mouseX_CSS}, ${mouseY_CSS})`)
        console.log(`Canvas Pos: (${mouseX_Canvas}, ${mouseY_Canvas})`)
        console.log(`Canvas Rect: Width: ${rect.width}, Height: ${rect.height}`)
      } else {
        document.body.style.cursor = "default"
        setActiveCircle(null)
      }
    },
    [circlesList, isMouseInCircle, ref]
  )

  useLayoutEffect(() => {
    if (!ref.current) {
      return
    }
    // ... (drawCircles and drawRectangles functions should be defined inside or imported correctly) ...

    const canvas = ref.current
    const ctx = canvas.getContext("2d")
    const img = imgRef.current

    // (Assuming drawCircles and drawRectangles are imported from "./CounterSpaces" as in previous snippets)

    const handleLoad = () => {
      const width = img.naturalWidth
      const height = img.naturalHeight
      canvas.width = width
      canvas.height = height
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      // Assuming these are imported correctly:
      // drawCircles(ctx, circlesList)
      // drawRectangles(ctx, rectList)
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
    <div className="overlay-container">
      <img ref={imgRef} src={image} className="covered-image" />
      <canvas ref={ref} className="covering-canvas" onMouseMove={handleMouseMove} />
      {activeCircle && (
        <div
          className="popup-box"
          style={{
            // Use the viewport coordinates
            left: `${activeCircle.x}px`,
            top: `${activeCircle.y}px`,
            // transform: 'translate(-50%, -100%)', // Optional centering adjustment
          }}
        >
          <strong>{activeCircle.data.name}</strong>
          <p>{activeCircle.data.info}</p>
        </div>
      )}
    </div>
  )
})

Canvas.displayName = "Canvas"

export default Canvas
