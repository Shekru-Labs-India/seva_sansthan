import React from 'react';
import { Helmet} from 'react-helmet-async';

const Meta = ({ title, description, keywords }) => {
  return (
	
    <Helmet>
      <meta charSet="utf-8"/>
      <meta content="width=device-width, initial-scale=1.0" name="viewport"/>

	  <title>{title || 'Seva Sansthan | Empowering Communities Through Service'}</title>
      <meta name="description" content={description || 'Seva Sansthan is dedicated to serving communities through various social initiatives and empowerment programs'} />
      <meta name="keywords" content={keywords || 'Seva Sansthan, Community Service, Social Work, NGO, Charitable Organization'} />
      <meta httpEquiv="content-type" content="text/html; charset=UTF-8"/>
      <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
      <meta httpEquiv="pragma" content="no-cache"/>
      <meta httpEquiv="expires" content="never"/>

      <meta name="author" content="Seva Sansthan"/>
      <meta name="revisit-after" content="7 days"/>
      <meta name="distribution" content="global"/>
      <meta name="rating" content="general"/>
      <meta name="robots" content="index, follow"/>
      <meta name="apple-mobile-web-app-capable" content="YES"/>
      <meta name="HandheldFriendly" content="True"/>
      <meta name="MobileOptimized" content="320"/>
      <meta name="geo.placename" content="India"/>
      <meta name="googlebot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"/>
      <meta name="bingbot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"/>

      <meta property="og:locale" content="en_US"/>
      <meta property="og:type" content="website"/>
      <meta property="og:title" content="Seva Sansthan | Empowering Communities Through Service"/>
      <meta property="og:description" content="Seva Sansthan is dedicated to serving communities through various social initiatives and empowerment programs"/>
      <meta property="og:url" content="http://krishnasikshaseva.com/"/>
      <meta property="og:site_name" content="Seva Sansthan"/>
      <meta property="og:image" content="https://sevasansthan.org/assets/seva-sansthan-logo.jpg"/>
      <meta property="og:image:alt" content="Seva Sansthan Logo"/>
      <meta property="og:image:width" content="1200"/>
      <meta property="og:image:height" content="630"/>

      <meta name="twitter:card" content="summary_large_image"/>
      <meta name="twitter:title" content="Seva Sansthan | Empowering Communities Through Service"/>
      <meta name="twitter:description" content="Seva Sansthan is dedicated to serving communities through various social initiatives and empowerment programs"/>
      <meta name="twitter:image" content="https://sevasansthan.org/assets/seva-sansthan-logo.jpg"/>
    </Helmet>
	
  );
};

export default Meta;