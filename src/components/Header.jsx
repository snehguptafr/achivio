import React from 'react';
import './css_files/Header.css';
import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <header>
            <h1 className='app-logo' ><Link to={"/"}>#Achivio</Link></h1>
            <nav className='island-button'>

                <a href="/getstarted"><button
                    className={
                        window.location.pathname === "/" ? "contactBtn focus-onstart" : "contactBtn"
                    }>How does it work?</button></a>

                    <a href="/show"><button className='contactBtn'>View Roadmaps</button></a>

                <a href="/#ABOUT"><button className='contactBtn'>About</button></a>

                <a href="/#CONTACTINFO"><button className='contactBtn'>Contact</button></a>
            </nav>


        </header>

    )
}