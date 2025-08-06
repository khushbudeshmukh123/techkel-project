// src/components/Header.js
import React from 'react'
import languages_arrow from '../assets/images/languages_arrow.svg';

const AreaOfMastery = () => {
  return (
    <section className='area_of_mastery py_100'>
      <div className='container'>
         <div className='row'>
            <div className='col-md-10'>
               <h4 className='headding'>Our Areas of Mastery</h4>
               <p className='mt_30'>At Techkel, we don’t just build digital products—we engineer solutions that power transformation. With a multidisciplinary team of strategists, designers, and developers, our expertise spans across key areas of modern technology. Each project we take on is backed by deep domain knowledge, cutting-edge tools, and a passion for building meaningful digital experiences.</p>
            </div>
         </div>
         <div className='row mt_60'>
            <div className='col-md-12'>
               <div className='languages border-bottom'>
                  <h5>Frontend <img src={languages_arrow} className='ml_12'/></h5>
                  <div className='d-flex badge_items my_24'>
                     <div className='badge'>HTML5</div>
                     <div className='badge'>CSS3</div>
                     <div className='badge'>JavaScript</div>
                     <div className='badge'>ReactJS</div>
                     <div className='badge'>AngularJS</div>
                     <div className='badge'>NextJS</div>
                  </div>
               </div>
               <div className='languages border-bottom mt_24'>
                  <h5>Backend <img src={languages_arrow} className='ml_12'/></h5>
                  <div className='d-flex badge_items my_24'>
                     <div className='badge'>NodeJS</div>
                     <div className='badge'>Python</div>
                     <div className='badge'>.NET</div>
                  </div>
               </div>
               <div className='languages border-bottom mt_24'>
                  <h5>Database <img src={languages_arrow} className='ml_12'/></h5>
                  <div className='d-flex badge_items my_24'>
                     <div className='badge'>SQL Server</div>
                     <div className='badge'>MongoDB</div>
                     <div className='badge'>Oracle</div>
                  </div>
               </div>
               <div className='languages border-bottom mt_24'>
                  <h5>Cloud <img src={languages_arrow} className='ml_12'/></h5>
                  <div className='d-flex badge_items my_24'>
                     <div className='badge'>Google Cloud</div>
                     <div className='badge'>Azure</div>
                     <div className='badge'>DigitalOcean</div>
                     <div className='badge'>Rackspace</div>
                  </div>
               </div>
               <div className='languages border-bottom mt_24'>
                  <h5>AI & LLMs <img src={languages_arrow} className='ml_12'/></h5>
                  <div className='d-flex badge_items my_24'>
                     <div className='badge'>OpenAI</div>
                     <div className='badge'>Hugging Face</div>
                     <div className='badge'>LangChain</div>
                     <div className='badge'>LIamaIndex</div>
                     <div className='badge'>Microsoft AutoGen</div>
                  </div>
               </div>
               
            </div>
         </div>
      </div>
    </section>
  );
};

export default AreaOfMastery;
