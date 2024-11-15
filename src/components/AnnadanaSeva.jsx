import React from 'react'
import Header from './Header'
import Footer from './Footer'

const AnnadanaSeva = () => {
  return (
    
   <>
   <Header/>

   <div className='container-fluid mt-4'>
    <div className='row'>
      
    <div className="col-md-7 px-md-3 px-0">
 
    <div class="row justify-content-center">
    <div class="col-md-5 mb-3">
        <div class="card rounded">
            <img src="https://donations.iskconbangalore.org/annadana/assets/img/desk-red.png?t=1731665483" alt="card-image" class="card-img-top" />
        </div>
    </div>
    <div class="col-md-5 mb-3">
        <div class="card rounded">
            <img src="https://donations.iskconbangalore.org/annadana/assets/img/desk-orrange.png?t=1731665483" alt="card-image" class="card-img-top" />
        </div>
    </div>
    <div class="col-md-5 mb-3">
        <div class="card rounded">
            <img src="https://donations.iskconbangalore.org/annadana/assets/img/desk-lightorange.png?t=1731665483" alt="card-image" class="card-img-top" />
        </div>
    </div>
    <div class="col-md-5 mb-3">
        <div class="card rounded">
            <img src="https://donations.iskconbangalore.org/annadana/assets/img/desk-pink.png?t=1731665483" alt="card-image" class="card-img-top" />
        </div>
    </div>
</div>


  <div className="row mx-0 mt-md-2">
    
  <div className="col-md-12 px-0 d-flex justify-content-center">
  {/* Desktop Image1 */}
  <img
    src="https://donations.iskconbangalore.org/annadana/assets/img/desk-krishna.png"
    alt="Krishna desktop view"
    className="img-fluid krishna-img d-md-block d-none"
  />
  {/* Mobile Image2 */}
  <img
    src="https://donations.iskconbangalore.org/annadana/assets/img/desk-krishna.png"
    alt="Krishna mobile view"
    className="img-fluid mob-krishna-img d-md-none d-block"
  />
</div>


    <div className="col-md-12">
      <p className="card-desk-para mt-3">
        Here’s an opportunity for you to serve food to devout visitors and
        receive blessings of the Lord. Contribute generously towards Annadana
        Seva. Your donation will:
      </p>
      <div className="card-desk-para2">
        <ul style={{ paddingLeft: 25 }}>
          <li>Help us feed hundreds of temple visitors every day.</li>
          <li>
            Make you eligible to get income tax exemption under section 80G.
          </li>
        </ul>
      </div>
      <p className="desc-para d-md-block d-none">
        ISKCON Bangalore is providing free lunch prasadam for hundreds of
        pilgrims visiting the temple. The prasadam is served between 11:30 am
        and 2:00 pm every day. This initiative has been taken following in the
        footsteps of Srila Prabhupada, the Founder-Acharya of ISKCON who
        introduced prasadam distribution as one of the key programs of ISKCON
        temples all over the world. Distribution of food offered to the Lord has
        a great spiritual significance and is glorified in various scriptures.
      </p>
      <p className="desc-para d-md-block d-none">
        We invite you to be a part of this project by contributing generously
        towards this divine cause. Your wholehearted support will help us scale
        it to greater heights and make it a huge success.
      </p>
    </div>
  </div>
</div>


    </div>

   </div>
   
   <Footer/>
   </>


  )
}

export default AnnadanaSeva