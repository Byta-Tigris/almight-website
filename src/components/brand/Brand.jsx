import React from 'react';
import { google, android, ios, metamask, coinbase } from './imports';
import './brand.css';

const Brand = () => (
  <div className="almight__brand section__padding">
    <div>
      <img src={google} />
    </div>
    <div>
      <img src={android} />
    </div>
    <div>
      <img src={ios} />
    </div>
    <div>
      <img src={metamask} />
    </div>
    <div>
      <img src={coinbase} />
    </div>
  </div>
);

export default Brand;