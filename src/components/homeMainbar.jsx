
import { useLocation, useNavigate } from 'react-router-dom';
import QuestionList from './questionList';
import "./homemainbar.scss";
import { useSelector } from 'react-redux';

const HomeMainbar = () => {

  const navigate=useNavigate();
  const location=useLocation();
  const user=2;

  const questionsList=useSelector(state=>state.questionsReducer);

  console.log("ques",questionsList);

  const questionsList1=[
    {
      id:1,
      votes:1,
      title:"what is a function",
      noOfAnswers:5,
      questionTags:['js','react','nodejs']
      
    },
    {
      id:2,
      votes:3,
      title:"what is a function",
      noOfAnswers:15,
      questionTags:['R','python','nodejs']
      
    }
  ]

  const redirect=()=>{

    if(user===null){
      alert("login or signup to ask question")
      navigate('/auth')
    }
    else{
      navigate("/askquestion");
    }
    
  }

  
  return (
    <div className='main-bar'>

      <div className='main-bar-header'>

        {

          location.pathname==='/'?<h1>Top Questions</h1>:<h1>ALL Questions</h1>
        }
        <button onClick={redirect} className='ask-btn'>Ask Question</button>

      </div>
      
      <div>
        {
          questionsList===null?
          <h1>...Loading</h1>:
          <>
            <p>{questionsList.data?.length?questionsList.data.length:questionsList1.length}questions</p>
            <QuestionList questionsList={questionsList.data?questionsList.data:questionsList1}/>
          </>
        }
      </div>

    </div>
  )
}

export default HomeMainbar;