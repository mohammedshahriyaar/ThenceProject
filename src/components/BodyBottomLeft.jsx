
import React from 'react'
import './BodyBottomLeft.css'
import ALogo from '../assets/aLogo.png'

function BodyBottomLeft() {
  return (
    <div className='bottom-left-container'>
      <div className='top'>
        <h3>What’s on your mind</h3>
        <h1>Ask Questions</h1>
      </div>
      <div className='bottom'>
        <img src={ALogo} alt='aLogo'></img>
      </div>
    </div>
  )
}

export default BodyBottomLeft;
