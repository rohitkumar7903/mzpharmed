import React from 'react';
import Contactus from './Contactus'
import Carousell from './Carousel'
import Counter from './Counter';

function Herosection() {
  return (
    <>
      <section id='aboutus'>
        <div className="container mx-auto p-16">
          <div className="container mx-auto p-8 bg-white rounded-lg" style={{ width: '80em', height: '55em' }}>
            <div className="pl-12 inline-block pt-6" style={{ width: '36em', height: '23em' }}>
              <img src="src/assets/Aboutus.png" alt="About Us Image" />
            </div>
            <div className="pr-6 pl-10 inline-block" style={{ width: '36em', height: '23em' }}>
              <h2 className="text-3xl font-bold text-gray-800 mb-4 inline-block">About Us</h2>
              <p className="text-gray-600 mb-4 inline-block">
                We are a dedicated team of professionals committed to delivering excellence in everything we do. Our journey began with a simple yet powerful vision: to create meaningful experiences that resonate with our clients and communities. Over the years, we have grown and evolved, but our core values of integrity, innovation, and inclusivity have remained steadfast.
                <br />
                At the heart of our organization is a passionate belief in the power of collaboration. We believe that by working together and embracing diverse perspectives, we can achieve remarkable outcomes. Our team is made up of talented individuals from various backgrounds, each bringing unique skills and insights to the table. This diversity not only enriches our work but also fosters a culture of continuous learning and growth.
              </p>
            </div>
            <div className="pl-12 inline-block pt-6" style={{ width: '36em', height: '23em' }}>
              <h2 className="text-3xl font-bold text-gray-800 mb-4 inline-block">Vision & Mission</h2>
              <p className="text-gray-600 mb-4 inline-block">
                We are a dedicated team of professionals committed to delivering excellence in everything we do. Our journey began with a simple yet powerful vision: to create meaningful experiences that resonate with our clients and communities. Over the years, we have grown and evolved, but our core values of integrity, innovation, and inclusivity have remained steadfast.
                <br />
                At the heart of our organization is a passionate belief in the power of collaboration. We believe that by working together and embracing diverse perspectives, we can achieve remarkable outcomes. Our team is made up of talented individuals from various backgrounds, each bringing unique skills and insights to the table. This diversity not only enriches our work but also fosters a culture of continuous learning and growth.
              </p>
            </div>
            <div className="pr-8 pl-5 inline-block pt-8" style={{ width: '38em', height: '24em' }}>
              <img src="src/assets/vision2.png" alt="Vision Image" />
            </div>
          </div>
        </div>
      </section>

      {/* Product Section */}
      <section id="product">
        <div className="relative z-20 opacity-90" style={{ height: '30em' }}>
          <div className="absolute top-0 left-0 p-16 z-30" style={{ width: '35em', height: '23em', right: '152px' }}>
            <h1 className="text-5xl font-bold text-white pl-[2.5em]" style={{ left: '180px', top: '125px', width: '28em' }}>See Our Products</h1>
            <br />
            <p className="text-xl font-bold text-[#2b4183] pl-[1em]" style={{ left: '180px', top: '125px', width: '32em' }}>
              We have several product candidates in development that we believe have been significantly de-risked.
            </p>
            <br />
            <p className="text-l font-bold text-white pl-[1.5em]" style={{ left: '180px', top: '200px', width: '45em' }}>
              At vero eos et accusam justo duo dolores et ea rebuit et clita kasd gubergren no sea takimata sanctus est lorem ipsum dolor consetetur sadipscing elitr sed diam nonumy eirmod tempor invidunt ut labore magna aliquyam sedam voluptua at vero eos et accusam et justo duo dolores..
            </p>
            <br />
            <div className="pl-[3em]">
              <button
                className="border border-[#2b4183] text-xl font-bold text-[#2b4183] rounded-lg pl-[0.5em] bg-gray-200 hover:bg-[#2b4183] hover:text-white transition duration-500"
                style={{ left: '248px', top: '370px', width: '10em', height: '2.7em' }}
              >
                See all Projects
              </button>
            </div>
          </div>
          <img className="absolute top-12 right-12 object-cover z-30 rounded-lg" src="src/assets/seeproduct.png" alt="Overlay image" style={{ width: '35em', height: '23em' }} />
        </div>
      </section>

      <Carousell />

      <section id='contactus' className='bg-[#1d4249]'><Contactus /></section>
      <Counter></Counter>
    </>
  );
}

export default Herosection;
