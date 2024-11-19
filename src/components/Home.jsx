import React, { useEffect, useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import hero4 from "../assets/images/hero/hero-bg-4.jpg";
import hero3 from "../assets/images/hero/hero-bg-3.jpg";
import hero2 from "../assets/images/hero/hero-bg-2.jpg";

import background from "../assets/images/avatar/background-1.png";
import team01 from "../assets/images/icons/about01.png";

import team02 from "../assets/images/icons/about02.png";
import team1 from "../assets/images/sansthan/image1 (9).jpeg";
import team2 from "../assets/images/sansthan/image1 (23).jpeg";
import team3 from "../assets/images/sansthan/image1 (24).jpeg";
import team4 from "../assets/images/sansthan/image1 (25).jpeg";
import EventCard from "./EventCard";
import about from "../assets/images/section/about-pic.jpg";
import Meta from "./Meta";


const Home = () => {



  const [counters, setCounters] = useState({
    audience: 0,
    preachers: 0,
    events: 0,
    champions: 0
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          startCounting();
        }
      },
      { threshold: 0.1 }
    );

    const counterSection = document.getElementById('counter');
    if (counterSection) {
      observer.observe(counterSection);
    }

    return () => {
      if (counterSection) {
        observer.unobserve(counterSection);
      }
    };
  }, []);

  const startCounting = () => {
    const duration = 2000; // 2 seconds
    const steps = 50;
    const stepTime = duration / steps;

    const targetValues = {
      audience: 1969,
      preachers: 999,
      events: 389,
      champions: 2599
    };

    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      
      const progress = currentStep / steps;
      setCounters({
        audience: Math.round(targetValues.audience * progress),
        preachers: Math.round(targetValues.preachers * progress),
        events: Math.round(targetValues.events * progress),
        champions: Math.round(targetValues.champions * progress)
      });

      if (currentStep === steps) {
        clearInterval(timer);
      }
    }, stepTime);
  };
  return (
    <>
    <Meta/>
      <Header />

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
                      Enter the realm of limitless possibilities and level up
                      your Religions experience
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
      <section className="about-sec py-3">
        <div className="container">
          <div className="row justify-content-center align-items-center">
            <div className="col-xl-6 col-lg-6 col-md-10">
              <p className="mb-3 theme-text-primary fs-5 fw-bold"></p>
              <h2 className="mb-4 display-6 head text-warning">Who we are</h2>
              <p className="mb-3 text-justify lh-lg">
                ISKCON (International Society for Krishna Consciousness) is a
                Hindu religious organization that was founded in 1966 in New
                York City. It is based on the teachings of the ancient Hindu
                scriptures, the Bhagavad Gita and the Srimad Bhagavatam, and
                focuses on the worship of Lord Krishna. The organization has a
                worldwide presence and operates temples, cultural centers, and
                educational institutions.
                <br />
              </p>
              <div className="d-flex flex-column flex-md-row gap-4 gap-md-5 mt-3 align-items-center align-items-md-start">
                <div className="fact-development d-flex align-items-center justify-content-center justify-content-md-start w-100">
                  <div className="icon me-3">
                    <img src={team01} alt="trophy" />
                  </div>
                  <div className="content">
                    <h5 className="mb-1">Core Values</h5>
                    <span>Academy</span>
                  </div>
                </div>
                <div className="fact-development d-flex align-items-center justify-content-center justify-content-md-start w-100">
                  <div className="icon me-3">
                    <img src={team02} alt="team" />
                  </div>
                  <div className="content">
                    <h5 className="mb-1">Life's Goals</h5>
                    <span>Experts</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 order-0 order-lg-2">
              <div className="about-images">
                <div />

                <img
                  src={about}
                  className=" img-fluid rounded-4 img-thumbnail"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* trending program section */}

      {/* next Events / Events section */}
      <div className="text-center">
        <h1 className="mb-0 display-2 font-black head text-effect my-2">
          Next Events
        </h1>
      </div>
      <EventCard />
      {/* Core services section */}
      <section
        className="py-5"
        style={{
          backgroundImage: `url(${background})`,
          backgroundSize: "cover",

          backgroundRepeat: "no-repeat",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 10,
            left: 0,
            right: 0,
            bottom: 0,
          }}
        ></div>

        <div className="container position-relative">
          <div className="row mb-5">
            <div className="col-12 text-center">
              <p className="text fw-bold mb-2">Our Services</p>
              <h2 className="h3 fw-bold text-warning">Best Buddhism Academy</h2>
            </div>
          </div>

          <div className="row g-4">
            {/* Buddhism Granth Card */}
            <div className="col-lg-3 col-md-6">
              <div className="card h-100 border border-warning rounded-4 shadow-lg">
                <div className="card-body text-center ">
                  <div className="mb-4">
                    <span
                      className="rounded-circle d-inline-flex align-items-center justify-content-center"
                      style={{
                        backgroundColor: "rgba(255, 193, 7, 0.1)",
                        width: "80px",
                        height: "80px",
                      }}
                    >
                      <i
                        className="fas fa-book text-warning"
                        style={{ fontSize: "2.5rem" }}
                      ></i>
                    </span>
                  </div>
                  <h4 className="card-title mb-3 h3 fw-bold text-warning">
                    We Educate
                  </h4>
                  <p className="card-text text-muted mb-4">
                    The organization runs schools and educational institutions
                    that promote Hindu culture and values, as well as a broader
                    education.
                  </p>
                </div>
              </div>
            </div>

            {/* Buddha Temple Card */}
            <div className="col-lg-3 col-md-6">
              <div className="card h-100 border border-warning rounded-4 shadow-lg">
                <div className="card-body text-center ">
                  <div className="mb-4">
                    <span
                      className="rounded-circle d-inline-flex align-items-center justify-content-center"
                      style={{
                        backgroundColor: "rgba(255, 193, 7, 0.1)",
                        width: "80px",
                        height: "80px",
                      }}
                    >
                      <i
                        className="fas fa-building text-warning"
                        style={{ fontSize: "2.5rem" }}
                      ></i>
                    </span>
                  </div>
                  <h4 className="card-title mb-3 h3 fw-bold text-warning">
                    We Help
                  </h4>
                  <p className="card-text text-muted mb-4">
                    ISKCON has helped to build a sense of community among its
                    followers, providing a supportive environment for spiritual
                    growth and development.
                  </p>
                </div>
              </div>
            </div>

            {/* Daily Programme Card */}
            <div className="col-lg-3 col-md-6">
              <div className="card h-100 border border-warning rounded-4 shadow-lg">
                <div className="card-body text-center">
                  <div className="mb-4">
                    <span
                      className="rounded-circle d-inline-flex align-items-center justify-content-center"
                      style={{
                        backgroundColor: "rgba(255, 193, 7, 0.1)",
                        width: "80px",
                        height: "80px",
                      }}
                    >
                      <i
                        className="fas fa-calendar-alt text-warning"
                        style={{ fontSize: "2.5rem" }}
                      ></i>
                    </span>
                  </div>
                  <h4 className="card-title mb-3 h3 fw-bold text-warning">
                    We Feed
                  </h4>
                  <p className="card-text text-muted mb-4">
                    The organization runs various charitable initiatives, such
                    as food for life programs that provide meals to those in
                    need.
                  </p>
                </div>
              </div>
            </div>

            {/* Saturday Prayers Card */}
            <div className="col-lg-3 col-md-6">
              <div className="card h-100 border border-warning rounded-4 shadow-lg">
                <div className="card-body text-center ">
                  <div className="mb-4">
                    <span
                      className="rounded-circle d-inline-flex align-items-center justify-content-center"
                      style={{
                        backgroundColor: "rgba(255, 193, 7, 0.1)",
                        width: "80px",
                        height: "80px",
                      }}
                    >
                      <i
                        className="fas fa-users text-warning"
                        style={{ fontSize: "2.5rem" }}
                      ></i>
                    </span>
                  </div>
                  <h4 className="card-title mb-3 h3 fw-bold text-warning">
                    We Celebrate
                  </h4>
                  <p className="card-text text-muted mb-4">
                    We Celebrate ISKCON holds numerous festivals and
                    celebrations throughout the year, which serve as a means of
                    spreading Krishna Consciousness across the world.
                  </p>
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
                <i className="fas fa-play" />
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
              <div className="team-card border border-warning rounded-4 shadow-lg">
                <figure className="mb-0 overflow-hidden">
                  <img
                    src={team4}
                    className="img-fluid object-fit-cover rounded-4"
                    alt="Qotes icon"
                  />
                </figure>
                <div className="text-center p-3 pb-0">
                  <p className="fs-5 mb-3 fw-bold text-warning">
                    Chandaka Siddha
                  </p>
                </div>
              </div>
            </div>
            {/* repetable */}
            <div
              className="ccol-12 col-md-6 col-lg-3 mb-5 mb-lg-0 animate__animated wow animate__fadeInLeft"
              data-wow-delay="1.6s"
            >
              <div className="team-card border border-warning rounded-4 shadow-lg">
                <figure className="mb-0 overflow-hidden">
                  <img
                    src={team2}
                    className="img-fluid object-fit-cover rounded-4"
                    alt="Qotes icon"
                  />
                </figure>
                <div className="text-center p-3 pb-0">
                  <p className="fs-5 mb-3 fw-bold text-warning">Aśvajit Doe</p>
                </div>
              </div>
            </div>
            {/* repetable */}
            <div
              className="col-12 col-md-6 col-lg-3 mb-5 mb-lg-0 animate__animated wow animate__fadeInLeft"
              data-wow-delay="1.7s"
            >
              <div className="team-card border border-warning rounded-4 shadow-lg">
                <figure className="mb-0 overflow-hidden">
                  <img
                    src={team3}
                    className="img-fluid object-fit-cover rounded-4"
                    alt="Qotes icon"
                  />
                </figure>
                <div className="text-center p-3 pb-0">
                  <p className="fs-5 mb-3 fw-bold text-warning">Ananda Doe</p>
                </div>
              </div>
            </div>
            {/* repetable */}
            <div
              className="col-12 col-md-6 col-lg-3 mb-5 mb-lg-0 animate__animated wow animate__fadeInLeft"
              data-wow-delay="1.8s"
            >
              <div className="team-card border border-warning rounded-4 shadow-lg">
                <figure className="mb-0 overflow-hidden">
                  <img
                    src={team1}
                    className="img-fluid object-fit-cover rounded-4"
                    alt="Qotes icon"
                  />
                </figure>
                <div className="text-center p-3 pb-0">
                  <p className="fs-5 mb-3 fw-bold text-warning">Angulimala</p>
                </div>
              </div>
            </div>
            {/* repetable */}
          </div>
        </div>
      </section>
      {/* best counts section */}
      <section className="counts py-8" style={{ position: "relative" }}>
        {/* Dark overlay */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            zIndex: 1,
          }}
        />

        {/* Existing content - now with higher z-index */}
        <div className="container" style={{ position: "relative", zIndex: 2 }}>
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
                    <span className="fs-1 font-black mb-2">
                      {counters.audience}
                    </span>
                    <span className="fs-1 font-black ms-1">+</span>
                    <p className="mb-0 theme-text-primary fw-bold">
                      Vast Audience
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-6 col-lg-6 col-xl-3 mb-5 mb-xl-0">
                <div className="list align-items-center">
                  <div className="con">
                    <span className="fs-1 font-black mb-2">
                      {counters.preachers}
                    </span>
                    <span className="fs-1 font-black ms-1">+</span>
                    <p className="mb-0 theme-text-primary fw-bold">
                      Qualified Preachers
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-6 col-lg-6 col-xl-3 mb-5 mb-xl-0">
                <div className="list align-items-center">
                  <div className="con">
                    <span className="fs-1 font-black mb-2">
                      {counters.events}
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
                    <span className="fs-1 font-black mb-2">
                      {counters.champions}
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

      <Footer />
    </>
  );
};

export default Home;
