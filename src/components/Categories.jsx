import React from 'react'
import cat1 from '../categories/plumbing-1.png'
import cat2 from '../categories/mechanic-2.png'
import cat3 from '../categories/carpenting-1.png'
import cat4 from '../categories/construction-3.png'
import cat5 from '../categories/electrician-1.png'
import cat6 from '../categories/appliance-1.png'
import cat7 from '../categories/salon-3.png'
import cat8 from '../categories/painting-1.png'
import cat9 from '../categories/ac-1.png'
import cat10 from '../categories/ro-1.png'
import cat11 from '../categories/welder-1.png'
import rating from '../categories/rating-1.png'
function Categories() {
  return (
    <div className='cmain'>
      <div className='ccontainer'>
        <div className='citem1'>  
        <div className='imgx'>
        <img src={cat1}/> 
        <div className='footer'>
          <p>Plumbing</p>
          <div className='footer-inner'>
            <p>Popularity</p>
            <button>view</button>
          </div>
        </div>
        </div>
        </div>
        <div className='citem1'> 
        <div className='imgx'>
        <img src={cat2}/> 
        <div className='footer'>
          <p>Mechanic</p>
          <div className='footer-inner'>
            <p>Popularity</p>
            <button>view</button>
          </div>
        </div>
        </div> 
        </div>
        <div className='citem1'> 
        <div className='imgx'>
        <img src={cat3}/> 
        <div className='footer'>
          <p>Carpenter</p>
          <div className='footer-inner'>
            <p>Popularity</p>
            <button>view</button>
          </div>
        </div>
        </div>  
        </div>
        <div className='citem1'>  
        <div className='imgx'>
        <img src={cat4}/> 
        <div className='footer'>
          <p>Constructor</p>
          <div className='footer-inner'>
            <p>Popularity</p>
            <button>view</button>
          </div>
        </div>
        </div>  
        </div>
        <div className='citem1'>  
        <div className='imgx'>
        <img src={cat5}/> 
        <div className='footer'>
          <p>Electrician</p>
          <div className='footer-inner'>
            <p>Popularity</p>
            <button>view</button>
          </div>
        </div>
        </div>
        </div>
        <div className='citem1'> 
        <div className='imgx'>
        <img src={cat1}/> 
        <div className='footer'>
          <p>Plumbing</p>
          <div className='footer-inner'>
            <p>Popularity</p>
            <button>view</button>
          </div>
        </div>
        </div>
        </div>
        <div className='citem1'> 
        <div className='imgx'>
        <img src={cat6}/> 
        <div className='footer'>
          <p>Electronics</p>
          <div className='footer-inner'>
            <p>Popularity</p>
            <button>view</button>
          </div>
        </div>
        </div>   
        </div>
        <div className='citem1'> 
        <div className='imgx'>
        <img src={cat7}/> 
        <div className='footer'>
          <p>Salon</p>
          <div className='footer-inner'>
            <p>Popularity</p>
            <button>view</button>
          </div>
        </div>
        </div> 
        </div>
        <div className='citem1'>  
        <div className='imgx'>
        <img src={cat8}/> 
        <div className='footer'>
          <p>Painting</p>
          <div className='footer-inner'>
            <p>Popularity</p>
            <button>view</button>
          </div>
        </div>
        </div> 
        </div>
        <div className='citem1'> 
        <div className='imgx'>
        <img src={cat9}/> 
        <div className='footer'>
          <p>AC Service</p>
          <div className='footer-inner'>
            <p>Popularity</p>
            <button>view</button>
          </div>
        </div>
        </div>  
        </div>
        <div className='citem1'>  
        <div className='imgx'>
        <img src={cat10}/> 
        <div className='footer'>
          <p>RO service</p>
          <div className='footer-inner'>
            <p>Popularity</p>
            <button>view</button>
          </div>
        </div>
        </div>  
        </div>
        <div className='citem1'>  
        <div className='imgx'>
        <img src={cat11}/> 
        <div className='footer'>
          <p>welding</p>
          <div className='footer-inner'>
            <p>Popularity</p>

            <button>view</button>
          </div>
        </div>
        </div> 
        </div>
        <div className='citem1'>  
        </div>
         <div className='citem1'>  
        </div>
        <div className='citem1'>  
        </div>
        <div className='citem1'>  
        </div>
        <div className='citem1'>  
        </div>
        <div className='citem1'> 
        </div>

      </div>
    </div>
  )
}

export default Categories
