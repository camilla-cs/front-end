import React from "react";
import '../styles/signup.css'; 
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SignupImage from '../assets/signup-login.png'; 

function Signup () {
    return (
    
        <div>
            <Navbar />
            <div className="form-container">
                <h3>Sign Up</h3>
                <form>
                    <input type="text" placeholder="Username" required/>
                    <input type="email" placeholder="Email" required/>
                    <input type="password" placeholder="Password" required/>

                    <button type="submit">Sign Up</button> 
                </form>










            </div>
            <div className="image">
                    <img src={SignupImage} alt="haikyuu"/>
            </div>

            <Footer />
        </div>
    ); 
}

export default Signup; 