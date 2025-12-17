// TestProvinces.jsx
import React, { useCallback, useEffect, useMemo, useState, memo } from "react";
import { PROVINCES, PROVINCE_OFFSETS_PERCENT } from "./data/Provinces"; // adjust path
import ProvinceBoxVisual from "./ProvinceBoxVisual"; // adjust path

/**
 * Renders a debug overlay showing all stack positions for every province.
 *
 * - Renders one box per PROVINCE_OFFSETS_PERCENT entry (4 boxes per province).
 * - Uses province.top/left (percent numbers) as the base anchor.
 * - Optional label shows province name and offset index.
 */
function TestProvinces({ boxWidth = 1.9, boxHeight = 1.9, showLabels = true, color = "rgba(0,150,0,0.28)" }) {
  const [positions, setPositions] = useState([]);

  const generatePositions = useCallback(() => {
    const out = [];
    for (const province of PROVINCES) {
      // Ensure numeric top/left (some entries may be strings in other data)
      const baseTop = typeof province.top === "number" ? province.top : parseFloat(province.top) || 0;
      const baseLeft = typeof province.left === "number" ? province.left : parseFloat(province.left) || 0;

      PROVINCE_OFFSETS_PERCENT.forEach((offset, idx) => {
        const top = baseTop + (offset.top || 0);
        const left = baseLeft + (offset.left || 0);
        out.push({
          id: `${province.id}-${idx}`,
          provinceName: province.name,
          offsetIndex: idx,
          top,
          left,
        });
      });
    }
    setPositions(out);
  }, []);

  useEffect(() => {
    generatePositions();
  }, [generatePositions]);

  const rendered = useMemo(() => {
    return positions.map((p) => (
      <ProvinceBoxVisual
        key={p.id}
        top={p.top}
        left={p.left}
        width={boxWidth}
        height={boxHeight}
        color={color}
        label={showLabels ? `${String(p.provinceName).split(".").pop() || p.provinceName} #${p.offsetIndex}` : undefined}
      />
    ));
  }, [positions, boxWidth, boxHeight, color, showLabels]);

  return <>{rendered}</>;
}

export default memo(TestProvinces);
