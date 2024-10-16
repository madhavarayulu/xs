import React from 'react';
import './home.css';
import HomeSection1 from './home-section-1/HomeSection1';
import HomeSection12 from './home-section-12/HomeSection12';
import HomeSection2 from './home-section-2/HomeSection2';
import HomeSection3 from './home-section-3/HomeSection3';
import HomeSection4 from './home-section-4/HomeSection4';
import HomeSection5 from './home-section-5/HomeSection5';

function Home() {
  return (
    <main>
      <HomeSection1 />
      <HomeSection2 />
      <HomeSection3 />
      <HomeSection4 />
      <HomeSection5 />
      <HomeSection12 />
    </main>
  );
}

export default Home;
