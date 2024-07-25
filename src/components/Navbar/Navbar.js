import React from 'react'
import logo from './assets/logo.jpg';
import "./navbar.css"


export default function Navbar() {
    return(
        <nav 
            className="navbar"
        >
            <img src={logo} className="navbar--leftimg"/>
            <h1 className="navbar--name">Maanas Gopi</h1>
            <h2 className="navbar--menu">Menu</h2>
        </nav>
    )
}