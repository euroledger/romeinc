// Stacks.jsx

import React, { useCallback, useState, useEffect, useMemo, memo } from "react"
import { PROVINCES, PROVINCE_OFFSETS_PERCENT } from "./Provinces"
import { getPositionForCounter } from "../../utils"
import Stack from "./Stack" // Intermediate Stack component

const getOffsets = (province, position) => {
  const top = province.top + PROVINCE_OFFSETS_PERCENT[position].top
  const left = province.left + PROVINCE_OFFSETS_PERCENT[position].left
  return { top, left }
}

const createStackData = (province, counter) => {
  const positionId = getPositionForCounter(counter)
  const { top, left } = getOffsets(province, positionId)

  const counterData = {
    image: counter.image,
    position: {
      left: left, 
      top: top, 
    },
    width: "1.9%",
    id: counter.name, // Assuming counter.name is globally unique
    name: counter.name,
    stackPositionId: positionId,
  }
  return counterData
}

function Stacks({ controller, currentScale }) {
  const [stackArray, setStackArray] = useState([])

  const generateAllStacks = useCallback(() => {
    console.log("Regenerating all stacks due to controller change or initial load.")
    const newStackArray = [] // Array of objects containing province info and counters
    for (const province of PROVINCES) {
      const counters = controller.getCountersInProvince(province.name)
      const provinceStack = new Array() // All counters for this province
      for (const counter of counters) {
        provinceStack.push(createStackData(province, counter))
      }
      // Push an object containing both the counters data and the province details
      const p = controller.getProvince(province.name)

      let gold = 0
      let command
      if (p !== undefined) {
        gold = p.gold
        command = p.command
      }
      newStackArray.push({
        provinceName: province.name,
        provinceGold: gold,
        provinceCommand: command,
        counters: provinceStack,
        baseTop: province.top,
        baseLeft: province.left,
      })
    }
    setStackArray(newStackArray)
  }, [controller])

  useEffect(() => {
    generateAllStacks()
  }, [generateAllStacks])

  const renderedStacks = useMemo(() => {
    // We map over the enriched stack data

    return stackArray.map((stackData, i) => {
      // Pass the province info and the counters array as a single 'provinceData' prop
      return <Stack key={i} provinceData={stackData} currentScale={currentScale} areaHeight={5.2} areaWidth={3.6} />
    })
  }, [stackArray, currentScale])

  return <>{renderedStacks}</>
}

export default memo(Stacks)
