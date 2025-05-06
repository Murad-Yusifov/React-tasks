import React from 'react'
import './Section.scss'

const Section = () => {
  return (
     <div className="section">
        <div className="imgBox">
            <img src="https://preview.colorlib.com/theme/shop/img/header-img.png" alt="" />
        </div>
        <div className="text">
            <h1><span>Flat</span>75%Off</h1>
            <p>It’s Happening
            this Season!</p>
            <button className="btn">Purchase now</button>
        </div>
        
     </div>
  )
}

export default Section