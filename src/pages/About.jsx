import React from "react";
import Navbar from '../components/Navbar'; 
import Footer from '../components/Footer'; 
import '../styles/home.css'; 
import desktopImage from '../assets/homepage.png';
import {Link} from 'react-router-dom'; 

function About() {
    return (
        <div>
            <Navbar /> 
            {/* Introduction  */}
            <div className="content">
                <div className="image">
                    <img src={desktopImage} alt="anime-illustration"/>
                </div>
                
                <div className="text-content">

                <h3>About AnimeTrail: </h3>
                <p> AnimeTrail is a MERN stack application hosted on Netlify and Heroku and its purpose is to access anime title and receive recommendations in a fast and simple way.
                </p>

                <break/>
              
              <p>Check the documentation here: </p>
              <a href="https://github.com/camilla-cs/CamillaDePretto_T3A2-A">Github repository</a>
                

                </div>
            </div>         
       
       
       
            <Footer /> 
       
       
       
       
        </div>
    )
}

export default About; 