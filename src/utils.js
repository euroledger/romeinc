export function windowsInit() {
  document.body.style.zoom = "100%"

  // disable browser zoom (ctrl+ ctrl-)
  window.addEventListener(
    "keydown",
    function (e) {
      if (
        (e.ctrlKey || e.metaKey) &&
        (e.which === 61 || e.which === 107 || e.which === 173 || e.which === 109 || e.which === 187 || e.which === 189)
      ) {
        e.preventDefault()
      }
    },
    false
  )
}

export function getAllProvinceMarkersOfType(counters, markerType) {
  const valuesArray = Array.from(counters.provincemarkers.values())
  return valuesArray.filter((marker) => marker.unitType === markerType)
}
