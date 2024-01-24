import React from 'react'
import { MainCarouselData } from './MainCarouselData';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { useNavigate } from 'react-router-dom';
const MainCarosel = () => {
  const navigate = useNavigate();
    const items = MainCarouselData.map((item)=>(
    <img className='cursor-pointer' role='presentation' 
    onClick={() => navigate(item.path)}
    src={item.image} alt=''/>));

  return (
    <AliceCarousel
    items={items}
    disableButtonsControls
    autoPlay
    autoPlayInterval={1000}
    infinite
/>
  )
}

export default MainCarosel
