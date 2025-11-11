import { useState, useRef, useEffect } from "react"
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch"
import img1 from "./assets/romemap2.jpg"
import img2 from "./assets/banner.jpg"
import { windowsInit } from "./utils"
import { Controls } from "./components/Controls"
import "./App.css"

export default App

export function App() {
  return (
    <>
      <div style={{ background: "red", height: "10rem" }}></div>
      <div>
        <main className="image-container">
          <img
            src={img1}
          ></img>
        </main>
      </div>
    </>
  )
}
