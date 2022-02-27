import React from 'react'
import './Hero.scss';

interface HeroProps {
  header: string;
}
const Hero: React.FC<HeroProps> = ({header}) => {
  return (
    <div className='Hero'>
      <h1>{header}</h1>
    </div>
  )
}
export default Hero;