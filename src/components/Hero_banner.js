// src/components/Header.js
/*import React from 'react';
import logo from '../assets/images/logo.png';
import button_right_arrow from '../assets/images/button_right_arrow.svg';
import LogoMarquee from './Marquee';
import HomeTopPart from './HomeTopPart';
import WhatWedo from './WhatWeDoBest';

const HeroBaneer = () => {
  return (
    <section className='herobaneer_section'>
      <div className='container-fluid'>
        <div className='herobaneer_bg'>
            <HomeTopPart />
            <LogoMarquee />
            <WhatWedo />
        </div>
      </div>
    </section>
  );
};

export default HeroBaneer;*/
import React from 'react';
import { useLocation } from 'react-router-dom'; // 👈 Import useLocation
import logo from '../assets/images/logo.png';
import button_right_arrow from '../assets/images/button_right_arrow.svg';
import LogoMarquee from './Marquee';
import HomeTopPart from './HomeTopPart';
import WhatWedo from './WhatWeDoBest';

const HeroBaneer = () => {
  const location = useLocation(); // 👈 Get current route path

  return (
    <section className='herobaneer_section'>
      <div className='container-fluid'>
        <div className='herobaneer_bg'>

         
          {location.pathname === '/' && (
            <>
              <HomeTopPart />
              <LogoMarquee />
              <WhatWedo />
            </>
          )}

         
          {location.pathname === '/what-we-do-best' && (
            <WhatWedo />
          )}

        </div>
      </div>
    </section>
  );
};

export default HeroBaneer;




