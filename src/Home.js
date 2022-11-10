import React from "react"
import { Link } from "react-router-dom"
import "./Home.css"
export const Home = ({ }) => {
  return (
    <div style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
      flexDirection: "column"
    }}>
      <div className="bg"></div>
      <div className="star-field">
        <div className="layer"></div>
        <div className="layer"></div>
        <div className="layer"></div>
      </div>
      <div style={{
        color: "white",
        fontSize: "48px",
        fontWeight: "1000"
      }}>Backend Driven Frontends by UC Tech</div>
      <div style={{
        color: "#888",
        fontSize: "24px",
        fontWeight: "500"
      }}>Making customizations easier</div>
      <Link to={"editor"}>
        <div style={{
          padding: "16px 32px", margin: 16, color: "white",fontSize: "24px", background: "rgb(109, 66, 229)", borderRadius: 8
        }}>Try it out!</div>
      </Link>
      <div style={{ position: "absolute", top: 10, right: 10}}>
        <img src="https://res.cloudinary.com/urbanclap/image/upload/t_high_res_category/images/supply/partner-training/1628575858610-5b0ae4.png" style={{height: 40, filter: "invert(1)"}} />
      </div>
      </div>


      )
}