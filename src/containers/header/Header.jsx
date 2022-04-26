import React from 'react'
import './header.css'
import people from '../../assets/people.png';
import image from '../../assets/image.jpg';
import ai from '../../assets/ai.png';


const Header = () => {
  return (
    <div className="almight__header section__padding" id="home">
      <div className="almight__header-content">
        <h1 className="gradient__text">The Super Dapp Development Platform</h1>
      <p>ALMIGTH is a complete Dapp development kit and workspace. ALMIGHT is trying to do a similar thing, to what FireBase has done for WEB2. The difference is that we will cover most of the built functionalities from WEB2 and WEB3 together.</p>
      <div className="almight__header-content__input">
        <input type="email" placeholder="Your Email Address" />
        <button type="button">Get Started</button>
      </div>
      <div className="almight__header-content__people">
        <img src={people} alt="people"/>
        <p>We are growing rapidly</p>
      </div>
    </div>

    <div className="almight__header-image">
      <img src={ai} alt="image" />
      </div>
    </div>
  )
}

export default Header