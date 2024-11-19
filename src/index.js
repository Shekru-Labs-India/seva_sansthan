import React from 'react';
import { hydrate, render } from 'react-dom';
import { HelmetProvider } from 'react-helmet-async';
import App from './App';
import reportWebVitals from './reportWebVitals';

const helmetContext = {};
const rootElement = document.getElementById('root');

if (rootElement.hasChildNodes()) {
  hydrate(
    <HelmetProvider context={helmetContext}>
      <App />
    </HelmetProvider>,
    rootElement
  );
} else {
  render(
    <HelmetProvider context={helmetContext}>
      <App />
    </HelmetProvider>,
    rootElement
  );
}

reportWebVitals();
