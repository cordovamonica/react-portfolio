import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <div>
        <p>Navbar</p>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        </div>
    );
    }

