import React from 'react'
import { Link } from 'react-router-dom';
import '../../styles/Home.css'
var landingGraphic = require('../../images/landingGraphic.png')
function Home() {
  // var iconEmail = require('../../icons/email.png')
  return (
    <div className="login-container">
      <div className='image-wrapper'>
        <img className="landing-image" src={landingGraphic} alt="" />
      </div>
      <div className='main-wrapper'>
        <div className='heading-smooth'>
          <p>SMOOTH</p>
          <p>BANKING</p>
        </div>
        {/* <div className="btn-blue"><span><img src={iconEmail} alt="Email icon" /></span><p>Continue with Email</p></div> */}
        <div className="center grid-area-L"><Link className='btn-home btn-login' to='/login'> Login</Link></div>
        <div className="center grid-area-R"><Link className='btn-home btn-signup' to='/signup'> Sign up</Link></div>
      </div>
    </div>

  )
}

export default Home