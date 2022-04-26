import React from 'react';
import Feature from '../../components/feature/Feature';
import './features.css';

const featuresData = [
  {
    title: 'Software Development Kit',
    text: 'Software Development Kit (SDK) with plug-n-play elements and simple integration system',
  },
  {
    title: 'All-In-One Authentication System',
    text: 'All-In-One Authentication System, integrated authentication system capable of Web2 Social sign-in and Web3 wallet sign-in',
  },
  {
    title: 'Concise Provider',
    text: 'Concise Provider, capable of communicating with most of the web3 wallet provider APIs from single implementation',
  },
  {
    title: 'Crypto & Fiat Payment Gateway,',
    text: 'Alogn with Smart Contract CDN Hosting and Dapp Hosting',

  },
  {
    title: 'Transaction and Event Indexers',
    text: 'Transaction and Event Indexers  along with GraphQL based query',
    
  },
  {
    title: 'Database',
    text: 'Centralized and Decentralization storage (IPFS, FileCoin, Storj) API',
    
  },
  {
    title: 'Push-Notifications, EventTriggers ',
    text: 'Push-Notifications, EventTriggers for reacting on events and notifying to users from direct APIs',
    
  },
];

const Features = () => (
  <div className="almight__features section__padding" id="features">
    <div className="almight__features-heading">
      <h1 className="gradient__text">The Future is Now and You Just Need to Realize It. Step into Future Today. & Make it Happen.</h1>
      <p>COMPLETE ROADMAP</p>
    </div>
    <div className="almight__features-container">
      {featuresData.map((item, index) => (
        <Feature title={item.title} text={item.text} key={item.title + index} />
      ))}
    </div>
  </div>
);

export default Features;