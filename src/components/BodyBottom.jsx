import React from 'react'
import BodyBottomLeft from './BodyBottomLeft'
import BodyBottomRight from './BodyBottomRight'
import './BodyBottom.css'
function BodyBottom() {
  return (
    <div className='body-bottom-container'>
      <BodyBottomLeft />
      <BodyBottomRight />
    </div>
  )
}

export default BodyBottom