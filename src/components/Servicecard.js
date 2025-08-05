
import React from 'react';
import { FaMagic } from 'react-icons/fa';
import { FaCheck } from 'react-icons/fa';
import '../assets/scss/component/_servicecard.scss';

const Servicecard = () => {
  return (
    <div className="card ">
      <div className="card-title">
        <FaMagic className="title-icon"/>
        <h3>UI/UX Design</h3>
      </div>
      <p className="card-subtitle">Designs That Delight and Convert</p>

      <div className="card-content">
        <h4>What you get</h4>
        <ul>
          <li><span className="check-wrapper"><FaCheck className="check-icon" /></span>User Research & Wireframing</li>
          <li><span className="check-wrapper"><FaCheck className="check-icon" /></span>High-Fidelity Prototyping</li>
          <li><span className="check-wrapper"><FaCheck className="check-icon" /></span>UI Kits & Design Systems</li>
          <li><span className="check-wrapper"><FaCheck className="check-icon" /></span>Usability Testing</li>
        </ul>
      </div>
    </div>
  );
};

export default Servicecard;


