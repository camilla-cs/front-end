import React from "react";
import '../styles/admindashboard.css';
import '../styles/userdashboard.css';
import DashImg from '../assets/dashboard.jpg'; 
import Footer from "../components/Footer";
import { RedirectAdminDashboard } from "../components/RedirectAdminDashboard";
import { RedirectUserDashboard } from "../components/RedirectUserDashboard";
import {Link} from 'react-router-dom'; 


function ProfilePage () {
    return (
        <div>
            <img src={DashImg} alt="studio-ghibli-1" className="admin-img"/>
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
                <h3>☁️ 𝒫𝓇ℴ𝒻𝒾𝓁ℯ 𝒮ℯ𝓉𝓉𝒾𝓃ℊ𝓈 🥮</h3>

                <form>
                    <input type="username" placeholder="Current Username"/>
                    <input type="username" placeholder="New Username"/>
                    <input type="email" placeholder="Current Email" />
                    <input type="email" placeholder="New Email" />
                    <input type="password" placeholder="Current Password" /> 
                    <input type="password" placeholder="New Password" /> 
                    <button type="submit">Submit</button>
                    <button type="delete">Delete account</button>
                </form>

                <RedirectAdminDashboard/>
                <RedirectUserDashboard/>
                
            </div>
            </div>


        <Footer/>
        </div>
    ); 
}

export default ProfilePage; 