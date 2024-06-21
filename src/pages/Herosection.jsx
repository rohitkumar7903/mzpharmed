import React from 'react';
import Contactus from './Contactus';
import Carousell from './Carousel';
import Counter from './Counter';
import Distribution from './Distribution';
import Quality from './Quality';

function Herosection() {
  return (
    <>
      <section id='aboutus'>
        <div className="container mx-auto p-6 md:p-8 lg:p-16">
          <div className="container mx-auto p-4 md:p-8 lg:p-16 bg-white rounded-lg">
            <div className="md:flex md:space-x-8">
              <div className="w-full md:w-1/2">
                <img className="w-full h-auto" src="src/assets/Aboutus.png" alt="About Us Image" />
              </div>
              <div className="w-full md:w-1/2 mt-4 md:mt-0">
                <h2 className="text-2xl md:text-4xl font-bold text-gray-800 mb-4">About Us</h2>
                <p className="text-gray-600 mb-5 text-xl">
                  We are a dedicated team of professionals committed to delivering excellence in everything we do. Our journey began with a simple yet powerful vision: to create meaningful experiences that resonate with our clients and communities. Over the years, we have grown and evolved, but our core values of integrity, innovation, and inclusivity have remained steadfast.
                  <br />
                  At the heart of our organization is a passionate belief in the power of collaboration. We believe that by working together and embracing diverse perspectives, we can achieve remarkable outcomes. Our team is made up of talented individuals from various backgrounds, each bringing unique skills and insights to the table. This diversity not only enriches our work but also fosters a culture of continuous learning and growth.
                </p>
              </div>
            </div>
            <div className="md:flex md:space-x-8 mt-8">
              <div className="w-full md:w-1/2">
                <h2 className="text-2xl md:text-4xl font-bold text-gray-800 mb-4">Vision & Mission</h2>
                <p className="text-gray-600 mb-4 text-xl">
                  We are a dedicated team of professionals committed to delivering excellence in everything we do. Our journey began with a simple yet powerful vision: to create meaningful experiences that resonate with our clients and communities. Over the years, we have grown and evolved, but our core values of integrity, innovation, and inclusivity have remained steadfast.
                  <br />
                  At the heart of our organization is a passionate belief in the power of collaboration. We believe that by working together and embracing diverse perspectives, we can achieve remarkable outcomes. Our team is made up of talented individuals from various backgrounds, each bringing unique skills and insights to the table. This diversity not only enriches our work but also fosters a culture of continuous learning and growth.
                </p>
              </div>
              <div className="w-full md:w-1/2 mt-4 md:mt-0">
                <img className="w-full h-auto" src="src/assets/vision2.png" alt="Vision Image" />
              </div>
            </div>
          </div>
        </div>
      </section>
         
      {/* Product Section */}
    <div id="product">
      <section  className="relative z-20 bg-cover bg-center flex flex-col md:flex-row items-center p-8 md:p-16" >
  <div className="md:w-1/2 md:pr-8 text-center md:text-left">
    <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 OurDistributionNetwork">See Our Products</h1>
    <p className="text-lg md:text-xl font-bold text-[#2b4183] mb-4">
      We have several product candidates in development that we believe have been significantly de-risked.
    </p>
    <p className="text-sm md:text-lg  text-white mb-4 leading-relaxed">
      At vero eos et accusam justo duo dolores et ea rebuit et clita kasd gubergren no sea takimata sanctus est lorem ipsum dolor consetetur sadipscing elitr sed diam nonumy eirmod tempor invidunt ut labore magna aliquyam sedam voluptua at vero eos et accusam et justo duo dolores..
    </p>
    <button className="border border-[#2b4183] text-lg md:text-xl font-bold text-[#2b4183] rounded-lg bg-gray-200 hover:bg-[#2b4183] hover:text-white transition duration-500 px-4 py-2">
      See all Products
    </button>
  </div>
  <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center">
    <img className="object-cover z-30 rounded-lg" src="src/assets/seeproduct.png" alt="Product image" style={{ width: '100%', maxWidth: '500px', height: 'auto' }} />
  </div>
</section>
</div> 

       <Carousell />
       <Quality />
       <Distribution />
      
      <section id='contactus' className='bg-[#1d4249]'>
        <Contactus />
      </section>
      
     <Counter /> 
    </>
  );
}

export default Herosection;
