import React from 'react';

export default function header() {
    return (
        <header>
            <h1 className='app-logo'>#Achivio</h1>
            <nav>
                <ul className='nav-links'>
                    <li><a href="#ABOUT">About</a></li>
                    <li><a href="#">Log in</a></li>
                    <li><a href="#">Sign up</a></li>
                </ul>
            </nav>
            <a href="#CONTACTINFO"><button className='contactBtn'>Contact</button></a>

        </header>

    )
}