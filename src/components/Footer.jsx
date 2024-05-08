import React from 'react'
import copyright from '../assets/copyright.png'
import './Footer.css'

function Footer() {
  return (
    <div className='foot-container'>
      <div className='foot-left'>
      <img src={copyright} alt='copyright logo'></img>
        <p>Talup 2023. All rights reserved</p>
      </div>
      <div className='foot-right'>
        <p>Terms & Conditions</p>
        <p>Privacy Policy</p>
      </div>
    </div>
  )
}

export default Footer