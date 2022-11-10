export const Image = ({
  src,
  height,
  align = "center"
}) => {
  return (
    <div style={{display: "flex", justifyContent: align}}>
      <img src={src} style={{ height, width: height ? "unset" : "100%"}} />
      </div>
  )
}