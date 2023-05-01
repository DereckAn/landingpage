import React from 'react';
// import { Tilt } from 'react-tilt';
// import { motion } from 'framer-motion';

import { Construyendo_relaciones_genuinas } from '../data/dummy';

const ServiceCard = ({ index, title, icon }) => (
    <div className='xs:w-[250px] '>
        <div 
        className='bg-transparent rounded-[50px] py-5 px-12 min-h-[280px] flex justify-evenly
        items-center flex-col'
        style={{ 
          backdropFilter: 'blur(10px)',
          backgroundColor: 'rgba(128, 128, 128, 0.2)'
        }}> 

        <img  src={icon} alt={title} 
        className='w-16 h-16'/>

          <h3 className='text-white text-[20px] font-bold text-center absolute inset-x-0 bottom-10 '> {title} </h3>
        </div>
    </div>
  )

const Construyendo = () => { 
  return (
    <>
      <div className='sm:px-16 px-6 sm:py-16 py-10'>
        <p className={`sm:text-[18px] text-[14px] uppercase tracking-wider text-center font-semibold dark:text-gray-200`}>
        Trabajo Previo
        </p>
        <h2 className={`font-semibold dark:text-gray-200 md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]`}>Construyendo relaciones genuinas.</h2>
      </div>

      <div className='mt-20 flex flex-wrap gap-10 sm:px-16 px-6 sm:py-16 py-10'>
        {Construyendo_relaciones_genuinas.map((service, index) => (
          <ServiceCard key={service.title}
          index={index} {...service}/>
          
        ))}
        
      </div>
    </>
  );
};

export default Construyendo ;