import React from "react";
import '../styles/navbar.css';
import { Link } from "react-router-dom";

function Navbar () {
    return (
        <nav>
            <Link to="/">
            <a>Home</a>
            </Link>

            <Link to="/about">
            <a >About</a>
            </Link>
        </nav>
    )
}

export default Navbar