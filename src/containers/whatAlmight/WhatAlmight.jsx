import React from 'react';
import Feature from '../../components/feature/Feature';
import './whatalmight.css';

const Whatalmight = () => (
  <div className="almight__whatalmight section__margin" id="whatAlmight">
    <div className="almight__whatalmight-feature">
      <Feature title="What is ALMIGHT" text="The core objective of ALMIGHT is to better developer experience while delivering products with top-notch user experience. We connect technologies such as 1. PAYMENT GATEWAYS, SOCIAL SIGN-IN, CENTRALISED STORAGE, DECENTRALISED STORAGE, DATABASE, TRANSACTION, AND EVENT HISTORY, WALLET AND PROVIDERS, SMART CONTRACTS, AND MANY MORE through a single function call." />
    </div>
    <div className="almight__whatalmight-heading">
      <h1 className="gradient__text">The possibilities are beyond your imagination</h1>
      <p>Explore the Library</p>
    </div>
    <div className="almight__whatalmight-container">
      <Feature title="Bridging Web2 and Web3 " text=" We have developed this platform for the developers to connect their web2 and web3 features together" />
      <Feature title="Plug-n-Play Workspace with One Snippet Of Code" text="Almight is will a simple user-friendly software with ready made code to use and manage" />
      <Feature title="Platform Agnostic" text="we have provided the services available for all the popular platforms- Web, Android, IOS" />
    </div>
  </div>
);

export default Whatalmight;