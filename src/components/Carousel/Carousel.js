import React from 'react'
import "./Carousel.css"

const Carousel = ({images, height = 100, gap = 8, marginVertical = 0, marginHorizontal = 0}) => {

  return (
    <div className='carousel-cont' style={{height, display: "flex", overflow: "scroll", margin: `${marginVertical} ${marginHorizontal}`}}>
      {images.map((src) => <img style={{
        height, marginRight: gap
      }} src={src} />)}
    </div>
  )
}

export default Carousel