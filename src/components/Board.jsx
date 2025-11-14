import Canvas from "./Canvas"

function Board({ zoomPP, image }) {
  console.log("OOH MISSUS")
// const initialCircles = [
//   { id: 1, name: 'Eindhoven', info: 'Crucial bridge here!', centerX: 2600, centerY: 1650, radius: 50 },
//   { id: 2, name: 'Veghel', info: 'Supply dump location.', centerX: 1000, centerY: 500, radius: 40 },
// ];

  // Example data structure for circles (Pass this from a parent component):
const initialCircles = [
  { id: 1, name: 'Pannonia Inferior', info:"Region: Moesia", centerX: 2550, centerY: 1513, radius: 87 },
  { id: 2, name: 'Hibernia', info: "Region: Britain", centerX: 1095, centerY: 313, radius: 87 },
//   // Add more circles with their specific center coordinates (in image's natural pixels)
];
  return (
    <>
      <Canvas zoomPP={zoomPP} image={image} circlesList={initialCircles}></Canvas> 
    </>
  )
}

export default Board
