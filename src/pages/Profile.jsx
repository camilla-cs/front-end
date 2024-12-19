import React, { useEffect, useState } from "react";
import '../styles/profile.css'; 
import DashImg from '../assets/dashboard.jpg'; 
import Footer from "../components/Footer";
import {Link} from 'react-router-dom'; 


function ProfilePage () {
    const [userInfo, setUserInfo] = useState({username:"", email:""});
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null); 
    const [newUsername, setNewUsername] = useState("");
    const [newEmail, setNewEmail] = useState("");
    const [newPassword, setNewPassword] = useState("");     

    useEffect(() => {
        const fetchProfile = async () => {
            try {
                const token = localStorage.getItem("token");

                const response = await fetch ("http://localhost:8080/profile/me", {
                    method:"GET",
                    headers: {Authorization: `Bearer ${token}`},
                }); 
                if (!response.ok) throw new Error("Failed to fetch profile details");
                const data = await response.json();
                setUserInfo(data);
            } catch (err) {
                setError(err.message);
            }
        };

        fetchProfile(); 
    }, []); 

    const handleUpdate = async (e) => {
        e.preventDefault()

        const token = localStorage.getItem("token");
        const userId = localStorage.getItem("userId");

        if (!token || !userId) {
            console.error ("Missing token or user ID"); 
            alert("Please log in to update your profile.");
            return;
        }
    
        const updatedData = {
            username: newUsername,
            email: newEmail,
            password: newPassword,
        };
    

        try {
            const response = await fetch("http://localhost:8080/profile/me", {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    Authorization:  `Bearer ${token}`,
                },
                body: JSON.stringify(updatedData),
            });

            if (!response.ok) throw new Error("Failed to update profile");
            const data = await response.json();
            console.log("Profile updated successfully:", data);
            alert("Profile updated successfully!");
            
    } catch (error) {
        console.error("Update profile error:", error.message);
        alert(`Error updating profile: ${error.message}`);
    }
    }; 

    return (
        <div>
            <img src={DashImg} alt="studio-ghibli-1" className="admin-img"/>
            <div className="profile-wrapper">
                <nav className="profile-nav">
                <Link to="/profile">
                    <a>PROFILE</a>
                </Link>

                <Link to="/discover">
                    <a>DISCOVER</a>
                </Link>

                <Link to ="/news">
                    <a>NEWS</a>
                </Link>

                <Link to ="/lists">
                    <a>LISTS</a>
                </Link>

                <Link to="/">
                    <a>LOGOUT</a>
                </Link>
                </nav>


                <div className="profile-form-container">
                    <h3>☁️ 𝒫𝓇ℴ𝒻𝒾𝓁ℯ 𝒮ℯ𝓉𝓉𝒾𝓃ℊ𝓈 🥮 </h3>
                    {error && <p className="error">{error}</p>}
                    {success && <p className="success">{success}</p>}

                    <form onSubmit={handleUpdate}>
                        <input type="text" value={userInfo.username} readOnly/>
                    
                        <input type="email"value={userInfo.email} readOnly />

                        <input type="text" placeholder="New Username" value={newUsername} onChange={(e) => setNewUsername(e.target.value)} />
                    
                        <input type="email" placeholder="New Email" value={newEmail} onChange={(e) => setNewEmail(e.target.value)}/>

                        <input type ="password" placeholder="New Password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)}/>
                        
                        <button type="submit">Submit</button>
                    
                    </form>     
                </div>
            </div>


        <Footer/>
        </div>
    ); 
}

export default ProfilePage; 