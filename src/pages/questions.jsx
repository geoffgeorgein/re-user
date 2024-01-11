
import LeftSidebar from '../components/leftSidebar';
import HomeMainbar from '../components/homeMainbar';
import RightSidebar from '../components/rightSidebar';

const Questions = ({slideIn,handleSlideIn}) => {
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

export default Questions;