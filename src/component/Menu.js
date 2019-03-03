import React from 'react';
import { Link } from 'react-router';
import HomeIcon from 'react-icons/lib/fa/home'
import FortIcon from 'react-icons/lib/fa/fort-awesome'

export const Menu = () => 
    <nav className = "menu">
        <h2>
            <Link to="/" activeClassName = "selected">
                <HomeIcon />
            </Link>
            &nbsp;
            <Link to="/messages" activeClassName = "selected">
                <FortIcon />
            </Link>
        </h2>
    </nav>

