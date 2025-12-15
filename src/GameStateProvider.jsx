// GameStateProvider.jsx
import { useState } from "react"
import { GameStateContext } from "./GameStateContext"
import { initialGameState } from "./model/GameStateValues"

export function GameStateProvider({ children }) {
  const [gameState, setGameState] = useState(initialGameState)

  const setGlobalState = (key, updater) => {
    setGameState(prev => ({
      ...prev,
      [key]: typeof updater === "function" ? updater(prev[key]) : updater,
    }))
    
  }

  const render = () => {
    setGlobalState("version", new Date())
  }

  return (
    <GameStateContext.Provider value={{ gameState, setGameState, setGlobalState, render }}>
      {children}
    </GameStateContext.Provider>
  )
}
