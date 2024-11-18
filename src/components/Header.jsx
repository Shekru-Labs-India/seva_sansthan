import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import brand from "../assets/images/img/brand.jpg";

const Header = () => {
  const [isOffCanvasVisible, setOffCanvasVisible] = useState(false);
  const [isMobileMenuVisible, setMobileMenuVisible] = useState(false);
  const [openDropdowns, setOpenDropdowns] = useState({});
  const location = useLocation();

  const isPathActive = (path) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };

  // Toggle visibility of the off-canvas box
  const toggleOffCanvas = () => {
    console.log("Previous state:", isOffCanvasVisible);
    setOffCanvasVisible(!isOffCanvasVisible);
    console.log("New state:", !isOffCanvasVisible);
  };

  const toggleMobileMenu = () => {
    setMobileMenuVisible(!isMobileMenuVisible);
  };

  // Function to handle icon click based on screen size
  const handleMenuClick = () => {
    if (window.innerWidth <= 991) {
      toggleMobileMenu();
    } else {
      toggleOffCanvas();
    }
  };

  // Add function to handle dropdown toggles
  const toggleDropdown = (menuItem) => {
    setOpenDropdowns((prev) => ({
      ...prev,
      [menuItem]: !prev[menuItem],
    }));
  };

  return (
    <>
      <header>
        {/* info top section */}
        <div className="info-top py-2 d-lg-block d-none">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-12 col-md-8">
                <p className="mb-0 theme-text-white small">
                  <span className="fw-bold">
                    <i className="bi bi-envelope-fill me-2" />
                    Email : support@example.com
                  </span>
                </p>
              </div>
              <div className="col-12 col-md-4">
                <div className="d-flex social justify-content-center justify-content-md-end">
                  <Link to="" className="fs-5 pe-3">
                    <i className="fa-brands fa-facebook"></i>
                  </Link>
                  <Link to="" className="fs-5 pe-3">
                    <i className="fa-brands fa-x-twitter"></i>
                  </Link>
                  <Link to="" className="fs-5 pe-3">
                    <i className="fa-brands fa-linkedin"></i>
                  </Link>
                  <Link to="" className="fs-5">
                    <i className="fa-brands fa-youtube"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="sticky-header" className="header-area">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="nav-toggle" onClick={handleMenuClick}>
                  <i class="fa-solid fa-list-ul"></i>
                </div>
                <div className="menu-wrap">
                  <nav className="menu-nav">
                    <div className="brand">
                      <a href="index.html">
                        <img src={brand} alt="Brand" />
                      </a>
                    </div>
                    <div className="menu-navbar-wrap main-menu d-none d-xl-flex">
  <ul className="navigation l-menu">
    <li className={`menu-item-children ${isPathActive('/') ? 'active' : ''}`}>
      <Link to="/">Home</Link>
    </li>
    <li className={`menu-item-children ${isPathActive('/annadanaseva') || isPathActive('/goseva') ? 'active' : ''}`}>
      <a href="javascript:void(0)">Donate</a>
      <ul className="sub-menu">
        <li className={isPathActive('/annadanaseva') ? 'active' : ''}>
          <Link to="/annadanaseva">Annadana Seva</Link>
        </li>
        <li className={isPathActive('/goseva') ? 'active' : ''}>
          <Link to="/goseva">Go Seva</Link>
        </li>
      </ul>
    </li>
    <li className={`menu-item-children ${isPathActive('/fooddistribution') || isPathActive('/cowprotection') || isPathActive('/events') ? 'active' : ''}`}>
      <a href="javascript:void(0)">Activities</a>
      <ul className="sub-menu">
        <li className={isPathActive('/fooddistribution') ? 'active' : ''}>
          <Link to="/fooddistribution">Food Distribution</Link>
        </li>
        <li className={isPathActive('/cowprotection') ? 'active' : ''}>
          <Link to="/cowprotection">Cow Protection</Link>
        </li>
        <li className={isPathActive('/events') ? 'active' : ''}>
          <Link to="/events">Events</Link>
        </li>
      </ul>
    </li>
    <li className={`menu-item-children ${isPathActive('/projects') ? 'active' : ''}`}>
      <Link to="/projects">Projects</Link>
    </li>
    <li className={`menu-item-children ${isPathActive('/dailydarshan') || isPathActive('/deity') || isPathActive('/costume') || isPathActive('/dignitariesvisit') ? 'active' : ''}`}>
      <a href="javascript:void(0)">Gallery</a>
      <ul className="sub-menu">
        <li className={isPathActive('/dailydarshan') ? 'active' : ''}>
          <Link to="/dailydarshan">Daily Darshan</Link>
        </li>
        <li className={isPathActive('/deity') ? 'active' : ''}>
          <Link to="/deity">Deity Darshan</Link>
        </li>
        <li className={isPathActive('/costume') ? 'active' : ''}>
          <Link to="/costume">Krishna Costume</Link>
        </li>
        <li className={isPathActive('/dignitariesvisit') ? 'active' : ''}>
          <Link to="/dignitariesvisit">Dignitaries Visit</Link>
        </li>
      </ul>
    </li>
    <li className={`menu-item-children ${isPathActive('/mission') || isPathActive('/objective') || isPathActive('/governance') || isPathActive('/leadership') ? 'active' : ''}`}>
      <a href="javascript:void(0)">About Us</a>
      <ul className="sub-menu">
        <li className={isPathActive('/mission') ? 'active' : ''}>
          <Link to="/mission">Our Mission</Link>
        </li>
        <li className={isPathActive('/objective') ? 'active' : ''}>
          <Link to="/objective">Objectives</Link>
        </li>
        <li className={isPathActive('/governance') ? 'active' : ''}>
          <Link to="/governance">Governance</Link>
        </li>
        <li className={isPathActive('/leadership') ? 'active' : ''}>
          <Link to="/leadership">Leadership</Link>
        </li>
      </ul>
    </li>
    <li className={isPathActive('/contact') ? 'active' : ''}>
      <Link to="/contact">Contact</Link>
    </li>
  </ul>
</div>
                    <div className="menu-second">
                      <ul className="list-wrap">
                        {/* Side Toggle Icon */}
                        <li className="side-toggle d-none d-sm-block">
                          <a
                            href="javascript:void(0)"
                            className="side-menu"
                            onClick={toggleOffCanvas}
                          >
                            <i className="fa-solid fa-list-ul"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* OffCanvas Content */}
        {isOffCanvasVisible && (
          <>
            <div
              className="offCanvas-box"
              style={{
                position: "fixed",
                top: 0,
                right: 0,
                width: "300px",
                height: "100%",
                backgroundColor: "white",
                zIndex: 1000,
                transform: isOffCanvasVisible
                  ? "translateX(0)"
                  : "translateX(100%)",
                transition: "transform 0.3s ease-in-out",
              }}
            >
              <div className="box-body">
                <div className="top">
                  <div className="brand">
                    <a href="index.html">
                      <img src={brand} alt="Logo" />
                    </a>
                  </div>
                  <div className="offCanvas-close" onClick={toggleOffCanvas}>
                    <i class="fa-solid fa-xmark"></i>
                  </div>
                </div>
                <div className="content">
                  <div className="newsletter">
                    <h4 className="small-title">Subscribe</h4>
                    <p>Subscribe To Our Newsletter</p>
                  </div>
                  <div className="contact-box">
                    <h4 className="small-title">Help Info</h4>
                    <ul className="list">
                      <li>
                        <i className="fa-solid fa-mobile-button me-3"></i> +9
                        111 222 3456
                      </li>
                      <li>
                        <i className="fa-solid fa-envelope-open-text me-3"></i>{" "}
                        info@example.com
                      </li>
                      <li>
                        <i className="fa-solid fa-location-dot me-3"></i> W-5,
                        New Central Park, New York
                      </li>
                    </ul>
                  </div>
                  <div className="social-links">
                    <h4 className="small-title">Connect with us</h4>
                    <ul className="list-inline">
                      <li className="list-inline-item">
                        <Link to="#">
                          <i className="fa-brands fa-facebook"></i>
                        </Link>
                      </li>
                      <li className="list-inline-item">
                        <Link to="#">
                          <i className="fa-brands fa-x-twitter"></i>
                        </Link>
                      </li>
                      <li className="list-inline-item">
                        <Link to="#">
                          <i className="fa-brands fa-instagram"></i>
                        </Link>
                      </li>
                      <li className="list-inline-item">
                        <Link to="#">
                          <i className="fa-brands fa-linkedin"></i>
                        </Link>
                      </li>
                      <li className="list-inline-item">
                        <Link to="#">
                          <i className="fa-brands fa-youtube"></i>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="copyright">
                  <p>
                    Copyright © 2024 - By <span>Buddhism Life</span> All rights
                    reserved.
                  </p>
                </div>
              </div>
            </div>
            {/* Overlay */}
            <div
              className="offCanvas-overlay"
              onClick={toggleOffCanvas}
              style={{
                position: "fixed",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                backgroundColor: "rgba(0, 0, 0, 0.5)",
                zIndex: 999,
              }}
            ></div>
          </>
        )}

        {/* Mobile Menu  */}
        <div
          className={`mobile-menu ${isMobileMenuVisible ? "active" : ""}`}
          style={{
            display: "none",
            position: "fixed",
            top: "50%",
            left: "60%",
            transform: "translate(-50%, -50%)",
            zIndex: 1000,
            backgroundColor: "white",
            width: "80%",
            maxWidth: "400px",
            borderRadius: "8px",
            boxShadow: "0 0 20px rgba(0,0,0,0.15)",
          }}
        >
          <nav className="mobile-menu-box">
            <div className="close-btn" onClick={toggleMobileMenu}>
              <i class="fa-solid fa-xmark"></i>
            </div>
            <div className="nav-brand">
              <a href="index.html">
                <img src={brand} alt="Logo" />
              </a>
            </div>
            <div className="mobile-menu-wrap">
              <ul className="navigation l-menu">
                <li className={`menu-item-children ${isPathActive('/') ? 'active' : ''}`}>
                  <Link to="/">Home</Link>
                </li>

                <li className={`menu-item-children ${isPathActive('/annadanaseva') || isPathActive('/goseva') ? 'active' : ''}`}>
                  <div
                    className="menu-title"
                    onClick={() => toggleDropdown("donate")}
                  >
                    <a
                      href="javascript:void(0)"
                      className="text-white fw-bold ms-3"
                    >
                      Donate
                    </a>
                    <div
                      className={`down-btn ${
                        openDropdowns.donate ? "active" : ""
                      }`}
                    >
                      <i className="fa-solid fa-chevron-down"></i>
                    </div>
                  </div>
                  <ul
                    className="sub-menu"
                    style={{ display: openDropdowns.donate ? "block" : "none" }}
                  >
                    <li>
                      <Link to="/annadanaseva">Annadana Seva</Link>
                    </li>
                    <li>
                      <Link to="/goseva">Go Seva</Link>
                    </li>
                  </ul>
                </li>

                <li className={`menu-item-children ${isPathActive('/fooddistribution') || isPathActive('/cowprotection') || isPathActive('/events') ? 'active' : ''}`}>
                  <div
                    className="menu-title"
                    onClick={() => toggleDropdown("activities")}
                  >
                    <a
                      href="javascript:void(0)"
                      className="text-white fw-bold ms-3"
                    >
                      Activities
                    </a>
                    <div
                      className={`down-btn ${
                        openDropdowns.activities ? "active" : ""
                      }`}
                    >
                      <i className="fa-solid fa-chevron-down"></i>
                    </div>
                  </div>
                  <ul
                    className="sub-menu"
                    style={{
                      display: openDropdowns.activities ? "block" : "none",
                    }}
                  >
                    <li>
                      <Link to="/fooddistribution">Food Distribution</Link>
                    </li>
                    <li>
                      <Link to="/cowprotection">Cow Protection</Link>
                    </li>

                    <li>
                      <Link to="/events">Events</Link>
                    </li>
                  </ul>
                </li>

                <li className={`menu-item-children ${isPathActive('/projects') ? 'active' : ''}`}>
                  <Link to="/projects">Projects</Link>
                </li>

                <li className={`menu-item-children ${isPathActive('/dailydarshan') || isPathActive('/deity') || isPathActive('/costume') || isPathActive('/dignitariesvisit') ? 'active' : ''}`}>
                  <div
                    className="menu-title"
                    onClick={() => toggleDropdown("gallery")}
                  >
                    <a
                      href="javascript:void(0)"
                      className="text-white fw-bold ms-3"
                    >
                      Gallery
                    </a>
                    <div
                      className={`down-btn ${
                        openDropdowns.gallery ? "active" : ""
                      }`}
                    >
                      <i className="fa-solid fa-chevron-down"></i>
                    </div>
                  </div>
                  <ul
                    className="sub-menu"
                    style={{
                      display: openDropdowns.gallery ? "block" : "none",
                    }}
                  >
                    <li>
                      <Link to="/dailydarshan">Daily Darshan</Link>
                    </li>
                    <li>
                      <Link to="/deity">Deity Darshan</Link>
                    </li>
                    <li>
                      <Link to="/costume">Krishna Costume</Link>
                    </li>
                    <li>
                      <a href="dignitaries-visit.html">Dignitaries Visit</a>
                    </li>
                  </ul>
                </li>

                <li className={`menu-item-children ${isPathActive('/mission') || isPathActive('/objective') || isPathActive('/governance') || isPathActive('/leadership') ? 'active' : ''}`}>
                  <div
                    className="menu-title"
                    onClick={() => toggleDropdown("aboutus")}
                  >
                    <a
                      href="javascript:void(0)"
                      className="text-white fw-bold ms-3"
                    >
                      About Us
                    </a>
                    <div
                      className={`down-btn ${
                        openDropdowns.aboutus ? "active" : ""
                      }`}
                    >
                      <i className="fa-solid fa-chevron-down"></i>
                    </div>
                  </div>
                  <ul
                    className="sub-menu"
                    style={{
                      display: openDropdowns.aboutus ? "block" : "none",
                    }}
                  >
                    <li>
                      <Link to="/mission">Our Mission</Link>
                    </li>
                    <li>
                      <Link to="/objective">Objectives</Link>
                    </li>
                    <li>
                      <Link to="/governance">Governance</Link>
                    </li>
                    <li>
                      <Link to="/leadership">Leadership</Link>
                    </li>
                  </ul>
                </li>

                <li className={isPathActive('/contact') ? 'active' : ''}>
                  <Link to="/contact">Contact</Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
        <div
          className={`mobile-menu-overlay ${
            isMobileMenuVisible ? "active" : ""
          }`}
          onClick={toggleMobileMenu}
          style={{
            display: isMobileMenuVisible ? "block" : "none",
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            zIndex: 999,
          }}
        />
        {/* End Mobile Menu */}
      </header>
    </>
  );
};

export default Header;
