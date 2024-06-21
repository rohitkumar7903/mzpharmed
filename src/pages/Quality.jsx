import React from 'react';

function Quality() {
  return (
    <section id='quality' className="py-6 md:py-12"> {/* Reduced padding for different screen sizes */}
      <div className="quality-container mx-auto px-4 md:px-8 lg:px-16 max-w-7xl">
        <div className="quality-header flex flex-col items-center">
          <h1 className="OurDistributionNetwork quality-title font-poppins font-bold text-white text-center md:text-left text-4xl md:text-5xl mb-4 md:mb-0">QUALITY</h1>
        </div>
        <div className="quality-content flex flex-col md:flex-row items-center mt-4 md:mt-8"> {/* Reduced top margin for smaller height */}
          <div className="quality-text md:w-1/2 md:pr-4"> {/* Adjusted width and padding for different screen sizes */}
            <p className="text-lg text-white leading-relaxed my-2">
              All products supplied by Neomedic are manufactured at sites which maintain high levels of product quality. Products supplied by Neomedic are registered with MHRA and conform to CE marking requirements. Where applicable, products supplied by Neomedic are prequalified to WHO standards.
            </p>
            <p className="text-lg text-white leading-relaxed my-2">
              Using only approved raw materials, all Neomedic pharmaceutical products are produced to exacting regulatory requirements and are supported by full sets of local registrations, product dossiers, and equivalence testing. Our commitment to quality is further demonstrated through rigorous internal audits and continuous improvement processes that ensure our products consistently meet or exceed industry standards.
            </p>
          </div>
          <div className="quality-image md:w-1/2 ml-0 md:ml-4 mt-4 md:mt-0"> {/* Adjusted width and margins for different screen sizes */}
            <img className="w-full h-auto rounded-lg" src="src/assets/qualityphoto.jpg" alt="Laboratory" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Quality;
