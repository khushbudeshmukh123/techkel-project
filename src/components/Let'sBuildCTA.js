// src/components/Header.js
import React from 'react'
import purple_arrow from '../assets/images/purple_arrow.svg';
import meting_cta from '../assets/images/meting_cta.png';

const LetsBuildCTA = () => {
  return (
    <section className='lets_build_cta z-1'>
      <div className='row align-items-end'>
         <div className='col-md-7'>
            <h4>Let’s Build<br/> Something Great</h4>
            <p className='mt_30'>Whether you're starting with a spark of an idea or already have a full-fledged plan, Techkel is here to bring your vision to life. We love working with passionate founders, fast-growing startups, and forward-thinking enterprises to create digital products that truly make an impact.</p>
             <a href='#' className='btn btn_primary mt_30 mb_40'>Let’s Connect <img src={purple_arrow} alt="Techkel Logo" className="ml_2" /></a>
         </div>
         <div className='col-md-5'>
            <img src={meting_cta} />
         </div>
      </div>
    </section>
  );
};

export default LetsBuildCTA;
