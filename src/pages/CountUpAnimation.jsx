import React, { useEffect, useState } from 'react';
import useIntersectionObserver from './useIntersectionObserver'; // Ensure correct path
import { useTranslation } from 'react-i18next';

const CountUpAnimation = ({ iconComponent, initialValue, targetValue, text, height }) => {
  const [count, setCount] = useState(initialValue);
  const duration = 5000;
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.5 });

  useEffect(() => {
    if (!isVisible) return;

    let startValue = initialValue;
    const interval = Math.floor(duration / (targetValue - initialValue));

    const counter = setInterval(() => {
      startValue += 1;
      setCount(startValue);
      if (startValue >= targetValue) {
        clearInterval(counter);
      }
    }, interval);

    return () => {
      clearInterval(counter);
    };
  }, [isVisible, targetValue, initialValue]);

  return (
    <div ref={ref} className={`w-full sm:w-3/4 md:w-2/3 lg:w-3/4 xl:w-4/5 mx-auto px-4 mb-8`} style={{ height }}>
      <div className="flex flex-col items-center justify-center bg-white shadow-lg rounded-xl p-6 transform transition-transform duration-300 hover:scale-105 h-full">
        <div className="text-sky-600 text-5xl sm:text-6xl mb-4">{iconComponent}</div>
        <span className="text-sky-600 font-semibold text-4xl sm:text-5xl mb-2">{count}</span>
        <span className="text-gray-800 text-lg sm:text-xl font-semibold uppercase text-center">{text}</span>
      </div>
    </div>
  );
};

export default CountUpAnimation;
