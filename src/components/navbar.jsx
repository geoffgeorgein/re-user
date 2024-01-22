import  { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import logo from '../assets/logo.png';
import './navbar.scss';
import search from '../assets/search-solid.svg';
import Avatar from './avatar';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentUser } from "../actions/currentUser";
import decode from "jwt-decode";


const Navbar = () => {

  

  const dispatch = useDispatch();
  var User = useSelector((state) => state.currentUserReducer);
  const navigate = useNavigate();

  const handleLogout=()=>{
    dispatch({ type: "LOGOUT" });
    navigate("/");
    dispatch(setCurrentUser(null));
  }

  useEffect(()=>{
    const token = User?.token;
    if (token) {
      const decodedToken = decode(token);
      if (decodedToken.exp * 1000 < new Date().getTime()) {
        console.log("expiry",decodedToken.exp * 1000);
        handleLogout();
      }
    }
    dispatch(setCurrentUser(JSON.parse(localStorage.getItem('Profile'))));
  },[dispatch])

  console.log("User",User)

  return (
    <div className='navbar'>

        <div className='nav-container'>

        
        <Link to={'/'} className='nav-item nav-btn'  > 
        <h1 className='logo'> Q-App</h1>
          
            
        </Link>
        {/* <Link to={'/'} className='nav-item nav-btn list'>About</Link>
        <Link to={'/'} className='nav-item nav-btn list'>Products</Link>
        <Link to={'/'} className='nav-item nav-btn list'> For Teams</Link> */}

        <form>
          <input type='text' placeholder='...search'></input>
          <img src={search} alt='search' width='18' className='search-icon'></img>
        </form>

        <div className="navbar-2">
          {User === null ? (
            <Link to="/Auth" className="nav-item nav-links">
              Log in
              
            </Link>
          ) : (
            <>
              <Avatar
                backgroundColor="#009dff"
                px="6px"
                py="2px"
                borderRadius="50%"
                color="white"
              >
                <Link
                  to={`/users/${User?.result?._id}`}
                  style={{ color: "white", textDecoration: "none" }}
                >
                  {User?.result?.name.charAt(0).toUpperCase()}
                 
                </Link>
              </Avatar>
              <button className="nav-item nav-links" onClick={handleLogout}>
                Log out
              </button>
            </>
          )}
        </div>

        </div>
        
        
    </div>
  )
}

export default Navbar