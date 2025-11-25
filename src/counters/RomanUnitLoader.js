import GlobalUnitsModel from "../model/GlobalUnitsModel"
import RomanAuxilia from "./RomanAuxilia"
import RomanImperialCavalry from "./RomanImperialCavalry"
import RomanLegion from "./RomanLegion"
import RomanPraetorianGuard from "./RomanPraetorianGuard"
import RomanWall from "./RomanWall"
import RomanFleet from "./RomanFleet"

export function loadRomanLegions(counters) {
  let adiutrix1 = {
    name: GlobalUnitsModel.ROMAN_UNIT.I_ADIUTRIX,
    unitType: GlobalUnitsModel.ROMAN_UNIT_TYPE.LEGION,
    imageFront: "/images/counters/romanunits/Rome-Leg-I-Adiutrix.png",
    imageBack: "/images/counters/romanunits/Rome-Leg-I-Adiutrix-2.png",
  }
  counters.set(adiutrix1.name, new RomanLegion(adiutrix1))

  let germanica1 = {
    name: GlobalUnitsModel.ROMAN_UNIT.I_GERMANICA,
    unitType: GlobalUnitsModel.ROMAN_UNIT_TYPE.LEGION,
    imageFront: "/images/counters/romanunits/Rome-Leg-I-Germanica.png",
    imageBack: "/images/counters/romanunits/Rome-Leg-I-Germanica-2.png",
  }
  counters.set(germanica1.name, new RomanLegion(germanica1))

  let italica1 = {
    name: GlobalUnitsModel.ROMAN_UNIT.I_ITALICA,
    unitType: GlobalUnitsModel.ROMAN_UNIT_TYPE.LEGION,
    imageFront: "/images/counters/romanunits/Rome-Leg-I-Italica.png",
    imageBack: "/images/counters/romanunits/Rome-Leg-I-Italica-2.png",
  }
  counters.set(italica1.name, new RomanLegion(italica1))

  let illricorum1 = {
    name: GlobalUnitsModel.ROMAN_UNIT.I_ILLRYICORUM,
    unitType: GlobalUnitsModel.ROMAN_UNIT_TYPE.LEGION,
    imageFront: "/images/counters/romanunits/Rome-Leg-I-Illyricorum.png",
    imageBack: "/images/counters/romanunits/Rome-Leg-I-Illyricorum-2.png",
  }
  counters.set(illricorum1.name, new RomanLegion(illricorum1))

  let minervia1 = {
    name: GlobalUnitsModel.ROMAN_UNIT.I_MINERVIA,
    unitType: GlobalUnitsModel.ROMAN_UNIT_TYPE.LEGION,
    imageFront: "/images/counters/romanunits/Rome-Leg-I-Minervia.png",
    imageBack: "/images/counters/romanunits/Rome-Leg-I-Minervia-2.png",
  }
  counters.set(minervia1.name, new RomanLegion(minervia1))

  let parthica1 = {
    name: GlobalUnitsModel.ROMAN_UNIT.I_PARTHICA,
    unitType: GlobalUnitsModel.ROMAN_UNIT_TYPE.LEGION,
    imageFront: "/images/counters/romanunits/Rome-Leg-I-Parthica.png",
    imageBack: "/images/counters/romanunits/Rome-Leg-I-Parthica-2.png",
  }
  counters.set(parthica1.name, new RomanLegion(parthica1))

  let adiutrix2 = {
    name: GlobalUnitsModel.ROMAN_UNIT.II_ADIUTRIX,
    unitType: GlobalUnitsModel.ROMAN_UNIT_TYPE.LEGION,
    imageFront: "/images/counters/romanunits/Rome-Leg-II-Adiutrix.png",
    imageBack: "/images/counters/romanunits/Rome-Leg-II-Adiutrix-2.png",
  }
  counters.set(adiutrix2.name, new RomanLegion(adiutrix2))

  let augusta2 = {
    name: GlobalUnitsModel.ROMAN_UNIT.II_AUGUSTA,
    unitType: GlobalUnitsModel.ROMAN_UNIT_TYPE.LEGION,
    imageFront: "/images/counters/romanunits/Rome-Leg-II-Augusta.png",
    imageBack: "/images/counters/romanunits/Rome-Leg-II-Augusta-2.png",
  }
  counters.set(augusta2.name, new RomanLegion(augusta2))

  let italica2 = {
    name: GlobalUnitsModel.ROMAN_UNIT.II_ITALICA,
    unitType: GlobalUnitsModel.ROMAN_UNIT_TYPE.LEGION,
    imageFront: "/images/counters/romanunits/Rome-Leg-II-Italica.png",
    imageBack: "/images/counters/romanunits/Rome-Leg-II-Italica-2.png",
  }
  counters.set(italica2.name, new RomanLegion(italica2))

  let parthica2 = {
    name: GlobalUnitsModel.ROMAN_UNIT.II_PARTHICA,
    unitType: GlobalUnitsModel.ROMAN_UNIT_TYPE.LEGION,
    imageFront: "/images/counters/romanunits/Rome-Leg-II-Parthica.png",
    imageBack: "/images/counters/romanunits/Rome-Leg-II-Parthica-2.png",
  }
  counters.set(parthica2.name, new RomanLegion(parthica2))

  // END 10

  let trajana2 = {
    name: GlobalUnitsModel.ROMAN_UNIT.II_TRAJANA,
    unitType: GlobalUnitsModel.ROMAN_UNIT_TYPE.LEGION,
    imageFront: "/images/counters/romanunits/Rome-Leg-II-Trajana.png",
    imageBack: "/images/counters/romanunits/Rome-Leg-II-Trajana-2.png",
  }
  counters.set(trajana2.name, new RomanLegion(trajana2))

  let augusta3 = {
    name: GlobalUnitsModel.ROMAN_UNIT.III_AUGUSTA,
    unitType: GlobalUnitsModel.ROMAN_UNIT_TYPE.LEGION,
    imageFront: "/images/counters/romanunits/Rome-Leg-III-Augusta.png",
    imageBack: "/images/counters/romanunits/Rome-Leg-III-Augusta-2.png",
  }
  counters.set(augusta3.name, new RomanLegion(augusta3))

  let cyrenaica3 = {
    name: GlobalUnitsModel.ROMAN_UNIT.III_CYRENAICA,
    unitType: GlobalUnitsModel.ROMAN_UNIT_TYPE.LEGION,
    imageFront: "/images/counters/romanunits/Rome-Leg-III-Cyrenaica.png",
    imageBack: "/images/counters/romanunits/Rome-Leg-III-Cyrenaica-2.png",
  }
  counters.set(cyrenaica3.name, new RomanLegion(cyrenaica3))

  let gallica3 = {
    name: GlobalUnitsModel.ROMAN_UNIT.III_GALLICA,
    unitType: GlobalUnitsModel.ROMAN_UNIT_TYPE.LEGION,
    imageFront: "/images/counters/romanunits/Rome-Leg-III-Gallica.png",
    imageBack: "/images/counters/romanunits/Rome-Leg-III-Gallica-2.png",
  }
  counters.set(gallica3.name, new RomanLegion(gallica3))

  let italica3 = {
    name: GlobalUnitsModel.ROMAN_UNIT.III_ITALICA,
    unitType: GlobalUnitsModel.ROMAN_UNIT_TYPE.LEGION,
    imageFront: "/images/counters/romanunits/Rome-Leg-III-Italica.png",
    imageBack: "/images/counters/romanunits/Rome-Leg-III-Italica-2.png",
  }
  counters.set(italica3.name, new RomanLegion(italica3))

  let parthica3 = {
    name: GlobalUnitsModel.ROMAN_UNIT.III_PARTHICA,
    unitType: GlobalUnitsModel.ROMAN_UNIT_TYPE.LEGION,
    imageFront: "/images/counters/romanunits/Rome-Leg-III-Parthica.png",
    imageBack: "/images/counters/romanunits/Rome-Leg-III-Parthica-2.png",
  }
  counters.set(parthica3.name, new RomanLegion(parthica3))

  let flavia4 = {
    name: GlobalUnitsModel.ROMAN_UNIT.IV_FLAVIA,
    unitType: GlobalUnitsModel.ROMAN_UNIT_TYPE.LEGION,
    imageFront: "/images/counters/romanunits/Rome-Leg-IV-Flavia.png",
    imageBack: "/images/counters/romanunits/Rome-Leg-IV-Flavia-2.png",
  }
  counters.set(flavia4.name, new RomanLegion(flavia4))

  let macedonica4 = {
    name: GlobalUnitsModel.ROMAN_UNIT.IV_MACEDONICA,
    unitType: GlobalUnitsModel.ROMAN_UNIT_TYPE.LEGION,
    imageFront: "/images/counters/romanunits/Rome-Leg-IV-Macedonica.png",
    imageBack: "/images/counters/romanunits/Rome-Leg-IV-Macedonica-2.png",
  }
  counters.set(macedonica4.name, new RomanLegion(macedonica4))

  let scythica4 = {
    name: GlobalUnitsModel.ROMAN_UNIT.IV_SCYTHICA,
    unitType: GlobalUnitsModel.ROMAN_UNIT_TYPE.LEGION,
    imageFront: "/images/counters/romanunits/Rome-Leg-IV-Scythica.png",
    imageBack: "/images/counters/romanunits/Rome-Leg-IV-Scythica-2.png",
  }
  counters.set(scythica4.name, new RomanLegion(scythica4))

  let alaudae5 = {
    name: GlobalUnitsModel.ROMAN_UNIT.V_ALAUDAE,
    unitType: GlobalUnitsModel.ROMAN_UNIT_TYPE.LEGION,
    imageFront: "/images/counters/romanunits/Rome-Leg-V-Alaudae.png",
    imageBack: "/images/counters/romanunits/Rome-Leg-V-Alaudae-2.png",
  }
  counters.set(alaudae5.name, new RomanLegion(alaudae5))

  // END 20

  let macedonica5 = {
    name: GlobalUnitsModel.ROMAN_UNIT.V_MACEDONICA,
    unitType: GlobalUnitsModel.ROMAN_UNIT_TYPE.LEGION,
    imageFront: "/images/counters/romanunits/Rome-Leg-V-Macedonica.png",
    imageBack: "/images/counters/romanunits/Rome-Leg-V-Macedonica-2.png",
  }
  counters.set(macedonica5.name, new RomanLegion(macedonica5))

  let ferrata6 = {
    name: GlobalUnitsModel.ROMAN_UNIT.VI_FERRATA,
    unitType: GlobalUnitsModel.ROMAN_UNIT_TYPE.LEGION,
    imageFront: "/images/counters/romanunits/Rome-Leg-VI-Ferrata.png",
    imageBack: "/images/counters/romanunits/Rome-Leg-VI-Ferrata-2.png",
  }
  counters.set(ferrata6.name, new RomanLegion(ferrata6))

  let italica4 = {
    name: GlobalUnitsModel.ROMAN_UNIT.IV_ITALICA,
    unitType: GlobalUnitsModel.ROMAN_UNIT_TYPE.LEGION,
    imageFront: "/images/counters/romanunits/Rome-Leg-IV-Italica.png",
    imageBack: "/images/counters/romanunits/Rome-Leg-IV-Italica-2.png",
  }
  counters.set(italica4.name, new RomanLegion(italica4))

  let victrix6 = {
    name: GlobalUnitsModel.ROMAN_UNIT.VI_VICTRIX,
    unitType: GlobalUnitsModel.ROMAN_UNIT_TYPE.LEGION,
    imageFront: "/images/counters/romanunits/Rome-Leg-VI-Victrix.png",
    imageBack: "/images/counters/romanunits/Rome-Leg-VI-Victrix-2.png",
  }
  counters.set(victrix6.name, new RomanLegion(victrix6))

  let claudia7 = {
    name: GlobalUnitsModel.ROMAN_UNIT.VII_CLAUDIA,
    unitType: GlobalUnitsModel.ROMAN_UNIT_TYPE.LEGION,
    imageFront: "/images/counters/romanunits/Rome-Leg-VII-Claudia.png",
    imageBack: "/images/counters/romanunits/Rome-Leg-VII-Claudia-2.png",
  }
  counters.set(claudia7.name, new RomanLegion(claudia7))

  let gemina7 = {
    name: GlobalUnitsModel.ROMAN_UNIT.VII_GEMINA,
    unitType: GlobalUnitsModel.ROMAN_UNIT_TYPE.LEGION,
    imageFront: "/images/counters/romanunits/Rome-Leg-VII-Gemina.png",
    imageBack: "/images/counters/romanunits/Rome-Leg-VII-Gemina-2.png",
  }
  counters.set(gemina7.name, new RomanLegion(gemina7))

  let augusta8 = {
    name: GlobalUnitsModel.ROMAN_UNIT.VIII_AUGUSTA,
    unitType: GlobalUnitsModel.ROMAN_UNIT_TYPE.LEGION,
    imageFront: "/images/counters/romanunits/Rome-Leg-VIII-Augusta.png",
    imageBack: "/images/counters/romanunits/Rome-Leg-VIII-Augusta-2.png",
  }
  counters.set(augusta8.name, new RomanLegion(augusta8))

  let hispana9 = {
    name: GlobalUnitsModel.ROMAN_UNIT.IX_HISPANA,
    unitType: GlobalUnitsModel.ROMAN_UNIT_TYPE.LEGION,
    imageFront: "/images/counters/romanunits/Rome-Leg-IX-Hispana.png",
    imageBack: "/images/counters/romanunits/Rome-Leg-IX-Hispana-2.png",
  }
  counters.set(hispana9.name, new RomanLegion(hispana9))

  let fretensis10 = {
    name: GlobalUnitsModel.ROMAN_UNIT.X_FRETENSIS,
    unitType: GlobalUnitsModel.ROMAN_UNIT_TYPE.LEGION,
    imageFront: "/images/counters/romanunits/Rome-Leg-X-Fretensis.png",
    imageBack: "/images/counters/romanunits/Rome-Leg-X-Fretensis-2.png",
  }
  counters.set(fretensis10.name, new RomanLegion(fretensis10))

  let gemina10 = {
    name: GlobalUnitsModel.ROMAN_UNIT.X_GEMINA,
    unitType: GlobalUnitsModel.ROMAN_UNIT_TYPE.LEGION,
    imageFront: "/images/counters/romanunits/Rome-Leg-X-Gemina.png",
    imageBack: "/images/counters/romanunits/Rome-Leg-X-Gemina-2.png",
  }
  counters.set(gemina10.name, new RomanLegion(gemina10))

  // END 30

  let claudia11 = {
    name: GlobalUnitsModel.ROMAN_UNIT.XI_CLAUDIA,
    unitType: GlobalUnitsModel.ROMAN_UNIT_TYPE.LEGION,
    imageFront: "/images/counters/romanunits/Rome-Leg-XI-Claudia.png",
    imageBack: "/images/counters/romanunits/Rome-Leg-XI-Claudia-2.png",
  }
  counters.set(claudia11.name, new RomanLegion(claudia11))

  let fulminata12 = {
    name: GlobalUnitsModel.ROMAN_UNIT.XII_FULMINATA,
    unitType: GlobalUnitsModel.ROMAN_UNIT_TYPE.LEGION,
    imageFront: "/images/counters/romanunits/Rome-Leg-XII-Fulminata.png",
    imageBack: "/images/counters/romanunits/Rome-Leg-XII-Fulminata-2.png",
  }
  counters.set(fulminata12.name, new RomanLegion(fulminata12))

  let gemina13 = {
    name: GlobalUnitsModel.ROMAN_UNIT.XIII_GEMINA,
    unitType: GlobalUnitsModel.ROMAN_UNIT_TYPE.LEGION,
    imageFront: "/images/counters/romanunits/Rome-Leg-XIII-Gemina.png",
    imageBack: "/images/counters/romanunits/Rome-Leg-XIII-Gemina-2.png",
  }
  counters.set(gemina13.name, new RomanLegion(gemina13))

  let gemina14 = {
    name: GlobalUnitsModel.ROMAN_UNIT.XIV_GEMINA,
    unitType: GlobalUnitsModel.ROMAN_UNIT_TYPE.LEGION,
    imageFront: "/images/counters/romanunits/Rome-Leg-XIV-Gemina.png",
    imageBack: "/images/counters/romanunits/Rome-Leg-XIV-Gemina-2.png",
  }
  counters.set(gemina14.name, new RomanLegion(gemina14))

  let apollinaris15 = {
    name: GlobalUnitsModel.ROMAN_UNIT.XV_APOLLINARIS,
    unitType: GlobalUnitsModel.ROMAN_UNIT_TYPE.LEGION,
    imageFront: "/images/counters/romanunits/Rome-Leg-XV-Apollinaris.png",
    imageBack: "/images/counters/romanunits/Rome-Leg-XV-Apollinaris-2.png",
  }
  counters.set(apollinaris15.name, new RomanLegion(apollinaris15))

  let primigenia15 = {
    name: GlobalUnitsModel.ROMAN_UNIT.XV_PRIMIGENIA,
    unitType: GlobalUnitsModel.ROMAN_UNIT_TYPE.LEGION,
    imageFront: "/images/counters/romanunits/Rome-Leg-XV-Primigenia.png",
    imageBack: "/images/counters/romanunits/Rome-Leg-XV-Primigenia-2.png",
  }
  counters.set(primigenia15.name, new RomanLegion(primigenia15))

  let flavia16 = {
    name: GlobalUnitsModel.ROMAN_UNIT.XVI_FLAVIA,
    unitType: GlobalUnitsModel.ROMAN_UNIT_TYPE.LEGION,
    imageFront: "/images/counters/romanunits/Rome-Leg-XVI-Flavia.png",
    imageBack: "/images/counters/romanunits/Rome-Leg-XVI-Flavia-2.png",
  }
  counters.set(flavia16.name, new RomanLegion(flavia16))

  let gallica16 = {
    name: GlobalUnitsModel.ROMAN_UNIT.XVI_GALLICA,
    unitType: GlobalUnitsModel.ROMAN_UNIT_TYPE.LEGION,
    imageFront: "/images/counters/romanunits/Rome-Leg-XVI-Gallica.png",
    imageBack: "/images/counters/romanunits/Rome-Leg-XVI-Gallica-2.png",
  }
  counters.set(gallica16.name, new RomanLegion(gallica16))

  let variana17 = {
    name: GlobalUnitsModel.ROMAN_UNIT.XVII_VARIANA,
    unitType: GlobalUnitsModel.ROMAN_UNIT_TYPE.LEGION,
    imageFront: "/images/counters/romanunits/Rome-Leg-XVII-Variana.png",
    imageBack: "/images/counters/romanunits/Rome-Leg-XVII-Variana-2.png",
  }
  counters.set(variana17.name, new RomanLegion(variana17))

  let variana18 = {
    name: GlobalUnitsModel.ROMAN_UNIT.XVIII_VARIANA,
    unitType: GlobalUnitsModel.ROMAN_UNIT_TYPE.LEGION,
    imageFront: "/images/counters/romanunits/Rome-Leg-XVIII-Variana.png",
    imageBack: "/images/counters/romanunits/Rome-Leg-XVIII-Variana-2.png",
  }
  counters.set(variana18.name, new RomanLegion(variana18))

  let variana19 = {
    name: GlobalUnitsModel.ROMAN_UNIT.XIX_VARIANA,
    unitType: GlobalUnitsModel.ROMAN_UNIT_TYPE.LEGION,
    imageFront: "/images/counters/romanunits/Rome-Leg-XIX-Variana.png",
    imageBack: "/images/counters/romanunits/Rome-Leg-XIX-Variana-2.png",
  }
  counters.set(variana19.name, new RomanLegion(variana19))

  let valeria20 = {
    name: GlobalUnitsModel.ROMAN_UNIT.XX_VALERIA,
    unitType: GlobalUnitsModel.ROMAN_UNIT_TYPE.LEGION,
    imageFront: "/images/counters/romanunits/Rome-Leg-XX-Valeria.png",
    imageBack: "/images/counters/romanunits/Rome-Leg-XX-Valeria-2.png",
  }
  counters.set(valeria20.name, new RomanLegion(valeria20))

  let rapax21 = {
    name: GlobalUnitsModel.ROMAN_UNIT.XXI_RAPAX,
    unitType: GlobalUnitsModel.ROMAN_UNIT_TYPE.LEGION,
    imageFront: "/images/counters/romanunits/Rome-Leg-XXI-Rapax.png",
    imageBack: "/images/counters/romanunits/Rome-Leg-XXI-Rapax-2.png",
  }
  counters.set(rapax21.name, new RomanLegion(rapax21))

  let deiotariana22 = {
    name: GlobalUnitsModel.ROMAN_UNIT.XXII_DEIOTARIANA,
    unitType: GlobalUnitsModel.ROMAN_UNIT_TYPE.LEGION,
    imageFront: "/images/counters/romanunits/Rome-Leg-XXII-Deiotariana.png",
    imageBack: "/images/counters/romanunits/Rome-Leg-XXII-Deiotariana-2.png",
  }
  counters.set(deiotariana22.name, new RomanLegion(deiotariana22))

  let primigenia22 = {
    name: GlobalUnitsModel.ROMAN_UNIT.XXII_PRIMIGENIA,
    unitType: GlobalUnitsModel.ROMAN_UNIT_TYPE.LEGION,
    imageFront: "/images/counters/romanunits/Rome-Leg-XXII-Primigenia.png",
    imageBack: "/images/counters/romanunits/Rome-Leg-XXII-Primigenia-2.png",
  }
  counters.set(primigenia22.name, new RomanLegion(primigenia22))

  let ulpia30 = {
    name: GlobalUnitsModel.ROMAN_UNIT.XXX_ULPIA,
    unitType: GlobalUnitsModel.ROMAN_UNIT_TYPE.LEGION,
    imageFront: "/images/counters/romanunits/Rome-Leg-XXX-Ulpia.png",
    imageBack: "/images/counters/romanunits/Rome-Leg-XXX-Ulpia-2.png",
  }
  counters.set(ulpia30.name, new RomanLegion(ulpia30))
}

