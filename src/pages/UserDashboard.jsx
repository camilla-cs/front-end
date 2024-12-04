import React from "react";
import '../styles/dashboard.css';
import userDashImg from '../assets/userdashboard.jpg' ; 
import Footer from "../components/Footer";
// import {Link} from 'react-router-dom'; 


function UserDashboard () {
    return (
        <div>
            <img src={userDashImg} alt="studio-ghibli-2" className="admin-img"/>
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

                
            </div>
            </div>


        <Footer/>
        </div>
    ); 
}

export default UserDashboard; 