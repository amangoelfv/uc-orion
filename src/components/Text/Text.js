export const Text = ({color="black", fontSize=16, fontWeight = "normal", align = "center", marginVertical = "0px", marginHorizontal = "0px", children}) => {
  return (
    <div style={{
      color: color,
      fontSize: fontSize,
      fontWeight: fontWeight,
      textAlign: align,
      margin: `${marginVertical} ${marginHorizontal}`,
    }}>{children}</div>
  )
}