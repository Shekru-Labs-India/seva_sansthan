import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import brand from "../assets/images/img/brand.jpg";

const Header = () => {
  const [isOffCanvasVisible, setOffCanvasVisible] = useState(false);
  const [isMobileMenuVisible, setMobileMenuVisible] = useState(false);
  const [openDropdowns, setOpenDropdowns] = useState({});
  const location = useLocation();

  const isPathActive = (path) => {
    if (path === "/") {
      return location.pathname === "/";
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
                {/* Mobile Menu Toggle */}
                <div
                  className="nav-toggle d-block d-lg-none"
                  onClick={handleMenuClick}
                  style={{
                    
                    right: '15px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    zIndex: 100,
                    cursor: 'pointer'
                  }}
                >
                  <i className="fa-solid fa-bars fs-4"></i>
                </div>

                <div className="menu-wrap">
                  <nav className="menu-nav d-flex justify-content-between align-items-center py-3">
                    <div className="brand">
                      <Link to="/">
                        <img src={brand} alt="Brand" style={{ maxHeight: '50px' }} />
                      </Link>
                    </div>

                    {/* Desktop Menu */}
                    <div className="menu-navbar-wrap main-menu d-none d-lg-flex">
                      <ul className="navigation l-menu">
                        <li
                          className={`menu-item-children ${
                            isPathActive("/") ? "active" : ""
                          }`}
                        >
                          <Link to="/">Home</Link>
                        </li>
                        <li
                          className={`menu-item-children ${
                            isPathActive("/annadanaseva") ||
                            isPathActive("/goseva")
                              ? "active"
                              : ""
                          }`}
                        >
                          <a href="javascript:void(0)">Donate</a>
                          <ul className="sub-menu">
                            <li
                              className={
                                isPathActive("/annadanaseva") ? "active" : ""
                              }
                            >
                              <Link to="/annadanaseva">Annadana Seva</Link>
                            </li>
                            <li
                              className={
                                isPathActive("/goseva") ? "active" : ""
                              }
                            >
                              <Link to="/goseva">Go Seva</Link>
                            </li>
                          </ul>
                        </li>
                        <li
                          className={`menu-item-children ${
                            isPathActive("/fooddistribution") ||
                            isPathActive("/cowprotection") ||
                            isPathActive("/events")
                              ? "active"
                              : ""
                          }`}
                        >
                          <a href="javascript:void(0)">Activities</a>
                          <ul className="sub-menu">
                            <li
                              className={
                                isPathActive("/fooddistribution")
                                  ? "active"
                                  : ""
                              }
                            >
                              <Link to="/fooddistribution">
                                Food Distribution
                              </Link>
                            </li>
                            <li
                              className={
                                isPathActive("/cowprotection") ? "active" : ""
                              }
                            >
                              <Link to="/cowprotection">Cow Protection</Link>
                            </li>
                            <li
                              className={
                                isPathActive("/events") ? "active" : ""
                              }
                            >
                              <Link to="/events">Events</Link>
                            </li>
                          </ul>
                        </li>
                        <li
                          className={`menu-item-children ${
                            isPathActive("/projects") ? "active" : ""
                          }`}
                        >
                          <Link to="/projects">Projects</Link>
                        </li>
                        <li
                          className={`menu-item-children ${
                            isPathActive("/deity-darshan-1") ||
                            isPathActive("/deity-darshan-2") ||
                            isPathActive("/deity-darshan-3")
                              ? "active"
                              : ""
                          }`}
                        >
                          <a href="javascript:void(0)">Gallery</a>
                          <ul className="sub-menu">
                            <li className={isPathActive("/deity-darshan-1") ? "active" : ""}>
                              <Link to="/deity-darshan-1">Deity Darshan 1</Link>
                            </li>
                            <li className={isPathActive("/deity-darshan-2") ? "active" : ""}>
                              <Link to="/deity-darshan-2">Deity Darshan 2</Link>
                            </li>
                            <li className={isPathActive("/deity-darshan-3") ? "active" : ""}>
                              <Link to="/deity-darshan-3">Deity Darshan 3</Link>
                            </li>
                          </ul>
                        </li>
                        <li
                          className={`menu-item-children ${
                            isPathActive("/mission") ||
                            isPathActive("/objective") ||
                            isPathActive("/governance") ||
                            isPathActive("/leadership")
                              ? "active"
                              : ""
                          }`}
                        >
                          <a href="javascript:void(0)">About Us</a>
                          <ul className="sub-menu">
                            <li
                              className={
                                isPathActive("/mission") ? "active" : ""
                              }
                            >
                              <Link to="/mission">Our Mission</Link>
                            </li>
                            <li
                              className={
                                isPathActive("/objective") ? "active" : ""
                              }
                            >
                              <Link to="/objective">Objectives</Link>
                            </li>
                            <li
                              className={
                                isPathActive("/governance") ? "active" : ""
                              }
                            >
                              <Link to="/governance">Governance</Link>
                            </li>
                            <li
                              className={
                                isPathActive("/leadership") ? "active" : ""
                              }
                            >
                              <Link to="/leadership">Leadership</Link>
                            </li>
                          </ul>
                        </li>
                       
                      </ul>
                    </div>

                    {/* Sidebar Toggle */}
                    <div className="menu-second d-none d-lg-block">
                      <ul className="list-wrap">
                        <li className="side-toggle">
                          <button
                            className="side-menu border-0 bg-transparent"
                            onClick={toggleOffCanvas}
                          >
                            <i className="fa-solid fa-bars fs-4"></i>
                          </button>
                        </li>
                      </ul>
                    </div>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`mobile-menu ${isMobileMenuVisible ? 'show' : ''}`}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '300px',
            height: '100vh',
            backgroundColor: 'white',
            zIndex: 1000,
            transform: isMobileMenuVisible ? 'translateX(0)' : 'translateX(-100%)',
            transition: 'transform 0.3s ease-in-out',
            overflowY: 'auto'
          }}
        >
          <div className="mobile-menu-header d-flex justify-content-between align-items-center p-3 border-bottom">
            <div className="nav-brand">
              <Link to="/">
                <img src={brand} alt="Logo" style={{ maxHeight: '40px' }} />
              </Link>
            </div>
            <button 
              className="close-btn border-0 bg-transparent"
              onClick={toggleMobileMenu}
            >
              <i className="fa-solid fa-xmark fs-4"></i>
            </button>
          </div>
          
          {/* Mobile Menu Items */}
          <div className="mobile-menu-content p-3">
  <ul className="navigation">
    <li className={`menu-item ${isPathActive("/") ? "active" : ""}`}>
      <Link to="/" className="d-flex align-items-center">
        <span>Home</span>
      </Link>
    </li>

    <li className={`menu-item has-dropdown ${
      isPathActive("/annadanaseva") || isPathActive("/goseva") ? "active" : ""
    }`}>
      <div className="menu-title d-flex align-items-center justify-content-between" 
           onClick={() => toggleDropdown("donate")}>
        <span>Donate</span>
        <i className={`fa-solid fa-chevron-down transition-transform ${
          openDropdowns.donate ? "rotate-180" : ""
        }`}></i>
      </div>
      <ul className={`dropdown-menu ${openDropdowns.donate ? "show" : ""}`}>
        <li className={isPathActive("/annadanaseva") ? "active" : ""}>
          <Link to="/annadanaseva">Annadana Seva</Link>
        </li>
        <li className={isPathActive("/goseva") ? "active" : ""}>
          <Link to="/goseva">Go Seva</Link>
        </li>
      </ul>
    </li>

    <li className={`menu-item has-dropdown ${
      isPathActive("/fooddistribution") || 
      isPathActive("/cowprotection") || 
      isPathActive("/events") ? "active" : ""
    }`}>
      <div className="menu-title d-flex align-items-center justify-content-between"
           onClick={() => toggleDropdown("activities")}>
        <span>Activities</span>
        <i className={`fa-solid fa-chevron-down transition-transform ${
          openDropdowns.activities ? "rotate-180" : ""
        }`}></i>
      </div>
      <ul className={`dropdown-menu ${openDropdowns.activities ? "show" : ""}`}>
        <li className={isPathActive("/fooddistribution") ? "active" : ""}>
          <Link to="/fooddistribution">Food Distribution</Link>
        </li>
        <li className={isPathActive("/cowprotection") ? "active" : ""}>
          <Link to="/cowprotection">Cow Protection</Link>
        </li>
        <li className={isPathActive("/events") ? "active" : ""}>
          <Link to="/events">Events</Link>
        </li>
      </ul>
    </li>

    <li className={`menu-item ${isPathActive("/projects") ? "active" : ""}`}>
      <Link to="/projects">Projects</Link>
    </li>

    <li className={`menu-item has-dropdown ${
      isPathActive("/deity-darshan-1") || 
      isPathActive("/deity-darshan-2") || 
      isPathActive("/deity-darshan-3") ? "active" : ""
    }`}>
      <div className="menu-title d-flex align-items-center justify-content-between"
           onClick={() => toggleDropdown("gallery")}>
        <span>Gallery</span>
        <i className={`fa-solid fa-chevron-down transition-transform ${
          openDropdowns.gallery ? "rotate-180" : ""
        }`}></i>
      </div>
      <ul className={`dropdown-menu ${openDropdowns.gallery ? "show" : ""}`}>
        <li className={isPathActive("/deity-darshan-1") ? "active" : ""}>
          <Link to="/deity-darshan-1">Deity Darshan 1</Link>
        </li>
        <li className={isPathActive("/deity-darshan-2") ? "active" : ""}>
          <Link to="/deity-darshan-2">Deity Darshan 2</Link>
        </li>
        <li className={isPathActive("/deity-darshan-3") ? "active" : ""}>
          <Link to="/deity-darshan-3">Deity Darshan 3</Link>
        </li>
      </ul>
    </li>

    <li className={`menu-item has-dropdown ${
      isPathActive("/mission") || 
      isPathActive("/objective") || 
      isPathActive("/governance") || 
      isPathActive("/leadership") ? "active" : ""
    }`}>
      <div className="menu-title d-flex align-items-center justify-content-between"
           onClick={() => toggleDropdown("aboutus")}>
        <span>About Us</span>
        <i className={`fa-solid fa-chevron-down transition-transform ${
          openDropdowns.aboutus ? "rotate-180" : ""
        }`}></i>
      </div>
      <ul className={`dropdown-menu ${openDropdowns.aboutus ? "show" : ""}`}>
        <li className={isPathActive("/mission") ? "active" : ""}>
          <Link to="/mission">Our Mission</Link>
        </li>
        <li className={isPathActive("/objective") ? "active" : ""}>
          <Link to="/objective">Objectives</Link>
        </li>
        <li className={isPathActive("/governance") ? "active" : ""}>
          <Link to="/governance">Governance</Link>
        </li>
        <li className={isPathActive("/leadership") ? "active" : ""}>
          <Link to="/leadership">Leadership</Link>
        </li>
      </ul>
    </li>

   
  </ul>
</div>
        </div>

        {/* Mobile Menu Overlay */}
        {isMobileMenuVisible && (
          <div
            className="mobile-menu-overlay"
            onClick={toggleMobileMenu}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
              zIndex: 999
            }}
          />
        )}

        {/* Sidebar */}
        <div
          className="offCanvas-box"
          style={{
            position: 'fixed',
            top: 0,
            right: 0,
            width: '300px',
            height: '100%',
            backgroundColor: 'white',
            zIndex: 1000,
            transform: isOffCanvasVisible ? 'translateX(0)' : 'translateX(100%)',
            transition: 'transform 0.3s ease-in-out',
            boxShadow: '-2px 0 5px rgba(0,0,0,0.1)'
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

        {/* Sidebar Overlay */}
        {isOffCanvasVisible && (
          <div
            className="offCanvas-overlay"
            onClick={toggleOffCanvas}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
              zIndex: 999
            }}
          />
        )}
      </header>
    </>
  );
};

export default Header;
