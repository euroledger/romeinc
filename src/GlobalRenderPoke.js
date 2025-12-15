// GlobalRenderPoke.js
let externalRender = null

export function setExternalRender(fn) {
  externalRender = fn
}

export function forceGlobalRender() {
  if (externalRender) externalRender()
}
