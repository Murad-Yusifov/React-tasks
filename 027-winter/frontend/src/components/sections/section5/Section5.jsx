import React from 'react'
import './Section5.scss'
import { FaInstagram } from 'react-icons/fa'

const Section5 = () => {
  return (
    <>
    <div className='section5'>
      <div className="imageBox">
        <img src="https://preview.colorlib.com/theme/winter/img/instagram/inst_1.png.webp" alt="" />
        <FaInstagram className='icon'/>
        <div className="div"></div>
      </div>
      <div className="imageBox">
        <img src="https://preview.colorlib.com/theme/winter/img/instagram/inst_2.png.webp" alt="" />
        <FaInstagram className='icon'/>
      </div>
      <div className="imageBox">
        <img src="https://preview.colorlib.com/theme/winter/img/instagram/inst_3.png.webp" alt="" />
        <FaInstagram className='icon'/>
      </div>
      <div className="imageBox">
        <img src="https://preview.colorlib.com/theme/winter/img/instagram/inst_4.png.webp" alt="" />
        <FaInstagram className='icon'/>
      </div>
      <div className="imageBox">
        <img src="https://preview.colorlib.com/theme/winter/img/instagram/inst_5.png.webp" alt="" />
        <FaInstagram className='icon'/>
      </div>
      
    </div>
    </>
  )
}

export default Section5