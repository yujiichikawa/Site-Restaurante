import React from 'react';
import Terminal from '../img/terminal.png'

const Developers = () => {
  return (
    <div className='w-full text-white bg-black'>
      <div className='max-w-[1240px] mx-auto px-4 py-4 md:flex'>
        <div>
          <h1>Site Desenvolvido por Thiago yuji.</h1>
          <p className='pag'>
            <p className='pag'><a href="https://www.linkedin.com/in/thiago-ichikawa-0bba07205/">Linkedin do desenvolvedor</a>
            </p>
            <p className='pag'><a href="https://github.com/yujiichikawa">GitHub do desenvolvedor</a></p>
          </p>
        </div>
        <div className='flex justify-center w-full py-16'>
            <img className='max-w-[250px] shadow-lg shadow-cyan-500/50' src={Terminal} alt="/" />
        </div>
      </div>
    </div>
  );
};

export default Developers;