import React from 'react';
import './sidebar.css';
import gridIcon from './images/grid.png';
import creditCard from './images/credit-card.png';
import copy from './images/copy.png';
import disc from './images/disc.png';
import layers from './images/layers.png';
import logout from './images/log-in.png';

export const Sidebar = () => (
  <div className="container">
    <p>
      <img src={gridIcon} alt="" />
      Overview
    </p>
    <p>
      <img src={creditCard} alt="" />
      Point wallet
    </p>
    <p>
      <img src={layers} alt="" />
      Payment history
    </p>
    <p>
      <img src={copy} alt="" />
      News Feed
    </p>
    <hr />
    <p>
      <img src={disc} alt="" />
      Account settings
    </p>
    <p className="logout">
      Logout
      <img src={logout} alt="" />
    </p>
    <p className="helpAndSupport">Help & support</p>
  </div>
);
