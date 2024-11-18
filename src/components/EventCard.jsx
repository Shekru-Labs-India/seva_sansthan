import React from 'react';
import background from '../assets/images/avatar/background-2.png'

const EventCard = () => {
  return (
<section className="events pt-0 pb-4">
      <div className="container">
        <div className="row my-3">
          <div className="col-12">
            <div className="row mt-4 mt-lg-2 align-items-center position-relative ">
              <div className="col box-wrap border border-warning rounded-4 shadow-lg">
                <div className="row">
                  <div className="col-12 col-lg-4 mb-3 mb-lg-0">
                    <div className="ev-card align-items-start text-center text-lg-start p-3">
                      <h3 className="fs-3 fs-lg-2 fw-bold mb-2 mb-lg-3">Buddha Purnima</h3>
                      <p className="small theme-text-accent-one mb-0">
                        The birth of Gautama Buddha is believed to be the ninth avatar
                      </p>
                    </div>
                  </div>
                  <div className="col-12 col-lg-4 mb-3 mb-lg-0">
                    <div className="ev-card text-center p-3">
                      <h3 className="fs-5 fs-lg-4 fw-bold mb-2 mb-lg-3 theme-text-accent-two">
                        Starting Before 1 Week
                      </h3>
                      <p className="fs-6 fw-bold theme-text-primary mb-0">
                        Celebrating
                      </p>
                    </div>
                  </div>
                  <div className="col-12 col-lg-4 d-flex justify-content-center justify-content-lg-end align-items-center">
                    <div className="text-center p-3">
                      <div className="coming-match-date">
                        <h2 className="time fw-bold fs-4 fs-lg-2">July 11, 2025</h2>
                      </div>
                      <div className="group mt-2 mt-lg-3 btn-wrap justify-content-center">
                        <button
                          className="btn-primary custom-btn-primary w-100 w-lg-auto"
                          onClick={() => window.location.href='events-details.html'}
                        >
                          Come &amp; Join
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventCard;