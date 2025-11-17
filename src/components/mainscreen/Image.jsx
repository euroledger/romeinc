export const Image = ({ src, w, h }) => {
  return (
    <img
      style={{
        width: `${w}`,
        height:`${h}`,
      }}
      src={src}
    ></img>
  )
}
