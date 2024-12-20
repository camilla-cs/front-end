import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import '../styles/login.css'; 
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import LoginImage from '../assets/signup-login.png'; 
import { Link } from "react-router-dom";


function Login () {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent form from refreshing the page

        try {
            const response = await fetch(`${import.meta.env.VITE_API_URL_SERVER}/auth/login`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email, password }),
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || "Failed to login.");
                
            }

            const data = await response.json();

            // Store JWT in localStorage
            localStorage.setItem("token", data.jwt);
            localStorage.setItem("userId", data.user.id);
            localStorage.setItem("isAdmin", data.user.isAdmin);

            // Redirect based on user type
            if (data.user.isAdmin) {
                navigate("/adminDashboard");
            } else {
                navigate("/userDashboard");
            }
        } catch (err) {
            console.error("Login failed:", err.message);
            setError(err.message); // Display error to user
        }
    };
    return (
        <div>
            <Navbar />
            <div className="form-container">
                <h3>Login</h3>

                <form onSubmit={handleSubmit}>
                    <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required/>
                    <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required/> 
                    
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