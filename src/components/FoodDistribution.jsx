import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Meta from './Meta'
import EventCard from './EventCard'

const FoodDistribution = () => {
  return (
    
  <>
  <Meta/>
  <Header/>

  <div className="container py-5">
    <div className="row g-4">
      {/* First Card */}
      <div className="col-lg-6">
        <div className="card h-100 border border-warning rounded-4  shadow-sm">
          <img 
            src="https://www.iskconbangalore.org/wp-content/uploads/2015/11/nityaannadana1.jpg" 
            className="card-img-top img-fluid rounded-top-4 object-fit-cover" 
            alt="Nitya Annadana" 
            
          />
          <div className="card-body p-4">
            <h2 className="card-title text-warning h4 mb-3 fw-bold">Nitya Annadana</h2>
            <p className="card-text">
              Nitya Annadana at ISKCON Bangalore We serve free, sumptuous lunch
              prasadam to temple visitors every day from 11:30 am to 2:00 pm. On
              your next visit to the temple, do make it a point...
            </p>
          </div>
        </div>
      </div>

      {/* Second Card */}
      <div className="col-lg-6">
        <div className="card h-100 border border-warning rounded-4  shadow-sm">
          <img 
            src="https://www.iskconbangalore.org/wp-content/uploads/2015/10/a06-krishnamrita-annadana1.jpg" 
            className="card-img-top img-fluid rounded-top-4 object-fit-cover" 
            alt="Krishnamrita" 
           
          />
          <div className="card-body p-4">
            <h2 className="card-title text-warning h4 mb-3 fw-bold">Krishnamrita</h2>
            <p className="card-text">
              Prasadam Distribution yat karosi yad asnasi yaj juhosi dadasi yat
              yat tapasyasi kaunteya tat kurusva mad-arpanam "Whatever you do,
              whatever you eat, whatever you offer or give away, and whatever
              austerities you perform—do that,...
            </p>
          </div>
        </div>
      </div>

      <EventCard/>

     <div className="row">
      <div className="col-lg-6 mt-4">
        <div className="card border border-warning rounded-4  shadow-sm">
          <img 
            src="https://www.iskconbangalore.org/wp-content/uploads/2015/10/akshaya-patra-logo.jpg" 
            className="card-img-top img-fluid rounded-top-4 object-fit-cover" 
            alt="Akshaya Patra" 
           
          />
          <div className="card-body p-4">
            <h2 className="card-title text-warning h3 mb-3 fw-bold">Akshaya Patra</h2>
            <p className="card-text">
              Akshaya Patra is an initiative of ISKCON Bangalore to provide
              mid-day meals in the rural schools for the underprivileged children
              and thus support their education. The vision statement of Akshaya
              Patra states: No child...
            </p>
          </div>
        </div>
      </div>
      <div className="col-lg-6 mt-4">
        <div className="card border border-warning rounded-4  shadow-sm">
          <img 
            src="https://www.iskconbangalore.org/wp-content/uploads/2015/10/akshaya-patra-logo.jpg" 
            className="card-img-top img-fluid rounded-top-4 object-fit-cover" 
            alt="Akshaya Patra" 
           
          />
          <div className="card-body p-4">
            <h2 className="card-title text-warning h3 mb-3 fw-bold">Akshaya Patra</h2>
            <p className="card-text">
              Akshaya Patra is an initiative of ISKCON Bangalore to provide
              mid-day meals in the rural schools for the underprivileged children
              and thus support their education. The vision statement of Akshaya
              Patra states: No child...
            </p>
          </div>
        </div>
      </div>
      </div>
    </div>
  </div>

  <Footer/>

  </>

  )
}

export default FoodDistribution