import React from "react";
import Navbar from '../components/Navbar'; 
import Footer from '../components/Footer'; 
import '../styles/home.css'; 
import desktopImage from '../assets/homepage.png';
import {Link} from 'react-router-dom'; 

function Home() {
    return (
        <div>
            <Navbar /> 
            {/* Introduction  */}
            <div className="content">
                <div className="image">
                    <img src={desktopImage} alt="anime-illustration"/>
                </div>
                
                <div className="text-content">
        
                    <h1 className="title">Welcome to AnimeTrail!</h1>
                    <p className="subtitle">Discover Anime titles and receive recommendations on what to watch next in a few clicks!</p>
            
                    <div className="buttons">
                        <Link to="/signup">
                            <button>Sign Up</button>
                        </Link>

                        <Link to="/login">
                            <button>Login</button>
                        </Link>
                        
                    </div>

                </div>
            </div>         
       
       
       
            <Footer /> 
       
       
       
       
        </div>
    )
}

export default Home; 