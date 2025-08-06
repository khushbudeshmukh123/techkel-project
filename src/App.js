/*import logo from './logo.svg';*/
/*import logo from './assets/images/logo.png';

import Header from './components/Header';
import Footer from './components/Footer';
import Servicecard from './components/Servicecard';
 import Joincard from './components/Joincard';
 import AreaOfMastery from './components/AreaOfMastery';
import HeroBaneer from './components/Hero_banner';
import MeetTechWizards from './components/MeetTechWizards';
import WorkThatSpeaks from './components/WorkThatSpeaks';

function App() {
  return (
    <div className="App">
      <Header />
<HeroBaneer />
      <AreaOfMastery />
      <WorkThatSpeaks />
      <MeetTechWizards />
      
     <Footer />

     <Servicecard/>


     <Joincard/>
    </div>
  );
}

export default App;*/
import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import HeroBaneer from './components/Hero_banner';
// Pages or components for routes
//import Home from './pages/Home';  // Home page component (HeroBaneer etc)
//import WhatWeDoBest from './pages/WhatWeDoBest';
import WorkThatSpeaks from './components/WorkThatSpeaks';
//import GrowWithUs from './pages/GrowWithUs';
//import WhoWeAre from './pages/WhoWeAre';
import MeetTechWizards from './components/MeetTechWizards';
//import HireADeveloper from './pages/HireADeveloper';
//import Connect from './pages/Connect';

function App() {
  return (
    <>
      <Header />
      <Routes>
      
         <Route path="/" element={<HeroBaneer />} />
  <Route path="/what-we-do-best" element={<HeroBaneer />} /> 
       <Route path="/work-that-speaks" element={<WorkThatSpeaks />} />
      
        <Route path="/meet-our-experts" element={<MeetTechWizards />} />
        
      </Routes>
      <Footer />
    </>
  );
}

export default App;


