import "./Button.css"
export const Button = ({
  text,
  color,
  icon,
  action,
  children,
  margin,
  type
}) => {

  if(type==="outline") {
    return (
      <div style={{margin, border: `1px solid ${color}`, color, background: color+"33"}} onClick={action} className="button-container">
      {text || children}
    </div>
    )
  }
  return (
    <div style={{margin, background: color, width:"100%"}} onClick={action} className="button-container">
      {text || children}
    </div>
  )
}