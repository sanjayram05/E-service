import React, { useState } from 'react'
import UserLogin from '../components/UserLogin'
import {RiArrowLeftDoubleFill} from 'react-icons/ri'

function Home() {
  const[showLogin,setShowLogin]=useState(false)
  const close=()=>{
    setShowLogin(false)
  }
  return (
    <div className='home'>
      <header className='header'>
        <h2 className='logo'>Logo</h2>
        <nav className='navigation'>
            <a className='nav-1'href='#'>Home</a>
            <a className='nav-2'href='#'>About</a>
            <a className='nav-3'href='#'>Services</a>
            <a className='nav-4'href='#'>Contact</a>
          <button className='btnLogin-popup' onClick={()=>setShowLogin(true)}>Login</button>
        </nav>
      </header>
      <div className='home-quotes'>
        <h3 className={showLogin?'heading':'heading hactive'}>Welcome Mate</h3>
        <h6 className={showLogin?'quotes':'quotes qactive'}>Connect with professionals who can take care of your work</h6>
        <p className={showLogin?'downquotes':'downquotes downqactive'}>Want To Register As An Professional?<button>click here</button><span className='arrow'><RiArrowLeftDoubleFill/></span></p>
      </div>
      <UserLogin showLogin={showLogin} close={close}/>
    </div>
  )
}

export default Home
