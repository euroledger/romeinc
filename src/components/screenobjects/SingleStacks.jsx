// Stacks.jsx

import React, { useCallback, useState, useEffect, useMemo, memo } from "react"
import { HOMELAND_PROVINCES } from "./HomelandProvinces"
import Stack from "./Stack" // Intermediate Stack component

const createStackData = (province, counter) => {
  const { top, left } = province

  const counterData = {
    image: counter.image,
    position: {
      left: left, // Raw number (e.g., 13.5)
      top: top, // Raw number (e.g., 27.2)
    },
    width: "1.9%",
    id: counter.name, // Assuming counter.name is globally unique
    name: counter.name,
    // stackPositionId: positionId,
  }
  return counterData
}

function SingleStacks({ controller, currentScale }) {
  const [stackArray, setStackArray] = useState([])

  const generateAllStacks = useCallback(() => {
    console.log("Regenerating all homeland stacks due to controller change or initial load.")
    const newStackArray = [] // Array of objects containing province info and counters
    for (const province of HOMELAND_PROVINCES) {
      const counters = controller.getCountersInProvince(province.name)
      const provinceStack = new Array() // All counters for this province
      for (const counter of counters) {
        provinceStack.push(createStackData(province, counter))
      }
      // Push an object containing both the counters data and the province details
      const p = controller.getProvince(province.name)

      newStackArray.push({
        provinceName: province.name,
        counters: provinceStack,
        baseTop: province.top,
        baseLeft: province.left,
        homeland: p.homeland
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
      return <Stack key={i} provinceData={stackData} currentScale={currentScale} areaHeight={3.6} areaWidth={2.5}/>
    })
  }, [stackArray, currentScale])

  return <>{renderedStacks}</>
}

export default memo(SingleStacks)
