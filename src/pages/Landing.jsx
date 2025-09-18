import React from 'react';
import Navbar from '../components/Navbar';
import Herosection from './Herosection';
import mgimage from '../assets/bgimageafrican (1).png';
import Footer from './Footer';

function Landing() {
  return (
    <>
      <Navbar />
      <br />
      <br />
      
      <section id="home" className="relative w-full overflow-hidden">
  <img className="w-full object-cover" src={mgimage} alt="Background" />
</section>


      <Herosection />
      
      <Footer />
      
    </>
  );
}

export default Landing;
