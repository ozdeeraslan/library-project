import React, { useContext, useEffect, useState } from 'react';
import '../assets/styles/search.scss';
import DataContext from '../context/DataContext';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../context/AuthContext';
import axios from 'axios';


const Search = () => {
  const { dispatch } = useContext(DataContext);
  const [currentUser, setCurrentUser] = useState("");
  const { logout, isAuthenticated } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/login");

  }

  const handleLogout = () => {
    logout();
    navigate("/login");
  }

  const getCurrentUser = async () => {
    const url = "https://api.escuelajs.co/api/v1/auth/profile";
    const response = await axios.get(url, {
      headers: {
        "Authorization": `Bearer ${JSON.parse(localStorage.getItem("user")).access_token}`
      }
    });
    const user = await response.data;
    setCurrentUser(user);
  }
  useEffect(() => {
    if (JSON.parse(localStorage.getItem("user"))) {
      getCurrentUser();
    }
  }, [])

  return (
    <div className='search-container'>
      {/* case-8 */}
      <div className="kullanici">
        {
          currentUser && (
            <div className="user">
              <img src={currentUser.avatar} alt="photo" />
              <div className="text-profile">
                <span>{currentUser.name}-{currentUser.role}</span>
                <span>{currentUser.email}</span>
              </div>
            </div>
          )
        }

        <button onClick={isAuthenticated ? handleLogout : handleLogin}>
          {isAuthenticated ? "Logout" : "Login"}
        </button>
      </div>
      <input onChange={(e) => dispatch({ type: "search", payload: e.target.value })} type="text" placeholder='Search Books...' />
      <input type="submit" value="&#128269;" />
    </div>
  );
};

export default Search;
