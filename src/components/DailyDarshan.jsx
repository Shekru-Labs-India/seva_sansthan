import React from 'react'
import Header from './Header'
import Footer from './Footer'

const DailyDarshan = () => {
  return (
   
   <>
   <Header/>

   <div className="container my-5">
  {/* Gallery Title */}
  <h2 className="text-primary">
    Daily Darshan - ISKCON Sri Radha Krishna Temple, Bangalore
  </h2>
  {/* Row of Images */}
  <div className="d-flex flex-wrap">
    <img
      src="https://www.iskconbangalore.org/wp-content/uploads/2024/11/IMG-20241112-WA0023-819x1024.jpg"
      width={400}
      height={480}
      className="me-3 rounded"
      alt="Image 1"
    />
    <img
      src="https://www.iskconbangalore.org/wp-content/uploads/2024/11/IMG-20241112-WA0022-819x1024.jpg"
      width={400}
      height={480}
      className="rounded"
      alt="Image 2"
    />
    {/* Add more images as needed */}
  </div>
</div>

  <Footer/>
   </>

  )
}

export default DailyDarshan