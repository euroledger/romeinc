// GameStateContext.js
import { createContext, useContext } from "react"

export const DialogContext = createContext()
export const GameStateContext = createContext()

export function useGameState() {
  return useContext(GameStateContext)
}
