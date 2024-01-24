import React from 'react'
import MainCarosel from '../../components/HomeCarosel/MainCarosel'
import HomeSectionCarosel from '../../components/HomeSectionCarosel/HomeSectionCarosel'
import { mens_kurta } from '../../../Data copy/Men/men_kurta'
import { mensShoesPage1 } from '../../../Data copy/shoes'
import { dressPage1 } from '../../../Data copy/dress/page1'
import { mens_shoes } from '../../../Data copy/Men/men_shirt'
import { sareePage1 } from '../../../Data copy/Saree/page1'
import { lehngacholiPage2 } from '../../../Data copy/Saree/lenghaCholiPage2'
// import { men_shirt } from '../../../Data copy'



const Homepage = () => {
  return (
    <div>
      <MainCarosel/>
      <div className='space-y-10 py-20 flex flex-col justify-center px-5 lg:px-10'>
        <HomeSectionCarosel data={mens_kurta} sectionName={"Men's Kurta"}/>
        <HomeSectionCarosel data={mensShoesPage1} sectionName={"Men's Shoes"}/>
        <HomeSectionCarosel data={mens_shoes} sectionName={"Men's Shirt"}/>
        <HomeSectionCarosel data={dressPage1} sectionName={"Womens's Dress"}/>
        <HomeSectionCarosel data={sareePage1} sectionName={"Womens's sharee"}/>
        <HomeSectionCarosel data={lehngacholiPage2} sectionName={"Womens's lenghaCholi"}/>
        {/* <HomeSectionCarosel data={mens_kurta} sectionName={"Womens's sharee"}/> */}
       


      </div>
    </div>

  )
}

export default Homepage
