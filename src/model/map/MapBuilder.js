import { buildBritannia } from "./builders/britanniabuilder"
import { buildHispania } from "./builders/hispaniabuilder"
import { buildGallia } from "./builders/galliabuilder"
import { buildHomelands } from "./builders/homelandsbuilder"
import { buildPannonia } from "./builders/pannoniabuilder"
import { buildMoesia } from "./builders/moesiabuilder"
import { buildPontica } from "./builders/ponticabuilder"
import { buildSyria } from "./builders/syriabuilder"
import { buildAegyptus } from "./builders/aegyptusbuilder"
import { buildAfrica } from "./builders/africabuilder"
import { buildItalia } from "./builders/italiabuilder"

export function buildMap(controller) {
  const mapBoard = new Map()

  buildHomelands(mapBoard)
  buildBritannia(mapBoard)
  buildHispania(mapBoard)
  buildGallia(mapBoard)
  buildPannonia(mapBoard)
  buildMoesia(mapBoard)
  buildPontica(mapBoard)
  buildSyria(mapBoard)
  buildAegyptus(mapBoard)
  buildAfrica(mapBoard)
  buildItalia(mapBoard)

  controller.setMapboard(mapBoard)
}
