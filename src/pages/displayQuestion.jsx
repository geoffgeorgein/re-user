
import LeftSidebar from "../components/leftSidebar";
import RightSidebar from "../components/rightSidebar";
import Questionsdetails from "./questiondetails";
import "../App.css"


const DisplayQuestion = ({ slideIn, handleSlideIn }) => {
  return (
    <div className="homepage">
      <LeftSidebar slideIn={slideIn} handleSlideIn={handleSlideIn} />
      <div className="home-container">
        <Questionsdetails />
        <RightSidebar />
      </div>
    </div>
  );
};

export default DisplayQuestion;