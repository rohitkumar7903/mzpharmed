import React, { useEffect, useState } from 'react';
import {
  FaUtensils,
  FaSmileBeam,
  FaList,
  FaStar,
  FaShippingFast
} from 'react-icons/fa';
import { GiMedicines } from "react-icons/gi";

const CountUpAnimation = ({ iconComponent, initialValue, targetValue, text }) => {
  const [count, setCount] = useState(initialValue);
  const duration = 5000; 

  useEffect(() => {
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
  }, [targetValue, initialValue]);

  return (
    <div className="w-20vmin h-7.5vmin flex flex-col justify-around p-0 relative bg-white shadow-lg rounded-xl text-center transform transition-transform duration-300 hover:scale-105">
      <div className="text-sky-600 text-4xl text-center">{iconComponent}</div>
      <span className="text-sky-600 font-semibold text-4xl">{count}</span>
      <span className="text-gray-800 text-xl p-2 font-semibold uppercase">{text}</span>
    </div>
  );
};

function Counter() {
  return (
    <div className="flex flex-col justify-center items-center h-[80vh] bg-[#1d4249]">
      <h1 className="text-center font-bold text-5xl mb-10 text-[#4c6fba]">Our happy customers</h1>
      <div className="flex justify-around gap-[8em] flex-wrap w-full lg:w-auto">
        <CountUpAnimation
          iconComponent={<FaShippingFast />}
          initialValue={0}
          targetValue={150}
          text="Fast Deliveries"
        />
        <CountUpAnimation
          iconComponent={<FaSmileBeam />}
          initialValue={0}
          targetValue={200}
          text="Happy Customers"
        />
        <CountUpAnimation
          iconComponent={<GiMedicines />}
          initialValue={0}
          targetValue={250}
          text="+ Medicine"
        />
        <CountUpAnimation
          iconComponent={<FaStar />}
          initialValue={0}
          targetValue={300}
          text="Five Stars"
        />
      </div>
    </div>
  );
}

export default Counter;
