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
  <section className="py-3 donation">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-12 mb-5">
          <div className="text-start">
            <h1 className="mb-0 display-6 h3 fw-bold text-warning">Projects</h1>
          </div>
        </div>
        <div className="col-12">
          <div className="row">
            <div className="col-12 col-md-6 col-lg-4 mb-5" data-aos="fade-down">
              <div className="card-wrap border border-warning rounded-4 shadow-sm">
                <div className="con-img-wrap m-auto">
                  <img
                    src="https://www.iskconbangalore.org/wp-content/uploads/2015/11/nityaannadana1.jpg"
                    width={382}
                    height={382}
                    className="img-fluid img-thumbnail rounded-4"
                    alt="product picture"
                  />
                </div>
                <div className="con-wrap">
                  <h1 className=" mb-3 h3 fw-bold text-warning">
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
              <div className="card-wrap border border-warning rounded-4 shadow-sm">
                <div className="con-img-wrap m-auto">
                  <img
                    src="https://www.iskconbangalore.org/wp-content/uploads/2015/11/260x140.jpg"
                    width={382}
                    height={382}
                    className="img-fluid img-thumbnail rounded-4"
                    alt="product picture"
                  />
                </div>
                <div className="con-wrap ">
                  <h1 className=" mb-3 h3 fw-bold text-warning">
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
              <div className="card-wrap border border-warning rounded-4 shadow-sm">
                <div className="con-img-wrap m-auto">
                  <img
                    src="https://www.iskconbangalore.org/wp-content/uploads/2015/11/vrindavan-chandrodaya-mandir-1.jpg"
                    width={382}
                    height={382}
                    className="img-fluid img-thumbnail rounded-4"
                    alt="product picture"
                  />
                </div>
                <div className="con-wrap ">
                  <h1 className=" mb-3 h3 fw-bold text-warning">
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