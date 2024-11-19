import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Meta from './Meta'
import about from '../assets/images/section/about-pic.jpg'

const DailyDarshan = () => {
  return (
   
   <>
   <Meta/>
   <Header/>

   <div className="container my-5">
  {/* Gallery Title */}
  <h2 className="text-warning">
    Daily Darshan - ISKCON Sri Radha Krishna Temple, Bangalore
  </h2>
  
  <div className="row">
    <div className=" col-lg-6">
    <img
      src={about}
      
      className=" rounded-4 img-fluid img-thumbnail"
      alt="Image 1"
    />
    </div>
    <div className="col-12 col-lg-6">
    <img
      src={about}
      
      className="rounded-4 img-fluid img-thumbnail"
      alt="Image 2"
    />
    </div>
    
  </div>
</div>

  <Footer/>
   </>

  )
}

export default DailyDarshan