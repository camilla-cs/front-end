import React, {useState} from "react";
import '../styles/signup.css'; 
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SignupImage from '../assets/signup-login.png'; 
import { useNavigate } from "react-router-dom";

function Signup () {

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState(""); 
    const [error, setError] = useState(null); 
    const navigate = useNavigate();

    const handleSubmit  = async (e) => {
        e.preventDefault(); 
        console.log("Form submitted"); 

        try {
            const response = await fetch ("http://localhost:8080/signup", {
                method:"POST",
                headers:{
                    "Content-type": "application/json",
                },
                body:JSON.stringify ({username, email, password}),
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error (errorData.message || "Sign up failed. " ); 

            }
        

            const data = await response.json();
            console.log("Signed up correctly.", data); 

            localStorage.setItem ("token", data.jwt); 

            navigate("/userDashboard"); 
        
        } catch (error) {
            
            console.error("Sign up failed.", error.message); 
            setError(error.message); 
        }

       
    }; 




    return (
    
        <div>
            <Navbar />
            <div className="form-container">
                <h3>Sign Up</h3>
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder="Username" value ={username} onChange={(e) => setUsername(e.target.value)}required/>
                    <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}required/>
                    <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required/>

                    <button type="submit">Sign Up</button> 
                </form>


                {error && <p className="error">{error}</p>}

            </div>
            <div className="image">
                    <img src={SignupImage} alt="haikyuu"/>
            </div>

            <Footer />
        </div>
    ); 
}

export default Signup; 