import React from 'react'
import { Link } from 'react-router-dom';
import '../styles/Home.css'
var landingGraphic = require('../images/landingGraphic.png')
function Home() {
  return (
    <div className="login-container">
        
        <div className='image-wrapper'>
        <img className="landing-image" src={landingGraphic} alt="" />
        </div>
        <div className='heading-smooth'>
          <p>SMOOTH</p>
          <p>BANKING</p>
        </div>
        <div className="center grid-area-L"><Link  className='btn btn-signup' to='/login'> Login</Link></div>
        <div className="center grid-area-R"><Link  className='btn btn-login' to='/signup'> Sign up</Link></div>
    </div>
  )
}

export default Home