import React from "react";
import '../styles/login.css'; 
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import LoginImage from '../assets/signup-login.png'; 


function Login () {
    return (
        <div>
            <Navbar />
            <div className="form-container">
                <h3>Login</h3>

                <form>
                    <input type="email" placeholder="Email" required/>
                    <input type="password" placeholder="Password" required/> 
                    <button type="submit">Login</button>
                </form>

                






            </div>
            <div className="image">
                    <img src={LoginImage} alt="haikyuu"/>
            </div>

            <Footer /> 
        </div>
    ); 
}

export default Login; 