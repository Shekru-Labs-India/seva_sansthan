import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Meta from './Meta';
import { deityImages } from '../data/deityImages';


const imageStyle = {
    width: "100%",
    height: "250px",
    objectFit: "cover"
  };
  
  const cardStyle = {
    height: "100%",
    margin: "10px 0",
    boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
    transition: "transform 0.3s ease",
    "&:hover": {
      transform: "translateY(-5px)"
    }
  };
  
  const captionStyle = {
    padding: "10px",
    textAlign: "center",
    fontSize: "16px"
  };

const DeityDarshanThree = () => {
  // Get remaining images (61-95)
  const remainingImages = deityImages.slice(60);

  return (
    <>
      <Meta/>
      <Header/>
      <div className="container my-5">
        <h2 className="text-center mb-4">श्री राधा कृष्ण मंदिर दर्शन - भाग ३</h2>
        <div className="row">
          {remainingImages.map((image) => (
            <div key={image.id} className="col-lg-3 col-md-4 col-sm-6 col-12 mb-4">
              <div className="card rounded-4" style={cardStyle}>
                <img
                  src={image.src} 
                  className="card-img-top rounded-4 object-fit-cover"
                  alt={image.caption}
                  style={imageStyle}
                />
                <div className="card-body" style={captionStyle}>
                  <p className="card-text">{image.caption}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default DeityDarshanThree;