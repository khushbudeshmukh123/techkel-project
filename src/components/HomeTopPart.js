// src/components/Header.js
import React from 'react';
import logo from '../assets/images/logo.png';
import button_right_arrow from '../assets/images/button_right_arrow.svg';
import { NavLink } from 'react-router-dom';
const HomeTopPart = () => {
  return (
     <div className='home_top_part w-100'>
            <div className='row mx-auto'>
              <div className='col-md-10 mx-auto text-center'>
                 <h4 className='fs_55 text-center mb-0 z-1'>Innovate with Us<br></br> Bold Thinking Meets Brilliant Execution</h4>
                 <p className='fs_20 fw_400 mt_30 z-1'>Your ideas deserve more than code. At TechKel, we turn concepts into high-performance digital products through strategic innovation and engineering excellence</p>
                  <NavLink to="/connect" className="btn btn_primary">Let’s Connect <img src={button_right_arrow} alt="Arrow" className="ml_2" /></NavLink>
              </div>
            </div>
            <div className='animated_video'>
               <video loop autoPlay muted>
                <source src="/assets/video/animated_video.mp4" type="video/mp4" />
               </video>
            </div>
           </div>
  );
};

export default HomeTopPart;
