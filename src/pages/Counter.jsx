import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
  FaUtensils,
  FaSmileBeam,
  FaList,
  FaStar,
  FaShippingFast,
} from 'react-icons/fa';
import { GiMedicines } from 'react-icons/gi';

const CountUpAnimation = ({ iconComponent, initialValue, targetValue, text, height }) => {
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
    <div className={`w-full sm:w-3/4 md:w-2/3 lg:w-3/4 xl:w-4/5 mx-auto px-4 mb-8`} style={{ height }}>
      <div className="flex flex-col items-center justify-center bg-white shadow-lg rounded-xl p-6 transform transition-transform duration-300 hover:scale-105 h-full">
        <div className="text-sky-600 text-5xl sm:text-6xl mb-4">{iconComponent}</div>
        <span className="text-sky-600 font-semibold text-4xl sm:text-5xl mb-2">{count}</span>
        <span className="text-gray-800 text-lg sm:text-xl font-semibold uppercase text-center">{text}</span>
      </div>
    </div>
  );
};

function Counter({ height = 'auto', paddingY = 'py-1', marginBottom = 'mb-12', textPadding = 'pt-4.5' }) {
  const { t, i18n } = useTranslation();
  return (
    <div
      className={`${paddingY} md:pt-16 md:pb-20`}
      style={{
        backgroundImage: 'linear-gradient(to bottom, #255962, #204d55, #1c4249, #17373d, #132c31)',
      }}
    >
      <div className="container mx-auto px-4 pt-[]">
        <h1 className={`text-center font-bold text-5xl sm:text-4xl md:text-5xl pt-[3.7em] ${marginBottom} text-[#fafafa] ${textPadding}`}>
          {t("Our happy customers.Our happy customers head")}
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <CountUpAnimation
            iconComponent={<FaShippingFast />}
            initialValue={0}
            targetValue={150}
            text= {t("Our happy customers.FAST DELIVERIES")}
            height={height}
          />
          <CountUpAnimation
            iconComponent={<FaSmileBeam />}
            initialValue={0}
            targetValue={200}
            text={t("Our happy customers.HAPPY CUSTOMERS")}
            height={height}
          />
          <CountUpAnimation
            iconComponent={<GiMedicines />}
            initialValue={0}
            targetValue={250}
            text={t("Our happy customers.+ MEDICINES")}
            height={height}
          />
          <CountUpAnimation
            iconComponent={<FaStar />}
            initialValue={0}
            targetValue={300}
            text={t("Our happy customers.FIVE STARS")}
            height={height}
          />
        </div>
      </div>
    </div>
  );
}

export default Counter;
