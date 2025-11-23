import React, { useRef, useLayoutEffect, useState, useCallback, forwardRef } from "react"
import { PROVINCES } from "../screenobjects/Provinces"
import { TRACK_AREAS } from "../screenobjects/TrackAreas"

import "./Canvas.css"

const Canvas = forwardRef(({ image, zoomPP, setBoardReady }, ref) => {
  const imgRef = useRef(null)
  const [activeCircle, setActiveCircle] = useState(null) // Stores the currently hovered circle's data

  const circlesList = PROVINCES
  const rectList = TRACK_AREAS

  // --- Collision Detection Function ---
  const isMouseInCircle = useCallback((mouseX, mouseY, circle) => {
    const distance = Math.sqrt(Math.pow(mouseX - circle.centerX, 2) + Math.pow(mouseY - circle.centerY, 2))
    return distance < circle.radius
  }, [])

  const handleMouseMove = useCallback(
    (event) => {
      if (!ref) {
        return
      }
      if (!ref.current || !circlesList.length) return

      const canvas = ref.current
      const rect = canvas.getBoundingClientRect()
      const root = document.documentElement

      const mouseX_Viewport = event.clientX + window.pageXOffset - root.clientLeft
      const mouseY_Viewport = event.clientY + window.pageYOffset - root.clientTop
      const mouseX_CSS = mouseX_Viewport - rect.left
      const mouseY_CSS = mouseY_Viewport - rect.top

      const scaleX = canvas.width / rect.width
      const scaleY = canvas.height / rect.height

      const mouseX_Canvas = mouseX_CSS * scaleX
      const mouseY_Canvas = mouseY_CSS * scaleY

      let hoveredCircle = null

      // Loop through all circles to find the one the mouse is in
      for (const circle of circlesList) {
        if (isMouseInCircle(mouseX_Canvas, mouseY_Canvas, circle)) {
          hoveredCircle = circle
          break // Stop checking once one is found
        }
      }

      if (hoveredCircle) {
        document.body.style.cursor = "pointer"
        // Store the circle data using the property named 'data'
        setActiveCircle({
          data: hoveredCircle, // <--- This creates the 'data' property
          x: mouseX_CSS,
          y: mouseY_CSS,
        })
      } else {
        document.body.style.cursor = "default"
        setActiveCircle(null) // Hide the popup
      }
    },
    [circlesList, isMouseInCircle]
  )

  useLayoutEffect(() => {
    // Basic check: if the ref isn't attached yet, exit the effect for this cycle
    if (!ref) {
      return
    }

    const canvas = ref.current
    const ctx = canvas.getContext("2d")
    const img = imgRef.current

    const drawRectangles = (ctx) => {
      rectList.forEach((rectData) => {
        ctx.fillStyle = "rgba(255, 100, 0, 0.5)" // Semi-transparent orange
        ctx.fillRect(rectData.x, rectData.y, rectData.width, rectData.height)

        ctx.lineWidth = 2
        ctx.strokeStyle = "darkorange"
        ctx.strokeRect(rectData.x, rectData.y, rectData.width, rectData.height)
      })
    }
    const drawCircles = (ctx) => {
      circlesList.forEach((circle) => {
        ctx.beginPath()
        ctx.arc(circle.centerX, circle.centerY, circle.radius, 0, 2 * Math.PI)
        // Use a generic style for now, or customize per circle if needed
        ctx.fillStyle = "rgba(0, 0, 255, 0.5)"
        ctx.fill()
        ctx.lineWidth = 1
        ctx.strokeStyle = "black"
        ctx.stroke()
      })
    }
    const handleLoad = () => {
      const width = img.naturalWidth
      const height = img.naturalHeight
      canvas.width = width
      canvas.height = height

      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw all circles from the list
      drawCircles(ctx)
      drawRectangles(ctx)
      setBoardReady()
    }

    img.addEventListener("load", handleLoad)
    if (img.complete) {
      handleLoad()
    }

    return () => {
      img.removeEventListener("load", handleLoad)
    }
    // Re-run effect if the list of circles changes
  }, [image, rectList, circlesList, ref])

  if (activeCircle) {
    console.log("activeCircle.x=", activeCircle.x / zoomPP.scale)
    console.log("panX=", zoomPP.panX)
  }
  return (
    <div className="overlay-container">
      <img ref={imgRef} src={image} className="covered-image" />
      <canvas
        ref={ref}
        className="covering-canvas"
        onMouseMove={handleMouseMove} // Attach the mouse move listener here
      />
      {activeCircle && (
        <div
          className="popup-box"
          style={{
            // Position using the CSS coordinates captured during mouse move
            left: `${activeCircle.x / zoomPP.scale + 20}px`,
            top: `${activeCircle.y / zoomPP.scale - zoomPP.panY - 80}px`,
          }}
        >
          {/* Display specific data points from the selected circle object */}
          <strong>{activeCircle.data.name}</strong>
          <p>{activeCircle.data.info}</p>
        </div>
      )}
    </div>
  )
})

Canvas.displayName = "Canvas"

export default Canvas
