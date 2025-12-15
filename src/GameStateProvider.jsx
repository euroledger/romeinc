// GameStateProvider.jsx
import { useState } from "react"
import { GameStateContext } from "./GameStateContext"
import { initialGameState } from "./model/GameStateValues"
import { setExternalRender } from "./GlobalRenderPoke"

let externalRender = null

export function GameStateProvider({ children }) {
  const [gameState, setGameState] = useState(initialGameState)

  const setGlobalState = (key, updater) => {
    setGameState((prev) => ({
      ...prev,
      [key]: typeof updater === "function" ? updater(prev[key]) : updater,
    }))
  }

  const render = () => {
    setGlobalState("version", new Date())
  }

  // expose render globally
  externalRender = render

    // expose render globally
  setExternalRender(render)

  return (
    <GameStateContext.Provider value={{ gameState, setGameState, setGlobalState, render }}>
      {children}
    </GameStateContext.Provider>
  )
}


