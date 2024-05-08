import React from 'react'
import BgPattern from '../assets/pattern.png'
import './BodyTopRight.css'
import Arroww from '../assets/arrow.png'
import Carousel from './Carousel'

function BodyTopRight() {
  return (
    <div className='body-top-buttom-right-container'>
      <div className='top-top'>
      <Carousel className='content-move'/>
      </div>
      <div className='left-buttom-right-button'>
        <button type='submit' className='ExploreButton'>Explore More <span> <img src={Arroww} className='arrow'></img></span></button>
      </div>
      <div className='top-background'>
      {/* hello
        //<img src={BgPattern} alt='background pattern'></img> */}
      </div>
    </div>
  )
}

export default BodyTopRight