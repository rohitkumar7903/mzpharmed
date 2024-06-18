import React, { useState } from 'react';
import { TiChevronLeftOutline, TiChevronRightOutline } from 'react-icons/ti';

import '../Carousel.scss'
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
// import image11 from '../assets/whitemedi.jpg'

const CARDS = 10;
const MAX_VISIBILITY = 3;

const Card = ({ image }) => (
  <div className='bg-white p-4 rounded shadow-lg' style={{ width: '14em', height: '16rem' }}>
    <img src={image} alt='Card' className='w-full h-full object-cover rounded' />
  </div>
);

const Carousel = ({ children }) => {
  const [active, setActive] = useState(2);
  const count = React.Children.count(children);

  const nextSlide = () => {
    setActive((prevActive) => (prevActive + 1) % count);
  };

  const prevSlide = () => {
    setActive((prevActive) => (prevActive - 1 + count) % count);
  };

  return (
    <div id='boody' className='relative flex justify-center items-center w-full h-full'>
      <button
        className='absolute left-0 z-10'
        onClick={prevSlide}
        style={{ top: '50%', transform: 'translateY(-50%)' }}
      >
        <TiChevronLeftOutline size={40} />
      </button>
      <div className='flex overflow-hidden w-full' style={{ height: '20rem' }}>
        {React.Children.map(children, (child, i) => (
          <div
            className='transition-transform duration-500 flex-none'
            style={{
              transform: `translateX(${-100 * (active - i)}%)`,
              opacity: Math.abs(active - i) >= MAX_VISIBILITY ? 0 : 1,
              display: Math.abs(active - i) > MAX_VISIBILITY ? 'none' : 'block',
            }}
          >
            {child}
          </div>
        ))}
      </div>
      <button
        className='absolute right-0 z-10'
        onClick={nextSlide}
        style={{ top: '50%', transform: 'translateY(-50%)' }}
      >
        <TiChevronRightOutline size={40} />
      </button>
    </div>
  );
};

const Carousell = () => {
  const images = [
    { id: 1, image: image1 },
    { id: 2, image: image2 },
    { id: 3, image: image3 },
    { id: 4, image: image4 },
    { id: 5, image: image5 },
    { id: 6, image: image6 },
    { id: 7, image: image7 },
    { id: 8, image: image8 },
    { id: 9, image: image9 },
    { id: 10, image: image10 },
    // { id: 11, image: image11 },
  ];

  return (
    <div className='w-full h-[24em] flex justify-center items-center' style={{ backgroundImage: "linear-gradient(45deg, #4CAF50, #2196F3)" }}>

      <div className='w-3/4  h-96 ' style={{ backgroundImage: "linear-gradient(45deg, #4CAF50, #2196F3)" }}>
        <Carousel>
          {images.map((image, i) => (
            <Card key={i} image={image.image} />
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Carousell;
