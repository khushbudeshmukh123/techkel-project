// src/components/Header.js
import React from 'react';
import logo from '../assets/images/logo.png';
import button_right_arrow from '../assets/images/button_right_arrow.svg';
import business_img from '../assets/images/business_img.svg';
import purpel_arrow from '../assets/images/purpel_arrow.svg';
import services_img_1 from '../assets/images/services_img_1.png';
import service_icon_1 from '../assets/images/service_icon_1.svg';
import services_img_2 from '../assets/images/services_img_2.png';
import service_icon_2 from '../assets/images/service_icon_2.svg';

const WhatWedo = () => {
  return (
    <section className='what_we_do'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-12 text-center mx-auto'>
              <h4 className=''>What We Do Best</h4>
              <p className='mt_30'>At Techkel, we specialize in delivering powerful, future-proof technology solutions that help businesses thrive in a rapidly evolving digital world. With 8+ years of experience, a talented in-house team, and a passion for innovation, we’ve built products that transform startups into disruptors and enterprises into leaders.</p>
          </div>
        </div>
        <div className='row mt_100'>
          <div className='col-md-3 border-start'>
             <div className='business d-flex flex-column h-100'>
               <div><img src={business_img} /></div>
               <h5 className='mt_50'>Why Businesses Trust Techkel</h5>
               <p className='mt_24'> 8+ Years of IT & product development experience</p>
               <a href='#' className='btn_link fw_400 d-inline-block mt-auto'>Read more  <img src={purpel_arrow} /></a>
             </div>
          </div>
          <div className='col-md-3'>
             <div className='gradiant_box h-100'>
                <div className='img_box h-100'>
                   <img src={services_img_1} />
                   <div className='services_card'>
                      <div className='box'>
                         <div className='circle_icon mr_6'>
                          <img src={service_icon_1} />
                         </div>
                         <p>UI/UX Design and Research</p>
                      </div>
                   </div>
                </div>
             </div>
          </div>
          <div className='col-md-3'>
             <div className='gradiant_box h-100'>
                <div className='img_box h-100'>
                   <img src={services_img_2} />
                   <div className='services_card'>
                      <div className='box'>
                         <div className='circle_icon mr_6'>
                          <img src={service_icon_2} />
                         </div>
                         <p>Web & Mobile Application Development</p>
                      </div>
                   </div>
                </div>
             </div>
          </div>
          <div className='col-md-3'>
             <div className='gradiant_box h-100'>
                <div className='grey_box h-100'>
                    <h6 className='mb_20'>Our Review Process Includes</h6>
                    <ul className='check_list '>
                      <li>
                        <h6>Stakeholder Collaboration:</h6>
                        <p>Understand goals, KPIs, and challenges through detailed</p>
                      </li>
                       <li>
                        <h6>Feature Mapping & Prioritization:</h6>
                        <p>Break down features by impact, effort, and relevance.</p>
                      </li>
                       <li>
                        <h6>Technical Review:</h6>
                        <p>Analyze feasibility, platform requirements, and integration needs.</p>
                      </li>
                    </ul>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWedo;
