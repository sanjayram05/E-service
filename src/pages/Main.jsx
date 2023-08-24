import React from 'react'
import "animate.css/animate.min.css";
import ScrollAnimation from 'react-animate-on-scroll';
import {useNavigate} from 'react-router-dom'
import {MdLogout} from 'react-icons/md'
import {MdAccountCircle} from 'react-icons/md'
import {GrSearch} from 'react-icons/gr'
import {MdKeyboardArrowDown} from 'react-icons/md';
import Request from '../components/Request'
import { motion, useAnimation } from "framer-motion";
import Categories from '../components/Categories'
import slide1 from '../slider/plumbing-3.avif'
import slide2 from '../slider/ac-service-3.avif'
import slide3 from '../slider/carpenting-3.avif'
import slide4 from '../slider/electrician-3.jpg'
import slide5 from '../slider/mens-salon-3.avif'
import slide6 from '../slider/womens-salon-3.avif'
import slide7 from '../slider/mechanic-3.jpg'
import slide8 from '../slider/builder-3.jpg'
import slide9 from '../slider/cleaning-3.jpg'
import slide10 from '../slider/appliance-repair-3.jpg'
import slide11 from '../slider/gardner-3.jpg'
import slide12 from '../slider/welder-3.jpg'
function Main() {
  const navigate=useNavigate();
  const handleClick=()=>{
    navigate('/')
  }
  return (
    <div className='container'>
    <section>
    <div className='main '>
     <div className='Mheader'>
        <h2 className='Mlogo'>Logo</h2>
        <nav className='Mnav'>
            <div className='Mnav-menu'>
                <a>Home</a>
                <a>About</a>
                <a>Contact</a>
                <a>Help</a>
            </div>
            
          <div className='Mnav-right'>
          <span className='logout-icon'><MdLogout/></span>
          <button className='logout' onClick={handleClick}>Logout</button>
          <button className='profile'><MdAccountCircle/></button>
          </div>
        </nav>
    </div>
    <div className='slide-header'>
      <p >Popular Services</p>
      </div>
   <div className='mwrapper'>
    <section id='section1'>
    <a href="#section2" class="arrow__btn">‹</a>
     <div className='mitem'>
      <img src={slide1} />
     </div>
     <div className='mitem'>
      <img src={slide3} />
     </div>
     <div className='mitem'>
      <img src={slide4} />
     </div>
     <div className='mitem'>
      <img src={slide5} />
     </div>
     <div className='mitem'>
      <img src={slide2} />
     </div>
     <div className='mitem'>
      <img src={slide6} />
     </div>
     <a href="#section2">›</a>
     </section>
     <section id='section2'>
     <a href="#section1" class="arrow__btn">‹</a>
     <div className='mitem'>
      <img src={slide7} />
     </div>
     <div className='mitem'>
      <img src={slide8} />
     </div>
     <div className='mitem'>
      <img src={slide9} />
     </div>
     <div className='mitem'>
      <img src={slide10} />
     </div>
     <div className='mitem'>
      <img src={slide11} />
     </div>
     <div className='mitem'>
      <img src={slide12} />
     </div>
     <a href="#section1">›</a>
     </section>
   </div>
   <div className='mfooter'>
   <div className='mfooter-left'>
   <h2 >Find the right service right away</h2>
   <input type='text' placeholder='search'/>
   </div>
   <div>
      <div className='mfooter-right'>
        <h4>Din't got what you'r looking for?,Don't worry we got you</h4>
        <p></p>
        <p><button>Click here</button>  to post your request in general category</p>
      </div>
   </div>
   <div className='mfooter-image'>
        <h1>want to explore all categories?</h1>
        <button>click here</button>
      </div>
   </div>

   <div className='mdownarrow'>
   <MdKeyboardArrowDown/>
   </div>
    </div>
    </section>
    <section className='scroll-2'>
      <div>
    <Categories/>
</div>
   </section>
   <section>
    <Request/>
   </section>
    </div>
  )
}

export default Main
