import React from "react";
import "./css_files/Certificate.css";
import Alogo from "../components/images/achivioLogo.png";
import { useParams } from "react-router-dom";
import html2canvas from 'html2canvas';
import Confetti from 'react-confetti';
import useWindowSize from 'react-use/lib/useWindowSize';


export default function Certificate() {
  const { roadMap } = useParams();
  const roadmap = JSON.parse(localStorage.getItem(roadMap));
  console.log(roadmap)
  const completed = roadmap.filter(checkpoint => checkpoint.isCompleted === true).length;

  const username = prompt("What should we call you?")

  function getCertificate() {
    const component = document.getElementById("certificate");
    if (component) {
      html2canvas(component, { scale: 4 })
        .then((canvas) => {
          const dataURL = canvas.toDataURL('image/png');
          const link = document.createElement('a');
          link.href = dataURL;
          link.download = `${username}-${roadMap} certificate.png`;
          link.click();
        })
        .catch((error) => {
          console.error('Error capturing image:', error);
        });
    }
  }

  const { width, height } = useWindowSize()
  console.log(width, height)

  return (
    completed === roadmap.length ?
      <div id="parent-certi">

        <Confetti
          width= {width}
          height= {height}
        />

        <section id="certificate" className="certi">
          <h1>Congratulations, {username}!</h1>
          <p>
            on completing your <span id="bold-it">{roadMap}</span> roadmap
          </p>
          <p>Good job sticking to your goals and achiving them!</p>
          <img src={Alogo} alt=" " />
        </section>
        <button className="load-but" onClick={getCertificate}>Download Certificate</button>
      </div>
      :
      <div className="noteli">
        <h1>We're sorry, {username}, but you're not eligible for the certificate!</h1>
      </div>

  );
}
