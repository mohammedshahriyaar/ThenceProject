import React from 'react'
import BodyTopLeft from './BodyTopLeft'
import BodyTopRight from './BodyTopRight'
import './BodyTop.css'
function BodyTop() {
  
  return (
    <div className='body-top-container'>
      <div className='body-top-top'>
        <div className='body-top-top-head-para'>
        <h3>Success stories</h3>
        </div>
        <div className='body-top-top-head-text'>
        <h1>Every success journey we’ve encountered.</h1>
        </div>
      </div>
      <div className='body-top-buttom'>
        <BodyTopLeft />
        <BodyTopRight />
      </div> 
    </div>
  )
}

export default BodyTop