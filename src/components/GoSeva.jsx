import React from 'react'
import Header from './Header'
import Footer from './Footer'

const GoSeva = () => {
  return (
    
    <>
  <Header/>
  
  <>
  <div className="container-fluid">
    <img
      src="https://donations.iskconbangalore.org/go-seva/assets/img/gau-poshana-desktop-banner-images.jpg"
      height={555}
      alt=""
    />
  </div>
  <div className="container-fluid pl-lg-5 pl-md-2 pr-lg-5 pr-md-2 mt-5">
    <div className="row">
      <div className="col-md-7">
        <div className="row h-100">
          <div className="col-md-12">
            <div className="row justify-content-center">
              <div className="col-md-4">
                <img
                  src="https://donations.iskconbangalore.org/go-seva/assets/img/number-cows-image.svg"
                  width={253}
                  height={377}
                  alt="card-image"
                />
              </div>
              <div className="col-md-4">
                <img
                  src="https://donations.iskconbangalore.org/go-seva/assets/img/maintenace-image.svg"
                  width={253}
                  height={377}
                  alt="card-image"
                />
              </div>
              <div className="col-md-4">
                <img
                  src="https://donations.iskconbangalore.org/go-seva/assets/img/madical-image.svg"
                  width={253}
                  height={377}
                  alt="card-image"
                />
              </div>
            </div>
          </div>
          <div className="col-md-12 pt-3 pb-3">
            <p className="card-below-para pb-3">
              As an offering of devotion to Lord Krishna and inspired by Srila
              Prabhupada, we at ISKCON Bangalore are tending to 90 cows. We
              provide them fresh grass, fodder, water, shelter, and care for
              them like our mothers.
            </p>
            <h5 className="card-below-h5">Offer Gau Poshana Seva</h5>
            <p className="card-below-para pt-3">
              Gau Seva is considered as one of the most revered services. Join
              us in our service for this humble being. Offer seva towards
              feeding the sacred cows and receive eternal blessings from Lord
              Krishna.
            </p>
          </div>
          <div className="col-md-12 pt-0 df krishna rounded ms-2 mb-2 ">
            <div className="middle-page-banner">
              <div className="mid-div position-relative">
                <div className="row pl-3 pr-3 h-100">
                  <div className="col-md-5 position-relative">
                    <img
                      src="https://donations.iskconbangalore.org/go-seva/assets/img/krishna.png"
                      width={340}
                      height={371}
                      alt="middle-banner-img"
                    />
                  </div>
                  <div className="col-md-7 pr-3 my-auto">
                    <h5 className="middle-title text-left">
                      Lord Krishna is described as
                    </h5>
                    <p className="middle-para mt-4">
                      <b>“namo brahmanya devaya go-brahmana hitaya ca”</b>
                      <br />
                      <br />
                      (Vishnu Purana 1.19.65), the well-wisher of cows. This was
                      well-reflected in His care for cows as a cowherd boy in
                      Vrindavana. In fact, Lord Krishna’s other names, Govinda
                      and Gopala mean, “friend and protector of cows”.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-5">
        <div className="donation-section">
          <h2 className="text-center">Offer Gau Poshana seva</h2>
          {/* Donation Options */}
          <div className="d-grid gap-2 mb-3">
            <button className="btn-option">
              Feed a cow for a week - ₹1500
            </button>
            <button className="btn-option">
              Feed a cow for 2 weeks - ₹2500
            </button>
            <button className="btn-option">
              Feed a cow for 3 weeks - ₹5000
            </button>
            <button className="btn-option">
              Feed a cow for a month - ₹7500
            </button>
            <button className="btn-option special">
              Feed all our cows on your special occasion (₹18,000)
            </button>
          </div>
          {/* Donation Form */}
          <form>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
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

  <section className="care-section mt-md-5 mt-4 mb-md-5 mb-3">
  <div className="container-fluid pl-lg-5 pl-md-2 pr-lg-5 pr-md-2">
    <div className="row">
      <div className="col-md-12 text-center mb-lg-5 mb-4">
        <h3 className="care-title">Our Gaushala at a glance</h3>
      </div>
      <div className="col-md-6 mt-3">
        <div className="row">
          <div className="col-md-6 text-center">
            <img
              src="https://donations.iskconbangalore.org/go-seva/assets/img/care-one.png" width={429} height={301}
              alt="care-img"
              className="care-img"
            />
          </div>
          <div className="col-md-6 pr-lg-5 care-dec">
            <h5>Care:</h5>
            <p className="mt-md-3 mt-4">
              Daily cow care, medical care, once a month routine check-up,
              emergency care
            </p>
          </div>
        </div>
      </div>
      <div className="col-md-6 mt-3">
        <div className="row">
          <div className="col-md-6 text-center">
            <img
              src="https://donations.iskconbangalore.org/go-seva/assets/img/care-two.png"  width={429} height={301}
              alt="care-img"
              className="care-img"
            />
          </div>
          <div className="col-md-6 pr-lg-5 care-dec">
            <h5>Facilities for the cows:</h5>
            <p className="mt-md-3 mt-4">
              Clean, hygienic indoor &amp; outdoor sheds, gutters for proper
              cleanliness, 24 hours clean water connection, large grazing field,
              lush green trees for cool breeze
            </p>
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