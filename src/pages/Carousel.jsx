import React, { useState } from 'react';
import { TiChevronLeftOutline, TiChevronRightOutline } from 'react-icons/ti';

// Import images
import image1 from '../assets/1.jpg';
import image2 from '../assets/2.jpg';
import image3 from '../assets/3.jpg';
import image4 from '../assets/4.jpg';
import image5 from '../assets/5.jpg';
import image6 from '../assets/6.jpg';
import image7 from '../assets/7.jpg';
import image8 from '../assets/8.jpg';
import image9 from '../assets/9.jpg';
import image10 from '../assets/10.jpg';

// Card component
const Card = ({ image }) => (
  <div className='bg-white p-4 rounded shadow-lg' style={{ width: '14em', height: '16rem' }}>
    <img src={image} alt='Card' className='w-full h-full object-cover rounded' />
  </div>
);

// Carousel component
const Carousel = ({ images, activeIndex }) => {
  return (
    <div className='relative flex justify-center items-center w-full'>
      <div className='flex overflow-hidden w-full' style={{ height: '20rem' }}>
        {images && images.map((image, i) => (
          <div
            key={i}
            className='transition-transform duration-500 flex-none mx-2' // Added mx-2 for margin between images
            style={{
              transform: `translateX(${-100 * (activeIndex - i)}%)`,
              opacity: Math.abs(activeIndex - i) >= 3 ? 0 : 1,
              display: Math.abs(activeIndex - i) > 2 ? 'none' : 'block',
            }}
          >
            <Card image={image} />
          </div>
        ))}
      </div>
    </div>
  );
};

// Carousell component (wrapper)
const Carousell = () => {
  const images = [
    image1, image2, image3, image4, image5,
    image6, image7, image8, image9, image10
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className='w-full h-[24em] flex justify-center items-center relative'>
      <Carousel images={images} activeIndex={activeIndex} />
      <button className='absolute left-0 z-10 text-white' onClick={prevSlide} style={{ top: '50%', transform: 'translateY(-50%)' }}>
        <TiChevronLeftOutline size={40} />
      </button>
      <button className='absolute right-0 z-10 text-white' onClick={nextSlide} style={{ top: '50%', transform: 'translateY(-50%)' }}>
        <TiChevronRightOutline size={40} />
      </button>
    </div>
  );
};

// App component (or any other wrapper component)
const App = () => {
  return (
    <div>
      <Carousell />
    </div>
  );
};

export default App;
