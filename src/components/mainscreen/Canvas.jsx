import React, { useRef, useLayoutEffect, useState, useCallback, forwardRef } from "react";
import { PROVINCES } from "../screenobjects/Provinces";
import { TRACK_AREAS } from "../screenobjects/TrackAreas";
import { drawCircles, drawRectangles } from "./CounterSpaces";

import "./Canvas.css";

const Canvas = forwardRef(({ image, zoomPP, setBoardReady }, ref) => {
  const imgRef = useRef(null);
  const containerRef = useRef(null); // ADDED: Ref for the overlay container
  const popupRef = useRef(null);     // ADDED: Ref for the popup box element
  const [activeCircle, setActiveCircle] = useState(null); 
  const [popupStyle, setPopupStyle] = useState({}); // ADDED: State for dynamic popup positioning

  const circlesList = PROVINCES;
  const rectList = TRACK_AREAS;

  // --- Collision Detection Function ---
  const isMouseInCircle = useCallback((mouseX, mouseY, circle) => {
    const distance = Math.sqrt(Math.pow(mouseX - circle.centerX, 2) + Math.pow(mouseY - circle.centerY, 2));
    return distance < circle.radius;
  }, []);

  // --- Handle Mouse Move Event ---
  const handleMouseMove = useCallback(
    (event) => {
      if (!ref.current || !circlesList.length) return;

      const canvas = ref.current;
      // Use getBoundingClientRect for robust viewport positioning/scaling info
      const rect = canvas.getBoundingClientRect(); 

      // MOUSE POSITION IN CSS PIXELS RELATIVE TO THE CANVAS ELEMENT (Viewport-based)
      const mouseX_CSS = event.clientX - rect.left;
      const mouseY_CSS = event.clientY - rect.top;

      // Scaling factors: (natural size) / (displayed size)
      const scaleX = canvas.width / rect.width;
      const scaleY = canvas.height / rect.height;
      
      // MOUSE POSITION IN CANVAS DRAWING PIXELS (For collision detection)
      const mouseX_Canvas = mouseX_CSS * scaleX;
      const mouseY_Canvas = mouseY_CSS * scaleY;

      let hoveredCircle = null;

      for (const circle of circlesList) {
        if (isMouseInCircle(mouseX_Canvas, mouseY_Canvas, circle)) {
          hoveredCircle = circle;
          break;
        }
      }

      if (hoveredCircle) {
        document.body.style.cursor = "pointer";
        setActiveCircle({
          data: hoveredCircle, 
          // CHANGED: Store VIEWPORT coordinates (clientX/Y) for fixed positioning
          x: event.clientX, 
          y: event.clientY,
        });
      } else {
        document.body.style.cursor = "default";
        setActiveCircle(null); 
      }
    },
    [circlesList, isMouseInCircle, ref]
  );

  // --- Dynamic Positioning Logic using useLayoutEffect (ADDED) ---
  useLayoutEffect(() => {
    if (!activeCircle || !popupRef.current) return;

    const popupElement = popupRef.current;
    const viewportHeight = window.innerHeight;
    const popupHeight = popupElement.offsetHeight; // Get the rendered height of the popup
    const cursorY = activeCircle.y; // Viewport Y coordinate

    let transformY = '-100%'; // Default: Above the cursor
    let offsetX = '10px';     // Default: 10px to the right

    // Check if the space above the cursor is less than the popup height
    if (cursorY - popupHeight < 0) {
      // If true, position it below the cursor
      transformY = '0%'; 
    }

    setPopupStyle({
      left: `${activeCircle.x}px`,
      top: `${activeCircle.y}px`,
      transform: `translate(${offsetX}, ${transformY})`,
      position: 'fixed', // Must be fixed as we are using clientX/Y coordinates
    });

  }, [activeCircle]);


  useLayoutEffect(() => {
    if (!ref.current) return;

    const canvas = ref.current;
    const ctx = canvas.getContext("2d");
    const img = imgRef.current;
 
    const handleLoad = () => {
      const width = img.naturalWidth;
      const height = img.naturalHeight;
      canvas.width = width;
      canvas.height = height;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw all circles and rectangles from the list (Original drawing code)
      drawCircles(ctx, circlesList);
      drawRectangles(ctx, rectList);
      setBoardReady();
    };

    img.addEventListener("load", handleLoad);
    if (img.complete) {
      handleLoad();
    }

    return () => {
      img.removeEventListener("load", handleLoad);
    };
  }, [image, rectList, circlesList, ref, setBoardReady]);

  return (
    // ADDED: containerRef attached here
    <div className="overlay-container" ref={containerRef}> 
      <img ref={imgRef} src={image} className="covered-image" />
      <canvas
        ref={ref}
        className="covering-canvas"
        onMouseMove={handleMouseMove}
      />
      {activeCircle && (
        <div
          ref={popupRef} // ADDED: popupRef attached here
          className="popup-box"
          style={popupStyle} // CHANGED: Use dynamic style object
        >
          <strong>{activeCircle.data.name}</strong>
          <p>{activeCircle.data.info}</p>
        </div>
      )}
    </div>
  );
});

Canvas.displayName = "Canvas";

export default Canvas;
