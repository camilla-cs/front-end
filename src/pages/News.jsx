import React from "react";
import '../styles/dashboard.css';
import DashImg from '../assets/dashboard.jpg'; 
import Footer from "../components/Footer";
import SettingsIcon from '@mui/icons-material/Settings';
// import {Link} from 'react-router-dom'; 


function News () {
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
                <h3> 📮 𝒜𝓃𝓃ℴ𝓊𝓃𝒸ℯ𝓂ℯ𝓃𝓉𝓈 📜</h3>

                {/* put the icon for each post to edit or delete | just for admin */}
                <button className="settings-button">{< SettingsIcon/>}</button>
                
              
                <button type="post">Create post</button>
                
            </div>
            </div>


        <Footer/>
        </div>
    ); 
}

export default News; 