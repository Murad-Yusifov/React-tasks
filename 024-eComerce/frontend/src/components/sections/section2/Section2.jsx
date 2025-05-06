import React from 'react'
import './Section2.scss'

const Section2 = () => {
  return (
    <>
    <div className='wrapper2'>
      <div className="text">
        <h3>Shop for Different Categories</h3>
        <p>Who are in extremely love with eco friendly system.</p>
      </div>
      <div className="images">
      <div className="img img1">
        <img src="https://preview.colorlib.com/theme/shop/img/c1.jpg" alt="Image 1" />
      </div>
      <div className="img img2">
        <img src="https://preview.colorlib.com/theme/shop/img/c2.jpg" alt="Image 2" />
      </div>
      <div className="img img3">
        <img src="https://preview.colorlib.com/theme/shop/img/c3.jpg" alt="Image 3" />
        <div className="overlay">
          <p>HOT DEALS OF THIS MONTH</p>
          <button>Shop Now</button>
        </div>
      </div>
      <div className="img img4">
        <img src="https://preview.colorlib.com/theme/shop/img/c4.jpg" alt="Image 4" />
      </div>
    </div>
    </div>
    
    </>
  )
}

export default Section2