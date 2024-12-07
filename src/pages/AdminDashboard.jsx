import React from "react";
import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';
import '../styles/admindashboard.css';
import adminDashImg from '../assets/dashboard.jpg'; 
import Footer from "../components/Footer";
import { Link } from 'react-router-dom'; 

function AdminDashboard() {
    return (
        <div>
            <img src={adminDashImg} alt="studio-ghibli-1" className="admin-img" />
            <div className="admin-dashboard-wrapper">
                <nav className="admin-dashboard-nav">

                <Link to="/profile">
                    <a>PROFILE</a>
                </Link>

                <Link to="/discover">
                    <a>DISCOVER</a>
                </Link>

                <Link to="manageusers">
                    <a>USERS</a>
                </Link>
                <Link to ="/news">
                    <a>NEWS</a>
                </Link>
                
               
                <a>LISTS</a>

                <Link to="/">
                    <a>LOGOUT</a>
                </Link>
                </nav>
                <div className="admin-dashboard-form-container">
                    <h3>✩⁺₊✩☽⋆𝖂𝖊𝖑𝖈𝖔𝖒𝖊 𝕭𝖆𝖈𝖐, 𝕮𝖆𝖒𝖎𝖑𝖑𝖆 🐸🌿 ⋆☾✩⁺₊✩ </h3>
                    <Box sx={{ width: 1400 }}>
                        <Skeleton />
                        <Skeleton animation="wave" />
                        <Skeleton animation={false} />
                    </Box>
                </div>
            </div>
            <Footer />
        </div>
    ); 
}

export default AdminDashboard;