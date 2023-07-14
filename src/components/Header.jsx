import React from 'react';
import './css_files/Header.css';

export default function Header() {
    return (
        <header>
            <h1 className='app-logo'>#Achivio</h1>
            <nav className='island-button'>

                <a href="#ABOUT"><button className='contactBtn'>About</button></a>
                
                <a href="#CONTACTINFO"><button className='contactBtn'>Contact</button></a>
            </nav>
            

        </header>

    )
}