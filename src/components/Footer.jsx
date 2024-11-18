import React from 'react'
import brand from "../assets/images/img/brand.jpg"
import visa from "../assets/images/payments/visa.png";
import mastercard from "../assets/images/payments/mastercard.png";
import upi from "../assets/images/payments/upi.png"
import paypal from "../assets/images/payments/paypal.png"
import { Link } from 'react-router-dom';
import EventCard from './EventCard';


const Footer = () => {
  return (
    
   <>
   <>
  {/* footer Part */}

  <EventCard/>
  <footer className="footer">
    <div className="container">
      <div className="row">
        <div className="col-12 col-md-6 col-lg-5 mb-5 mb-lg-0">
          <img
            src={brand}
            className="img-fluid mb-4 logo"
            alt="Brand light"
          />
          <p className="pe-5 mb-0 font-small lh-lg">
            Different Buddhists believe different things, consectetur adipiscing
            elit. Morbi fringilla dolor sed arcu cursus, id interdum dolor
            sagittis. Class aptent taciti
          </p>
          <div className="p-1 mt-3">
            <h3 className="mt-3 h5 fw-bold mb-4">Multiple Payment Option</h3>
            <ul className="d-flex justify-content-between align-items-start">
              <li>
                <img
                  src={visa}
                  className="img-fluid"
                  alt="payment"
                />
              </li>
              <li>
                <img
                  src={mastercard}
                  className="img-fluid"
                  alt="payment"
                />
              </li>
              <li>
                <img
                  src={upi}
                  className="img-fluid"
                  alt="payment"
                />
              </li>
              <li>
                <img
                  src={paypal}
                  className="img-fluid"
                  alt="payment"
                />
              </li>
            </ul>
          </div>
          {/* payment methods end */}
        </div>
        <div className="col-12 col-md-6 col-lg-4 mb-5 mb-lg-0">
          <div className="row">
            <div className="col">
              <h3 className="h5 fw-bold mb-4">Site Links</h3>
              <ul className="link-list">
                <li>
                  <Link to="/" className="footer-link-effect">
                    Home
                  </Link>
                </li>
                <li>
                  <a href="about.html" className="footer-link-effect">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="donations.html" className="footer-link-effect">
                    Donations
                  </a>
                </li>
                <li>
                  <a href="events.html" className="footer-link-effect">
                    Events
                  </a>
                </li>
                <li>
                  <a href="monks.html" className="footer-link-effect">
                    Monks
                  </a>
                </li>
                <li>
                  <a href="gallery.html" className="footer-link-effect">
                    Gallery
                  </a>
                </li>
              </ul>
              {/* quick link end */}
            </div>
            <div className="col">
              <h3 className="h5 fw-bold mb-4">Support</h3>
              <ul className="link-list">
                <li>
                  <a href="privacy.html" className="footer-link-effect">
                    Privacy
                  </a>
                </li>
                <li>
                  <a href="contact.html" className="footer-link-effect">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="faq.html" className="footer-link-effect">
                    FAQ
                  </a>
                </li>
                <li>
                  <a href="monks.html" className="footer-link-effect">
                    Our Volunteers
                  </a>
                </li>
                <li>
                  <a href="about.html" className="footer-link-effect">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="services.html" className="footer-link-effect">
                    Services
                  </a>
                </li>
              </ul>
              {/* Support link end */}
            </div>
          </div>
        </div>
        <div className="col-12 col-md-6 col-lg-3">
          <h3 className="h5 fw-bold mb-4">Quick Contact</h3>
          <div className="mb-5">
            <span className="d-flex align-items-center fs-5">
            <i class="fa-solid fa-phone fa-shake me-3 fs-4"></i>
              (011) - 123456 7890
            </span>
          </div>
          {/* download our app end */}
          <h3 className="mt-4 h5 fw-bold mb-4">Connect with us</h3>
          <div className="d-flex social mt-3">
            <Link to="">
            <i className="fa-brands fa-facebook"></i>
            </Link>
            <Link to="">
            <i className="fa-brands fa-x-twitter"></i>
            </Link>
            <Link to="">
            <i className="fa-brands fa-linkedin"></i>
            </Link>
            <Link to="">
            <i className="fa-brands fa-youtube"></i>
            </Link>
          </div>
        </div>
      </div>
      {/* footer bottom Part */}
      <div className="row align-items-center mt-5">
        <div className="col-12 text-center mt-3">
          <p className="mb-0 font-small">
            © Copyright 2024 by <a href="javascript:void(0)">Buddhism Life</a>,
            All rights reserved.
          </p>
        </div>
      </div>
    </div>
    <a href="#wrapper" data-type="section-switch" className="scrollup">
    <i className="fa-solid fa-angles-up"></i>

    </a>

  
  </footer>
</>

   </>

  )
}

export default Footer