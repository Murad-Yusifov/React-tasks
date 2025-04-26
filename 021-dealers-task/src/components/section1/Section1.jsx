import React from 'react'
import './Section1.scss'

const Section1 = () => {
  return (
    <>
    <div className="wrapper1">
      <div className="leftSide">
        <h1>Madewell</h1>
        <p>Summer Collection</p>
        <div className='price'>
        <strong>1,499</strong>
        <del>$1,999</del>
        </div>

      </div>
      <div className="img">
     <div className="btn-Box">
     <button className='btn'>Shop Now</button>
     </div>

          <img src="https://preview.colorlib.com/theme/dealers/images/new/person_transparent.png" alt="" />



      </div>
    </div>
    </>
  )
}

export default Section1