import React, { useState } from 'react'
import AliceCarousel from 'react-alice-carousel'
import HomeSectionCard from '../HomeSectionCard/HomeSectionCard';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import { Button } from '@mui/material';
import { mens_kurta } from '../../../Data copy/Men/men_kurta';
// import { mens_kurta } from '../../../Data/Mens_kurta';
const HomeSectionCarosel = ({data,sectionName}) => {
    const [ActiveIndex,setActiveIndex]=useState(0);

    const responsive = {
        0: { items: 1 },
        720: { items: 3 },
        1024: { items: 5.5 },
    };
    const slidePrev=()=>setActiveIndex(ActiveIndex-1);
    const slideNext=()=> setActiveIndex(ActiveIndex+1);
    const syncActiveIndex=({item})=>setActiveIndex(item);
    const items = data?.slice(0,10).map((item) =>( <div>
    {" "}
<HomeSectionCard product={item} />
    </div>
    ));
    return (
        <div className=' border'>
            <h2 className='text-2xl font-extrabold text-gray-500 py-5'>{sectionName}</h2>
            <div className='relative p-5 border' >
                <AliceCarousel
                    items={items}
                    disableButtonsControls
                    disableDotsControls
                    responsive={responsive}
                    onSlideChanged={syncActiveIndex}
                    activeIndex={ActiveIndex}
                />
               {ActiveIndex !==items.length-5 && <Button variant='contained' className='z-50' 
                onClick={slideNext}
                sx={{
                    position: 'absolute', top: "8rem", right: "0rem",
                    transform: "translateX(50%) rotate(90deg)", bgcolor: "white"
                }}
                    aria-label='next'>
                    <KeyboardArrowLeftIcon sx={{ transform: "rotate(90deg)", color: "black" }} />
                </Button>}
                {ActiveIndex !==0 && <Button variant='contained' className='z-50' onClick={slidePrev} sx={{
                    position: 'absolute', top: "8rem", left: "0rem",
                    transform: "translateX(-50%) rotate(-90deg)", bgcolor: "white"
                }}
                    aria-label='next'>
                    <KeyboardArrowLeftIcon sx={{ transform: "rotate(90deg)", color: "black" }} />
                </Button>}
            </div>
        </div>
    )
}

export default HomeSectionCarosel
