import React from 'react'
import './Hero.scss';

interface HeroProps {
    header: string;
}
const Hero:React.FC<HeroProps> = (props: HeroProps) => {
  return (
    <div className='Hero'>
        <h1>{props.header}</h1>
    </div>
  )
}

export default Hero