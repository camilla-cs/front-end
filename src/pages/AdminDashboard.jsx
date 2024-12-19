import React,{useState, useEffect} from "react";
import '../styles/admindashboard.css';
import adminDashImg from '../assets/dashboard.jpg'; 
import Footer from "../components/Footer";
import { Link } from 'react-router-dom'; 

function AdminDashboard() {

    const [users, setUsers] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await fetch("http://localhost:8080/adminDashboard", {
                    method:"GET",
                    headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
                });
                if (!response.ok) throw new Error("Failed to fetch users");
                const data = await response.json();
                setUsers(data);
            } catch (err) {
                setError(err.message);
            }
        };

        fetchUsers();
    }, []);

    const handleDelete = async (id) => {
        try {
            const response = await fetch(`http://localhost:8080/profile/${id}`, {
                method: "DELETE",
                headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
            });
            if (!response.ok) throw new Error("Failed to delete user");
            setUsers(users.filter((user) => user.id !== id));
        } catch (err) {
            setError(err.message);
        }
    };

    return (
        <div>
            <img src={adminDashImg} alt="studio-ghibli-1" className="admin-img" />
            <div className="admin-dashboard-wrapper">
                <nav className="admin-dashboard-nav">

                <Link to="/profile">
                    <a>PROFILE</a>
                </Link>

                <Link to="/discover">
                    <a>DISCOVER</a>
                </Link>

                <Link to="manageusers">
                    <a>USERS</a>
                </Link>
                <Link to ="/news">
                    <a>NEWS</a>
                </Link>
                
               
                <Link to ="/lists"><a>LISTS</a></Link>

                <Link to="/">
                    <a>LOGOUT</a>
                </Link>
                </nav>
                <div className="admin-dashboard-form-container">
                    <h3>✩⁺₊✩☽⋆𝖂𝖊𝖑𝖈𝖔𝖒𝖊 𝕭𝖆𝖈𝖐, 𝕮𝖆𝖒𝖎𝖑𝖑𝖆 🐸🌿 ⋆☾✩⁺₊✩ </h3>
                    
                    
                </div>
            </div>
            <Footer />
        </div>
    ); 
}

export default AdminDashboard;