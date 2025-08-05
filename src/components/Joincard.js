import React from 'react';
import { FaSearch } from 'react-icons/fa';
import '../assets/scss/component/_joincard.scss';

const Joincard = () => {
  return (
    <div className="purpose-card">
      <div className="icon-wrapper">
        <FaSearch className="icon" />
      </div>
      <h3 className="card-title">Purpose-Driven Work</h3>
      <p className="card-description">
        We work on projects that matter. From empowering startups to transforming enterprises,
        our solutions make real-world impact.
      </p>
    </div>
  );
};

export default Joincard;
