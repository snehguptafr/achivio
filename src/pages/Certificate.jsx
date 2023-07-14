import React from "react";
import './css_files/Certificate.css';
import Alogo from '../components/images/achivioLogo.png';

export default function Certificate() {
    return (
        <div id="parent-certi">
            <section className="certi">
            <h1>Congratulations, NAME!</h1>
            <p>on completing your <span id="bold-it">ROADMAP-NAME</span> roadmap</p>
            <p>Good job sticking to your goals and achiving them!</p>
            <img src={Alogo} alt=" " />
            </section>
        </div>
    )
}