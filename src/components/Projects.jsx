import React from 'react'
import Footer from './Footer'
import Header from './Header'
import Meta from './Meta'

const Projects = () => {
  return (
   
   

   <>
   <Meta/>
   <Header/>

  {/* Donations section */}
  <section className="py-8 donation">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-12 mb-5">
          <div className="text-start">
            <h1 className="mb-0 display-6 head">Projects</h1>
          </div>
        </div>
        <div className="col-12">
          <div className="row">
            <div className="col-12 col-md-6 col-lg-4 mb-5" data-aos="fade-down">
              <div className="card-wrap">
                <div className="con-img-wrap m-auto">
                  <img
                    src="https://www.iskconbangalore.org/wp-content/uploads/2015/11/nityaannadana1.jpg"
                    width={382}
                    height={382}
                    className="img-fluid"
                    alt="product picture"
                  />
                </div>
                <div className="con-wrap pt-4">
                  <h1 className="fs-5 mb-3 text text-truncate">
                    Nitya Annadana
                  </h1>
                  <p className="mb-4">
                    ISKCON Bangalore is providing free lunch prasadam for
                    hundreds of pilgrims visiting the temple. The prasadam is
                    served between...
                  </p>
                </div>
              </div>
            </div>
            {/* repetable */}
            <div className="col-12 col-md-6 col-lg-4 mb-5" data-aos="fade-down">
              <div className="card-wrap">
                <div className="con-img-wrap m-auto">
                  <img
                    src="https://www.iskconbangalore.org/wp-content/uploads/2015/11/260x140.jpg"
                    width={382}
                    height={382}
                    className="img-fluid"
                    alt="product picture"
                  />
                </div>
                <div className="con-wrap pt-4">
                  <h1 className="fs-5 mb-3 text text-truncate">
                    Krishna Lila Theme Park
                  </h1>
                  <p className="mb-4">
                    Krishna Lila Theme Park – a unique religious tourism
                    destination in Bengaluru. The Krishna Lila Theme Park is
                    a...
                  </p>
                </div>
              </div>
            </div>
            {/* repetable */}
            <div className="col-12 col-md-6 col-lg-4 mb-5" data-aos="fade-down">
              <div className="card-wrap">
                <div className="con-img-wrap m-auto">
                  <img
                    src="https://www.iskconbangalore.org/wp-content/uploads/2015/11/vrindavan-chandrodaya-mandir-1.jpg"
                    width={382}
                    height={382}
                    className="img-fluid"
                    alt="product picture"
                  />
                </div>
                <div className="con-wrap pt-4">
                  <h1 className="fs-5 mb-3 text text-truncate">
                    Vrindavana Chandrodaya Mandir
                  </h1>
                  <p className="mb-4">
                    Vrindavana – the spiritual capital of India to get a 700
                    feet tall temple Vrindavana Chandrodaya Mandir, a grand...
                  </p>
                </div>
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

export default Projects