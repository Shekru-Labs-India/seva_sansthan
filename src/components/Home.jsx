import React from 'react'
import Footer from './Footer'
import Header from './Header'
import hero4 from '../assets/images/hero/hero-bg-4.jpg'
import hero3 from '../assets/images/hero/hero-bg-3.jpg'
import hero2 from '../assets/images/hero/hero-bg-2.jpg'


const Home = () => {
  return (
    
    <>
    
    <Header/>

    {/* hero banner section */}
    <section className="hero-single mt-4">
      <div className="owl-carousel owl-theme" id="hero-single-slider">
        <div
          className="hero-single-items set-bg"
          style={{ backgroundImage: `url(${hero4})` }}
        >
          <div className="container">
            <div className="row">
              <div className="col-12 col-lg-8 position-relative align-self-center">
                <div className="hero-con text-start">
                  <h2 className="display-1 text-uppercase mb-3 head text-effect">
                    Welcome to Buddhism Life
                  </h2>
                  <p className="sub-head mb-5 fs-4">Discover our community</p>
                  <div className="btn-wrap">
                    <button className="btn-primary custom-btn-primary px-4">
                      Join Community
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* repetable */}
        <div
          className="hero-single-items set-bg"
          style={{ backgroundImage: `url(${hero2})` }}
        >
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="hero-con">
                  <h2 className="display-1 text-uppercase mb-3 head theme-text-white">
                    Seeking a Deeper Understanding
                  </h2>
                  <p className="sub-head mb-5 fs-4">Discover our community</p>
                  <div className="btn-wrap justify-content-center">
                    <button className="btn-primary custom-btn-primary px-4">
                      Join Community
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* repetable */}
        <div
          className="hero-single-items set-bg"
           style={{ backgroundImage: `url(${hero3})` }}
        >
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="hero-con">
                  <h2 className="display-1 text-uppercase mb-3 head text-effect">
                    The Buddhist Society
                  </h2>
                  <p className="sub-head mb-5 fs-4">
                    Enter the realm of limitless possibilities and level up your
                    Religions experience
                  </p>
                  <div className="btn-wrap justify-content-center">
                    <button className="btn-primary custom-btn-primary px-4">
                      Join Community
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* repetable */}
      </div>
    </section>
    {/* about us section */}
    <section className="about-sec py-8">
      <div className="container">
        <div className="row justify-content-center align-items-center">
          <div className="col-xl-6 col-lg-6 col-md-10">
            <p className="mb-3 theme-text-primary fs-5 fw-bold">Buddhism Life</p>
            <h2 className="mb-4 display-6 head">We Focus on Early Buddhism</h2>
            <p className="mb-3 text-justify lh-lg">
              In addition, Neque porro quisquam est qui dolorem ipsum quia dolor
              sit amet, consectetur, adipisci velit. Heal the earth, and create
              the conditions for world peace. Donec eget est ac turpis faucibus
              tincidunt quis bibendum enim. Aliquam id tincidunt tortor. Curabitur
              sed leo sit amet neque molestie fringilla a nec enim. Nullam vitae
              lacinia est. Orci varius natoque penatibus et magnis dis parturient
              montes, nascetur ridiculus mus. In faucibus, magna ac.
              <br />
            </p>
            <div className="d-flex flex-column flex-md-row justify-content-between mt-3">
              <div className="fact-development">
                <div className="icon">
                  <img src="assets/images/icons/about01.png" alt="trophy" />
                </div>
                <div className="content">
                  <h5>Core Values</h5>
                  <span>Academy</span>
                </div>
              </div>
              <div className="fact-development">
                <div className="icon">
                  <img src="assets/images/icons/about02.png" alt="team" />
                </div>
                <div className="content">
                  <h5>Life's Goals</h5>
                  <span>Experts</span>
                </div>
              </div>
            </div>
            <div className="group mt-5 btn-wrap">
              <button className="btn-primary custom-btn-primary">
                Learn More
              </button>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6 order-0 order-lg-2">
            <div className="about-images">
              <div />
              <img
                src="assets/images/section/about-shape.png"
                alt="background"
                className="img-fluid"
              />
              <img
                src="assets/images/section/about-pic.png"
                alt="image"
                className="main-pic"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* trending program section */}
    <section className="trending pb-5">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-12 mb-5 text-center">
            <p className="mb-3 theme-text-primary fs-5 fw-bold">Special Class</p>
            <h1 className="mb-0 display-6 head">Upcoming Programs</h1>
          </div>
        </div>
        {/* program tab section */}
        <div className="row align-items-center mb-5 game-tab">
          <div className="col-12 col-lg-10">
            <ul className="nav nav-pills" id="pills-tab" role="tablist">
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link active"
                  id="pills-game1-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-game1"
                  type="button"
                  role="tab"
                  aria-controls="pills-game1"
                  aria-selected="true"
                >
                  <img src="assets/images/program/program-tab01.png" alt="img" />
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="pills-game2-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-game2"
                  type="button"
                  role="tab"
                  aria-controls="pills-game2"
                  aria-selected="false"
                >
                  <img src="assets/images/program/program-tab02.png" alt="img" />
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="pills-game3-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-game3"
                  type="button"
                  role="tab"
                  aria-controls="pills-game3"
                  aria-selected="false"
                >
                  <img src="assets/images/program/program-tab03.png" alt="img" />
                </button>
              </li>
            </ul>
          </div>
          {/* tab content section */}
          <div className="col-12 tab-content" id="pills-tabContent">
            <div
              className="tab-pane fade show active"
              id="pills-game1"
              role="tabpanel"
              aria-labelledby="pills-game1-tab"
              tabIndex={0}
            >
              <div className="row">
                <div className="col-12 col-lg-6 col-xl-4 mb-3">
                  <div className="row g-0 list">
                    <div className="col-12 col-md-4 col-xxl-4">
                      <figure className="image-icon mb-4 mb-md-0">
                        <img
                          src="assets/images/program/program01.png"
                          className="img-fluid"
                          alt="Buddha Experience"
                        />
                      </figure>
                    </div>
                    <div className="col-12 col-md-8 col-xxl-8">
                      <div className="ps-3">
                        <p className="fs-6 fw-bold mb-1 theme-text-accent-one">
                          Daily Meditations
                        </p>
                        <span className="d-block small mb-2 theme-text-accent-one">
                          We offers three Solo meditations every day
                        </span>
                        <div className="d-flex flex-column align-items-start justify-content-between btn-wrap mt-2">
                          <button
                            className="btn-primary px-3"
                            onclick="location.href='events.html';"
                          >
                            Join Class
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* repetable item */}
                <div className="col-12 col-lg-6 col-xl-4 mb-3">
                  <div className="row g-0 list">
                    <div className="col-12 col-md-4 col-xxl-4">
                      <figure className="image-icon mb-4 mb-md-0">
                        <img
                          src="assets/images/program/program02.png"
                          className="img-fluid"
                          alt="Buddha Experience"
                        />
                      </figure>
                    </div>
                    <div className="col-12 col-md-8 col-xxl-8">
                      <div className="ps-3">
                        <p className="fs-6 fw-bold mb-1 theme-text-accent-one">
                          Exploring Buddhism Program
                        </p>
                        <span className="d-block small mb-2 theme-text-accent-one">
                          We offers three Solo meditations every day
                        </span>
                        <div className="d-flex flex-column align-items-start justify-content-between btn-wrap mt-2">
                          <button
                            className="btn-primary px-3"
                            onclick="location.href='events.html';"
                          >
                            Join Class
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* repetable item */}
                <div className="col-12 col-lg-6 col-xl-4 mb-3">
                  <div className="row g-0 list">
                    <div className="col-12 col-md-4 col-xxl-4">
                      <figure className="image-icon mb-4 mb-md-0">
                        <img
                          src="assets/images/program/program03.png"
                          className="img-fluid"
                          alt="Buddha Experience"
                        />
                      </figure>
                    </div>
                    <div className="col-12 col-md-8 col-xxl-8">
                      <div className="ps-3">
                        <p className="fs-6 fw-bold mb-1 theme-text-accent-one">
                          Study Buddhism
                        </p>
                        <span className="d-block small mb-2 theme-text-accent-one">
                          We offers three Solo meditations every day
                        </span>
                        <div className="d-flex flex-column align-items-start justify-content-between btn-wrap mt-2">
                          <button
                            className="btn-primary px-3"
                            onclick="location.href='events.html';"
                          >
                            Join Class
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* repetable item */}
                <div className="col-12 col-lg-6 col-xl-4 mb-3">
                  <div className="row g-0 list">
                    <div className="col-12 col-md-4 col-xxl-4">
                      <figure className="image-icon mb-4 mb-md-0">
                        <img
                          src="assets/images/program/program04.png"
                          className="img-fluid"
                          alt="Buddha Experience"
                        />
                      </figure>
                    </div>
                    <div className="col-12 col-md-8 col-xxl-8">
                      <div className="ps-3">
                        <p className="fs-6 fw-bold mb-1 theme-text-accent-one">
                          Discovering Buddhism
                        </p>
                        <span className="d-block small mb-2 theme-text-accent-one">
                          We offers three Solo meditations every day
                        </span>
                        <div className="d-flex flex-column align-items-start justify-content-between btn-wrap mt-2">
                          <button
                            className="btn-primary px-3"
                            onclick="location.href='events.html';"
                          >
                            Join Class
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* repetable item */}
                <div className="col-12 col-lg-6 col-xl-4 mb-3">
                  <div className="row g-0 list">
                    <div className="col-12 col-md-4 col-xxl-4">
                      <figure className="image-icon mb-4 mb-md-0">
                        <img
                          src="assets/images/program/program05.png"
                          className="img-fluid"
                          alt="Buddha Experience"
                        />
                      </figure>
                    </div>
                    <div className="col-12 col-md-8 col-xxl-8">
                      <div className="ps-3">
                        <p className="fs-6 fw-bold mb-1 theme-text-accent-one">
                          Studies in Bodh Gaya
                        </p>
                        <span className="d-block small mb-2 theme-text-accent-one">
                          We offers three Solo meditations every day
                        </span>
                        <div className="d-flex flex-column align-items-start justify-content-between btn-wrap mt-2">
                          <button
                            className="btn-primary px-3"
                            onclick="location.href='events.html';"
                          >
                            Join Class
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* repetable item */}
                <div className="col-12 col-lg-6 col-xl-4 mb-3">
                  <div className="row g-0 list">
                    <div className="col-12 col-md-4 col-xxl-4">
                      <figure className="image-icon mb-4 mb-md-0">
                        <img
                          src="assets/images/program/program06.png"
                          className="img-fluid"
                          alt="Buddha Experience"
                        />
                      </figure>
                    </div>
                    <div className="col-12 col-md-8 col-xxl-8">
                      <div className="ps-3">
                        <p className="fs-6 fw-bold mb-1 theme-text-accent-one">
                          Enriching Online Courses
                        </p>
                        <span className="d-block small mb-2 theme-text-accent-one">
                          We offers three Solo meditations every day
                        </span>
                        <div className="d-flex flex-column align-items-start justify-content-between btn-wrap mt-2">
                          <button
                            className="btn-primary px-3"
                            onclick="location.href='events.html';"
                          >
                            Join Class
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* repetable item */}
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="pills-game2"
              role="tabpanel"
              aria-labelledby="pills-game2-tab"
              tabIndex={0}
            >
              <div className="row">
                <div className="col-12 col-lg-6 col-xl-4 mb-3">
                  <div className="row g-0 list">
                    <div className="col-12 col-md-4 col-xxl-4">
                      <figure className="image-icon mb-4 mb-md-0">
                        <img
                          src="assets/images/program/program06.png"
                          className="img-fluid"
                          alt="Buddha Experience"
                        />
                      </figure>
                    </div>
                    <div className="col-12 col-md-8 col-xxl-8">
                      <div className="ps-3">
                        <p className="fs-6 fw-bold mb-1 theme-text-accent-one">
                          Enriching Online Courses
                        </p>
                        <span className="d-block small mb-2 theme-text-accent-one">
                          We offers three Solo meditations every day
                        </span>
                        <div className="d-flex flex-column align-items-start justify-content-between btn-wrap mt-2">
                          <button
                            className="btn-primary px-3"
                            onclick="location.href='events.html';"
                          >
                            Join Class
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* repetable item */}
                <div className="col-12 col-lg-6 col-xl-4 mb-3">
                  <div className="row g-0 list">
                    <div className="col-12 col-md-4 col-xxl-4">
                      <figure className="image-icon mb-4 mb-md-0">
                        <img
                          src="assets/images/program/program05.png"
                          className="img-fluid"
                          alt="Buddha Experience"
                        />
                      </figure>
                    </div>
                    <div className="col-12 col-md-8 col-xxl-8">
                      <div className="ps-3">
                        <p className="fs-6 fw-bold mb-1 theme-text-accent-one">
                          Studies in Bodh Gaya
                        </p>
                        <span className="d-block small mb-2 theme-text-accent-one">
                          We offers three Solo meditations every day
                        </span>
                        <div className="d-flex flex-column align-items-start justify-content-between btn-wrap mt-2">
                          <button
                            className="btn-primary px-3"
                            onclick="location.href='events.html';"
                          >
                            Join Class
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* repetable item */}
                <div className="col-12 col-lg-6 col-xl-4 mb-3">
                  <div className="row g-0 list">
                    <div className="col-12 col-md-4 col-xxl-4">
                      <figure className="image-icon mb-4 mb-md-0">
                        <img
                          src="assets/images/program/program06.png"
                          className="img-fluid"
                          alt="Buddha Experience"
                        />
                      </figure>
                    </div>
                    <div className="col-12 col-md-8 col-xxl-8">
                      <div className="ps-3">
                        <p className="fs-6 fw-bold mb-1 theme-text-accent-one">
                          Enriching Online Courses
                        </p>
                        <span className="d-block small mb-2 theme-text-accent-one">
                          We offers three Solo meditations every day
                        </span>
                        <div className="d-flex flex-column align-items-start justify-content-between btn-wrap mt-2">
                          <button
                            className="btn-primary px-3"
                            onclick="location.href='events.html';"
                          >
                            Join Class
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* repetable item */}
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="pills-game3"
              role="tabpanel"
              aria-labelledby="pills-game3-tab"
              tabIndex={0}
            >
              <div className="row">
                <div className="col-12 col-lg-6 col-xl-4 mb-3">
                  <div className="row g-0 list">
                    <div className="col-12 col-md-4 col-xxl-4">
                      <figure className="image-icon mb-4 mb-md-0">
                        <img
                          src="assets/images/program/program03.png"
                          className="img-fluid"
                          alt="Buddha Experience"
                        />
                      </figure>
                    </div>
                    <div className="col-12 col-md-8 col-xxl-8">
                      <div className="ps-3">
                        <p className="fs-6 fw-bold mb-1 theme-text-accent-one">
                          Study Buddhism
                        </p>
                        <span className="d-block small mb-2 theme-text-accent-one">
                          We offers three Solo meditations every day
                        </span>
                        <div className="d-flex flex-column align-items-start justify-content-between btn-wrap mt-2">
                          <button
                            className="btn-primary px-3"
                            onclick="location.href='events.html';"
                          >
                            Join Class
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* repetable item */}
                <div className="col-12 col-lg-6 col-xl-4 mb-3">
                  <div className="row g-0 list">
                    <div className="col-12 col-md-4 col-xxl-4">
                      <figure className="image-icon mb-4 mb-md-0">
                        <img
                          src="assets/images/program/program02.png"
                          className="img-fluid"
                          alt="Buddha Experience"
                        />
                      </figure>
                    </div>
                    <div className="col-12 col-md-8 col-xxl-8">
                      <div className="ps-3">
                        <p className="fs-6 fw-bold mb-1 theme-text-accent-one">
                          Exploring Buddhism Program
                        </p>
                        <span className="d-block small mb-2 theme-text-accent-one">
                          We offers three Solo meditations every day
                        </span>
                        <div className="d-flex flex-column align-items-start justify-content-between btn-wrap mt-2">
                          <button
                            className="btn-primary px-3"
                            onclick="location.href='events.html';"
                          >
                            Join Class
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* repetable item */}
                <div className="col-12 col-lg-6 col-xl-4 mb-3">
                  <div className="row g-0 list">
                    <div className="col-12 col-md-4 col-xxl-4">
                      <figure className="image-icon mb-4 mb-md-0">
                        <img
                          src="assets/images/program/program01.png"
                          className="img-fluid"
                          alt="Buddha Experience"
                        />
                      </figure>
                    </div>
                    <div className="col-12 col-md-8 col-xxl-8">
                      <div className="ps-3">
                        <p className="fs-6 fw-bold mb-1 theme-text-accent-one">
                          Daily Meditations
                        </p>
                        <span className="d-block small mb-2 theme-text-accent-one">
                          We offers three Solo meditations every day
                        </span>
                        <div className="d-flex flex-column align-items-start justify-content-between btn-wrap mt-2">
                          <button
                            className="btn-primary px-3"
                            onclick="location.href='events.html';"
                          >
                            Join Class
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* repetable item */}
              </div>
            </div>
          </div>
          {/* /end tab content section */}
        </div>
      </div>
    </section>
    {/* next Events / Events section */}
    <section className="events py-5">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="text-center">
              <h1 className="mb-0 display-2 font-black head text-effect">
                Next Events
              </h1>
            </div>
          </div>
          <div className="col-12">
            <div className="row mt-5 align-items-center position-relative g-0">
              <div className="col box-wrap">
                <div className="row">
                  <div className="col-12 col-lg-4 mb-4 mb-lg-0">
                    <div className="ev-card align-items-start">
                      <h3 className="fs-2 fw-bold mb-3">Buddha Purnima</h3>
                      <p className="small theme-text-accent-one mb-0">
                        The birth of Gautama Buddha is believed to be the ninth
                        avatar
                      </p>
                    </div>
                  </div>
                  {/* repetable */}
                  <div className="col-12 col-lg-4 mb-4 mb-lg-0">
                    <div className="ev-card text-center">
                      <h3 className="fs-4 fw-bold mb-3 theme-text-accent-two">
                        Starting Before 1 Week
                      </h3>
                      <p className="fs-6 fw-bold theme-text-primary mb-0">
                        Celebrating
                      </p>
                    </div>
                  </div>
                  {/* repetable */}
                  <div className="col-12 col-lg-4 d-flex justify-content-end align-items-center">
                    <div className="text-center">
                      <div className="coming-match-date">
                        <h2 className="time fw-bold">July 11, 2025</h2>
                      </div>
                      <div className="group mt-3 btn-wrap justify-content-center">
                        <button
                          className="btn-primary custom-btn-primary"
                          onclick="location.href='events-details.html';"
                        >
                          Come &amp; Join
                        </button>
                      </div>
                    </div>
                  </div>
                  {/* repetable */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* Core services section */}
    <section className="services py-8">
      <div className="container">
        <div className="row mt-5 align-items-center animate__animated wow animate__fadeInUp">
          <div className="col-12 col-lg-6 mb-5 mb-lg-0">
            <div className="text-start mb-5">
              <p className="mb-3 theme-text-primary fs-5 fw-bold">Our Services</p>
              <h2 className="mb-0 display-6 head">Best Buddhism Academy</h2>
            </div>
            <div className="services-box">
              <div className="box-item">
                <div className="icon mb-3">
                  <svg
                    width={27}
                    height={27}
                    viewBox="0 0 27 27"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M26.55 16.1828H26.01C26.055 16.0476 26.1 15.9124 26.1 15.7321C26.1 15.056 25.605 14.5152 24.975 14.4251V10.7744C25.605 10.6842 26.1 10.0983 26.1 9.46734C26.1 8.70115 25.515 8.11521 24.75 8.11521H24.3C25.38 7.30393 26.1 5.99686 26.1 4.50953C26.1 2.03062 24.075 0.00243545 21.6 0.00243545H2.7C1.93501 -0.0426355 1.35 0.543287 1.35 1.30948C1.35 1.98556 1.84501 2.52641 2.47499 2.61652V6.2672C1.84499 6.40241 1.35 6.94328 1.35 7.61933C1.35 8.38552 1.93499 8.97146 2.7 8.97146H3.15C2.07 9.78274 1.35 11.0898 1.35 12.5771C1.35 14.0645 2.07 15.3715 3.15 16.1828H0.45C0.18 16.1828 0 16.3631 0 16.6335V19.3378C0 19.6082 0.18 19.7885 0.45 19.7885H1.8V26.5493C1.8 26.8197 1.98 27 2.25 27H4.95C5.22 27 5.4 26.8197 5.4 26.5493V19.7885H21.6V26.5493C21.6 26.8197 21.78 27 22.05 27H24.75C25.02 27 25.2 26.8197 25.2 26.5493V19.7885H26.55C26.82 19.7885 27 19.6082 27 19.3378V16.6335C27 16.3631 26.82 16.1828 26.55 16.1828ZM7.42507 10.7743H9.22507V12.1715L8.59507 11.7208C8.50507 11.6757 8.41507 11.6307 8.32507 11.6307C8.23507 11.6307 8.14507 11.6757 8.05507 11.7208L7.42507 12.1715V10.7743ZM6.75006 13.4335C6.88506 13.5236 7.06507 13.5236 7.20006 13.4335L8.28006 12.7124L9.36006 13.4335C9.45006 13.4786 9.54006 13.5236 9.63006 13.5236C9.72006 13.5236 9.76506 13.5236 9.85506 13.4786C9.99006 13.3884 10.0801 13.2532 10.0801 13.0729V10.8194H24.0302V12.6222H21.3302C21.0602 12.6222 20.8802 12.8025 20.8802 13.0729C20.8802 13.3434 21.0602 13.5237 21.3302 13.5237H24.0302V14.4251H5.8502C4.8602 14.4251 4.0502 13.6138 4.0502 12.6222C4.0502 11.6307 4.8602 10.8194 5.8502 10.8194H6.52522V13.0729C6.52522 13.2082 6.61506 13.3434 6.75006 13.4335ZM18.2251 2.66146H20.0251V4.05868L19.3951 3.60797C19.3051 3.5629 19.2151 3.51783 19.1251 3.51783C19.0351 3.51783 18.9451 3.5629 18.8551 3.60797L18.2251 4.05868V2.66146ZM17.5501 5.32067C17.6851 5.41081 17.8651 5.41081 18.0001 5.32067L19.0801 4.59953L20.1601 5.32067C20.2501 5.36574 20.3401 5.41081 20.4301 5.41081C20.5201 5.41081 20.5651 5.41081 20.6551 5.36574C20.7901 5.2756 20.8801 5.14038 20.8801 4.96011V2.66148H21.6001C22.5901 2.66148 23.4001 3.47276 23.4001 4.46432C23.4001 5.45588 22.5901 6.26716 21.6001 6.26716H3.37519V4.46432H6.07519C6.34519 4.46432 6.52519 4.28403 6.52519 4.01361C6.52519 3.74318 6.34519 3.5629 6.07519 3.5629H3.37519V2.66148H17.3253V4.91503C17.3253 5.09531 17.4151 5.23055 17.5501 5.32067ZM2.70026 8.06998C2.43026 8.06998 2.25026 7.8897 2.25026 7.61927C2.25026 7.34885 2.43026 7.16856 2.70026 7.16856H21.6003C23.0852 7.16856 24.3003 5.95163 24.3003 4.4643C24.3003 2.97698 23.0852 1.76005 21.6003 1.76005H2.70026C2.43026 1.76005 2.25026 1.57976 2.25026 1.30934C2.25026 1.03891 2.43026 0.858626 2.70026 0.858626H21.6003C23.5803 0.858626 25.2003 2.48118 25.2003 4.4643C25.2003 6.44743 23.5803 8.06998 21.6003 8.06998H2.70026ZM2.25026 12.5771C2.25026 10.594 3.87026 8.9714 5.85026 8.9714H24.7503C25.0203 8.9714 25.2003 9.15169 25.2003 9.42211C25.2003 9.69254 25.0203 9.87282 24.7503 9.87282H5.85026C4.36527 9.87282 3.15026 11.0898 3.15026 12.5771C3.15026 14.0644 4.36527 15.2813 5.85026 15.2813H24.7503C25.0203 15.2813 25.2003 15.4616 25.2003 15.7321C25.2003 16.0025 25.0203 16.1828 24.7503 16.1828H5.85026C3.87026 16.1828 2.25026 14.5602 2.25026 12.5771ZM4.50026 26.0984H2.70026V19.7884H4.50026V26.0984ZM24.3003 26.0984H22.5003V19.7884H24.3003V26.0984ZM26.1003 18.887H0.900259V17.0842H26.1003V18.887Z"
                      fill="black"
                    />
                  </svg>
                </div>
                <div className="content">
                  <h4>Buddhism Garnth</h4>
                  <p>
                    Lorem ipsum dolor sitamet const adipiscng Duis eletum
                    sollicitudin is yaugue euismods
                  </p>
                  <a
                    href="services-details.html"
                    className="fw-bold font-extra-small"
                  >
                    More Details
                    <i className="bi bi-arrow-right" />
                  </a>
                </div>
              </div>
              {/* repetable */}
              <div className="box-item active">
                <div className="icon mb-3">
                  <svg
                    width={27}
                    height={27}
                    viewBox="0 0 27 27"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M26.5969 9.52925C26.3781 9.52925 26.2006 9.70792 26.2006 9.92679V11.0937C24.3483 10.9508 22.6993 9.86647 21.8341 8.22383V6.75091H22.628C22.8468 6.75091 23.0243 6.57224 23.0243 6.35337C23.0243 6.13451 22.8468 5.95583 22.628 5.95583H21.8341V4.66159L23.9376 4.01057C24.1252 3.95361 24.2435 3.76824 24.2156 3.57395V1.19204C24.2156 0.972046 24.0381 0.794497 23.8181 0.794497C23.5993 0.794497 23.4218 0.972052 23.4218 1.19204V1.986H21.9849C20.8707 1.98265 19.8692 1.30481 19.4516 0.270745C19.3947 0.102124 19.2328 -0.0084294 19.0553 0.000504204H16.6727C16.4539 0.000504204 16.2764 0.178059 16.2764 0.398042C16.2764 0.616914 16.4539 0.794466 16.6727 0.794466H18.8007C19.3924 2.00944 20.6262 2.77996 21.977 2.77996H23.4217V3.33941L21.3775 3.97146H5.61716L3.5729 3.33941V2.77996H5.0098C6.36075 2.77996 7.59334 2.00944 8.1861 0.794466H15.4822C15.701 0.794466 15.8785 0.616911 15.8785 0.398042C15.8785 0.178053 15.701 0.000504204 15.4822 0.000504204H7.93915C7.77168 0.00162083 7.62207 0.107707 7.56625 0.26628C7.14532 1.30815 6.1327 1.98934 5.00951 1.98599H3.57262V1.19203C3.57262 0.97204 3.3951 0.794492 3.17627 0.794492C2.95633 0.794492 2.77881 0.972046 2.77881 1.19203V3.57394C2.7509 3.76825 2.86925 3.95361 3.05682 4.01056L5.16027 4.66158V5.95583H4.36647C4.14764 5.95583 3.97012 6.1345 3.97012 6.35337C3.97012 6.57223 4.14764 6.7509 4.36647 6.7509H5.16027V8.22831V8.22719C4.2939 9.86986 2.64484 10.9519 0.793822 11.0937V9.92672C0.793822 9.70785 0.616303 9.52918 0.397477 9.52918C0.177532 9.52918 1.83309e-05 9.70786 1.83309e-05 9.92672V12.3086C1.83309e-05 12.6816 0.508004 12.7776 0.793822 12.9519V14.6917H0.397477C0.177532 14.6917 1.83309e-05 14.8692 1.83309e-05 15.0881V18.265C1.83309e-05 18.37 0.0424452 18.4705 0.116132 18.5453C0.190937 18.6201 0.291419 18.6614 0.397486 18.6614H0.793831V19.059C0.793831 19.2779 0.97135 19.4554 1.19129 19.4554C1.41012 19.4554 1.58763 19.2779 1.58763 19.059V18.6614H1.98509C2.09004 18.6614 2.19164 18.6201 2.26533 18.5453C2.34013 18.4705 2.38144 18.37 2.38144 18.265V15.0881C2.38144 14.9831 2.34013 14.8815 2.26533 14.8078C2.19164 14.733 2.09004 14.6917 1.98509 14.6917H1.58763V13.3494L3.17527 14.1433L3.17639 22.235H0.397459C0.177513 22.235 0 22.4126 0 22.6326C0 22.8515 0.177519 23.029 0.397459 23.029H1.58764V24.617L0.397459 24.6181C0.177513 24.6181 0 24.7956 0 25.0145V26.6025C0 26.7085 0.0424269 26.809 0.116114 26.8839C0.190918 26.9576 0.291401 27 0.397468 27H6.74921C6.96804 27 7.14556 26.8224 7.14556 26.6025C7.14556 26.3836 6.96804 26.206 6.74921 26.206H0.793898V25.4121H26.2006V26.206H7.93936C7.72053 26.206 7.54302 26.3836 7.54302 26.6025C7.54302 26.8225 7.72054 27 7.93936 27H26.5967C26.7028 27 26.8033 26.9576 26.8781 26.8839C26.9518 26.809 26.9942 26.7085 26.9942 26.6025V25.0145C26.9942 24.9095 26.9518 24.8079 26.8781 24.7342C26.8033 24.6594 26.7028 24.6181 26.5967 24.6181H25.4066V23.029H26.5978H26.5967C26.8167 23.029 26.9942 22.8515 26.9942 22.6326C26.9942 22.4126 26.8167 22.235 26.5967 22.235H23.8178V14.1433L25.4054 13.3494L25.4066 14.6917H25.0091C24.7903 14.6917 24.6128 14.8692 24.6128 15.0881V18.265C24.6128 18.37 24.6541 18.4705 24.7289 18.5453C24.8026 18.6201 24.9042 18.6614 25.0091 18.6614H25.4066V19.059C25.4066 19.2779 25.5841 19.4554 25.8029 19.4554C26.0229 19.4554 26.2004 19.2778 26.2004 19.059V18.6614H26.5978H26.5967C26.7028 18.6614 26.8033 18.6201 26.8781 18.5453C26.9518 18.4705 26.9942 18.37 26.9942 18.265V15.0881C26.9942 14.9831 26.9518 14.8815 26.8781 14.8078C26.8033 14.733 26.7028 14.6916 26.5967 14.6916H26.2004V12.9518C26.4315 12.848 26.6548 12.7285 26.8714 12.5945C27.0735 12.4236 26.9707 11.872 26.9942 11.5147V9.92671C26.9942 9.82174 26.9518 9.72011 26.8781 9.64641C26.8033 9.57159 26.703 9.52925 26.5969 9.52925ZM1.58782 17.8677H0.794016V15.4857H1.58782V17.8677ZM26.1994 17.8677H25.4067V15.4857H26.2005L26.1994 17.8677ZM21.0401 7.94121H19.8488V6.7508H21.0401V7.94121ZM17.4673 7.94121V6.7508H19.055V7.94232L17.4673 7.94121ZM15.0859 7.94121L15.0848 6.7508H16.6724V7.94232L15.0859 7.94121ZM12.7044 7.94121L12.7033 6.7508H14.291V7.94232L12.7044 7.94121ZM10.323 7.94121L10.3219 6.7508H11.9095V7.94232L10.323 7.94121ZM7.94157 7.94121L7.93933 6.7508H9.52697V7.94232L7.94157 7.94121ZM5.95647 4.76542H21.04V5.95695L5.95418 5.95583L5.95647 4.76542ZM7.14776 6.75091V7.94244L5.95424 7.94132V6.75091L7.14776 6.75091ZM5.59585 9.03345L5.7823 8.73529H21.2188C22.2281 10.5756 24.1061 11.7739 26.2006 11.9122V12.0753L23.3301 13.5002H3.66439L0.793914 12.063V11.9122C2.7656 11.7883 4.55529 10.7151 5.59366 9.03347L5.59585 9.03345ZM2.38154 23.0291H4.76298V24.617L2.38154 24.6181V23.0291ZM7.54199 23.0291V24.617L5.55801 24.6181V23.0291H7.54199ZM10.3209 23.0291V24.617L8.33694 24.6181V23.0291H10.3209ZM21.4367 23.0291V24.617L19.4516 24.6181V23.0291H21.4367ZM18.6578 24.617L16.6727 24.6181V23.0291H18.6578V24.617ZM15.8788 24.617L13.8949 24.6181V18.2651H15.8799L15.8788 24.617ZM16.2763 17.4701L10.3221 17.4712V16.6762H16.6727V17.4701L16.2763 17.4701ZM13.1011 18.2641L13.1 24.6182H11.116V18.2652L13.1011 18.2641ZM24.613 24.6182H22.2305V23.0292H24.6119L24.613 24.6182ZM16.6727 22.2352V18.2653H17.0702C17.1751 18.2653 17.2767 18.2228 17.3504 18.1491C17.4252 18.0743 17.4676 17.9727 17.4676 17.8677V16.2798C17.4676 16.1748 17.4252 16.0732 17.3504 15.9983C17.2767 15.9246 17.1751 15.8822 17.0702 15.8822H9.92472C9.70589 15.8822 9.52726 16.0609 9.52726 16.2797V17.8677C9.52726 17.9727 9.56969 18.0743 9.64449 18.1491C9.71818 18.2228 9.81978 18.2652 9.92473 18.2652H10.3222V22.2352H3.97044V14.2944H23.0242V22.2352L16.6727 22.2352ZM14.4063 21.1598C14.4811 21.0839 14.5827 21.0415 14.6887 21.0415C14.7937 21.0415 14.8953 21.0839 14.9701 21.1598C15.0829 21.2737 15.1163 21.4435 15.0549 21.592C14.9935 21.7394 14.8484 21.8365 14.6888 21.8365C14.528 21.8365 14.384 21.7394 14.3214 21.592C14.26 21.4435 14.2935 21.2737 14.4063 21.1598ZM12.5965 21.1598C12.7293 21.2938 12.7505 21.5027 12.6445 21.6601C12.5395 21.8176 12.3386 21.879 12.1633 21.8064C12.0539 21.7617 11.9701 21.669 11.9355 21.5551C11.9009 21.4412 11.9188 21.3173 11.9846 21.219C12.0516 21.1196 12.1577 21.056 12.2771 21.0448C12.3955 21.0325 12.5127 21.075 12.5965 21.1598Z"
                      fill="black"
                    />
                  </svg>
                </div>
                <div className="content">
                  <h4>Buddha Temple</h4>
                  <p>
                    Lorem ipsum dolor sitamet const adipiscng Duis eletum
                    sollicitudin is yaugue euismods
                  </p>
                  <a
                    href="services-details.html"
                    className="fw-bold font-extra-small"
                  >
                    More Details
                    <i className="bi bi-arrow-right" />
                  </a>
                </div>
              </div>
              {/* repetable */}
              <div className="box-item">
                <div className="icon mb-3">
                  <svg
                    width={30}
                    height={27}
                    viewBox="0 0 30 27"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M12.1673 18.7617C12.4211 18.6029 12.755 18.6712 12.9271 18.9145C13.3249 19.4755 13.9704 19.8317 14.6917 19.8317H15.4827C16.0941 19.8317 16.6388 19.526 16.9623 19.0555C17.0469 18.9309 17.1775 18.8463 17.3244 18.8196C17.4713 18.7928 17.6242 18.824 17.7474 18.9086L17.8587 18.9858L23.5396 20.4327C24.9569 20.8023 25.932 22.086 25.932 23.5196V23.7882C25.932 23.806 25.9305 23.8253 25.929 23.8446C25.7658 25.4711 24.3915 26.7104 22.7531 26.7104H6.95822C5.30792 26.7104 3.92181 25.4593 3.75856 23.8194C3.64132 22.6336 4.20231 21.5013 5.14319 20.8542C5.14764 20.8513 5.15209 20.8498 5.15654 20.8468C5.43258 20.6672 5.7561 20.501 6.12268 20.409L12.1406 18.778L12.1673 18.7617ZM17.5766 20.078C17.0439 20.6242 16.2974 20.9596 15.4826 20.9596H14.6916C13.7463 20.9596 12.8885 20.5589 12.2845 19.9089L6.41354 21.4998L6.40315 21.5027C6.19093 21.5547 5.98315 21.6556 5.77689 21.7892C5.16544 22.2121 4.8063 22.9497 4.88198 23.7081C4.98735 24.7677 5.8852 25.5825 6.95818 25.5825H22.753C23.8052 25.5825 24.6853 24.7929 24.8025 23.7585V23.5196C24.8025 22.5965 24.1733 21.7654 23.2561 21.525H23.2547L17.5766 20.078Z"
                      fill="black"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M20.5421 22.1614C20.6148 22.4642 20.4278 22.7684 20.125 22.8412L14.3252 24.2273C14.1604 24.2659 14.0209 24.3653 13.9259 24.5003L13.9245 24.5018C13.8413 24.6205 13.7968 24.7511 13.7968 24.8936C13.7968 25.275 14.104 25.5822 14.4854 25.5822C14.7971 25.5822 15.0494 25.8345 15.0494 26.1462C15.0494 26.4578 14.7971 26.7101 14.4854 26.7101C13.4807 26.7101 12.6689 25.8983 12.6689 24.8936C12.6689 24.5019 12.7951 24.1472 13.0029 23.8518C13.2477 23.5016 13.6188 23.2359 14.061 23.1291L19.8624 21.743C20.1652 21.6703 20.4694 21.8572 20.5421 22.1614Z"
                      fill="black"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M8.5778 21.8424C8.71285 21.5604 9.04974 21.4417 9.33023 21.5767L13.732 23.6797C14.0125 23.8147 14.1327 24.1516 13.9977 24.4321C13.8641 24.7141 13.5272 24.8328 13.2452 24.6978L8.84345 22.5948C8.56296 22.4598 8.44422 22.1229 8.5778 21.8424Z"
                      fill="black"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M16.3198 6.33987C16.5795 6.17366 16.9238 6.24489 17.0945 6.50164L17.1672 6.60997C17.2325 6.70792 17.2651 6.82219 17.2622 6.93944C17.2577 7.0923 17.2844 7.35051 17.3735 7.58204C17.4625 7.81356 17.5842 7.94712 17.7281 8.00204H17.7296C17.7504 8.01095 17.7727 8.01985 17.7964 8.02875C18.2535 8.20536 19.1662 8.55855 20.0121 9.22638C20.9516 9.95211 21.8316 11.0622 22.0364 12.7273V12.7317C22.1699 13.8908 22.302 14.8183 22.4104 15.4906V15.4951C22.4282 15.6019 22.4623 15.7221 22.5098 15.8631C22.6909 16.3929 23.0426 16.8678 23.5071 17.2017L23.5115 17.2047L25.4913 18.6487L25.4928 18.6502L25.9261 18.9633L25.9276 18.9648C26.0864 19.0776 26.2749 19.1384 26.4737 19.1384H26.9724C27.8183 19.1384 28.5084 19.8285 28.5084 20.6745C28.5084 21.5293 27.8227 22.2238 26.9724 22.2238H25.8534C25.3681 22.2238 24.8932 22.0843 24.4836 21.8409L24.4791 21.838L20.7096 19.5525C19.8518 19.0316 19.2196 18.2302 18.899 17.2819V17.2789L18.6779 16.6215L18.3974 18.4543C18.3232 18.9188 18.1436 19.3388 17.8899 19.6964C17.3616 20.4637 16.4741 20.9594 15.4827 20.9594H14.6917C13.5921 20.9594 12.6096 20.4177 12.01 19.5718C11.7073 19.1607 11.5203 18.6754 11.4357 18.1664V18.159L11.1953 16.6111L10.9727 17.2774C10.661 18.2346 10.014 19.0346 9.16063 19.5525L5.67158 21.6673L5.39406 21.8365L5.39257 21.838C4.98891 22.0858 4.50956 22.2238 4.01684 22.2238H2.90971C2.05192 22.2238 1.36035 21.5337 1.36035 20.6745C1.36035 19.8078 2.06085 19.1384 2.90971 19.1384H3.40836C3.59387 19.1384 3.78234 19.0791 3.94412 18.9633L3.94561 18.9618L4.23352 18.7585L6.3602 17.2032C6.84399 16.8529 7.20165 16.3795 7.36787 15.8393C7.37084 15.8304 7.3738 15.8215 7.37677 15.8126C7.41239 15.7176 7.44059 15.6063 7.45988 15.4891C7.56822 14.8168 7.7003 13.8893 7.84573 12.7287C8.03866 11.034 8.96027 9.91049 9.91007 9.19962C10.7204 8.56294 11.5826 8.2231 12.0338 8.045C12.0709 8.03016 12.105 8.0168 12.1362 8.00492L12.1421 8.00196C12.2875 7.94556 12.4122 7.81051 12.5042 7.57751C12.5962 7.34451 12.6244 7.08775 12.62 6.93935C12.617 6.82211 12.6496 6.70784 12.7149 6.60989L12.7387 6.57427C12.9034 6.32643 13.2314 6.24926 13.4896 6.39767C13.8903 6.62919 14.3652 6.75978 14.8624 6.75978C15.3997 6.75978 15.9013 6.6085 16.3198 6.33987ZM16.2144 7.64733C15.7914 7.80465 15.3343 7.88924 14.8624 7.88924C14.4439 7.88924 14.0343 7.82246 13.6514 7.69779C13.6247 7.79574 13.592 7.89517 13.5534 7.99312C13.3961 8.38938 13.0964 8.84202 12.5517 9.05424C12.522 9.06611 12.4894 9.07799 12.4552 9.09134C12.0041 9.27092 11.2784 9.55736 10.6031 10.0901C10.6002 10.0916 10.5987 10.0946 10.5957 10.0961C10.5942 10.0975 10.5927 10.0975 10.5913 10.099C9.81804 10.6763 9.11461 11.5445 8.96621 12.8594V12.8668C8.81929 14.0377 8.68424 14.9816 8.57444 15.6702L8.57295 15.6732C8.54476 15.8438 8.50172 16.019 8.44236 16.1852C8.19452 16.9777 7.67807 17.6411 7.02358 18.116C7.02358 18.116 7.02209 18.116 7.02209 18.1174L4.89689 19.6712L4.88947 19.6772L4.60007 19.882H4.59859C4.24983 20.1313 3.83134 20.2664 3.40837 20.2664H2.90972C2.66485 20.2664 2.48972 20.4489 2.48972 20.6745C2.48972 20.9104 2.67523 21.0959 2.90972 21.0959H4.01685C4.30031 21.0959 4.57488 21.0158 4.80341 20.8748L4.80489 20.8733L5.08538 20.7042L8.57591 18.5879C9.20513 18.2065 9.67559 17.6203 9.89971 16.9272L9.90119 16.9213L10.8614 14.0526C10.9445 13.8047 11.1849 13.6474 11.4446 13.6682C11.7043 13.6904 11.9151 13.8878 11.9552 14.1446L12.5503 17.9837C12.6111 18.3458 12.7387 18.6589 12.9198 18.9038C12.9228 18.9083 12.9257 18.9112 12.9272 18.9142C13.325 19.4752 13.9705 19.8314 14.6918 19.8314H15.4828C16.0942 19.8314 16.6389 19.5256 16.9624 19.0552L16.9668 19.0478C17.1256 18.8237 17.2369 18.564 17.2829 18.2776C17.2844 18.2761 17.2844 18.2761 17.2844 18.2746L17.9152 14.146C17.9552 13.8877 18.166 13.6904 18.4257 13.6681C18.6839 13.6458 18.9258 13.8046 19.009 14.0525L19.9676 16.9197H19.9691C20.2066 17.6247 20.6696 18.2094 21.2944 18.5878L25.061 20.8718C25.3074 21.0172 25.5849 21.0959 25.8535 21.0959H26.9725C27.1906 21.0959 27.3806 20.9148 27.3806 20.6744C27.3806 20.4518 27.1951 20.2663 26.9725 20.2663H26.4738C26.0405 20.2663 25.622 20.1327 25.2702 19.8819L25.2673 19.8804L24.8295 19.5643L24.828 19.5628L22.8497 18.1188C22.8497 18.1173 22.8482 18.1173 22.8482 18.1173C22.1952 17.6484 21.6981 16.9805 21.4414 16.2236L21.4399 16.2207C21.3894 16.0708 21.3286 15.8764 21.2959 15.6686C21.1846 14.9785 21.051 14.0361 20.916 12.8623C20.7557 11.5637 20.082 10.7059 19.3206 10.1182L19.3147 10.1137C18.6053 9.55274 17.8291 9.25151 17.375 9.07488C17.3572 9.06894 17.3379 9.06152 17.3216 9.0541C16.7725 8.84188 16.4742 8.38628 16.3213 7.98854C16.2768 7.87426 16.2411 7.76013 16.2144 7.64733Z"
                      fill="black"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M5.03788 7.71581C5.11654 7.48281 5.33915 7.327 5.5855 7.33293C7.98079 7.38487 9.70841 8.36734 10.5009 9.04998C10.5351 9.07966 10.5662 9.11231 10.5915 9.14942L10.7131 9.32008C10.8912 9.56941 10.8378 9.91519 10.5915 10.0992C9.81824 10.6765 9.11481 11.5447 8.96642 12.8596V12.867C8.81949 14.0379 8.68444 14.9818 8.57464 15.6704L8.57316 15.6734C8.54496 15.8485 8.50044 16.0281 8.43811 16.1987C8.33867 16.4703 8.05078 16.6232 7.77028 16.5534L7.67381 16.5297C7.57438 16.5045 7.48385 16.454 7.41113 16.3813C6.48359 15.4537 5.83507 14.4445 5.41803 13.4547C4.42221 11.1247 4.64611 8.87761 5.03788 7.71581ZM5.99361 8.48158C5.75765 9.50855 5.69235 11.2271 6.45666 13.0125L6.45815 13.0155C6.71489 13.6255 7.07552 14.2488 7.55783 14.8542C7.6439 14.271 7.74185 13.5602 7.84574 12.729C8.00305 11.3414 8.65011 10.3367 9.40106 9.62732C8.7169 9.15834 7.54449 8.60179 5.99361 8.48158Z"
                      fill="black"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M14.8627 1.12943C13.3014 1.12943 12.0459 2.38348 12.0459 3.94473C12.0459 4.9984 12.6232 5.91853 13.4825 6.39343L13.4899 6.39789C13.8906 6.6294 14.3655 6.76 14.8627 6.76C15.3999 6.76 15.9015 6.60863 16.32 6.34C16.3245 6.33703 16.3304 6.33406 16.3349 6.33109C17.1422 5.84582 17.678 4.95684 17.678 3.94473C17.678 2.38348 16.4239 1.12943 14.8627 1.12943ZM10.918 3.94473C10.918 1.76018 12.6781 0 14.8627 0C17.0458 0 18.8074 1.7601 18.8074 3.94473C18.8074 5.36054 18.0579 6.6101 16.9227 7.29427C16.3216 7.67863 15.6108 7.88938 14.8628 7.88938C14.1697 7.88938 13.5019 7.70535 12.932 7.37884C11.7255 6.70953 10.918 5.4184 10.918 3.94473Z"
                      fill="black"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M1.28203 15.8663C1.86376 16.7122 3.04361 17.9811 4.55885 18.4456C4.5826 18.453 4.60486 18.4619 4.62712 18.4708L6.36051 17.2035C6.73598 16.9319 7.03427 16.5861 7.22871 16.1928C6.5015 15.427 5.95833 14.6108 5.57248 13.799C4.67757 13.8539 2.92488 14.2991 1.28203 15.8663ZM8.1058 15.4775C7.33855 14.685 6.80426 13.8361 6.4585 13.0154C6.37539 12.818 6.1884 12.6844 5.97471 12.6711C4.88836 12.5999 2.35208 13.0851 0.154306 15.3988C-0.0163623 15.5799 -0.0490129 15.8514 0.0741653 16.0681C0.580221 16.9526 2.00345 18.7617 4.04701 19.4651L4.10934 19.5512C4.29484 19.8005 4.64658 19.8555 4.89737 19.6714L7.02258 18.1176C7.02258 18.1161 7.02406 18.1161 7.02406 18.1161C7.683 17.6398 8.20094 16.9705 8.44728 16.1735C8.49329 16.0251 8.47548 15.8648 8.39979 15.7297C8.33449 15.6125 8.23046 15.525 8.1058 15.4775Z"
                      fill="black"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M19.0894 9.67162C19.0894 9.35997 19.3416 9.10767 19.6533 9.10767H19.6652C19.9768 9.10767 20.2291 9.35996 20.2291 9.67162C20.2291 9.98329 19.9768 10.2356 19.6652 10.2356H19.6533C19.3417 10.2356 19.0894 9.98329 19.0894 9.67162Z"
                      fill="black"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M24.4316 13.7987C24.0487 14.6061 23.5218 15.406 22.7991 16.1732C22.7946 16.1777 22.7917 16.1821 22.7872 16.1866L22.6937 16.2801C22.8896 16.6407 23.1686 16.9583 23.507 17.2017L23.5099 17.2032L25.2864 18.4884C26.1471 18.2643 26.9144 17.7686 27.5451 17.2032C28.0557 16.7446 28.4563 16.2564 28.7235 15.8675C27.0792 14.2989 25.3265 13.8536 24.4316 13.7987ZM21.9829 15.3941C22.7101 14.6194 23.2072 13.8151 23.5471 13.0137C23.6287 12.8178 23.8157 12.6842 24.0294 12.6708C25.1157 12.5996 27.652 13.0849 29.8498 15.3986C30.0204 15.5781 30.0531 15.8497 29.9314 16.0649C29.6405 16.5784 29.0766 17.3442 28.2989 18.0432C27.5213 18.7407 26.4973 19.4026 25.2848 19.6475C25.2477 19.6549 25.2106 19.6593 25.172 19.6593H25.1601C25.0414 19.6593 24.9256 19.6207 24.8292 19.551L22.8494 18.1189C22.8494 18.1174 22.8494 18.1174 22.8479 18.1174C22.1949 17.6484 21.6978 16.9806 21.4411 16.2237C21.3921 16.0798 21.4025 15.9224 21.4707 15.7874C21.5405 15.6524 21.6607 15.55 21.8046 15.504L21.9041 15.4728L21.9829 15.3941Z"
                      fill="black"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M24.4195 7.33271C24.6659 7.32677 24.887 7.4826 24.9657 7.71559C25.3574 8.87762 25.5816 11.1245 24.5857 13.4543C24.1955 14.3774 23.6241 15.2975 22.7989 16.1731C22.7945 16.1776 22.7915 16.182 22.7871 16.1865L22.6045 16.369C22.5407 16.4328 22.462 16.4803 22.376 16.507L22.1445 16.5797C21.8506 16.6732 21.5375 16.513 21.4395 16.2206C21.3891 16.0707 21.3282 15.8763 21.2956 15.6685C21.1843 14.9784 21.0507 14.036 20.9156 12.8622C20.7554 11.5636 20.0816 10.7058 19.3203 10.1181C19.1926 10.0202 19.1125 9.87175 19.1021 9.70999C19.0902 9.54972 19.1481 9.3924 19.2609 9.27666C19.9139 8.61031 21.7527 7.38464 24.4195 7.33271ZM22.3329 14.998C22.8746 14.3465 23.2649 13.6801 23.5469 13.0138V13.0123C24.3112 11.227 24.2459 9.5084 24.0084 8.48136C22.4012 8.60305 21.2035 9.20408 20.5327 9.68047C21.2599 10.3913 21.8699 11.3767 22.0361 12.7273V12.7317C22.14 13.6296 22.2424 14.3896 22.3329 14.998Z"
                      fill="black"
                    />
                  </svg>
                </div>
                <div className="content">
                  <h4>Daily Programme</h4>
                  <p>
                    Lorem ipsum dolor sitamet const adipiscng Duis eletum
                    sollicitudin is yaugue euismods
                  </p>
                  <a
                    href="services-details.html"
                    className="fw-bold font-extra-small"
                  >
                    More Details
                    <i className="bi bi-arrow-right" />
                  </a>
                </div>
              </div>
              {/* repetable */}
              <div className="box-item">
                <div className="icon mb-3">
                  <svg
                    width={27}
                    height={27}
                    viewBox="0 0 27 27"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M23.7505 22.5442L19.4847 20.7539C19.4847 20.6989 19.4947 20.6489 19.4947 20.5939V19.5187C20.73 18.8635 21.8652 18.0384 22.8503 17.0532C24.0156 15.888 26.7461 12.6524 26.9961 7.7165C27.0011 7.57648 26.9511 7.43645 26.8511 7.33643C26.7511 7.23642 26.611 7.18641 26.471 7.19141C25.5308 7.24142 23.7555 7.45645 21.7601 8.27661C21.7601 6.64131 21.4801 5.04101 20.93 3.50573C20.88 3.37071 20.78 3.26569 20.6499 3.21068C20.5199 3.15567 20.3699 3.16067 20.2449 3.22068C19.4197 3.61575 17.9044 4.47091 16.3992 5.95618C15.569 4.01582 14.4888 2.65558 13.8687 1.97045C13.7737 1.86543 13.6387 1.80542 13.4986 1.80542C13.3586 1.80542 13.2236 1.86543 13.1286 1.97045C11.9484 3.27569 11.1482 4.65094 10.6031 5.95618C9.09783 4.47091 7.57755 3.61575 6.7524 3.22068C6.62238 3.16067 6.47735 3.15567 6.34732 3.21068C6.2173 3.26569 6.11228 3.37071 6.06727 3.50573C5.51717 5.04101 5.23712 6.64131 5.23712 8.27661C3.24176 7.45645 1.46643 7.24142 0.52626 7.19141C0.386234 7.18641 0.246208 7.23642 0.14619 7.33643C0.0461715 7.43645 -0.0088385 7.57648 0.00116333 7.7165C0.251209 12.6524 2.98671 15.888 4.14692 17.0532C5.1321 18.0384 6.26231 18.8635 7.50254 19.5187V20.5939C7.50254 20.6489 7.51254 20.6989 7.51254 20.7539L3.24676 22.5442C2.99171 22.6492 2.87169 22.9443 2.97671 23.1993C3.05672 23.3894 3.24176 23.5044 3.43679 23.5044C3.5018 23.5044 3.56682 23.4894 3.63183 23.4644L7.70257 21.7541C7.79759 22.0291 7.92261 22.2892 8.08264 22.5342L8.57773 23.2794C8.73276 23.5094 9.03782 23.5694 9.27286 23.4194C9.5029 23.2644 9.56291 22.9543 9.41289 22.7243L8.9178 21.9791C8.64275 21.569 8.49772 21.089 8.49772 20.5939V18.9986C8.49772 18.6685 8.56273 18.3434 8.68775 18.0384L12.3984 9.12176C12.4484 9.00674 12.5585 8.93173 12.6885 8.93173C12.8585 8.93173 12.9985 9.07175 12.9985 9.24178V13.0575C12.8835 13.0275 12.7685 13.0025 12.6435 13.0025C12.0434 13.0025 11.5033 13.4075 11.3382 13.9877L10.5131 16.8682C10.4981 16.9132 10.4931 16.9582 10.4931 17.0032V18.5035C10.4931 18.7785 10.7181 19.0036 10.9932 19.0036C11.2682 19.0036 11.4933 18.7785 11.4933 18.5035V17.0732L12.2984 14.2627C12.3434 14.1127 12.4834 14.0027 12.6385 14.0027C12.8335 14.0027 12.9935 14.1627 12.9935 14.3577V23.4994L8.73276 26.0749C8.49772 26.2199 8.4227 26.5249 8.56273 26.76C8.65775 26.915 8.82278 27 8.99281 27C9.08283 27 9.16784 26.975 9.25286 26.93L13.4936 24.3646L17.7344 26.93C17.8144 26.98 17.9044 27 17.9945 27C18.1645 27 18.3295 26.915 18.4245 26.76C18.5696 26.5249 18.4895 26.2149 18.2545 26.0749L13.9937 23.4994V14.3577C13.9937 14.1627 14.1538 14.0027 14.3488 14.0027C14.5088 14.0027 14.6488 14.1077 14.6889 14.2627L15.494 17.0732V18.5035C15.494 18.7785 15.719 19.0036 15.9941 19.0036C16.2691 19.0036 16.4942 18.7785 16.4942 18.5035V17.0032C16.4942 16.9582 16.4892 16.9082 16.4742 16.8682L15.649 13.9877C15.484 13.4075 14.9489 13.0025 14.3438 13.0025C14.2188 13.0025 14.1037 13.0225 13.9887 13.0575V9.24178C13.9887 9.07175 14.1288 8.93173 14.2988 8.93173C14.4238 8.93173 14.5388 9.00674 14.5888 9.12176L16.4242 13.5376C16.4242 13.5376 16.4292 13.5526 16.4342 13.5626L18.2945 18.0384C18.4195 18.3434 18.4845 18.6685 18.4845 18.9986V20.5939C18.4845 21.089 18.3395 21.569 18.0645 21.9791L17.5694 22.7243C17.4144 22.9543 17.4794 23.2644 17.7094 23.4194C17.9394 23.5744 18.2495 23.5094 18.4045 23.2794L18.8996 22.5342C19.0647 22.2892 19.1847 22.0241 19.2797 21.7541L23.3504 23.4644C23.4154 23.4894 23.4805 23.5044 23.5455 23.5044C23.7405 23.5044 23.9255 23.3894 24.0056 23.1993C24.1106 22.9443 23.9906 22.6492 23.7355 22.5442H23.7505ZM20.1699 4.38589C20.6099 5.79115 20.795 7.25142 20.745 8.74169C19.6698 9.28179 18.5696 10.0119 17.5144 10.9871C17.4594 9.49683 17.1793 8.16158 16.7842 6.99137C18.0145 5.69113 19.2947 4.85598 20.1699 4.38589ZM6.82241 4.38589C7.69757 4.86098 8.97781 5.69613 10.208 6.99637C9.67293 8.60667 9.5079 10.0319 9.4679 10.9871C8.4177 10.0119 7.3175 9.28179 6.24231 8.74169C6.1923 7.25642 6.37733 5.79115 6.81741 4.38589H6.82241ZM7.76258 17.6533C7.66257 17.8984 7.59255 18.1484 7.54755 18.4035C6.56236 17.8334 5.6522 17.1482 4.84705 16.3431C3.81186 15.3079 1.43643 12.5024 1.03135 8.2366C2.82168 8.42163 6.25231 9.16177 9.13784 12.0473C9.22285 12.1323 9.34787 12.2623 9.4879 12.4174C9.5079 12.7124 9.53791 13.0025 9.57792 13.2925L7.76258 17.6583V17.6533ZM14.3088 7.92654C13.9987 7.92654 13.7187 8.03656 13.4986 8.21659C13.2736 8.03656 12.9935 7.92654 12.6885 7.92654C12.1584 7.92654 11.6783 8.2416 11.4783 8.73669L10.4731 11.1571C10.5231 9.51683 10.9632 6.14121 13.5036 3.07565C14.1738 3.8908 15.1089 5.25105 15.764 7.07138C15.764 7.07138 15.764 7.07639 15.764 7.08139C16.1841 8.2516 16.4842 9.61185 16.5242 11.1471L15.524 8.73669C15.319 8.2466 14.8439 7.92654 14.3138 7.92654H14.3088ZM17.4094 13.2725C17.4494 12.9825 17.4794 12.6974 17.4994 12.4124C17.6394 12.2573 17.7644 12.1273 17.8494 12.0423C20.735 9.15677 24.1656 8.41663 25.9559 8.2316C25.5508 12.4974 23.1804 15.3029 22.1402 16.3381C21.3351 17.1432 20.4249 17.8284 19.4397 18.3985C19.3947 18.1434 19.3247 17.8884 19.2247 17.6483L17.4043 13.2725H17.4094Z"
                      fill="black"
                    />
                    <path
                      d="M2.49188 5.00085C3.04427 5.00085 3.49207 4.55306 3.49207 4.00067C3.49207 3.44829 3.04427 3.00049 2.49188 3.00049C1.9395 3.00049 1.4917 3.44829 1.4917 4.00067C1.4917 4.55306 1.9395 5.00085 2.49188 5.00085Z"
                      fill="black"
                    />
                    <path
                      d="M9.49286 2.00037C10.0452 2.00037 10.493 1.55257 10.493 1.00018C10.493 0.447797 10.0452 0 9.49286 0C8.94047 0 8.49268 0.447797 8.49268 1.00018C8.49268 1.55257 8.94047 2.00037 9.49286 2.00037Z"
                      fill="black"
                    />
                    <path
                      d="M24.4958 5.00085C25.0482 5.00085 25.496 4.55306 25.496 4.00067C25.496 3.44829 25.0482 3.00049 24.4958 3.00049C23.9434 3.00049 23.4956 3.44829 23.4956 4.00067C23.4956 4.55306 23.9434 5.00085 24.4958 5.00085Z"
                      fill="black"
                    />
                    <path
                      d="M17.4948 2.00037C18.0472 2.00037 18.495 1.55257 18.495 1.00018C18.495 0.447797 18.0472 0 17.4948 0C16.9424 0 16.4946 0.447797 16.4946 1.00018C16.4946 1.55257 16.9424 2.00037 17.4948 2.00037Z"
                      fill="black"
                    />
                  </svg>
                </div>
                <div className="content">
                  <h4>Saturday Prayers</h4>
                  <p>
                    Lorem ipsum dolor sitamet const adipiscng Duis eletum
                    sollicitudin is yaugue euismods
                  </p>
                  <a
                    href="services-details.html"
                    className="fw-bold font-extra-small"
                  >
                    More Details
                    <i className="bi bi-arrow-right" />
                  </a>
                </div>
              </div>
              {/* repetable */}
            </div>
          </div>
          <div className="col-12 col-lg-6">
            <div className="picture-con">
              <div className="image">
                <img src="assets/images/services/pic05.jpg" alt="img" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* call to action  */}
    <div
      className="cta set-bg"
      data-setbg="assets/images/section/video-sec-bg.jpg "
    >
      <div className="container">
        <div className="row">
          <div className="col-md-12 col-sm-12 col-xs-12 text-center">
            <p className="mb-3 theme-text-primary fs-5 fw-bold">
              Live Events View
            </p>
            <h6 className="mb-5 display-6 head theme-text-white">
              Access Full Festivel Events
            </h6>
            <a
              href="https://www.youtube.com/watch?v=pBFQdxA-apI"
              className="video-btn custom-btn-secondary wave-button video_model mb-0"
            >
              <i className="bi bi-play" />
            </a>
          </div>
        </div>
      </div>
    </div>
    {/* team section */}
    <section className="our-team py-8">
      <div className="container">
        <div className="row">
          <div
            className="col-12 text-center animate__animated wow animate__fadeIn"
            data-wow-delay="0.4s"
          >
            <p className="mb-3 theme-text-primary fs-5 fw-bold">
              Spritual Leaders
            </p>
            <h2 className="mb-0 display-6 head">Specialists Team</h2>
          </div>
        </div>
        <div className="row mt-5">
          <div
            className="col-12 col-md-6 col-lg-3 mb-5 mb-lg-0 animate__animated wow animate__fadeInLeft"
            data-wow-delay="0.5s"
          >
            <div className="team-card">
              <figure className="mb-0 overflow-hidden">
                <img
                  src="assets/images/team/team01.png"
                  className="img-fluid"
                  alt="Qotes icon"
                />
              </figure>
              <div className="text-center p-3 pb-0">
                <p className="fs-5 mb-3 fw-bold">Chandaka Siddha</p>
                <p className="mb-0 theme-text-accent-two">Protestant Clergy</p>
              </div>
            </div>
          </div>
          {/* repetable */}
          <div
            className="ccol-12 col-md-6 col-lg-3 mb-5 mb-lg-0 animate__animated wow animate__fadeInLeft"
            data-wow-delay="1.6s"
          >
            <div className="team-card">
              <figure className="mb-0 overflow-hidden">
                <img
                  src="assets/images/team/team02.png"
                  className="img-fluid"
                  alt="Qotes icon"
                />
              </figure>
              <div className="text-center p-3 pb-0">
                <p className="fs-5 mb-3 fw-bold">Aśvajit Doe</p>
                <p className="mb-0 theme-text-accent-two">Senior Postor</p>
              </div>
            </div>
          </div>
          {/* repetable */}
          <div
            className="col-12 col-md-6 col-lg-3 mb-5 mb-lg-0 animate__animated wow animate__fadeInLeft"
            data-wow-delay="1.7s"
          >
            <div className="team-card">
              <figure className="mb-0 overflow-hidden">
                <img
                  src="assets/images/team/team03.png"
                  className="img-fluid"
                  alt="Qotes icon"
                />
              </figure>
              <div className="text-center p-3 pb-0">
                <p className="fs-5 mb-3 fw-bold">Ananda Doe</p>
                <p className="mb-0 theme-text-accent-two">Bhikkhu</p>
              </div>
            </div>
          </div>
          {/* repetable */}
          <div
            className="col-12 col-md-6 col-lg-3 mb-5 mb-lg-0 animate__animated wow animate__fadeInLeft"
            data-wow-delay="1.8s"
          >
            <div className="team-card">
              <figure className="mb-0 overflow-hidden">
                <img
                  src="assets/images/team/team04.png"
                  className="img-fluid"
                  alt="Qotes icon"
                />
              </figure>
              <div className="text-center p-3 pb-0">
                <p className="fs-5 mb-3 fw-bold">Angulimala</p>
                <p className="mb-0 theme-text-accent-two">Buddhism Speaker</p>
              </div>
            </div>
          </div>
          {/* repetable */}
        </div>
      </div>
    </section>
    {/* best counts section */}
    <section className="counts py-8">
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-12 mb-5 mb-lg-0 text-center">
            <h2 className="display-2 mb-3 head theme-text-white">
              Experience Peace of Life
            </h2>
          </div>
        </div>
        <div className="mb-0 p-4 pb-0">
          <div className="row mt-0 mt-lg-5" id="counter">
            <div className="col-12 col-sm-6 col-lg-6 col-xl-3 mb-5 mb-xl-0">
              <div className="list align-items-center">
                <div className="con">
                  <span
                    className="fs-1 font-black mb-2 counter-value"
                    data-count={1969}
                  >
                    0
                  </span>
                  <span className="fs-1 font-black ms-1">+</span>
                  <p className="mb-0 theme-text-primary fw-bold">Vast Audience</p>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-lg-6 col-xl-3 mb-5 mb-xl-0">
              <div className="list align-items-center">
                <div className="con">
                  <span
                    className="fs-1 font-black mb-2 counter-value"
                    data-count={999}
                  >
                    0
                  </span>
                  <span className="fs-1 font-black ms-1">+</span>
                  <p className="mb-0 theme-text-primary fw-bold">
                    Qualified Prechers
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-lg-6 col-xl-3 mb-5 mb-xl-0">
              <div className="list align-items-center">
                <div className="con">
                  <span
                    className="fs-1 font-black mb-2 counter-value"
                    data-count={389}
                  >
                    0
                  </span>
                  <span className="fs-1 font-black ms-1">+</span>
                  <p className="mb-0 theme-text-primary fw-bold">
                    Celebrate Events
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-lg-6 col-xl-3 mb-5 mb-xl-0">
              <div className="list align-items-center">
                <div className="con">
                  <span
                    className="fs-1 font-black mb-2 counter-value"
                    data-count={2599}
                  >
                    0
                  </span>
                  <span className="fs-1 font-black ms-1">+</span>
                  <p className="mb-0 theme-text-primary fw-bold">
                    Champion of Life
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <Footer/>
  </>
  
    
  )
}

export default Home