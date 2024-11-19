import React from 'react'
import Header from './Header'
import Footer from './Footer'
import EventCard from './EventCard'

const DignitariesVisit = () => {
  return (
    
  <>
  <Header/>
 
  <div className="container my-3 ">
  <div className="row ">
    {/* Card 1 */}
    <div className="col-sm-6 col-lg-4 col-xl-3 mb-4">
      <div className="card border border-warning rounded-4 shadow-lg h-100">
        <img
          src="https://www.iskconbangalore.org/wp-content/uploads/2023/05/Sri-Lankan-High-Commissioner-thumb.jpg"
          className="card-img-top img-fluid"
          alt="Card Image 1"
        />
        <div className="card-body">
          <h2 className="card-title text-warning">
            Hon’ble Sri Lankan High Commissioner visited temple
          </h2>
        </div>
      </div>
    </div>
    {/* Card 2 */}
    <div className="col-sm-6 col-lg-4 col-xl-3 mb-4">
      <div className="card border border-warning rounded-4 shadow-lg h-100">
        <img
          src="https://www.iskconbangalore.org/wp-content/uploads/2023/05/HH-Sri-Sugunendra-Teertha-Swami-thumb.jpg"
          className="card-img-top img-fluid"
          alt="Card Image 2"
        />
        <div className="card-body">
          <h2 className="card-title text-warning">
            HH Sri Sugunendra Teertha Swamiji’s visit
          </h2>
        </div>
      </div>
    </div>
    {/* Card 3 */}
    <div className="col-sm-6 col-lg-4 col-xl-3 mb-4">
      <div className="card border border-warning rounded-4 shadow-lg h-100">
        <img
          src="https://www.iskconbangalore.org/wp-content/uploads/2022/09/himanta-biswa-sarma-thumb.jpg"
          className="card-img-top img-fluid"
          alt="Card Image 3"
        />
        <div className="card-body">
          <h2 className="card-title text-warning">
            Sri Himanta Biswa Sharma visited temple
          </h2>
        </div>
      </div>
    </div>
  </div>

<EventCard/>

  <div className="row mt-3">
    {/* Card 1 */}
    <div className="col-sm-6 col-lg-4 col-xl-3 mb-4">
      <div className="card border border-warning rounded-4 shadow-lg h-100">
        <img
          src="https://www.iskconbangalore.org/wp-content/uploads/2022/06/governor-visit-iskcon-june-9-thumb.jpg"
          className="card-img-top img-fluid"
          alt="Card Image 1"
        />
        <div className="card-body">
            <h2 className="card-title text-warning">
            Honorable Governor’s visit – June 9, 2022
          </h2>
        </div>
      </div>
    </div>
    {/* Card 2 */}
    <div className="col-sm-6 col-lg-4 col-xl-3 mb-4">
      <div className="card border border-warning rounded-4 shadow-lg h-100">
        <img
          src="https://www.iskconbangalore.org/wp-content/uploads/2022/09/kiran-majundar-shaw-thumb.jpg"
          className="card-img-top img-fluid"
          alt="Card Image 2"
        />
        <div className="card-body">
          <h2 className="card-title text-warning">
            Kiran Mazumdar Shaw visits temple
          </h2>
        </div>
      </div>
    </div>
    {/* Card 3 */}
    <div className="col-sm-6 col-lg-4 col-xl-3 mb-4">
      <div className="card border border-warning rounded-4 shadow-lg h-100">
        <img
          src="https://www.iskconbangalore.org/wp-content/uploads/2022/06/sri-ramnath-kovind-iskcon-thumb.jpg"
          className="card-img-top img-fluid"
          alt="Card Image 3"
        />
        <div className="card-body">
          <h2 className="card-title text-warning">
            Sri Rajadhiraja Govinda temple inauguration
          </h2>
        </div>
      </div>
    </div>
  </div>
</div>


  <Footer/>
  </>

  )
}

export default DignitariesVisit