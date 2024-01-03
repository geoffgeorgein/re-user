import { Route, Routes } from "react-router-dom";
import "./App.css";

import HomePage from "./pages/homePage";
import Auth from "./pages/auth";
import Navbar from "./components/navbar";
import { useEffect, useState } from "react";
import Questions from "./pages/questions";
import AskQuestion from "./pages/askQuestion";
import DisplayQuestion from "./pages/displayQuestion";
import { useDispatch } from "react-redux";
import { fetchAllQuestions } from "./actions/question";
import Tags from "./pages/tags";
import Users from "./pages/users";
import { fetchAllUsers } from "./actions/users";
import UserProfile from "./pages/userProfile";

function App() {
  const [slideIn, setSlideIn] = useState(true);

  const dispatch = useDispatch();
  fetchAllQuestions();
  console.log("ftch");
  useEffect(() => {
    dispatch(fetchAllQuestions());
    console.log("ftch1");

    dispatch(fetchAllUsers());
  }, [dispatch]);

  useEffect(() => {
    if (window.innerWidth <= 760) {
      setSlideIn(false);
    }
  }, []);

  const handleSlideIn = () => {
    if (window.innerWidth <= 760) {
      setSlideIn((state) => !state);
    }
  };
  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={<HomePage slideIn={slideIn} handleSlideIn={handleSlideIn} />}
        ></Route>
        <Route path="/auth" element={<Auth />}></Route>
        <Route path="/questions" element={<Questions />}></Route>
        <Route path="/askquestion" element={<AskQuestion />}></Route>
        <Route path="/questions/:id" element={<DisplayQuestion />}></Route>
        <Route path="/tags" element={<Tags />}></Route>

        <Route
          path="/users"
          element={<Users slideIn={slideIn} handleSlideIn={handleSlideIn} />}
        /> 
        <Route
        path="/Users/:id"
        element={
          <UserProfile slideIn={slideIn} handleSlideIn={handleSlideIn} />
        }
      />
      </Routes>
    </>
  );
}

export default App;
