import React, { useState, useEffect } from "react";
import background from "../assets/images/avatar/background-2.png";

const EventCard = () => {
  // Array of event data
  const events = [
    {
      title: "Buddha Purnima",
      description:
        "The birth of Gautama Buddha is believed to be the ninth avatar",
      status: "Starting Before 1 Week",
      action: "Celebrating",
      date: "July 11, 2025",
    },
    {
      title: "Guru Purnima",
      description:
        "A day to honor and express gratitude to spiritual and academic teachers",
      status: "Coming Soon",
      action: "Celebration & Workshop",
      date: "July 23, 2025",
    },
    {
      title: "Raksha Bandhan",
      description:
        "A celebration of the sacred bond between brothers and sisters",
      status: "Starting Before 2 Weeks",
      action: "Cultural Program",
      date: "August 15, 2025",
    },
    {
      title: "Janmashtami",
      description:
        "Celebrating the birth of Lord Krishna with devotion and festivities",
      status: "Starting Next Month",
      action: "Religious Ceremony",
      date: "August 25, 2025",
    },
    {
      title: "Diwali",
      description:
        "Festival of lights celebrating the victory of light over darkness",
      status: "Coming in 3 Months",
      action: "Cultural Celebration",
      date: "November 12, 2025",
    },
  ];

  // Update state to store three random events instead of two
  const [randomEvents, setRandomEvents] = useState([
    events[0],
    events[1],
    events[2],
  ]);

  // Update useEffect to select three different random events
  useEffect(() => {
    const getRandomEvents = () => {
      const indices = new Set();
      while (indices.size < 1) {
        indices.add(Math.floor(Math.random() * events.length));
      }
      setRandomEvents([...indices].map((index) => events[index]));
    };

    getRandomEvents();
  }, []);

  return (
    <section className="events pt-0 pb-4">
      <div className="container">
        <div className="row my-3">
          <div className="col-12">
            <style>
              {`
    .event-card-1, .event-card-2, .event-card-3 {
      transition: all 0.3s ease;
      position: relative;
      overflow: hidden;
      border-radius: 15px;
      margin-bottom: 20px;
    }

    /* Vibrant Orange to Pink */
    .event-card-1 {
      background: linear-gradient(45deg, #FF8008, #FFA08C, #FF4E50);
    }

    /* Deep Blue to Purple */
    .event-card-2 {
      background: linear-gradient(45deg, #4776E6, #8E54E9);
    }

    /* Emerald Green to Lime */
    .event-card-3 {
      background: linear-gradient(45deg, #11998e, #38ef7d);
    }

    .event-card-1:hover, .event-card-2:hover, .event-card-3:hover {
      transform: translateY(-5px);
      box-shadow: 0 10px 20px rgba(0,0,0,0.2) !important;
    }

    .event-card-1::before, .event-card-2::before, .event-card-3::before {
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

    .event-card-1:hover::before, .event-card-2:hover::before, .event-card-3:hover::before {
      transform: translateX(0);
    }

    /* Ensure text is white and buttons maintain their style */
    .event-card-1 *, .event-card-2 *, .event-card-3 * {
      color: white !important;
    }

    /* Custom button styles for better visibility */
    .event-card-1 .custom-btn-primary,
    .event-card-2 .custom-btn-primary,
    .event-card-3 .custom-btn-primary {
      background: rgba(255, 255, 255, 0.2);
      border: 2px solid white;
      transition: all 0.3s ease;
    }

    .event-card-1 .custom-btn-primary:hover,
    .event-card-2 .custom-btn-primary:hover,
    .event-card-3 .custom-btn-primary:hover {
      background: white;
      color: #333 !important;
    }
  `}
            </style>
            {randomEvents.map((event, index) => (
              <div
                className="row mt-4 mt-lg-2 align-items-center position-relative"
                key={index}
              >
                <div
                  className={`col box-wrap border border-warning rounded-4 shadow-lg event-card-${
                    index + 1
                  }`}
                >
                  <div className="row">
                    <div className="col-12 col-lg-4 mb-3 mb-lg-0">
                      <div className="ev-card align-items-start text-center text-lg-start p-3">
                        <h3 className="fs-3 fs-lg-2 fw-bold mb-2 mb-lg-3">
                          {event.title}
                        </h3>
                        <p className="small theme-text-accent-one mb-0">
                          {event.description}
                        </p>
                      </div>
                    </div>
                    <div className="col-12 col-lg-4 mb-3 mb-lg-0">
                      <div className="ev-card text-center p-3">
                        <h3 className="fs-5 fs-lg-4 fw-bold mb-2 mb-lg-3 theme-text-accent-two">
                          {event.status}
                        </h3>
                        <p className="fs-6 fw-bold theme-text-primary mb-0">
                          {event.action}
                        </p>
                      </div>
                    </div>
                    <div className="col-12 col-lg-4 d-flex justify-content-center justify-content-lg-end align-items-center">
                      <div className="text-center p-3">
                        <div className="coming-match-date">
                          <h2 className="time fw-bold fs-4 fs-lg-2">
                            {event.date}
                          </h2>
                        </div>
                        <div className="group mt-2 mt-lg-3 btn-wrap justify-content-center">
                          <button
                            className="btn-primary custom-btn-primary w-100 w-lg-auto"
                            onClick={() =>
                              (window.location.href = "events-details.html")
                            }
                          >
                            Come &amp; Join
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventCard;
