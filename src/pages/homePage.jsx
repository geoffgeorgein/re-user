import React, { useEffect, useState } from 'react'

import './homepage.scss';
import LeftSidebar from '../components/leftSidebar';
import HomeMainbar from '../components/homeMainbar';
import RightSidebar from '../components/rightSidebar';

const HomePage = ({slideIn,handleSlideIn}) => {

  
  return (
    <div className='homepage'>

      <LeftSidebar slideIn={slideIn} handleSlideIn={handleSlideIn}/>
      <div className='home-container'>

        <HomeMainbar/>
        {/* <RightSidebar/> */}

      </div>
        
        
    
    </div>
  )
}

export default HomePage