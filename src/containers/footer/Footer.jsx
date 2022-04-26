import React from 'react';
import almightLogo from '../../assets/logo-main.png';
import './footer.css';

const Footer = () => (
  <div className="almight__footer section__padding">
    <div className="almight__footer-heading">
      <h1 className="gradient__text">Do you want to step in to the future before others</h1>
    </div>

    <div className="almight__footer-btn">
      <p>Request Early Access</p>
    </div>

    <div className="almight__footer-links">
      <div className="almight__footer-links_logo">
        <img src={almightLogo} alt="almight_logo" />
        <p>Indian startup, <br /> All Rights Reserved</p>
      </div>
      <div className="almight__footer-links_div">
        <h4>Links</h4>
        <p>Overons</p>
        <p>Social Media</p>
        <p>Counters</p>
        <p>Contact</p>
      </div>
      <div className="almight__footer-links_div">
        <h4>Company</h4>
        <p>Terms & Conditions </p>
        <p>Privacy Policy</p>
        <p>Contact</p>
      </div>
      <div className="almight__footer-links_div">
        <h4>Get in touch</h4>
        <p>Manipal University Jaipur</p>
        <p>9848995994</p>
        <p>tummuriashish@outlook.com</p>
      </div>
    </div>

    <div className="almight__footer-copyright">
      <p>@2022 ALMIGHT. All rights reserved.</p>
    </div>
  </div>
);

export default Footer;