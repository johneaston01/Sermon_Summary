import React from "react";
import { Link, useLocation } from 'react-router-dom';

const Header = () => {

    const { pathname } = useLocation();
    return(
        <nav>
            <h1><Link to="/" id="logo">Sermon Summary</Link></h1>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                    <div className={ pathname === "/" ? "line" : "" } />
                </li>
                <li>
                    <Link to="/about">About</Link>
                    <div className={ pathname === "/about" ? "line" : "" } />
                </li>
            </ul>
        </nav>

    );

};

export default Header;