export function loadRomanAuxiliaries(counters) {
  for (let i = 0; i < 20; i++) {
    const auxilia = new RomanAuxilia({
      name: "AUXILIA " + i,
      unitType: GlobalUnitsModel.ROMAN_UNIT_TYPE.AUXILIA,
      imageFront: "/images/counters/romanunits/Rome-Aux.png",
      imageBack: "/images/counters/romanunits/Rome-Aux-F.png",
    })
    counters.set(auxilia.name, auxilia)
  }
}

export function loadRomanImperialCavalry(counters) {
  for (let i = 0; i < 3; i++) {
    const cavalry = new RomanImperialCavalry({
      name: "IMPERIAL CAVALRY " + i,
      unitType: GlobalUnitsModel.ROMAN_UNIT_TYPE.IMPERIAL_CAVALRY,
      imageFront: "/images/counters/romanunits/Rome-Imp Cav.png",
      imageBack: "/images/counters/romanunits/Rome-Imp Cav-F.png",
    })
    counters.set(cavalry.name, cavalry)
  }
}

export function loadRomanPraetorianGuard(counters) {
  for (let i = 0; i < 3; i++) {
    const guard = new RomanPraetorianGuard({
      name: "PRAETORIAN GUARD " + i,
      unitType: GlobalUnitsModel.ROMAN_UNIT_TYPE.PRAETORIAN_GUARD,
      imageFront: "/images/counters/romanunits/Rome-Prae Gd.png",
      imageBack: "/images/counters/romanunits/Rome-Prae Gd-F.png",
    })
    counters.set(guard.name, guard)
  }
}


