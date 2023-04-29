import React from 'react'

const AboutCard = (props) => {
  return (
    <div className='flex flex-col border text-left rounded-2xl py-12 px-8'>
      <img src={props.img} alt="comida" />
      <p>{props.text}</p>
    </div>
  )
}

export default AboutCard