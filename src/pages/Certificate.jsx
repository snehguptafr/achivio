import React from "react";
import "./css_files/Certificate.css";
import Alogo from "../components/images/achivioLogo.png";
import { useParams } from "react-router-dom";

export default function Certificate() {
  const { roadMap } = useParams();
  const roadmap = JSON.parse(localStorage.getItem(roadMap));
  console.log(roadmap)
  const completed = roadmap.filter(checkpoint => checkpoint.isCompleted === true).length;
  console.log(completed, roadmap.length)

const username = prompt("What should we call you?")

  return (
    completed === roadmap.length ?
    <div id="parent-certi">
      <section className="certi">
        <h1>Congratulations, {username}!</h1>
        <p>
          on completing your <span id="bold-it">{roadMap}</span> roadmap
        </p>
        <p>Good job sticking to your goals and achiving them!</p>
        <img src={Alogo} alt=" " />
      </section>
    </div>
    :
    <div className="noteli">
        <h1>We're sorry, {username}, but you're not eligible for the certificate!</h1>
    </div>
    
  );
}
