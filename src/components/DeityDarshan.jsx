import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Meta from './Meta'

// Import all images
const importAllImages = () => {
  const images = [];
  for (let i = 1; i <= 95; i++) {
    images.push({
      id: i,
      src: require(`../assets/images/sansthan/image1 (${i}).jpeg`),
      caption: `Deity Darshan Image ${i}` // You can customize captions here
    });
  }
  return images;
};

const imageStyle = {
  width: "100%",
  height: "250px",
  objectFit: "cover"
};

const cardStyle = {
  height: "100%",
  margin: "10px 0"
};

const captionStyle = {
  padding: "10px",
  textAlign: "center",
  fontSize: "14px"
};

const DeityDarshan = () => {
  const images = importAllImages();

  return (
    <>
      <Meta/>
      <Header/>
      
      <div className="container my-5">
        <div className="row">
          {images.map((image) => (
            <div key={image.id} className="col-lg-3 col-md-4 col-sm-6 col-12 mb-4">
              <div className="card" style={cardStyle}>
                <img
                  src={image.src}
                  className="card-img-top"
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
  )
}

export default DeityDarshan