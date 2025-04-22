import React from "react";
import {Link} from "react-router-dom";
import './App.css'


const Navbars = function(){
    return(
        <>
            <header classNamee="title"><h1>Navigation bars</h1></header>
            <nav className="navheader">
                <section className="iconlink">
                    <Link>QCC</Link>
                </section>
                <section className="navlinks">
                    <button><Link to="/home">Home</Link></button>
                    <button><Link to="/about">About Us</Link></button>
                    <button><Link to="/contact">Contact Us</Link></button>
                </section>
            </nav>
        </>
    )
}

export default Navbars