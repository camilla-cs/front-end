import React from "react";
import '../styles/admindashboard.css';
import '../styles/userdashboard.css';
import DashImg from '../assets/dashboard.jpg'; 
import Footer from "../components/Footer";
import CustomizedMenu from "../components/OptionsButton";
import { RedirectAdminDashboard } from "../components/RedirectAdminDashboard";
import {Link} from 'react-router-dom'; 





function ManageUsers () {
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
                <h3>🍡 ℳ𝒶𝓃𝒶ℊℯ 𝒰𝓈ℯ𝓇𝓈 🍙</h3>
                
               <div className="user-container">
               <CustomizedMenu/>
               
               </div>

                <RedirectAdminDashboard/>
                
            </div>
            </div>


        <Footer/>
        </div>
    ); 
}

export default ManageUsers; 