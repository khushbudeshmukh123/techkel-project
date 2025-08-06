// src/components/Header.js
import React from 'react';
import { Tabs, Tab } from 'react-bootstrap';
import logo from '../assets/images/logo.png';
import user from '../assets/images/user.png';
import eyese_logo from '../assets/images/eyese_logo.png';
import ecb_logo from '../assets/images/ecb_logo.png';
import project1 from '../assets/images/project_1.png';

const LogoMarquee = () => {
  return (
     <div className='patners_section mt_50'>
        <div className='container'>
          <Tabs defaultActiveKey="home" id="uncontrolled-tab-example" className="mb-3 custom_tabs_1 z-1">
            <Tab eventKey="home" title={<img src={eyese_logo} alt="Home" />}>
              <div className='tabs_content mt_64'>
                <div className='row'>
                  <div className='col-md-4  h-auto'>
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
                  <div className='col-md-8'>
                    <div className='gradiant_box'>
                       <div className='project'>
                          <img src={project1} alt='user' className='w-100' />
                       </div>
                    </div>
                  </div>
                </div>
              </div>
            </Tab>
            <Tab eventKey="profile" title={<img src={ecb_logo} alt="Home" />}>
              <div className='tabs_content mt_64'>
                <div className='row'>
                  <div className='col-md-4  h-auto'>
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
                  <div className='col-md-8'>
                    <div className='gradiant_box'>
                       <div className='project'>
                          <img src={project1} alt='user' className='w-100' />
                       </div>
                    </div>
                  </div>
                </div>
              </div>
            </Tab>
            <Tab eventKey="contact" title={<img src={eyese_logo} alt="Home" />}>
              <div className='tabs_content mt_64'>
                <div className='row'>
                  <div className='col-md-4  h-auto'>
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
                  <div className='col-md-8'>
                    <div className='gradiant_box'>
                       <div className='project'>
                          <img src={project1} alt='user' className='w-100' />
                       </div>
                    </div>
                  </div>
                </div>
              </div>
            </Tab>
            <Tab eventKey="contact3" title={<img src={ecb_logo} alt="Home" />}>
              <div className='tabs_content mt_64'>
                <div className='row'>
                  <div className='col-md-4  h-auto'>
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
                  <div className='col-md-8'>
                    <div className='gradiant_box'>
                       <div className='project'>
                          <img src={project1} alt='user' className='w-100' />
                       </div>
                    </div>
                  </div>
                </div>
              </div>
            </Tab>
            <Tab eventKey="contact4" title={<img src={eyese_logo} alt="Home" />}>
              <div className='tabs_content mt_64'>
                <div className='row'>
                  <div className='col-md-4  h-auto'>
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
                  <div className='col-md-8'>
                    <div className='gradiant_box'>
                       <div className='project'>
                          <img src={project1} alt='user' className='w-100' />
                       </div>
                    </div>
                  </div>
                </div>
              </div>
            </Tab>
            <Tab eventKey="contact5" title={<img src={ecb_logo} alt="Home" />}>
              <div className='tabs_content mt_64'>
                <div className='row'>
                  <div className='col-md-4  h-auto'>
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
                  <div className='col-md-8'>
                    <div className='gradiant_box'>
                       <div className='project'>
                          <img src={project1} alt='user' className='w-100' />
                       </div>
                    </div>
                  </div>
                </div>
              </div>
            </Tab>
          </Tabs>
        </div>
   
     </div>
  );
};

export default LogoMarquee;
