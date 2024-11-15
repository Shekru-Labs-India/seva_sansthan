import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Meta from './Meta'

const Governance = () => {
  return (
    
    <>
    <Meta/>
    <Header/>

    <section className="about-sec py-8">
    <div className="container">
      <div className="row justify-content-center align-items-center">
        <div className="col-xl-6 col-lg-6 col-md-10">
          <p className="mb-3 text-primary fs-5 fw-bold">
          Governing Council
          </p>
          <p className="mb-3  fs-5 fw-bold">Madhu Pandit Dasa</p>
          <p className="mb-3 text-justify lh-lg">
          Madhu Pandit Dasa was born in Nagercoil, Tamil Nadu. He
                      became a full-time member of ISKCON in 1981 while doing his
                      M.Tech in Civil Engineering from IIT-Bombay. Since then, he
                      has successfully conceived and implemented many large scale
                      public service projects that positively impact millions of
                      people. He has also worked tirelessly to preserve and
                      promote Indian spirituality, culture and heritage among
                      children and youth for their holistic well-being. He is the
                      Chairman and Mentor, Global Hare Krishna Movement and the
                      President of ISKCON Bangalore.
          </p>
          <p className="mb-3 text-justify lh-lg">
          Madhu Pandit Dasa is the Trustee and Chairman of The Akshaya
                      Patra Foundation, which has contributed immensely to
                      alleviate classroom hunger and improve the nutrition levels
                      of children studying in government schools in India. He has
                      led Akshaya Patra to become an efficient Public-Private
                      Partnership (PPP) and an admired social innovation. He
                      provides visionary guidance for the world’s largest NGO run
                      school meal programme.
          </p>
          <p className="mb-3 text-justify lh-lg">
          He is also the Chairman of Vrindavan Chandrodaya Mandir and
                      India Heritage Foundation. His stellar contributions have
                      been appreciated through prestigious awards and accolades
                      like Padma Shri, Gandhi Peace Prize, National Award for
                      Child Welfare, Nikkei Asia Prize and Distinguished Alumnus
                      Award by IIT-Bombay.
          </p>
        </div>
        <div className="col-xl-6 col-lg-6 order-0 order-lg-2">
          <div>
            <img
              src="https://www.iskconbangalore.org/wp-content/uploads/2021/07/madhu-pandita-dasa.jpeg"
              alt="image"
              className="main-pic "
            />
          </div>
        </div>
      </div>
    </div>
  </section>
 

  <Footer/>
  </>

  )
}

export default Governance