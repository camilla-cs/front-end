import React from "react";
import '../styles/navbar.css';
import { Link } from "react-router-dom";
import About from "../pages/About";

function Navbar () {
    return (
        <nav role="banner">
            <Link to="/">
            <a>Home</a>
            </Link>

            <Link to="/about">
            <a >About</a>
            </Link>
        </nav>
    )
}

export default Navbar; 