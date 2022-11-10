import { itemMapper } from "../../utils"

export const Grid = ({ columns, items, gap, backgroundColor , paddingVertical, paddingHorizontal = '0px'}) => {
  console.log(columns, paddingVertical)
  return (
    <div style={{
      display: "grid",
      gridTemplateColumns: `repeat(${columns}, 1fr)`,
      gap: `${gap}`,
      backgroundColor,
    }}
    >
      {items && items.map((i) => <div style={{
        display: "flex",
        flexDirection: "column",
        // justifyContent: "center",
        alignItems: "center",
        padding: `${paddingVertical} ${paddingHorizontal}`
      }}>{Object.entries(i).map(itemMapper)}</div>)}
    </div>
  )
}