export function loadRomanWalls(counters) {
  for (let i = 0; i < 4; i++) {
    const wall = new RomanWall({
      name: "WALL " + i,
      unitType: GlobalUnitsModel.ROMAN_UNIT_TYPE.WALL,
      imageFront: "/images/counters/romanunits/Mkr-Wall.png",
      imageBack: "/images/counters/romanunits/Mkr-CannotTransfer.png",
    })
    counters.set(wall.name, wall)
  }
}

export function loadRomanFleets(counters) {
  let aegyptian = {
    name: GlobalUnitsModel.ROMAN_UNIT.AEGYPTIAN_FLEET,
    unitType: GlobalUnitsModel.ROMAN_UNIT_TYPE.FLEET,
    imageFront: "/images/counters/romanunits/Fleet-Aegyptian-F.png",
    imageBack: "/images/counters/romanunits/Fleet-Aegyptian.png",
  }
  counters.set(aegyptian.name, new RomanFleet(aegyptian))

  let african = {
    name: GlobalUnitsModel.ROMAN_UNIT.AFRICAN_FLEET,
    unitType: GlobalUnitsModel.ROMAN_UNIT_TYPE.FLEET,
    imageFront: "/images/counters/romanunits/Fleet-African-F.png",
    imageBack: "/images/counters/romanunits/Fleet-African.png",
  }
  counters.set(african.name, new RomanFleet(african))

  let babylonian = {
    name: GlobalUnitsModel.ROMAN_UNIT.BABYLONIAN_FLEET,
    unitType: GlobalUnitsModel.ROMAN_UNIT_TYPE.FLEET,
    imageFront: "/images/counters/romanunits/Fleet-Babylonian-F.png",
    imageBack: "/images/counters/romanunits/Fleet-Babylonian.png",
  }
  counters.set(babylonian.name, new RomanFleet(babylonian))

  let bosporan = {
    name: GlobalUnitsModel.ROMAN_UNIT.BOSPORAN_FLEET,
    unitType: GlobalUnitsModel.ROMAN_UNIT_TYPE.FLEET,
    imageFront: "/images/counters/romanunits/Fleet-Bosporan-F.png",
    imageBack: "/images/counters/romanunits/Fleet-Bosporan.png",
  }
  counters.set(bosporan.name, new RomanFleet(bosporan))

  let british = {
    name: GlobalUnitsModel.ROMAN_UNIT.BRITISH_FLEET,
    unitType: GlobalUnitsModel.ROMAN_UNIT_TYPE.FLEET,
    imageFront: "/images/counters/romanunits/Fleet-British-F.png",
    imageBack: "/images/counters/romanunits/Fleet-British.png",
  }
  counters.set(british.name, new RomanFleet(british))

  let german = {
    name: GlobalUnitsModel.ROMAN_UNIT.GERMAN_FLEET,
    unitType: GlobalUnitsModel.ROMAN_UNIT_TYPE.FLEET,
    imageFront: "/images/counters/romanunits/Fleet-German-F.png",
    imageBack: "/images/counters/romanunits/Fleet-German.png",
  }
  counters.set(german.name, new RomanFleet(german))

  let moesian = {
    name: GlobalUnitsModel.ROMAN_UNIT.MOESIAN_FLEET,
    unitType: GlobalUnitsModel.ROMAN_UNIT_TYPE.FLEET,
    imageFront: "/images/counters/romanunits/Fleet-Moesian-F.png",
    imageBack: "/images/counters/romanunits/Fleet-Moesian.png",
  }
  counters.set(moesian.name, new RomanFleet(moesian))

  let pannonian = {
    name: GlobalUnitsModel.ROMAN_UNIT.PANNONIAN_FLEET,
    unitType: GlobalUnitsModel.ROMAN_UNIT_TYPE.FLEET,
    imageFront: "/images/counters/romanunits/Fleet-Pannonian-F.png",
    imageBack: "/images/counters/romanunits/Fleet-Pannonian.png",
  }
  counters.set(pannonian.name, new RomanFleet(pannonian))

  let pontic = {
    name: GlobalUnitsModel.ROMAN_UNIT.PONTIC_FLEET,
    unitType: GlobalUnitsModel.ROMAN_UNIT_TYPE.FLEET,
    imageFront: "/images/counters/romanunits/Fleet-Pontic-F.png",
    imageBack: "/images/counters/romanunits/Fleet-Pontic.png",
  }
  counters.set(pontic.name, new RomanFleet(pontic))

  let praetorian1 = {
    name: GlobalUnitsModel.ROMAN_UNIT.PRAETORIAN_FLEET_1,
    unitType: GlobalUnitsModel.ROMAN_UNIT_TYPE.FLEET,
    imageFront: "/images/counters/romanunits/Fleet-Praetorian-F.png",
    imageBack: "/images/counters/romanunits/Fleet-Praetorian.png",
  }
  counters.set(praetorian1.name, new RomanFleet(praetorian1))

  let praetorian2 = {
    name: GlobalUnitsModel.ROMAN_UNIT.PRAETORIAN_FLEET_2,
    unitType: GlobalUnitsModel.ROMAN_UNIT_TYPE.FLEET,
    imageFront: "/images/counters/romanunits/Fleet-Praetorian-F.png",
    imageBack: "/images/counters/romanunits/Fleet-Praetorian.png",
  }
  counters.set(praetorian2.name, new RomanFleet(praetorian2))

  let syrian = {
    name: GlobalUnitsModel.ROMAN_UNIT.SYRIAN_FLEET,
    unitType: GlobalUnitsModel.ROMAN_UNIT_TYPE.FLEET,
    imageFront: "/images/counters/romanunits/Fleet-Syrian-F.png",
    imageBack: "/images/counters/romanunits/Fleet-Syrian.png",
  }
  counters.set(syrian.name, new RomanFleet(syrian))
}
