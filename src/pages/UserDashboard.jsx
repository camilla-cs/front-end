import React from "react";
import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';
import '../styles/userdashboard.css';
import DashImg from '../assets/dashboard.jpg' ; 
import Footer from "../components/Footer";
import { Link } from 'react-router-dom';

function UserDashboard() {
    return (
        <div>
            <img src={DashImg} alt="studio-ghibli-2" className="admin-img" />
            <div className="user-dashboard-wrapper">
                <nav className="user-dashboard-nav">
                <Link to="/profile">
                    <a>PROFILE</a>
                </Link>

                <Link to="/discover">
                <a>DISCOVER</a>
                </Link>

                <Link to ="/news">
                <a>NEWS</a>
                </Link>

                <Link to ="/lists">
                    <a>LISTS</a>
                </Link>
                

                <Link to="/">
                    <a>LOGOUT</a>
                </Link>

                </nav>
                <div className="user-dashboard-form-container">
                    <h3>꧁✬◦°⋆⋆°◦. 𝓦𝓮𝓵𝓬𝓸𝓶𝓮 🍵🌸 ◦°⋆⋆°◦✬꧂</h3>
                    
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default UserDashboard;