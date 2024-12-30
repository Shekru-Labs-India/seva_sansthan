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
              <h3 className="h5 fw-bold mb-4">Site</h3>
              <ul className="link-list">
                <li>
                  <Link to="/" className="footer-link-effect">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="footer-link-effect">
                    About
                  </Link>
                </li>
                <li>
                  <Link to="/donations" className="footer-link-effect">
                    Donations
                  </Link>
                </li>
                <li>
                  <Link to="/events" className="footer-link-effect">
                    Events
                    </Link>
                </li>
                
                <li>
                  <Link to="/gallery" className="footer-link-effect">
                    Gallery
                  </Link>
                </li>
              </ul>
              {/* quick link end */}
            </div>
            <div className="col">
              <h3 className="h5 fw-bold mb-4">Support</h3>
              <ul className="link-list">
                <li>
                  <Link to="/privacy" className="footer-link-effect">
                    Privacy
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="footer-link-effect">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link to="/faq" className="footer-link-effect">
                    FAQ
                    </Link>
                </li>
                <li>
                  <Link to="/monks" className="footer-link-effect">
                    Our Volunteers
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="footer-link-effect">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="/services" className="footer-link-effect">
                    Services
                  </Link>
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
              
            </span>
          </div>
          {/* download our app end */}
          <h3 className="mt-4 h5 fw-bold mb-4">Connect with us</h3>
          <div className="d-flex social mt-3">
            <Link to="">
            <i className="fa-brands fa-facebook"></i>
            </Link>
            
            <Link to="https://www.linkedin.com/in/krishna-shiksha-seva-sansthan-5862b3339/" target='_blank'>
            <i className="fa-brands fa-linkedin"></i>
            </Link>
            <Link to="https://www.youtube.com/channel/UCSO2odRHavu44L7-26WmKxw" target='_blank'>
            <i className="fa-brands fa-youtube"></i>
            </Link>
            <Link to="">
            <i className="fa-brands fa-google"></i>
            </Link>
            <Link to="https://www.instagram.com/krishnashikshasevasansthan/" target='_blank'>
            <i className="fa-brands fa-instagram"></i>
            </Link>
            
          </div>
        </div>
      </div>
      {/* footer bottom Part */}
      <div className="row align-items-center mt-5">
        <div className="col-12 text-center mt-3">
          <p className="mb-0 font-small">
            © Copyright 2024 by <Link target='_blank' to="https://www.shekruweb.com/">Shekru Labs India Pvt.Ltd.</Link>,
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