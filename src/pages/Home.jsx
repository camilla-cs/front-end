import React from "react";
import Navbar from '../components/Navbar'; 
import Footer from '../components/Footer'; 
import '../styles/home.css'; 
import desktopImage from '../assets/homepage.png';

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
                        <button>Sign Up</button>
                        <button>Login</button>

                        
                    </div>

                </div>
            </div>         
       
       
       
            <Footer /> 
       
       
       
       
        </div>
    )
}

export default Home; 