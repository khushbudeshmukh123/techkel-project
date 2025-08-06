// src/components/Header.js
import React from 'react'
import button_right_arrow from '../assets/images/button_right_arrow.svg';
import eyese_logo from '../assets/images/eyese_logo.png';
import project1 from '../assets/images/project_1.png';

const WorkThatSpeaks = () => {
  return (
    <section className='work_that_speaks py_100'>
      <div className='container'>
         <div className='row'>
            <div className='col-md-10'>
               <h4 className='headding'>Work That Speaks</h4>
               <p className='mt_30'>At Techkel, we believe that the best way to earn trust is to deliver results—and our work speaks volumes. Each project in our portfolio is more than just a deployment—it's a story of innovation, problem-solving, and digital transformation. Whether it's a fast-scaling startup or an established enterprise, we’ve partnered with clients across industries to build meaningful digital experiences that drive measurable impact.</p>
            </div>
         </div>
         <div className='row mt_80'>
            <div className='col-md-4 h-100 border-start '>
               <ul className='work_categorys h-100'>
                  <li><a href='#' className='active'>eCommerce Solutions</a></li>
                  <li><a href='#' className=''>Enterprise Web Portals</a></li>
                  <li><a href='#' className=''>SaaS Platforms</a></li>
                  <li><a href='#' className=''>AI-Powered Apps</a></li>
                  <li><a href='#' className=''>Mobile Apps</a></li>
                  <li><a href='#' className=''>Custom APIs & Integrations</a></li>
               </ul>
            </div>
            <div className='col-md-8'>
               <div className='work_logo d-flex'>
                  <img src= {eyese_logo} />
                  <div>
                     <div className="product_category ml_30"> eCommerce Solutions</div>
                  </div>
               </div>
               <div className='product_info_text mt_40'>
                  <p>Since launching the new site, we've seen a significant boost in conversions and customer engagement. From smooth navigation to a seamless checkout experience, everything works flawlessly.  Highly professional, responsive, and committed — I strongly recommend Techkel for any eCommerce solution</p>
               </div>
               <div className='work_portfolio mt_48'>
                  <img src={project1} />
               </div>
               <div className='text-center w-100'><a href='#' className='btn btn_primary d-inline-flex mx-auto mt_30'>Show More <img src={button_right_arrow} alt="Techkel Logo" className="ml_2" /></a></div>
            </div>
         </div>
      </div>
    </section>
  );
};

export default WorkThatSpeaks;
