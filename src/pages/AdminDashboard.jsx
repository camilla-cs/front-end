import React from "react";
import '../styles/dashboard.css';
import adminDashImg from '../assets/admindashboard.jpg'; 
import Footer from "../components/Footer";
// import {Link} from 'react-router-dom'; 


function AdminDashboard () {
    return (
        <div>
            <img src={adminDashImg} alt="studio-ghibli-1" className="admin-img"/>
            <div className="wrapper">
           <nav>
                <a>PROFILE</a>
                <a>DISCOVER</a>
                <a>USERS</a>
                <a>NEWS</a>
                <a>LISTS</a>
            </nav>


            <div className="form-container">
                <h3>✩⁺₊✩☽⋆𝖂𝖊𝖑𝖈𝖔𝖒𝖊 𝕭𝖆𝖈𝖐, 𝕮𝖆𝖒𝖎𝖑𝖑𝖆 🐸🌿 ⋆☾✩⁺₊✩ </h3>


                
            </div>
            </div>


        <Footer/>
        </div>
    ); 
}

export default AdminDashboard; 