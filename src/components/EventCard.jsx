import React, { useState, useEffect } from "react";

const EventCard = () => {
  const events = [
    {
      title: "Buddha Purnima",
      description: "The birth of Gautama Buddha is believed to be the ninth avatar",
      status: "Starting Before 1 Week",
      action: "Celebrating",
      date: "July 11, 2025",
      gradient: "linear-gradient(45deg, #FF8008, #FFA08C, #FF4E50)"
    },
    {
      title: "Guru Purnima",
      description: "A day to honor and express gratitude to spiritual and academic teachers",
      status: "Coming Soon",
      action: "Celebration & Workshop",
      date: "July 23, 2025",
      gradient: "linear-gradient(45deg, #4776E6, #8E54E9)"
    },
    {
      title: "Raksha Bandhan",
      description: "A celebration of the sacred bond between brothers and sisters",
      status: "Starting Before 2 Weeks",
      action: "Cultural Program",
      date: "August 15, 2025",
      gradient: "linear-gradient(45deg, #11998e, #38ef7d)"
    },
    {
      title: "Janmashtami",
      description: "Celebrating the birth of Lord Krishna with devotion and festivities",
      status: "Starting Next Month",
      action: "Religious Ceremony",
      date: "August 25, 2025",
      gradient: "linear-gradient(45deg, #8E2DE2, #4A00E0)"
    },
    {
      title: "Diwali",
      description: "Festival of lights celebrating the victory of light over darkness",
      status: "Coming in 3 Months",
      action: "Cultural Celebration",
      date: "November 12, 2025",
      gradient: "linear-gradient(45deg, #F83600, #FE8C00)"
    },
  ];

  const [randomEvent, setRandomEvent] = useState(events[0]);

  useEffect(() => {
    const getRandomEvent = () => {
      const randomIndex = Math.floor(Math.random() * events.length);
      setRandomEvent(events[randomIndex]);
    };

    getRandomEvent();
  }, []);

  return (
    <section className="events pt-0 pb-4">
      <div className="container">
        <div className="row my-3">
          <div className="col-12">
            <style>
              {`
                .event-card {
                  transition: all 0.3s ease;
                  position: relative;
                  overflow: hidden;
                  border-radius: 15px !important;
                  margin-bottom: 20px;
                  border: none !important;
                }

                .event-card:hover {
                  transform: translateY(-5px);
                  box-shadow: 0 10px 20px rgba(0,0,0,0.2) !important;
                }

                .event-card::before {
                  content: '';
                  position: absolute;
                  top: 0;
                  left: 0;
                  width: 100%;
                  height: 100%;
                  background: rgba(255,255,255,0.1);
                  transform: translateX(-100%);
                  transition: transform 0.5s ease;
                }

                .event-card:hover::before {
                  transform: translateX(0);
                }

                .event-card * {
                  color: white !important;
                }

                .event-card .custom-btn-primary {
                  background: rgba(255, 255, 255, 0.2);
                  border: 2px solid white;
                  transition: all 0.3s ease;
                }

                .event-card .custom-btn-primary:hover {
                  background: white;
                  color: #333 !important;
                }
              `}
            </style>
            <div className="row mt-4 mt-lg-2 align-items-center position-relative">
              <div
                className="col box-wrap rounded-4 shadow-lg event-card"
                style={{ background: randomEvent.gradient }}
              >
                <div className="row">
                  <div className="col-12 col-lg-4 mb-3 mb-lg-0">
                    <div className="ev-card align-items-start text-center text-lg-start p-3">
                      <h3 className="fs-3 fs-lg-2 fw-bold mb-2 mb-lg-3">
                        {randomEvent.title}
                      </h3>
                      <p className="small theme-text-accent-one mb-0">
                        {randomEvent.description}
                      </p>
                    </div>
                  </div>
                  <div className="col-12 col-lg-4 mb-3 mb-lg-0">
                    <div className="ev-card text-center p-3">
                      <h3 className="fs-5 fs-lg-4 fw-bold mb-2 mb-lg-3 theme-text-accent-two">
                        {randomEvent.status}
                      </h3>
                      <p className="fs-6 fw-bold theme-text-primary mb-0">
                        {randomEvent.action}
                      </p>
                    </div>
                  </div>
                  <div className="col-12 col-lg-4 d-flex justify-content-center justify-content-lg-end align-items-center">
                    <div className="text-center p-3">
                      <div className="coming-match-date">
                        <h2 className="time fw-bold fs-4 fs-lg-2">
                          {randomEvent.date}
                        </h2>
                      </div>
                      <div className="group mt-2 mt-lg-3 btn-wrap justify-content-center">
                        <button
                          className="btn-primary custom-btn-primary w-100 w-lg-auto"
                          onClick={() => (window.location.href = "events-details.html")}
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