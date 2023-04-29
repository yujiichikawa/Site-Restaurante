import React, {useState} from 'react';
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'

const NavBar = () => {
  const [nav, setNav] = useState(false)
  const handleNav = () => {
        setNav(!nav)
  }

  return (
    <div className='w-full h-[90px] bg-[#270002]'>
      <div className='max-w-[1240px] mx-auto px-4 flex justify-between items-center h-full'>
        <div>
          <h1 className='text-[var(--primary-amarelo)]'>LOGO</h1>
        </div>
        <div className='hidden md:flex'>
          <ul className='flex text-white items-center'>
            <li>Desenvolvedores</li>
            <li>Sobre</li>
          </ul>
        </div>
        <div onClick={handleNav} className='block md:hidden'>
            {nav ? <AiOutlineClose size={30} className='text-white' /> : <AiOutlineMenu size={30} className='text-white' />} 
        </div>
        <div className={nav ? 'w-full bg-amber-600 text-white absolute top-[90px] left-0 flex justify-center text-center' : 
        'absolute left-[-100%]'}>
        <ul>
            <li className='text-2xl'>Platform</li>
            <li className='text-2xl'>Developers</li>
            <li className='text-2xl'>About</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default NavBar