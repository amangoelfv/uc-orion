export const Space = ({height, color}) => {
  return (
    <div style={{
      height: height || 8,
      background: color || "white"
    }} />
  )
}