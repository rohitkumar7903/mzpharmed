import React from 'react';
import { useTranslation } from 'react-i18next';
import {
  FaUtensils,
  FaSmileBeam,
  FaStar,
  FaShippingFast,
} from 'react-icons/fa';
import { GiMedicines } from 'react-icons/gi';
import CountUpAnimation from './CountUpAnimation'; // Ensure correct path

function Counter({ height = 'auto', paddingY = 'py-1', marginBottom = 'mb-12', textPadding = 'pt-4.5' }) {
  const { t } = useTranslation();

  return (
    <div className='counterbackground'>
      <div className="container mx-auto px-4 pt-[]">
        <h1 className={`text-center font-bold text-5xl sm:text-4xl md:text-5xl ${marginBottom} text-[#fafafa] ${textPadding}`}>
          {t("Our happy customers.Our happy customers head")}
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <CountUpAnimation
            iconComponent={<FaShippingFast />}
            initialValue={0}
            targetValue={150}
            text={t("Our happy customers.FAST DELIVERIES")}
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
