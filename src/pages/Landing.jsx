import React from 'react';
import Navbar from '../components/Navbar';
import Herosection from './Herosection';

import Footer from './Footer';
import Divider from '../components/Divider';

function Landing() {
  return (
    <>
      <Navbar />
      <br />
      <br />
      <section id="home">
        <img className='w-[100%] pt-[2.5%]' src="src/assets/bgimageafrican (1).png" alt="" />
      </section>
      <Herosection />
      
      <Footer />
      
    </>
  );
}

export default Landing;
