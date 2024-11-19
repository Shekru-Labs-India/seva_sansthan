import React from 'react'
import Header from './Header'
import Footer from './Footer'
import EventCard from './EventCard'
import Meta from './Meta'

const GoSeva = () => {
  return (
    
    <>
  <Meta/>
  <Header/>
  
  <>
  <div className="container">
    <img
      src="https://donations.iskconbangalore.org/go-seva/assets/img/gau-poshana-desktop-banner-images.jpg"
      className="img-fluid rounded-4 img-thumbnail"
      alt=""
    />
    <EventCard/>
  </div>
  <div className="container">
    <div className="row">
      <div className="col-lg-7 col-md-12">
        <div className="card border-0 rounded-0 mb-4">
          <div className="card-body">
            <div className="row justify-content-center g-3">
              <div className="col-lg-4 col-md-4">
                <div className="card border-0 rounded-4">
                  <img
                    src="https://donations.iskconbangalore.org/go-seva/assets/img/number-cows-image.svg"
                    className="img-fluid"
                    alt="card-image"
                  />
                </div>
              </div>
              <div className="col-lg-4 col-md-4">
                <div className="card border-0 rounded-4">
                  <img
                    src="https://donations.iskconbangalore.org/go-seva/assets/img/maintenace-image.svg"
                    className="img-fluid"
                    alt="card-image"
                  />
                </div>
              </div>
              <div className="col-lg-4 col-md-4">
                <div className="card border-0 rounded-4">
                  <img
                    src="https://donations.iskconbangalore.org/go-seva/assets/img/madical-image.svg"
                    className="img-fluid"
                    alt="card-image"
                  />
                </div>
              </div>
            </div>

            <div className="card border border-warning rounded-4 mt-4">
              <div className="card-body">
                <p className="card-text mb-4">
                  As an offering of devotion to Lord Krishna and inspired by Srila
                  Prabhupada, we at ISKCON Bangalore are tending to 90 cows. We
                  provide them fresh grass, fodder, water, shelter, and care for
                  them like our mothers.
                </p>
                <h5 className="card-title">Offer Gau Poshana Seva</h5>
                <p className="card-text mt-3">
                  Gau Seva is considered as one of the most revered services. Join
                  us in our service for this humble being. Offer seva towards
                  feeding the sacred cows and receive eternal blessings from Lord
                  Krishna.
                </p>
              </div>
            </div>

            <div className="card border border-warning rounded-4 mt-4">
              <div className="card-body">
                <div className="row align-items-center">
                  <div className="col-md-5">
                    <img
                      src="https://donations.iskconbangalore.org/go-seva/assets/img/krishna.png"
                      className="img-fluid"
                      alt="middle-banner-img"
                    />
                  </div>
                  <div className="col-md-7">
                    <h5 className="card-title">Lord Krishna is described as</h5>
                    <p className="card-text mt-3">
                      <b>"namo brahmanya devaya go-brahmana hitaya ca"</b>
                      <br /><br />
                      (Vishnu Purana 1.19.65), the well-wisher of cows. This was
                      well-reflected in His care for cows as a cowherd boy in
                      Vrindavana. In fact, Lord Krishna's other names, Govinda
                      and Gopala mean, "friend and protector of cows".
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-5 col-md-12">
        <div className="card border border-warning rounded-4">
          <div className="card-body p-4">
            <h2 className="card-title text-center mb-4">Offer Gau Poshana seva</h2>
            
            {/* Donation Options */}
            <div className="d-grid gap-3 mb-4">
              <button className="btn btn-white border w-100 py-2">
                Feed a cow for a week - ₹1500
              </button>
              <button className="btn btn-white border w-100 py-2">
                Feed a cow for 2 weeks - ₹2500
              </button>
              <button className="btn btn-white border w-100 py-2">
                Feed a cow for 3 weeks - ₹5000
              </button>
              <button className="btn btn-white border w-100 py-2">
                Feed a cow for a month - ₹7500
              </button>
              <button className="btn btn-white border w-100 py-2 special">
                Feed all our cows on your special occasion (₹18,000)
              </button>
            </div>
            {/* Donation Form */}
            <form className="mx-auto" style={{maxWidth: "500px"}}>
              <div className="form-group mb-3">
                <input
                  type="text"
                  className="form-control py-2"
                  placeholder="Enter any Amount of Your Choice"
                />
              </div>
              <div className="form-group">
                <input
                  type="date"
                  className="form-control"
                  placeholder="Seva Date *"
                />
              </div>
              <h3 className="text-center">Personal Details</h3>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Donor Name *"
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email ID *"
                />
              </div>
              <div className="form-group">
                <input
                  type="tel"
                  className="form-control"
                  placeholder="Mobile Number *"
                />
              </div>
              <div className="form-group">
                <input
                  type="date"
                  className="form-control"
                  placeholder="Date of Birth"
                />
              </div>
              <div className="form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="certCheckbox"
                />
                <label className="form-check-label" htmlFor="certCheckbox">
                  I would like to receive 80(G) Certificate
                </label>
              </div>
              <div className="form-check mb-3">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="prasadamCheckbox"
                />
                <label className="form-check-label" htmlFor="prasadamCheckbox">
                  I would like to receive Maha prasadam (Only within India)
                </label>
              </div>
              <button type="submit" className="btn btn-dark btn-block">
                Donate Now
              </button>
              <p className="text-center mt-2 small">
                Avail 80G tax exemption on your donation.
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>

  <section className="care-section mt-md-5 mt-4 mb-md-5 mb-3">
  <div className="container pl-lg-5 pl-md-2 pr-lg-5 pr-md-2">
    <div className="row">
      <div className="col-md-12 text-center mb-3">
        <h3 className="care-title">Our Gaushala at a glance</h3>
      </div>
      
      {/* First Card */}
      <div className="col-md-6 mt-3">
        <div className="card border rounded-4 border-warning h-100">
          <div className="row g-0">
            <div className="col-md-6 text-center">
              <img
                src="https://donations.iskconbangalore.org/go-seva/assets/img/care-one.png"
                alt="care-img"
                className="img-fluid care-img"
              />
            </div>
            <div className="col-md-6 p-3">
              <h5>Care:</h5>
              <p className="mt-3">
                Daily cow care, medical care, once a month routine check-up,
                emergency care
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Second Card */}
      <div className="col-md-6 mt-3">
        <div className="card border rounded-4 border-warning h-100">
          <div className="row g-0">
            <div className="col-md-6 text-center">
              <img
                src="https://donations.iskconbangalore.org/go-seva/assets/img/care-two.png"
                alt="care-img"
                className="img-fluid care-img"
              />
            </div>
            <div className="col-md-6 p-3">
              <h5>Facilities for the cows:</h5>
              <p className="mt-3">
                Clean, hygienic indoor &amp; outdoor sheds, gutters for proper
                cleanliness, 24 hours clean water connection, large grazing field,
                lush green trees for cool breeze
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

</>


  <Footer/>
  </>
  )
}

export default GoSeva