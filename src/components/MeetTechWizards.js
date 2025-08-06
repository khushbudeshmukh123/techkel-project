// src/components/Header.js
import React from 'react'
import user from '../assets/images/user.png';
import LetsBuildCTA from './Let\'sBuildCTA';

const MeetTechWizards = () => {
  return (
    <section className='meet_tech_wizards mt_38 position-relative'>
      <div className='grey_box'>
          <div className='container'>
            <div className='row'>
               <div className='col-md-10 text-center mx-auto'>
                  <h4 className='headding mb_30'>Meet Our Tech Wizards</h4>
                  <p>At Techkel, our strength lies in our people. We’re a tight-knit team of developers, designers, strategists, and problem-solvers who share one common mission: to build intelligent, innovative digital products that make a difference. Each member of our team brings deep expertise, a passion for technology, and a relentless drive to create solutions that truly impact businesses. We thrive on collaboration, love big ideas, and never stop learning.</p>
               </div>
            </div>
            <div className='row mt_60'>
               <div className='col-md-4 my_20'>
                  <div className='gradiant_box'>
                      <div className='user_img'>
                        <img src={user} alt='user' className='w-100' />
                        <div className='image_content'>
                          <h4>Alex ender, <span> CEO of Eyese</span></h4>
                          <p className='mt_20'>Partnering with Techkel to develop our eCommerce platform was one of the best decisions we made.</p>
                          <a href='#' className='btn_link mt_14 d-inline-block'>Read More</a>
                        </div>
                      </div>
                    </div>
               </div>
               <div className='col-md-4 my_20'>
                  <div className='gradiant_box'>
                      <div className='user_img'>
                        <img src={user} alt='user' className='w-100' />
                        <div className='image_content'>
                          <h4>Alex ender, <span> CEO of Eyese</span></h4>
                          <p className='mt_20'>Partnering with Techkel to develop our eCommerce platform was one of the best decisions we made.</p>
                          <a href='#' className='btn_link mt_14 d-inline-block'>Read More</a>
                        </div>
                      </div>
                    </div>
               </div>
               <div className='col-md-4 my_20'>
                  <div className='gradiant_box'>
                      <div className='user_img'>
                        <img src={user} alt='user' className='w-100' />
                        <div className='image_content'>
                          <h4>Alex ender, <span> CEO of Eyese</span></h4>
                          <p className='mt_20'>Partnering with Techkel to develop our eCommerce platform was one of the best decisions we made.</p>
                          <a href='#' className='btn_link mt_14 d-inline-block'>Read More</a>
                        </div>
                      </div>
                    </div>
               </div>
               <div className='col-md-4 my_20'>
                  <div className='gradiant_box'>
                      <div className='user_img'>
                        <img src={user} alt='user' className='w-100' />
                        <div className='image_content'>
                          <h4>Alex ender, <span> CEO of Eyese</span></h4>
                          <p className='mt_20'>Partnering with Techkel to develop our eCommerce platform was one of the best decisions we made.</p>
                          <a href='#' className='btn_link mt_14 d-inline-block'>Read More</a>
                        </div>
                      </div>
                    </div>
               </div>
               <div className='col-md-4 my_20'>
                  <div className='gradiant_box'>
                      <div className='user_img'>
                        <img src={user} alt='user' className='w-100' />
                        <div className='image_content'>
                          <h4>Alex ender, <span> CEO of Eyese</span></h4>
                          <p className='mt_20'>Partnering with Techkel to develop our eCommerce platform was one of the best decisions we made.</p>
                          <a href='#' className='btn_link mt_14 d-inline-block'>Read More</a>
                        </div>
                      </div>
                    </div>
               </div>
               <div className='col-md-4 my_20'>
                  <div className='gradiant_box'>
                      <div className='user_img'>
                        <img src={user} alt='user' className='w-100' />
                        <div className='image_content'>
                          <h4>Alex ender, <span> CEO of Eyese</span></h4>
                          <p className='mt_20'>Partnering with Techkel to develop our eCommerce platform was one of the best decisions we made.</p>
                          <a href='#' className='btn_link mt_14 d-inline-block'>Read More</a>
                        </div>
                      </div>
                    </div>
               </div>

            </div>
          </div>
          <div className='container'>
            <LetsBuildCTA />
          </div>
          <div className='animated_video'>
               <video loop autoPlay muted>
                <source src="/assets/video/animated_video.mp4" type="video/mp4" />
               </video>
      </div>
      </div>

      
    </section>
  );
};

export default MeetTechWizards;
