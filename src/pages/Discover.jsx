import React from "react";
import '../styles/discover.css';
import DashImg from '../assets/dashboard.jpg' ; 
import Footer from "../components/Footer";
import SearchIcon from '@mui/icons-material/Search';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
// import {Link} from 'react-router-dom'; 


function AnimeSearch () {
    return (
        <div>
            <img src={DashImg} alt="studio-ghibli-2" className="admin-img"/>
            <div className="wrapper">
           <nav>
                <a>PROFILE</a>
                <a>DISCOVER</a>
                <a>USERS</a>
                <a>NEWS</a>
                <a>LISTS</a>
                <a>LOGOUT</a>
            </nav>


            <div className="form-container">

                <h3>🧿 𝒟𝒾𝓈𝒸ℴ𝓋ℯ𝓇 𝒜𝓃𝒾𝓂ℯ 🍥</h3>
            <form>
                    <input type="anime" placeholder="Type anime title... "/>
                    <Tooltip title="Search" arrow>
                        <IconButton>
                        <Button><button type="search"><SearchIcon/></button></Button>
  
                        </IconButton>
                    </Tooltip>
                    
                    <button type="filter">Filter</button>
                    <button type="recommendations">Get recommendations ✨</button>
                </form>

                
            </div>
            </div>


        <Footer/>
        </div>
    ); 
}

export default AnimeSearch; 