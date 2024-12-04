import React from "react";
import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';
import '../styles/dashboard.css';
import DashImg from '../assets/dashboard.jpg' ; 
import Footer from "../components/Footer";

// import {Link} from 'react-router-dom'; 


function UserDashboard () {
    return (
        <div>
            <img src={DashImg} alt="studio-ghibli-2" className="admin-img"/>
            <div className="wrapper">
           <nav>
                <a>PROFILE</a>
                <a>DISCOVER</a>
                <a>NEWS</a>
                <a>LISTS</a>
                <a>LOGOUT</a>
            </nav>


            <div className="form-container">
                <h3>꧁✬◦°⋆⋆°◦. 𝓦𝓮𝓵𝓬𝓸𝓶𝓮 𝓑𝓪𝓬𝓴 🍵🌸 ◦°⋆⋆°◦✬꧂</h3>

                <Box sx={{ width: 1400 }}>
                <Skeleton />
                <Skeleton animation="wave" />
                <Skeleton animation={false} />
                </Box>

                
            </div>
            </div>


        <Footer/>
        </div>
    ); 
}

export default UserDashboard; 