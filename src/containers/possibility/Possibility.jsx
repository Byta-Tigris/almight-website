import React from 'react';
import possibilityImage from '../../assets/possibility.png';
import './possibility.css';

const Possibility = () => (
  <div className="almight__possibility section__padding" id="possibility">
    <div className="almight__possibility-image">
      <img src={possibilityImage} alt="possibility" />
    </div>
    <div className="almight__possibility-content">
      <h4>Request Early Access to Get Started</h4>
      <h1 className="gradient__text">Almight saves developers time and money to ship scalable <br /> & robust Dapps</h1>
      <p>ALMIGHT provides a single workflow for building high performance dapps. Fully compatible with your favorite web3 tools and services.</p>
      {/* <h4>Request Early Access to Get Started</h4> */}
    </div>
  </div>
);

export default Possibility;