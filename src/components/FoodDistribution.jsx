import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Meta from './Meta'

const FoodDistribution = () => {
  return (
    
  <>
  <Meta/>
  <Header/>

  <div className="container mt-5">
  <div className="row">
    <div className="col-8">
      <div className="row">
        <div className="col-4">
          <img src="https://www.iskconbangalore.org/wp-content/uploads/2015/11/nityaannadana1.jpg" />
        </div>
        <div className="col-8">
          <h1 className="text-primary">Nitya Annadana</h1>
          <p>
            Nitya Annadana at ISKCON Bangalore We serve free, sumptuous lunch
            prasadam to temple visitors every day from 11:30 am to 2:00 pm. On
            your next visit to the temple, do make it a point...
          </p>
        </div>
      </div>
    </div>
    <div className="col-4"></div>
  </div>
  <div className="row mt-4">
    <div className="col-8">
      <div className="row">
        <div className="col-4">
          <img src="https://www.iskconbangalore.org/wp-content/uploads/2015/10/a06-krishnamrita-annadana1.jpg" />
        </div>
        <div className="col-8">
          <h1 className="text-primary">Krishnamrita</h1>
          <p>
            Prasadam Distribution yat karosi yad asnasi yaj juhosi dadasi yat
            yat tapasyasi kaunteya tat kurusva mad-arpanam “Whatever you do,
            whatever you eat, whatever you offer or give away, and whatever
            austerities you perform—do that,...
          </p>
        </div>
      </div>
    </div>
    <div className="col-4"></div>
  </div>
  <div className="row mt-4 mb-4">
    <div className="col-8">
      <div className="row">
        <div className="col-4">
          <img src="https://www.iskconbangalore.org/wp-content/uploads/2015/10/akshaya-patra-logo.jpg" />
        </div>
        <div className="col-8">
          <h1 className="text-primary">Akshaya Patra</h1>
          <p>
            Akshaya Patra is an initiative of ISKCON Bangalore to provide
            mid-day meals in the rural schools for the underprivileged children
            and thus support their education. The vision statement of Akshaya
            Patra states: No child...
          </p>
        </div>
      </div>
    </div>
    <div className="col-4"></div>
  </div>
</div>

<Footer/>

  </>

  )
}

export default FoodDistribution