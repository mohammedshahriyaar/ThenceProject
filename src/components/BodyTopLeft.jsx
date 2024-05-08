import React from 'react'
import womenImage from '../assets/women.jpeg'
import FlashImage from '../assets/flash.png'
import RocketIcon from '../assets/rocket.png'
import './BodyTopLeft.css'

function BodyTopLeft() {
  return (
    <div className='body-top-left-container'>
      <div className='image-contaier'>
        <img src={womenImage} alt='women image'></img>
      </div>
      <div className='left-buttom'>
          <div className='left-buttom-left'>
            <div className='left-buttom-left-top'>
              <div className='left-top-title'>
                <img src={FlashImage} alt='logo'></img>
                <h1>40%</h1>
              </div>
              <p>Achieved reduction in project execution time by optimising team availability</p>
            </div>
            <div className='left-buttom-left-buttom'>
                <div className='left-buttom-icon'>
                  <img src={RocketIcon} alt=''></img>
                </div>
                <div className='left-buttom-content'>
                  <h1>10 DAYS</h1>
                  <p>Staff Deployment</p>
                </div>
            </div>
          </div>
          <div className='left-buttom-right-card'>
            <div className='buttom-right-card-title'>
              <h1>$0.5</h1>
              <h4>MILLION</h4>
            </div>
            <div className='buttom-right-card-content'>
              <p>
              Reduced client expenses by saving on hiring and employee costs.
              </p>
            </div>
          </div>
      </div>
    </div>
  )
}

export default BodyTopLeft