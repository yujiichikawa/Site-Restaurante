import React from 'react';
import AboutCard from './AboutCard';
import R1 from '../img/refeicao/fish-gdd8d81dba_640.jpg'
import R2 from '../img/refeicao/food-g6572c8b26_640.jpg'
import R3 from '../img/refeicao/food-gb32109986_640.jpg'
import R4 from '../img/refeicao/lunch-g4cd884ad2_640.jpg'
import S1 from '../img/sobremessas/cake-g4e32c117a_640.jpg'
import S2 from '../img/sobremessas/cake-gab7b11679_640.jpg'
import S3 from '../img/sobremessas/caramel-g8ea08945a_640.jpg'
import S4 from '../img/sobremessas/s1.jpg'
import B1 from '../img/bebidas/beer-gd97cf0757_640.jpg'
import B2 from '../img/bebidas/champagne-g4eade4bfc_640.jpg'
import B3 from '../img/bebidas/coffee-gbee53861d_640.jpg'
import B4 from '../img/bebidas/red-wine-gac812faa0_640.jpg'

const About = () => {
  return (
    <div className='w-full bg-yellow-900 text-white text-center'>
      <div className='max-w-[1240px] mx-auto px-4 py-16 '>
        <div>
          <h1 className='py-4'>Alguns pratos nossos...</h1>
          <p className='py-4 text-xl'>
            Refeições
          </p>

          <div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-4'>
            <AboutCard img={R1} text='Descrição' />
            <AboutCard img={R2} text='Descrição' />
            <AboutCard img={R3} text='Descrição' />
            <AboutCard img={R4} text='Descrição' />
          </div>
          <p className='py-4 text-xl'>
            Sobremesas
          </p>

          <div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-4'>
            <AboutCard img={S1} text='Descrição' />

            <AboutCard img={S2} text='Descrição' />
            <AboutCard img={S3} text='Descrição' />
            <AboutCard img={S4} text='Descrição' />
          </div>
          <p className='py-4 text-xl'>
            Bebidas
          </p>

          <div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-4'>
            <AboutCard img={B1} text='Descrição' />
            <AboutCard img={B2} text='Descrição' />
            <AboutCard img={B3} text='Descrição' />
            <AboutCard img={B4} text='Descrição' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;