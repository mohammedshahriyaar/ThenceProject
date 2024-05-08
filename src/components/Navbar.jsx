import React from 'react'
import logo from '../assets/applogo.png'
import './navbar.css'
import { useNavigate } from 'react-router-dom'

function Navbar() {
  const navigate = useNavigate();
  const handleProject = ()=>{
    navigate('/register')
  }
  return (
    <div className='nav-container'>
      <div className='nav-left'>
        <img src={logo} alt='logo'></img>
      </div>
      <div className='nav-right'>
        <button  className='getProjects' onClick={handleProject}>Get Projects</button>
        <button type='submit' className='onboardTalent'>Onboard Talent</button>
      </div>
    </div>
  )
}

export default Navbar