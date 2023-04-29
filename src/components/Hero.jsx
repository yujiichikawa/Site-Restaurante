import React from 'react';

import heroVid from '../assets/comida.mp4';

const Hero = () => {
  return (
    <div className='w-full h-[90vh] top-[90px]'>
      <video
        className='object-cover h-full w-full absolute -z-10'
        src={heroVid}
        autoPlay
        loop
        muted
      />
      <div className='w-full h-[90%] flex flex-col justify-center items-center text-white px-4 text-center'>
        <h1 className='text-[var(--primary-laranja)]'>Restaurante Exemplo</h1>
        <h1 className='py-2'>
          <span className='text-[var(--primary-marrom)]'>Comidas e Bebidas</span>
        </h1>
        <p className='text-xl py-4'>
          Convidamos você para conhecer nosso restaurante localizado na rua xxx em yyy,
          contamos com vários prátos tipicos e atipicos da região.   
        </p>
      </div>
    </div>
  );
};

export default Hero;