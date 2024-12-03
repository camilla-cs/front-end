import React from "react";
import Navbar from '../components/Navbar'; 
import Footer from '../components/Footer'; 
import '../styles/home.css'; 

function Home() {
    return (
        <div>
            <Navbar /> 
            {/* Introduction  */}

            <div className="introduction">
                <h1 className="title">Welcome to AnimeTrail!</h1>
                <p className="subtitle">Discover Anime titles and receive recommendations on what to watch next in a few clicks!</p>
        
                <div className="buttons">
                    <button>Sign Up</button>
                    <button>Login</button>

                    
                </div>
            </div>
       
       
       
       
            <Footer /> 
       
       
       
       
        </div>
    )
}

export default Home; 