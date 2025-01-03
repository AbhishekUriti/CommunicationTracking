import React from 'react';
import '../styles/NavBar.css';


const NavBar=()=> {
    return (<nav className="navbar" > 
    <ul className="nav-links" > 
    <li>Companies</li> 
    <li>Communication Methods</li> 
    <li>Dashboard</li>
    <li>Notifications</li> 
    <li>Calendar</li> 
    <li>Reports</li> </ul>
    </nav>
    );
};

export default NavBar;