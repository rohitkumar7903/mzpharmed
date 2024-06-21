import React from 'react';
import Navbar from '../components/Navbar';
import Herosection from './Herosection';

import Footer from './Footer';

function Landing() {
  return (
    <>
      <Navbar />
      <br />
      <br />
      
      <section id="home" className="relative w-full overflow-hidden">
  <img className='w-full  pt-2.5 md:pt-5 lg:pt-10 object-cover ' src="src/assets/bgimageafrican (1).png" alt="Background" />
</section>

      <Herosection />
      
      <Footer />
      
    </>
  );
}

export default Landing;
