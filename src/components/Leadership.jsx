import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Meta from './Meta'

const Leadership = () => {
  return (
    
    <>
    <Meta/>
    <Header/>
  {/* about us section */}
  <section className="about-sec py-8">
    <div className="container">
      <div className="row justify-content-center align-items-center">
        <div className="col-xl-6 col-lg-6 col-md-10">
          <p className="mb-3 text-primary fs-5 fw-bold">
            Sri Madhu Pandit Dasa
          </p>
          <p className="mb-3  fs-5 fw-bold">President, ISKCON Bangalore</p>
          <p className="mb-3 text-justify lh-lg">
            Madhu Pandit Dasa was born in Nagercoil, Tamil Nadu. He became a
            full-time member of ISKCON in 1981 while doing his M.Tech in Civil
            Engineering from IIT-Bombay. Since then, he has successfully
            conceived and implemented many large-scale public service projects
            that positively impact millions of people. He has also worked
            tirelessly to preserve and promote Indian spirituality, culture and
            heritage among children and youth for their holistic well-being.
          </p>
          <p className="mb-3 text-justify lh-lg">
            Madhu Pandit Dasa is the Chairman and Mentor of the Global Hare
            Krishna Movement. He is also the Trustee and Chairman of The Akshaya
            Patra Foundation, which has contributed immensely to alleviating
            classroom hunger and improving the Public-Private Partnership (PPP).
          </p>
          <p className="mb-3 text-justify lh-lg">
            He is also the Chairman of Vrindavan Chandrodaya Mandir and India
            Heritage Foundation. His stellar contributions have been appreciated
            through prestigious awards and accolades like Padma Shri, Gandhi
            Peace Prize, National Award for Child Welfare, Nikkei Asia Prize and
            Distinguished Alumnus Award by IIT-Bombay.
          </p>
        </div>
        <div className="col-xl-6 col-lg-6 order-0 order-lg-2">
          <div>
            <img
              src="https://www.iskconbangalore.org/wp-content/uploads/2024/08/SriMadhuPanditDasa-1-2.jpg"
              alt="image"
              className="main-pic "
            />
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="about-sec py-8">
    <div className="container">
      <div className="row justify-content-center align-items-center">
        <div className="col-xl-6 col-lg-6 col-md-10">
          <p className="mb-3 text-primary fs-5 fw-bold">
            Sri Chanchalapathi Dasa
          </p>
          <p className="mb-3  fs-5 fw-bold">
            Senior Vice President, ISKCON Bangalore
          </p>
          <p className="mb-3 text-justify lh-lg">
            Sri Chanchalapathi Dasa also serves as the Vice Chairman and
            Co-mentor of the Global Hare Krishna Movement. He is also the
            President of the Vrindavan Heritage Tower and Co-Founder and Vice
            Chairman of The Akshaya Patra Foundation.
          </p>
          <p className="mb-3 text-justify lh-lg">
            Born in 1963 in Bengaluru, India, Sri Chanchalapathi Dasa developed
            a deep interest in the teachings of Srila Prabhupada during his
            undergraduate studies at PSG College of Technology, Coimbatore.
            After joining the Indian Institute of Science (IISc), Bangalore, for
            a Masters in Electrical Communication Engineering, he dedicated his
            life to the service of ISKCON in 1984. Over the years, he has played
            a pivotal role in the growth and success of ISKCON Bangalore and The
            Akshaya Patra Foundation. Additionally, he contributed to the
            creative direction of the popular 3D animated TV series Little
            Krishna, which aired on Nickelodeon India.
          </p>
        </div>
        <div className="col-xl-6 col-lg-6 order-0 order-lg-2">
          <div>
            <img
              src="https://www.iskconbangalore.org/wp-content/uploads/2020/01/chanchalapathi-dasa.jpg"
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

export default Leadership